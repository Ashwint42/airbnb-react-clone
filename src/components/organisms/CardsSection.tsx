import Card from "../molecules/Card";
import type { SectionType, SearchBubbleType } from "../../types/home.types";
import * as uuid from "uuid";
import { useRef } from "react";
import ArrowRight from "../../assets/svg/rightArrow.svg?react";
import CarouselArrowRight from "../../assets/svg/carouselArrowRight.svg?react";
import CarouselArrowLeft from "../../assets/svg/carouselArrowLeft.svg?react";

type CardsSectionProp = {
  tab: {
    searchBubbles: SearchBubbleType[];
    sections: SectionType[];
  };
};

function CardsSection({ tab }: CardsSectionProp) {
  const scrollElement = useRef<HTMLDivElement[]>([]);

  function scrollToTarget(index: number) {
    const el = scrollElement.current[index];
    if (el) {
      el.scrollBy({
        left: 418,
        behavior: "smooth",
      });
    }
  }

  return (
    <>
      {tab.sections.map((section, index) => (
        <div key={uuid.v4()} className="grid w-full mb-2">
          <div>
            <div className="m-8 mb-[14px] flex justify-between items-center">
              <h2 className="text-sm flex">
                <span className="text-[20px] font-semibold leading-[24px] tracking-[-0.18px] ">
                  {section.title}
                  <span className="inline-block ml-[2px]">
                    <ArrowRight></ArrowRight>
                  </span>
                </span>
              </h2>
              <div className="ml-auto flex items-center">
                <div className="columns-2 gap-1 flex">
                  <button className=" border-1 border-[#C1C1C1] opacity-50 w-6 h-6 bg-[white] rounded-[50%] p-1 flex justify-center items-center">
                    <span>
                      <CarouselArrowLeft></CarouselArrowLeft>
                    </span>
                  </button>
                  <button
                    className="w-6 h-6 bg-[#F2F2F2] rounded-[50%] flex justify-center items-center"
                    onClick={() => scrollToTarget(index)}
                  >
                    <span>
                      <CarouselArrowRight></CarouselArrowRight>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-8 -mt-1 overflow-x-scroll">
            <div
              className="pt-1 pb-2 grid gap-[11px] overflow-x-scroll"
              style={{
                gridAutoColumns: "calc(16.6667% - 9.16667px)",
                gridTemplateRows: "225.812px",
                gridAutoFlow: "column",
              }}
              ref={(el) => {
                if (el) scrollElement.current[index] = el;
              }}
            >
              {section.content.map((item) => (
                <Card key={uuid.v4()} details={item}></Card>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CardsSection;
