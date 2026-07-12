import { Request, Response } from "express";
import { Octokit } from "octokit";
import dotenv from 'dotenv'
dotenv.config();

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

interface ContributionDay {
  contributionCount: number;
  date: string;
}

interface Week {
  contributionDays: ContributionDay[];
}

interface GraphQLResponse {
  user: {
    contributionsCollection: {
      contributionCalendar: {
        totalContributions: number;
        weeks: Week[];
      };
    };
  };
}

export const getGitHubContributions = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { username } = req.query;
  console.log(username)
  if (!username || typeof username !== "string") {
    res.status(400).json({
      error: "Username is required",
    });
    return;
  }

  try {
    const query = `
      query($username: String!) {
        user(login: $username) {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                }
              }
            }
          }
        }
      }
    `;

    const response = await octokit.graphql<GraphQLResponse>(query, {
      username,
    });

    const calendar =
      response.user.contributionsCollection.contributionCalendar;

    const contributions = calendar.weeks.flatMap((week) =>
      week.contributionDays.map((day) => ({
        count: day.contributionCount,
        date: day.date,
      }))
    );

    res.status(200).json({
      user: {
        totalContributions: calendar.totalContributions,
      },
      contributions,
    });
  } catch (error) {
    console.error("GitHub API Error:", error);

    res.status(500).json({
      error: "Failed to fetch GitHub data",
    });
  }
};