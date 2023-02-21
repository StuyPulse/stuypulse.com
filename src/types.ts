export interface NavType {
  name: string;
  href?: string;        // no value for href if dropdown
  dropdown?: NavType[]; // list of navs under a dropdown
}

export interface LinkType {
  name: string;
  url: string;
}

export interface CarouselItemType {
  img: string;
  caption: string;
  "img-link": string;
  "read-more-link": string;
}

export interface SponsorType {
  name: string;
  logo: string;
  site: string;
  type: string;
}

export interface LeadershipType {
  name: string;
  position: string;
  image: string;
  description: string;
  department: string;
}

export interface YoutubeLinkType {
  name: string;
  url: string;
}

export interface SocialType {
  name: string;
  icon: string;
  url: string;
  dropdown?: boolean;
}