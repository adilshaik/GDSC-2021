import React, { useEffect } from "react";
interface IProps {
  link: ILink;
}
interface ILink {
  name: string;
  href: string;
  description: string;
  icon: any;
}
import AOS from "aos";
export const TrackCard: React.FC<IProps> = (props) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-up"
      key={props.link.name}
      className="flex flex-col bg-white rounded-2xl shadow-xl"
    >
      <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
        <div className="absolute top-0 p-5 inline-block bg-green-600 rounded-xl shadow-lg transform -translate-y-1/2">
          <props.link.icon className="h-6 w-6 text-white" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-medium text-gray-900">{props.link.name}</h3>
        <p className="mt-4 text-base text-gray-500">{props.link.description}</p>
      </div>
      <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
        <a
          href={"/team"}
          className="text-base font-medium text-red-600 hover:text-indigo-600"
        >
          Team<span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
    </div>
  );
};
