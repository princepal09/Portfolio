import { useEffect, useState } from "react";
import { Card } from "./ui/card";
import { Calendar, GitBranch, GitCommit, Star } from "lucide-react";
import { motion } from "framer-motion";
import axios from "axios";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { cn } from "@/lib/utils";

interface GithubProps {
  username: string;
}

interface GithubStats {
  user: {
    totalContributions: number;
  };
  contributions: {
    count: number;
    date: string;
  }[];
}

const GithubStats = ({ username }: GithubProps) => {
  const [stats, setStats] = useState<GithubStats | null>(null);

  console.log(stats);
  const [loading, setloading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const fetchGithubStats = async () => {
    setloading(true);
    try {
      console.log("Fetching GitHub stats for username:", username);
      const response = await axios.get(`${BASE_URL}/github`, {
        params: {
          username: username,
        },
      });

      console.log(response.data, "response.data");

      if (!response.data) {
        setError("No data found for the given username");
        return;
      }
      setStats(response.data);
    } catch (err) {
      setError("Error fetching GitHub stats");
      console.error(err);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchGithubStats();
  }, [username]);

  if (loading) {
    return (
      <Card className="p-4 sm:p-6 bg-card border-border/5">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-muted rounded w-3/4" />
          <div className="h-8 bg-muted rounded" />
          <div className="h-32 bg-muted rounded" />
        </div>
      </Card>
    );
  }

  if (!stats) return null;

  if (error) {
    return (
      <Card className="p-4 sm:p-6 bg-card border-border/5">
        <p className="text-destructive">{error}</p>
      </Card>
    );
  }

  // calculate current streak
  const currentStreak = stats.contributions
    .slice()
    .reverse()
    .reduce((streak, day, index) => {
      if (index === 0 && day.count === 0) return 0;
      if (day.count > 0) {
        return streak + 1;
      }
      return streak;
    }, 0);

  // calculate Max Contributions in a day
  const maxContributions = Math.max(
    ...stats.contributions.map((day) => day.count),
  );

  //  Calcualte contribution levels
  const getContributionLevel = (count: number) => {
    if (count == 0) return "bg-muted";
    const percentage = (count / maxContributions) * 100;
    if (percentage <= 25) return "bg-primary/30";
    if (percentage <= 50) return "bg-primary/50";
    if (percentage <= 75) return "bg-primary/70";

    return "bg-primary";
  };

  return (
    <Card className="p-4  sm:p-6 lg:p-8 bg-card border-border/5 backdrop-blur-sm overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 sm:space-y-8"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-primary/10">
            <GitCommit className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          </div>

          <h3 className="text-lg sm:text-xl font-semibold">
            Contribution Activity
          </h3>
        </div>

        <div className="grid-cols-1 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="p-4 rounded-b-lg bg-secondary/50 backdrop-blur-sm"
          >
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-primary mb-2" />
            <p className="text-sm text-muted-foreground">Current Streak</p>
            <p className="text-xl sm:text-2xl font-bold text-primary">
              {currentStreak} days
            </p>
          </motion.div>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="p-4 rounded-b-lg bg-secondary/50 backdrop-blur-sm"
          >
            <GitBranch className="w-4 h-4 sm:w-5 sm:h-5 text-primary mb-2" />
            <p className="text-sm text-muted-foreground">Total Contributions</p>
            <p className="text-xl sm:text-2xl font-bold text-primary">
              {stats?.user?.totalContributions.toLocaleString()}
            </p>
          </motion.div>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="p-4 rounded-b-lg bg-secondary/50 backdrop-blur-sm"
          >
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-primary mb-2" />
            <p className="text-sm text-muted-foreground">Best Day</p>
            <p className="text-xl sm:text-2xl font-bold text-primary">
              {maxContributions} commits
            </p>
          </motion.div>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-medium text-muted-foreground">
            Last 30 days
          </h4>
          <div className="overflow-x-auto pb-4">
            <div className="grid grid-rows-1 grid-flow-col gap-1 min-w-150">
              <TooltipProvider>
                {stats?.contributions?.slice(-30).map((day, index) => (
                  <motion.div
                    key={day.date}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.02 }}
                  >
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div
                          className={cn(
                            "h-6 w-6 sm:h-8 sm:w-8 rounded-sm",
                            getContributionLevel(day.count),
                            "transition-all duration-200 hover:scale-110",
                          )}
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-xs font-semibold text-black">
                          {day.count} contributions on{" "}
                          {new Date(day.date).toLocaleDateString(undefined, {
                            month: "short",
                            day: "numeric",
                          })}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </motion.div>
                ))}
              </TooltipProvider>
            </div>
          </div>
        </div>
      </motion.div>
    </Card>
  );
};

export default GithubStats;
