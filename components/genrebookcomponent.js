import { SingleBookComponent } from "./singlebookcomponent";

export const GenreBookComponent = (props) => {
  let books = props.genre;
  return (
    <div className="font-normal text-sm text-gray-600 dark:text-gray-400 mt-1">
      {books.map((book) => {
        let hardCoverPrice = "";
        let paperBackPrice = "";
        let pdfPrice = "";
        let notAvailable = false;
        if (book.prices.length > 0) {
          book.prices.forEach((price) => {
            if (price.type === "papreback") {
              paperBackPrice = price.value;
            } else if (price.type === "hard cover") {
              hardCoverPrice = price.value;
            } else if (price.type === "pdf") {
              pdfPrice = price.value;
            }
          });
        } else {
          notAvailable = "Not available";
        }
        
        return (
          <SingleBookComponent
            key={book.name}
            name={book.name}
            author={book.author}
            hardCoverPrice = {hardCoverPrice}
            paperBackPrice={paperBackPrice}
            pdfPrice={pdfPrice}
            notAvailable={notAvailable}
          />
        );
      })}
    </div>
  );
};
