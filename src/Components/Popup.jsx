function Popup({ isOpen, closePopup }) {
  return (
    <div>
      <div
        className={`${
          isOpen ? "" : "hidden"
        } flex fixed z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full `}
      >
        <div className="relative p-4 w-full max-w-2xl h-auto">
          <div className="relative p-4 bg-white rounded-lg shadow">
            <div className="flex justify-between items-center p-4 m-4 rounded-t  ">
              <button
                type="button"
                className="absolute right-5 top-5 text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
                onClick={closePopup}
              >
                X
              </button>
              <iframe
                src="https://www.youtube.com/embed/7oVJAw1RpLI"
                className="w-full h-64"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
