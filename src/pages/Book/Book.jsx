import { FaStarHalfAlt } from "react-icons/fa";


const Book = ({ singleBook }) => {

    const {bookName,author,image,category,rating} = singleBook;

  return (
    <div className="card bg-base-100 w-96 shadow-sm border-gray-300 p-6">
      <figure className="px-24 py-8 bg-[#F3F3F3] rounded-2xl">
        <img height={166} width={124}
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <div className="badge ">{category}</div>
          <div className="badge ">{rating} <FaStarHalfAlt />
</div>
        </div>
      </div>
    </div>
  );
};

export default Book;
