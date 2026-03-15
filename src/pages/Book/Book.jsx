import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    category,
    rating,
    tags,
  } = singleBook;

  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 w-96 h-[520px] shadow-sm border-gray-300 p-6 mb-20">
        <figure className="px-24 py-8 mb-8 bg-[#F3F3F3] rounded-2xl">
          <img height={166} width={124} src={image} alt="Books" />
        </figure>
        <div className="flex gap-3">
          {tags.map((tag, index) => (
            <button
              key={index}
              className="badge badge-ghost text-[#23BE0A] font-semibold"
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="card-body">
          <h2 className="card-title">{bookName}</h2>
          <p>By : {author}</p>
          <div className="border-t-1 text-gray-200 border-dashed mb-4"></div>
          <div className="flex justify-between">
            <div className="badge ">{category}</div>
            <div className="badge ">
              {rating} <FaStarHalfAlt />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
