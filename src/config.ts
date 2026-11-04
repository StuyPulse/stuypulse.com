// Site-wide settings that change rarely and only through code.

export const SITE_TITLE = "StuyPulse";
export const SITE_DESCRIPTION =
  "FRC Team 694, or StuyPulse, is an award-winning FIRST robotics team from New York City.";
export const SITE_URL = "https://stuypulse.com";

export const CONTACT_EMAIL = "info@stuypulse.com";
export const ADDRESS = {
  name: "Stuyvesant High School",
  street: "345 Chambers St, New York, NY 10282",
  map: "https://www.google.com/maps/search/?api=1&query=Stuyvesant+High+School",
};

export interface NavLink {
  name: string;
  href: string;
}
export interface NavMenu {
  name: string;
  links: NavLink[];
}
export type NavItem = NavLink | NavMenu;

// The links across the top of every page. Donate is shown separately as a button.
export const NAVIGATION: NavItem[] = [
  {
    name: "About",
    links: [
      { name: "About us", href: "/about" },
      { name: "Robot history", href: "/about/history" },
      { name: "Leadership", href: "/about/leadership" },
      { name: "Mentors", href: "/about/mentors" },
      { name: "Departments", href: "/about/departments" },
      { name: "FTC teams", href: "/about/ftc" },
      { name: "Board", href: "/about/board" },
      { name: "This website", href: "/about/website" },
    ],
  },
  { name: "Newsletters", href: "/news" },
  { name: "Community", href: "/community" },
  {
    name: "Resources",
    links: [
      { name: "Documents", href: "/resources" },
      { name: "StuySplash", href: "/resources/stuysplash" },
      { name: "Tutorials", href: "/resources/tutorials" },
      { name: "Charter", href: "/resources/charter" },
    ],
  },
  { name: "Calendar", href: "/calendar" },
  { name: "Sponsors", href: "/sponsors" },
];
export const DONATE_LINK: NavLink = { name: "Donate", href: "/donate" };

const isInSection = (path: string, href: string) =>
  href === "/" ? path === "/" : path === href || path.startsWith(`${href}/`);

// The nav link for the section `path` is in: the longest link that is `path` or a parent of it.
// So /about/history/2026 marks Robot history, not About us.
export const activeNavHref = (path: string) =>
  [...NAVIGATION.flatMap((item) => ("links" in item ? item.links : [item])), DONATE_LINK]
    .map((link) => link.href)
    .filter((href) => isInSection(path, href))
    .sort((a, b) => b.length - a.length)[0];
