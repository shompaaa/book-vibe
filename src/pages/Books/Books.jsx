import React, { Suspense} from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {
  //   const [allBooks, setAllBooks] = useState([]);

  //Load Data Using useEffect():

  // useEffect(()=>{
  //     fetch('https://raw.githubusercontent.com/ProgrammingHero1/book-vibe-resources/refs/heads/main/data/booksData.json')
  //     .then(res => res.json())
  //     .then(data =>{
  //         setAllBooks(data);
  //     })
  // },[])

  //Load Data Using Promise & Suspense
  //  const booksPromise = fetch('./booksData.json').then(res => res.json())

  return (
    <div>
      <h1 className="text-3xl p-6 text-center font-bold">Books</h1>
      <Suspense fallback={<span>Loading....</span>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((singleBook) => (
            <Book key={singleBook.bookId} singleBook={singleBook}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
