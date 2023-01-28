export interface NavType {
  name: string;
  href?: string;        // no value for href if dropdown
  dropdown?: NavType[]; // list of navs under a dropdown
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

export interface SocialType {
  name: string;
  icon: string;
  url: string;
  dropdown?: boolean;
}