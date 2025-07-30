import type { SearchBubbleProps } from "../../types/atoms";

const SearchBubble = ({
  primaryText,
  secondaryText,
  className,
}: SearchBubbleProps) => {
  return (
    <div className={className}>
      <div>{primaryText}</div>
      <div>{secondaryText}</div>
    </div>
  );
};

export default SearchBubble;
