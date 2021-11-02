import { Router, useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { Nav } from '../../src/components/Layouts/Nav';
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
    const res = await import(`../../content/blogs/${'content'}.md`);
    const data = res.default;
    setBlogsData(data.attributes.blogs);
  };
  useEffect(() => {
    grabData();
  }, []);
  if (blogsData) console.log(blogsData);
  return (
    <React.Fragment>
      <Head>
        <title>GDSC</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <main className='pt-24'>
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
      </main>
    </React.Fragment>
  );
};

export default blogs;
