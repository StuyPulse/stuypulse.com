// Splits award strings like "New York City Regional Winner" into the event ("New York City Regional")
// and what was won there ("Winner"), so a robot's awards can be grouped by competition.
//
// The award list is hand-written over 25 years, so the wording varies: some awards name the event
// without "Regional" ("Finger Lakes Innovation in Control Award"), off-season events have no
// keyword at all ("Brunswick Eruption Winner"), and a few awards name no event. Those last ones
// land in an "Other" group.
import { awardKind, isWin } from "@utils/awards";

export interface ParsedAward {
  award: string;
  event?: string;
  label: string;
}

export interface EventGroup {
  event: string;
  awards: ParsedAward[];
  wins: number;
}

export const OTHER = "Other awards";

// Spelling slips in the data, fixed for display only.
const tidy = (text: string) =>
  text
    .replace(/\bRegional Regional\b/g, "Regional")
    .replace(/\bSubdivison\b/g, "Subdivision")
    .replace(/\bDivison\b/g, "Division")
    .replace(/\bArchimdes\b/g, "Archimedes")
    .replace(/\s+/g, " ")
    .trim();

// A sponsor's name in front of an event name, dropped so it groups with the plain name.
const SPONSOR_PREFIX = /^(Northeast Utilities FIRST|SBLI) /;

// Words that mean the text before them is an award name, not an event.
const AWARDISH = /award|woodie|dean'?s|first leadership|volunteer|best |^\d+ /i;
const PLACING = /^(winners?|finalists?|semifinalists?|quarterfinalists?|wildcard)$/i;

const cleanEvent = (event: string) => event.replace(SPONSOR_PREFIX, "").trim();

const split = (raw: string): ParsedAward => {
  const award = raw;
  const text = tidy(raw);

  // "3rd Place Milstein Division"
  const place = text.match(/^(\d+(?:st|nd|rd|th) Place) (.+)$/i);
  if (place) return { award, event: cleanEvent(place[2]), label: place[1] };

  // "<place> Regional #2 <award>", "<name> Division <award>", "Einstein Field <award>"
  const keyword = text.match(/^(.+?\b(?:Regional(?: #\d+)?|Division|Subdivision|Field))\s+(.+)$/);
  if (keyword && !AWARDISH.test(keyword[1]) && keyword[1].split(" ").length > 1)
    return { award, event: cleanEvent(keyword[1]), label: keyword[2].replace(/^Regional /, "") };

  // "<event> Winner" for off-season events with no keyword in their name.
  const words = text.split(" ");
  const last = words[words.length - 1];
  if (words.length > 1 && PLACING.test(last)) {
    const event = words.slice(0, -1).join(" ");
    if (!AWARDISH.test(event)) return { award, event: cleanEvent(event), label: last };
  }

  return { award, label: text };
};

// "New York City Regional" -> "New York City", for matching awards that leave out "Regional".
const placeOf = (event: string) => event.replace(/ Regional(?: #\d+)?$/, "");

export const parseAwards = (awards: string[]): ParsedAward[] => {
  const parsed = awards.map(split);
  const events = [...new Set(parsed.map((item) => item.event).filter((event): event is string => !!event))];

  // Second pass: an award that names the place but not "Regional" ("Finger Lakes Innovation in
  // Control Award", "New York Tech Valley Wildcard") joins that place's regional.
  const regionals = events.filter((event) => /Regional(?: #\d+)?$/.test(event)).sort((a, b) => b.length - a.length);
  return parsed.map((item) => {
    if (item.event && regionals.includes(item.event)) return item;
    const text = tidy(item.award);
    const home = regionals.find((event) => text.startsWith(placeOf(event) + " "));
    return home ? { ...item, event: home, label: text.slice(placeOf(home).length + 1) } : item;
  });
};

const RANK = { win: 0, finalist: 1, award: 2, person: 3 };

// Awards grouped by event in the order the events first appear, wins then placings first inside each event,
// events with a win first, and the awards with no event at the end.
export const groupAwards = (awards: string[]): EventGroup[] => {
  const groups = new Map<string, ParsedAward[]>();
  for (const item of parseAwards(awards)) {
    const key = item.event ?? OTHER;
    groups.set(key, [...(groups.get(key) ?? []), item]);
  }
  const list = [...groups].map(([event, items]) => ({
    event,
    awards: [...items].sort((a, b) => RANK[awardKind(a.award)] - RANK[awardKind(b.award)]),
    wins: items.filter((item) => isWin(item.award)).length,
  }));
  return list.sort((a, b) => {
    if (a.event === OTHER) return 1;
    if (b.event === OTHER) return -1;
    return Number(b.wins > 0) - Number(a.wins > 0);
  });
};

// How a win ranks for the badge: championship divisions, then regionals, then off-season events.
const weight = (event: string) => (/division$/i.test(event) ? 0 : /Regional(?: #\d+)?$/.test(event) ? 1 : 2);

// The events a robot won, in a short form for badges ("New York City", "Curie Subdivision"),
// biggest first and then shortest first, so the first one fits on a card.
export const wonEvents = (awards: string[]) =>
  [
    ...new Set(
      parseAwards(awards)
        .filter((item) => isWin(item.award) && item.event)
        .map((item) => item.event!)
        .sort((a, b) => weight(a) - weight(b) || a.length - b.length),
    ),
  ].map((event) => placeOf(event).replace(/ Championship (?=(Sub)?division$)/i, " "));
