import { mentors } from "@data";
import { photoFor } from "@utils/people";
import { getRobots } from "@utils/robots";

// An award given to one named person, e.g. "Woodie Flowers Finalist Award (Shelley Grant)".
export interface Honor {
  name: string;
  award: string;
  year: number;
  robot: string;
  href: string;
}

// Every named honour in the robots' award lists, newest first. Parentheses that hold a
// count instead of a name ("Creativity Award (2)") are skipped.
export const getHonors = async (): Promise<Honor[]> =>
  (await getRobots("newest")).flatMap((robot) =>
    (robot.data.awards ?? []).flatMap((text) => {
      const match = text.match(/^(.*?)\s*\(([^)]*[A-Za-z][^)]*)\)\s*$/);
      if (!match) return [];
      return [
        {
          name: match[2].trim(),
          award: match[1].replace(/\s+Award$/, "").trim(),
          year: robot.data.year,
          robot: robot.data.title,
          href: `/about/history/${robot.slug}`,
        },
      ];
    }),
  );

// The lists don't always spell a name the same way ("Joe Blay" on mentors, "Joseph Blay" on the
// board and in awards), so also accept the same last name and first initial.
export const samePerson = (a: string, b: string) => {
  const [x, y] = [a, b].map((name) => name.trim().toLowerCase().split(/\s+/));
  if (x.join(" ") === y.join(" ")) return true;
  return x.length > 1 && y.length > 1 && x.at(-1) === y.at(-1) && x[0][0] === y[0][0];
};

// A headshot for someone, by exact name first and then by the looser match against mentors.
export const findPhoto = (name: string) =>
  photoFor(name) ?? mentors.find((mentor) => mentor.image && samePerson(mentor.name, name))?.image;
