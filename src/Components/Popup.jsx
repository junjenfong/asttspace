function Popup({ isOpen, closePopup }) {
  return (
    <div className="fixed inset-0">
      {isOpen && (
        <div
          onClick={closePopup}
          className="relative  z-50 h-full w-full bg-gray-900 bg-opacity-75  flex items-center justify-center"
        >
          {/* <div className="relative ">
                    <span className="absolute top-4 right-4 bg-badge-green px-3 py-1 text-xs  text-white">
                      {card.type}
                    </span>
                  </div> */}
          <div className="bg-white rounded-lg p-8 shadow-xl">
            <button
              onClick={closePopup}
              className="absolute top-0 right-0 m-4 font-bold text-2xl text-black"
            >
              X
            </button>
            <iframe
              src="https://www.youtube.com/embed/7oVJAw1RpLI"
              className="w-full h-64"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;
