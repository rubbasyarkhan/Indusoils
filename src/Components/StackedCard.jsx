import React from "react";

const StackedCard = ({ cardsData }) => {
  return (
    <div className="w-full h-full mx-auto">
      <ul className="grid grid-cols-1 gap-6 pb-[calc(var(--cards)*var(--cardTopPadding))]">
        {cardsData.map(({ id, bg, heading, text }, index) => (
          <li
            key={id}
            className={`sticky top-0 pt-[calc(${index + 1}*var(--cardTopPadding))] w-full h-screen`}
          >
            <div
              className={`p-8 flex flex-col  justify-center items-center transition-all duration-500 bg-white w-full h-full`}
            >
              <h2 className="text-3xl md:text-4xl font-bold uppercase    text-center">
                {heading}
              </h2>
              <p className="mt-4 text-center text-sm md:text-base">
                {text}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StackedCard;
