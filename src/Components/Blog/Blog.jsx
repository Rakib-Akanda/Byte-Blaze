import { Link } from "react-router-dom";
import placeholderImage from "../../assets/404.jpg";
import { MdDeleteForever } from "react-icons/md";
const Blog = ({ blog, deletable, handleDelete }) => {
  const { cover_image, title, published_at, description, id } = blog;
  return (
    <div className="flex relative">
      <Link
        to={`/blog/${id}`}
        className="max-w-sm mx-auto group transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30   hover:no-underline focus:no-underline bg-gray-50"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 bg-gray-500"
          src={cover_image || placeholderImage}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs text-gray-600">
            {new Date(published_at).toLocaleDateString()}
          </span>
          <p>{description}</p>
        </div>
      </Link>
      {deletable && (
        <div onClick={() => handleDelete(id)} className="absolute bg-primary p-3 rounded-full hover:scale-105 -top-5 right-5 hover:bg-secondary group cursor-pointer ">
          <MdDeleteForever size={20} className="text-secondary group-hover:text-primary"/>
        </div>
      )}
    </div>
  );
};

export default Blog;
