"use client";

import { useRef, useState } from "react";
import MonthCard from "./MonthCard";
import { animate } from "animejs";

interface MonthData {
  month: number;
  monthName: string;
  description: string;
  imageURL: string;
}

interface CarouselProps {
  data: MonthData[]; // array que vos le pasás
}

export default function Carrousel({ data }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const centerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const prevIndex = (currentIndex - 1 + data.length) % data.length;
  const nextIndex = (currentIndex + 1) % data.length;

  const go = (dir: "next" | "prev") => {
    setCurrentIndex((i) =>
      dir === "next"
        ? (i + 1) % data.length
        : (i - 1 + data.length) % data.length
    );
  };

  return (
    <>
      <div className="h-full md:h-dvh flex flex-row justify-center items-center text-bordo-text font-literata">
        {/* CARD IZQUIERDA */}
        <div
          className="hidden md:block absolute left-[12%] h-2/3 w-96 scale-75 opacity-70"
          ref={leftRef}
        >
          <MonthCard
            month={data[prevIndex].month}
            monthName={data[prevIndex].monthName}
            description={data[prevIndex].description}
            imageURL={data[prevIndex].imageURL}
          />
        </div>

        {/* CARD ACTUAL */}
        <div
          className="mt-5 md:absolute w-5/6 h-4/6 md:h-2/3 md:w-96 md:z-20 scale-100 transition-all duration-500"
          ref={centerRef}
        >
          <MonthCard
            month={data[currentIndex].month}
            monthName={data[currentIndex].monthName}
            description={data[currentIndex].description}
            imageURL={data[currentIndex].imageURL}
          />
        </div>

        {/* CARD DERECHA */}
        <div
          className="hidden md:block absolute right-[12%] h-2/3 w-96 md:scale-75 md:opacity-70"
          ref={rightRef}
        >
          <MonthCard
            month={data[nextIndex].month}
            monthName={data[nextIndex].monthName}
            description={data[nextIndex].description}
            imageURL={data[nextIndex].imageURL}
          />
        </div>

        {/* BOTONES */}
        <button
          onClick={() => go("prev")}
          className="hidden md:block absolute left-4 p-2 bg-card-background rounded-full outline-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <button
          onClick={() => go("next")}
          className="hidden md:block absolute right-4 p-2 bg-card-background rounded-full outline-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
        <button
          onClick={() => go("next")}
          className="md:hidden absolute right-10 bottom-10 bg-card-background rounded-full p-4 outline-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
