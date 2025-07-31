import type { JSX } from "react";

export type ButtonProps = {
  children: JSX.Element | string;
  className?: string;
};

export type SearchBubbleProps = {
  primaryText: string;
  secondaryText: string;
  className: string;
};

export type TabItemProps = {
  videoSource: string;
  label: string;
};


