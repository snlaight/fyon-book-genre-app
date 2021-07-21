import Head from "next/head";
import { Books } from "../data/books";
import { useState, Fragment } from "react";
import Link from "next/link";
import { GenreBookComponent } from "../components/genrebookcomponent";

export default function Home() {
  const [showAdventure, setShowAdventure] = useState(true);
  const [showHBooks, setShowHBooks] = useState(true);
  const [showRBooks, setShowRBooks] = useState(true);
  const adventure = Books.adventure;
  const getAdventurePrices = adventure.map((book) => {
    return book.prices;
  });
  const horror = Books.horror;
  const getHorrorPrices = horror.map((book) => book.prices);
  const religious = Books.religious;
  const getReligiousPrices = religious.map((book) => book.prices);

  const handleShowAdventure = () => {
    setShowAdventure(!showAdventure);
  };

  const showReligious = () => {
    setShowRBooks(!showRBooks);
  };
  const showHorror = () => {
    setShowHBooks(!showHBooks);
  };
  return (
    <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
      <div>
        <div className="bg-white dark:bg-gray-800 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between px-5 sm:px-10 shadow rounded-t">
          <div className="sm:w-3/5 mb-4 sm:mb-0">
            <Link href="/adventure">
              <h2 className="text-gray-800 dark:text-gray-100 text-lg font-bold">
                Adventure Books
              </h2>
            </Link>
          </div>

          <button
            onClick={() => setShowAdventure(handleShowAdventure)}
            className="font-normal space-x-6 bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-xs"
          >
            {showAdventure ? "Don't show" : "Show"}
          </button>
        </div>
        {showAdventure && (
          <Fragment>
            <GenreBookComponent genre={adventure} price={getAdventurePrices} />
          </Fragment>
        )}
      </div>
      <div>
        <div className="bg-white dark:bg-gray-800 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between px-5 sm:px-10 shadow rounded-t">
          <div className="sm:w-3/5 mb-4 sm:mb-0">
            <Link href="/horror">
              <h2 className="text-gray-800 dark:text-gray-100 text-lg font-bold">
                Horror Books
              </h2>
            </Link>
          </div>

          <button
            onClick={() => setShowHBooks(showHorror)}
            className="font-normal space-x-6 bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-xs"
          >
            {showHBooks ? "Don't show" : "Show"}
          </button>
        </div>
        {showHBooks && (
          <Fragment>
            <GenreBookComponent genre={horror} price={getHorrorPrices} />
          </Fragment>
        )}
      </div>
      <div>
        <div className="bg-white dark:bg-gray-800 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between px-5 sm:px-10 shadow rounded-t">
          <div className="sm:w-3/5 mb-4 sm:mb-0">
            <Link href="/religious">
              <h2 className="text-gray-800 dark:text-gray-100 text-lg font-bold">
                Religious Books
              </h2>
            </Link>
          </div>

          <button  onClick={() => setShowRBooks(showReligious)} className="font-normal space-x-6 bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-xs">
          {showRBooks ? "Don't show" : "Show"}
          </button>
        </div>
        {showRBooks && 
        (<GenreBookComponent genre={religious} price={getReligiousPrices} />)}
        
      </div>
    </div>
  );
}
