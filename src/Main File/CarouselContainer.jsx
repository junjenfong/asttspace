import { useState, useEffect } from "react";
import Card from "../Components/Card";
//done
const CarouselContainer = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [cardData, setCardData] = useState([]);

  //retrieve initial data
  useEffect(() => {
    fetch("https://run.mocky.io/v3/4f6ce70d-e578-4321-93f0-e65a93918ec2")
      .then((res) => res.json())
      .then((json) => {
        setCardData(json.result);
      });
  }, []);

  const pages = [];
  //to make an array for total number of pages
  for (let x = 1; x <= cardData.length / 3; x++) {
    pages.push(x);
  }

  const handleDotClick = (index) => {
    setCurrentPage(index);
  };

  return (
    <section className="py-8">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold">
          Hi, What do you want to your <br />
          <span className="text-color-2">dream apartment</span>
        </h2>
        <h3 className="color-grey my-10 text-gray-400">
          Select a Apartment type below to begins
        </h3>
        <div className="mb-[120px]">
          <div className="flex items-stretch justify-between">
            {cardData
              .slice(currentPage * 3, currentPage * 3 + 3)
              .map((card, index) => (
                <Card card={card} key={index} />
              ))}
          </div>

          <ul className="flex justify-center mt-10">
            {pages.map((slide, index) => (
              <li
                key={index}
                className={`pagination-dot bg-gray-300 rounded-full w-4 h-4 mx-4 ${
                  index === currentPage ? "bg-blue-1" : ""
                }`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CarouselContainer;
