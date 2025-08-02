export type CardDetails = {
  img: string;
  hasBadge: boolean;
  title: string;
  price: number;
  rating: number;
  badgeLabel?: string;
};

export type SearchBubbleType = {
  label: string;
  subText: string;
  styles: {
    wrapper: string;
    label: string;
    subText: string;
  };
  isLast?: boolean;
};

export type SectionType = {
  title: string;
  content: CardDetails[];
};

export type TabType = {
  videoSource: string;
  label: Tabs;
  labelStyles: string;
  additionalStyles?: string;
};

export type Tabs = "Homes" | "Experiences" | "Services";
