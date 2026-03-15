import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utils/addToDB";
import Book from "../Book/Book";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const data = useLoaderData();
  const [sort, setSort] = useState("");

  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertedStoredBookData = storedBookData.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      convertedStoredBookData.includes(book.bookId),
    );
    setReadList(myReadList);
  }, []);

  const handleSort = (type) => {
    setSort(type);
    if(type ==='pages'){
      const sortedByPage = [...readList].sort((a,b)=>a.totalPages - b.totalPages)
      setReadList(sortedByPage)
    }
    if(type === 'ratings'){
      const sortedByRating = [...readList].sort((a,b)=>b.rating - a.rating)
      setReadList(sortedByRating)
    }
  };

  return (
    <div>
      <details className="dropdown text-center">
        <summary className="btn m-1 text-center mb-3">
          Sort by: {sort ? sort : ""}
        </summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a onClick={() => handleSort("pages")}>pages</a>
          </li>
          <li>
            <a onClick={() => handleSort("ratings")}>ratings</a>
          </li>
        </ul>
      </details>
      <Tabs>
        <TabList>
          <Tab>Book List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>Book I read: {readList.length}</h2>
          {readList.map((b) => (
            <Book key={b.bookId} singleBook={b}></Book>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>Book I want to read</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
