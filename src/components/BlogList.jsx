import BlogItem from './BlogItem';
import rightArrowIcon from '../../images/icons/right-arrow.png';
import { useEffect, useState } from 'react';
import { getBlogs } from '../API_Request/blogReq';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs().then((res) => {
      setBlogs(res.data);
    });
  }, []);

  return (
    <>
      {/* Blog Heading */}
      <div id="menu-heading-second">
        <h3 id="menu-heading-second-text">Grow Your Business</h3>
      </div>

      {/* h-list */}
      <div id="h-list-container">

        <div id="h-list">

          {blogs.map((blog) => {
            return (
              <BlogItem
                key={blog._id}
                imageSrc={(import.meta.env.VITE_STATIC_PATH) + blog.image}
                title={blog.title}
                body={blog.body}
              />
            )
          })};

          {/* Scroll Button */}
          <div id="div-scroll">
            <img
              id="icon-scroll"
              src={rightArrowIcon}
              alt="right-arrow"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogList;