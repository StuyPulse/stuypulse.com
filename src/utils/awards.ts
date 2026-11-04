// Sorts an award into a kind, by its wording, so it can get a matching icon.
export type AwardKind = "win" | "finalist" | "person" | "award";

export const awardKind = (award: string): AwardKind => {
  if (/woodie flowers|dean'?s list|\(.+\)/i.test(award)) return "person";
  if (/finalist|\d(st|nd|rd|th) place/i.test(award)) return "finalist";
  if (/winner|winning alliance/i.test(award)) return "win";
  return "award";
};

export const isWin = (award: string) => awardKind(award) === "win";
