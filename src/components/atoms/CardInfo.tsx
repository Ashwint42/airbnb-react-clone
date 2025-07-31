function CardInfo() {
  return (
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
              fill-rule="evenodd"
              d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"
            ></path>
          </svg>
        </span>
        <span className="text-[12px] !text-[var(--color-secondary)]">4.99</span>
      </div>
    </div>
  );
}

export default CardInfo;
