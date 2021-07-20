import styles from "../styles/Home.module.css";
import { Books } from "../data/books";
import { GenreBookComponent } from "../components/genrebookcomponent";

const ReligiousBooks = () => {
  let religious = Books.religious;
  return (
    <div className="container mx-auto grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 pt-4 gap-4">
     <div>
      <div className="bg-white dark:bg-gray-800 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between px-5 sm:px-10 shadow rounded-t">
        <div className="sm:w-3/5 mb-4 sm:mb-0">
          <h2 className="text-gray-800 dark:text-gray-100 text-lg font-bold flex">
            Religious Books
          </h2>
        </div>
      </div>
      <GenreBookComponent genre={religious} />
      </div>
    </div>
  );
};

export default ReligiousBooks;