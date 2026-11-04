// Typed access to the YAML files in this folder.
//
// The files stay YAML because the editor at /admin (public/admin/config.yml) writes them and
// people without a code editor can read them. Every file is checked against a schema here, so a
// bad edit fails the build with the file and field named instead of breaking a page quietly.
// Pages import from "@data" and never read the YAML directly.
import { z } from "astro/zod";

import boardFile from "./board.yml";
import ftcAwardsFile from "./ftcawards.yml";
import leadershipFile from "./leadership.yml";
import mentorsFile from "./mentors.yml";
import socialsFile from "./socials.yml";
import sponsorTiersFile from "./sponsorTiers.yml";
import sponsorsFile from "./sponsors.yml";
import stuysplashFile from "./stuysplash.yml";

// Optional text from the editor arrives as a missing key, null or "".
const optionalText = z
  .string()
  .nullish()
  .transform((text) => text || undefined);

export const DEPARTMENTS = ["Mechanical Engineering", "Software Engineering", "Business", "Strategy"] as const;
export const SPONSOR_TIERS = ["platinum", "gold", "silver", "bronze", "aluminum"] as const;

const leaderSchema = z.object({
  name: z.string(),
  position: z.string(),
  department: z.enum(DEPARTMENTS),
  image: optionalText,
  description: z.string(),
});

const mentorSchema = z.object({
  name: z.string(),
  image: optionalText,
  description: optionalText,
  woodieFlowers: optionalText,
});

const boardMemberSchema = z.object({
  name: z.string(),
  role: z.string(),
});

const sponsorSchema = z.object({
  name: z.string(),
  tier: z.enum(SPONSOR_TIERS),
  logo: optionalText,
  site: optionalText,
  wide: z.boolean().nullish().transform(Boolean),
});

const sponsorTierSchema = z.object({
  name: z.string(),
  icon: z.string(),
  range: z.string(),
  desc: z.string(),
});

const ftcTeamSchema = z.object({
  team: z.coerce.string(),
  season: optionalText,
  competitions: z.array(
    z.object({
      name: z.string(),
      awards: z.array(z.string()),
    }),
  ),
});

const socialSchema = z.object({
  name: z.string(),
  url: z.string().url(),
  icon: z.string(),
});

const stuysplashSchema = z.object({
  year: z.coerce.number(),
  date: z.string(),
  shortDate: z.coerce.string(),
  time: z.string(),
  summary: z.string(),
  lastYear: optionalText,
  attendForm: optionalText,
  presentForm: optionalText,
  showBanner: z.boolean(),
  showOnHome: z.boolean(),
});

export type Leader = z.infer<typeof leaderSchema>;
export type Department = (typeof DEPARTMENTS)[number];
export type Mentor = z.infer<typeof mentorSchema>;
export type BoardMember = z.infer<typeof boardMemberSchema>;
export type Sponsor = z.infer<typeof sponsorSchema>;
export type SponsorTier = z.infer<typeof sponsorTierSchema>;
export type FtcTeam = z.infer<typeof ftcTeamSchema>;
export type Social = z.infer<typeof socialSchema>;
export type StuySplash = z.infer<typeof stuysplashSchema>;

function load<T extends z.ZodTypeAny>(file: string, schema: T, data: unknown): z.output<T> {
  const result = schema.safeParse(data);
  if (result.success) return result.data;
  const problems = result.error.issues.map((issue) => `  - ${issue.path.join(".") || "(file)"}: ${issue.message}`);
  throw new Error(`src/data/${file} has invalid data:\n${problems.join("\n")}`);
}

export const leaders = load("leadership.yml", z.array(leaderSchema), leadershipFile);
export const mentors = load("mentors.yml", z.array(mentorSchema), mentorsFile);
export const board = load("board.yml", z.array(boardMemberSchema), boardFile);
export const sponsors = load("sponsors.yml", z.array(sponsorSchema), sponsorsFile);
export const sponsorTiers = load("sponsorTiers.yml", z.array(sponsorTierSchema), sponsorTiersFile);
export const ftcTeams = load("ftcawards.yml", z.array(ftcTeamSchema), ftcAwardsFile);
export const socials = load("socials.yml", z.array(socialSchema), socialsFile);
export const stuysplash = load("stuysplash.yml", stuysplashSchema, stuysplashFile);

// Sponsors from the biggest level down, keeping the file's order within a level.
export const sponsorsByTier = [...sponsors].sort(
  (a, b) => SPONSOR_TIERS.indexOf(a.tier) - SPONSOR_TIERS.indexOf(b.tier),
);
