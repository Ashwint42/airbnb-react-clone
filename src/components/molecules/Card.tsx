import CardBadge from "../atoms/CardBadge";
import LikeButton from "../atoms/LikeButton";
import type { CardDetails } from "../../types/home.types";

type CardProps = {
  details: CardDetails;
};

const PROPERTY_DESCRIPTION_POSTFIX = "for 2 nights";

function Card({ details }: CardProps) {
  return (
    <div className="card rounded-[20px] relative">
      <div className="flex flex-col gap-2">
        <div className="image-container h-[183.812px] aspect-[20/19]">
          <img
            className="rounded-[20px] h-[183.812px] object-cover"
            src={details.img}
            alt=""
          />
        </div>

        {details.hasBadge && <CardBadge></CardBadge>}
        <LikeButton></LikeButton>

        <div className="-mt-[5px] ml-[6px]">
          <span className="text-size-13 font-medium inline-block ml-[-1px] transform translate-y-[1px] translate-x-[-1px]">
            {details.title}
          </span>
          <div className="sub-text-container -mt-[7px] -ml-[2px]">
            <span className="!text-[var(--color-secondary)] text-size-12 ">
              ₹{details.price.toLocaleString("hi-IN")}{" "}
              {PROPERTY_DESCRIPTION_POSTFIX}
            </span>
            <span className="!text-[#bdbdbd] transform translate-y-[8px]">
              &nbsp;·&nbsp;
            </span>
            <span className="inline-block transform translate-y-[1.3px] translate-x-[-2.5px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                fill="#6A6A6A"
                style={{
                  display: "inline-block",
                  height: "8px",
                  width: "8px",
                }}
              >
                <path
                  fillRule="evenodd"
                  d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"
                ></path>
              </svg>
            </span>
            <span className="text-[12px] !text-[var(--color-secondary)]">
              {details.rating}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
