export type ImageFit = 'cover' | 'contain' | 'logo' | 'phone';

export type CaseStudyImage = {
  src: string;
  alt: string;
  fit?: ImageFit;
  mobileSrc?: string;
  /** MP4 path — when set the image column renders a video overlaid behind a phone-frame PNG */
  videoSrc?: string;
  /** On mobile, render inside a horizontally scrollable container at natural width */
  mobileScrollable?: boolean;
};

export type TextImageBlock = {
  type: 'text-image';
  text: {
    pretitle?: string;
    tagline?: string;
    heading?: string;
    body?: string;
  };
  image: CaseStudyImage | null;
  imageLeft?: boolean;
  bgColor?: string;
  textColor?: string;
};

export type FullImageBlock = {
  type: 'full-image';
  src: string;
  alt: string;
  mobileSrc?: string;
};

/** Layout: 1/3 text left | 2/3 image right */
export type NarrowTextBlock = {
  type: 'narrow-text';
  text: {
    pretitle?: string;
    tagline?: string;
    heading?: string;
    body?: string;
  };
  image: CaseStudyImage;
  bgColor?: string;
  textColor?: string;
};

/** Layout: full-width heading + 2-col text top | full-width image bottom */
export type StackedBlock = {
  type: 'stacked';
  heading?: string;
  leftText?: string;   // HTML
  rightText?: string;  // HTML
  image: CaseStudyImage;
  bgColor?: string;
  textColor?: string;
};

/** Layout: full-width heading + 2-col text top | 1/3 text left + 2/3 image right bottom */
export type StackedSplitBlock = {
  type: 'stacked-split';
  heading?: string;
  topLeftText?: string;   // HTML
  topRightText?: string;  // HTML
  bottomText?: string;    // HTML — bottom-left 1/3
  image: CaseStudyImage;  // bottom-right 2/3
  bgColor?: string;
  textColor?: string;
};

export type SlideBlock =
  | TextImageBlock
  | FullImageBlock
  | NarrowTextBlock
  | StackedBlock
  | StackedSplitBlock;

export type CaseStudy = {
  title: string;
  description: string;
  slides: SlideBlock[];
};
