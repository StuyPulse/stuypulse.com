import { getNewsletters, type Newsletter } from "./news";
import { getRobots, type Robot } from "./robots";

// An FRC season runs from the fall build-up to the summer after the robot's year:
// the 2026 season is September 2025 through August 2026.
export const seasonOf = (date: Date) => (date.getMonth() >= 8 ? date.getFullYear() + 1 : date.getFullYear());

// Newsletters and posts from a robot's season, oldest first.
export const getSeasonNewsletters = async (year: number): Promise<Newsletter[]> =>
  (await getNewsletters()).filter((post) => seasonOf(post.data.date) === year).reverse();

// The robot built in the season a post is from, if there is one.
export const getSeasonRobot = async (date: Date): Promise<Robot | undefined> =>
  (await getRobots()).find((robot) => robot.data.year === seasonOf(date));
