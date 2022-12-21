import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TopContainer = () => {
  const [currentType, setCurrentType] = useState("Buy");
  const navigateTo = useNavigate();

  const handleSearchButton = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    // pass data as state
    const formData = Object.fromEntries(data);
    navigateTo("/formData", {
      state: { formData, propertyType: currentType }
    });
  };
  return (
    <div className=" mx-auto px-4 text-center mb-[120px] min-h-[700px] bg-[url('/src/assets/images/cover.svg')] bg-contain bg-no-repeat bg-right">
      <div className="grid px-4 py-14 ">
        <div className="mr-auto place-self-center  text-left  bg-white rounded-3xl py-10 px-20 -ml-12 drop-shadow-2xl">
          <h1 className="max-w-2xl mb-10 font-extrabold  text-7xl text-blue-1">
            Let's find
            <br />
            <span className="text-blue-4">yours Dream...</span>
          </h1>
          <small className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
            Building award winning properties across <br />
            London UK and the All world
          </small>
        </div>
      </div>
      <div className="mx-12 pb-8 text-left">
        <span
          className={`text-xs bg-primary-600 rounded-full font-extrabold  px-4 py-1.5 mr-3 text-xl ${
            currentType === "Buy" ? "bg-blue-1 text-white" : "text-grey-font"
          }`}
          onClick={() => setCurrentType("Buy")}
        >
          Buy
        </span>
        <span
          className={`text-xs bg-primary-600 rounded-full font-extrabold px-4 py-1.5 mr-3  text-xl ${
            currentType === "Sell" ? "bg-blue-1 text-white" : "text-grey-font"
          }`}
          onClick={() => setCurrentType("Sell")}
        >
          Sell
        </span>
        <span
          className={`text-xs bg-primary-600 rounded-full font-extrabold  px-4 py-1.5 mr-3  text-xl ${
            currentType === "Rent" ? "bg-blue-1 text-white" : "text-grey-font"
          }`}
          onClick={() => setCurrentType("Rent")}
        >
          Rent
        </span>
      </div>
      <div className="grid max-w-screen-xl p-6 mx-6 bg-white rounded-lg shadow ">
        <form onSubmit={handleSearchButton}>
          <div className="flex">
            <div className="flex-1 pr-4">
              <label className="block mb-2 text-sm font-medium text-grey-font text-left">
                City/Street
              </label>
              <input
                type="city"
                name="city"
                id="city"
                className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg block w-full p-2.5"
                placeholder="Enter City"
                required=""
              />
            </div>
            <div className="flex-1 pr-4">
              <label className="block mb-2 text-sm font-medium text-grey-font text-left">
                Apartment Type
              </label>
              <input
                type="apartment_type"
                name="apartment_type"
                id="apartment_type"
                className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg block w-full p-2.5"
                placeholder="Deluxe Portion"
                required=""
              />
            </div>
            <div className="flex-1 pr-4">
              <label className="block mb-2 text-sm font-medium text-grey-font text-left">
                Price Range
              </label>
              <input
                type="price"
                name="price"
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg block w-full p-2.5"
                placeholder="Min Price - Max Price"
                required=""
              />
            </div>
            <div className="flex-1 pr-4">
              <button
                type="submit"
                className="h-full w-full text-white bg-blue-1 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TopContainer;
