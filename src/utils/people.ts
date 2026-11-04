import { board, leaders, mentors } from "@data";

// Headshots live on whichever list a person is on (leadership, mentors), and the board list has
// none, so look a photo up by name across all of them.
const photos = new Map(
  [...leaders, ...mentors].filter((person) => person.image).map((person) => [person.name.trim(), person.image]),
);

export const photoFor = (name: string) => photos.get(name.trim());

// Everyone with a face to show, for collages and face stacks.
export const peopleWithPhotos = () =>
  [...new Set([...leaders, ...mentors, ...board].map((person) => person.name.trim()))]
    .filter((name) => photos.has(name))
    .map((name) => ({ name, image: photos.get(name)! }));
