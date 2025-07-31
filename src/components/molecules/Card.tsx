import CardBadge from "../atoms/CardBadge";
import LikeButton from "../atoms/LikeButton";

function Card() {
  return (
    <div className="card rounded-[20px] relative">
      <div className="flex flex-col gap-2">
        <div className="image-container h-[183.812px] aspect-[20/19]">
          <img
            className="rounded-[20px] h-[183.812px] object-cover"
            src="	https://a0.muscache.com/im/pictures/hosting/Hosting-1270314768198309910/original/c389f712-5665-4b38-b83b-29f9b8fd73d0.jpeg?im_w=480"
            alt=""
          />
        </div>
        <CardBadge></CardBadge>
        <LikeButton></LikeButton>

        <div className="-mt-[5px] ml-[6px]">
          <span className="text-[13px] font-semibold inline-block mb-0">
            Apartment in Narayanpur
          </span>
          <div className="sub-text-container -mt-[7px] -ml-[2px]">
            <span className=" !text-[var(--color-secondary)] text-[12px] ">
              ₹3,878 for 2 nights
            </span>
            <span className=" !text-[#bdbdbd] transform translate-y-[8px]">
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
              4.99
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
