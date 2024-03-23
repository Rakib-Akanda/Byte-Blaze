import { useLoaderData } from "react-router-dom";
import placeholderImage from '../../assets/404.jpg'
import Markdown from 'react-markdown'
import rehypeRaw from "rehype-raw";


const Content = () => {
  const blog = useLoaderData();  
  const {cover_image, title, tags, body_html, url} = blog;
  
  return (
    <div
      className="mx-auto group border-2 border-gray-300 border-opacity-30 p-2 bg-gray-50"
    >
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 bg-gray-500"
        src={cover_image || placeholderImage}
      />
       <div>
        <div className="flex flex-wrap py-6 gap-2 ">
          {tags &&
            tags.map((tag) => (
              <a
                key={tag}
                rel="noopener noreferrer"
                href="#"
                className="px-3 py-1 rounded-sm hover:underline  dark:text-gray-900 font-semibold"
              >
                #{tag}
              </a>
            ))}
        </div>
      </div>
      <div className=" space-y-2">
        
        <a 
        href={url}
        target="_blank"
        className="text-2xl font-semibold">
          {title}
        </a>
        <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
      </div>
    </div>
  );
};

export default Content;
