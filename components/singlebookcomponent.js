import { useState } from "react";
import { Books } from "../data/books";

export const SingleBookComponent = (props) => {
  let [book, setBook] = useState({
    name: props.name,
    author: props.author,
    valuePaperback: props.paperBackPrice,
    valueHardCover: props.hardCoverPrice,
    valuePDF: props.pdfPrice,
    notAvailable: props.notAvailable,
    loading: false,
  });
  if (book.loading !== true) {
    return (
      <div className="mt-1 w-full px-5 py-4 rounded shadow-lg bg-white dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-center font-semibold leading-3 text-gray-800 dark:text-gray-100">
              {book.name.toUpperCase()}
            </p>
            <caption className="block">Title</caption>
          </div>
          <div>
            <h1 className="text-center">Value</h1>
            <p className="text-sm font-semibold text-center text-green-500  ">
              {book.valuePaperback ? (
                <span> $ {book.valuePaperback} </span>
              ) : (
                <h2 style={{ color: "red" }}>Not available</h2>
              )}
            </p>
            <caption className="block">Paperback</caption>
          </div>
          <div>
            <h1 className="text-center">Value</h1>
            <p className="text-sm font-semibold text-center text-green-500 ">
              {book.valueHardCover ? (
                <span> $ {book.valueHardCover} </span>
              ) : (
                <h2 style={{ color: "red" }}>Not available</h2>
              )}
            </p>
            <caption className="block">Hardcover</caption>
          </div>
          <div>
            <h1 className="text-center">Value</h1>
            <p className="text-sm font-semibold text-center text-green-500 ">
              {book.valuePDF ? (
                <span> $ {book.valuePDF} </span>
              ) : (
                <h2 style={{ color: "red" }}> Not available </h2>
              )}
            </p>
            <caption className="block">PDF</caption>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-center font-semibold leading-3 text-blue-500">
              {book.author}
            </p>
            <caption className="block">Author</caption>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
};
