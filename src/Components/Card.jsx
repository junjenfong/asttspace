function Card({ card }) {
  return (
    <div className="flex-1 mr-4 max-w-sm bg-white border w-100 h-100 border-gray-200 rounded-lg shadow-md p-4">
      <div className="relative ">
        <span className="absolute top-4 right-4 bg-badge-green px-3 py-1 text-xs  text-white">
          {card.type}
        </span>
      </div>
      <a href="#">
        <img
          className="rounded-t-lg object-contain "
          viewBox="0 0 100 100"
          src={card.cover}
          alt=""
        />
      </a>
      <div className="py-5">
        <div className="flex mb-2">
          <img
            className="rounded-t-lg mr-4 "
            src="/src/assets/images/geo-alt.svg"
            alt=""
          />
          <p className="my-auto text-xs font-normal text-gray-700 text-left dark:text-gray-400">
            {card.location}
          </p>
        </div>
        <p className="text-left text-lg mb-2 font-bold text-blue-3">
          $ {card.price}
        </p>
        <a href="#">
          <h5 className="mb-2 text-base font-bold text-left text-color-6">
            {card.title}
          </h5>
        </a>
        <p className="mb-3 text-xs font-normal text-gray-700 text-left dark:text-gray-400">
          {card.shortDesc}
        </p>
      </div>
    </div>
  );
}

export default Card;
