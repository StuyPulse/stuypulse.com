export interface NavType {
  name: string;
  href?: string;        // no value for href if dropdown
  dropdown?: NavType[]; // list of navs under a dropdown
}

export interface CarouselItemType {
  img: string;
  caption: string;
  link: string;
  readMore: string;
  slideNum: number;
}
