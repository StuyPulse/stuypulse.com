// Small text helpers shared across pages.

export const plural = (count: number, word: string) => `${count} ${word}${count === 1 ? "" : "s"}`;

export const ordinal = (n: number) => {
  const teen = n % 100 > 10 && n % 100 < 14;
  return n + ["th", "st", "nd", "rd"][teen || n % 10 > 3 ? 0 : n % 10];
};

// "Ada Lovelace" -> "AL", for people without a photo.
export const initials = (name: string) =>
  name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 3);

export const formatDate = (
  date: Date,
  options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" },
) => date.toLocaleDateString("en-US", { ...options, timeZone: "UTC" });
