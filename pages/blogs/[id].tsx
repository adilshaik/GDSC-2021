import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
export interface IBlogPost {
  id: string;
  title: string;
  author: string;
  shortDesc: string;
  image: string;
  content: IPara[];
  postedTime: number;
}
interface IPara {
  para: string;
}
const blog: React.FC = () => {
  const router = useRouter();
  const [blogData, setBlogData] = useState<IBlogPost | undefined>(undefined);
  let { id } = router.query;
  const grabData = async () => {
    if (!id) return;
    const res = await import(`../../content/blogs/posts/${id + ""}/content.md`);
    const data = res.default;
    console.log(data.attributes);
    setBlogData(data.attributes);
  };
  useEffect(() => {
    grabData();
  }, [id]);
  return <div>{blogData && blogData.image}</div>;
};

export default blog;
