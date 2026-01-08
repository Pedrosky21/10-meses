import monthsNames from "./data/monthsNames";
import imagesURL from "./data/imagesUrl";
import descriptions from "./data/descriptions";
import Carrousel from "./components/Carrousel";

interface MonthData {
  month: number;
  monthName: string;
  description: string;
  imageURL: string;
}

export default function Home() {
  const months: MonthData[] = monthsNames.map((name, i) => ({
    month: i + 1,
    monthName: name,
    description: descriptions[i],
    imageURL: imagesURL[i],
  }));

  return (
    <div className="h-dvh flex justify-center items-center text-bordo-text font-literata">
      <div className="h-full w-full">
        <Carrousel data={months}></Carrousel>
      </div>
      
    </div>
  );
}
