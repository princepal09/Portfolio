import express from 'express'
import { getGitHubContributions } from '../github/github';
const router = express.Router();

console.log("GithubRouter")
router.get("/github", getGitHubContributions)


export default router;