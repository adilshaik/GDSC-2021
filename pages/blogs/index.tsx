import { Router, useRouter } from "next/dist/client/router";
import React, { useState, useEffect } from "react";
export interface IBlog {
  id: string;
  title: string;
  shortDesc: string;
  image: string;
}
const blogs: React.FC = () => {
  const [blogsData, setBlogsData] = useState<IBlog[]>(undefined);
  const router = useRouter();
  const grabData = async () => {
    const res = await import(`../../content/blogs/${"content"}.md`);
    const data = res.default;
    setBlogsData(data.attributes.blogs);
  };
  useEffect(() => {
    grabData();
  }, []);
  if (blogsData) console.log(blogsData);
  return (
    <>
      <p>Hello</p>
      <div>
        {blogsData &&
          blogsData.map((blog) => {
            return (
              <div
                onClick={() => {
                  router.push(`blogs/${blog.id}`);
                }}
              >
                {blog.title}
              </div>
            );
          })}
      </div>
    </>
  );
};

export default blogs;
