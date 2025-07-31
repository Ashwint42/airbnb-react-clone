export type CardDetails = {
  img: string;
  hasBadge: boolean;
  title: string;
  price: number;
  rating: number;
};

export type SearchBubbleType = {
  heading: string;
  subHeading: string;
};

export type SectionType = {
  title: string;
  content: CardDetails[];
};
