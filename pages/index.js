import Head from "next/head";
import { Books } from "../data/books";
import Link from "next/link";
import { GenreBookComponent } from "../components/genrebookcomponent";

export default function Home() {
  const adventure = Books.adventure;
  const getAdventurePrices = adventure.map((book) => {
    return book.prices;
  });
  const horror = Books.horror;
  const getHorrorPrices = horror.map((book) => book.prices);
  const religious = Books.religious;
  const getReligiousPrices = religious.map((book) => book.prices);
 
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

          <button className="font-normal space-x-6 bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-xs">
            Don't show
          </button>
        </div>
        <GenreBookComponent genre={adventure} price={getAdventurePrices} />
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

          <button className="font-normal space-x-6 bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-xs">
            Don't show
          </button>
        </div>
        <GenreBookComponent genre={horror} price={getHorrorPrices} />
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

          <button className="font-normal space-x-6 bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-xs">
            Don't show
          </button>
        </div>
        <GenreBookComponent genre={religious} price={getReligiousPrices} />
      </div>
    </div>
  );
}
