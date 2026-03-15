import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../utils/addToDB";
 import { ToastContainer, toast } from 'react-toastify';

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);


  const handleMarkAsRead = (id)=>{
    //Store with id
    //Where to store?
    //Array or Collection
    //if book is already exist then show a alert
    //if not exist then push in the array or collection
    toast("Congratulations! You have read the book!!");
    addToStoredDB(id);
  }

  const {
    image,
    bookName,
    author,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = singleBook;

  return (
    <div className="flex gap-12 mt-12 mb-20">
      <div className="w-1/2 p-16 bg-gray-200 rounded-2xl">
        <img className="w-3/4" src={image} alt="" />
      </div>
       <ToastContainer />
      <div className="w-1/2">
        <h2 className="text-4xl font-bold">{bookName}</h2>
        <p className="my-4">By : {author}</p>
        <hr className="text-gray-300" />
        <p className="my-4">{category}</p>
        <hr className="text-gray-300" />
        <p className="text-gray-500 my-6">
          <span className="text-black font-bold">Review:</span> {review}
        </p>
        <div className="flex justify-start gap-8">
          <p className="font-bold">Tag:</p>
          {tags.map((tag) => (
            <button className="text-[#23BE0A] badge badge-ghost">#{tag}</button>
          ))}
        </div>
        <hr className="text-gray-300 my-6" />
        <table className="font-semibold mb-8">
            <tr>
                <td className="text-gray-500 pr-20">Number of pages: </td>
                <td>{totalPages}</td>
            </tr>
            <tr>
                <td className="text-gray-500 pr-20">Publisher: </td>
                <td>{publisher}</td>
            </tr>
            <tr>
                <td className="text-gray-500 pr-20">Year of publishing: </td>
                <td>{yearOfPublishing}</td>
            </tr>
            <tr>
                <td className="text-gray-500 pr-20">Rating: </td>
                <td>{rating}</td>
            </tr>
        </table>
       <div className="flex gap-6">
         <button onClick={()=>handleMarkAsRead(id)} className="btn bg-transparent">Mark As Read</button>
        <button className="btn bg-[#50B1C9] border-none text-white">Add to Wishlist</button>
       </div>
      </div>
    </div>
  );
};

export default BookDetails;
