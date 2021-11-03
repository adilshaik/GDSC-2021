import Head from "next/head";
import React from "react";
import { Nav } from "../src/components/Layouts/Nav";
import { TeamCard } from "../src/components/TeamCard";

const people = [
  {
    name: "Srimanth Tenneti",
    role: "Community Lead & Machine Learning Lead",
    imageUrl: "/team/SrimanthTenneti.jpg",
    bio: `A 20 y/o Hardware Designer and Software Developer, I have a knack for designing Digital Systems using Verilog HDL and have worked with protocols like AXI, AXI - Lite, AXI - Stream, AHB, AHB - Lite, UART, SPI. I also have a good grasp on SOC design and am proficient with RISC-based CPU design. I've worked with various microcontroller units like STM32, MSP430, TIVA Series, Arduino, AVR Tiny Series and can develop a bare-metal code.`,
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Vaishnavi Tammali",
    role: "Corporate Outreach Lead",
    imageUrl: "/team/vaishnavi.jpeg",
    bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "P Renu",
    role: "Content Lead",
    imageUrl: "/team/renu.png",
    bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Sirichandan Reddy",
    role: "Management Lead",
    imageUrl: "/team/sirichandanreddy.JPG",
    bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Vedanvita Gudavalli",
    role: "Strategies and Outreach Lead",
    imageUrl: "/team/vedanvitagudavalli.jpg",
    bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "S Preetham Reddy",
    role: "Student Relations Lead",
    imageUrl: "/team/PreethamReddy.jpg",
    bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Jannaikode Yashwanth Kumar",
    role: "Strategies and Operations Lead",
    imageUrl: "/team/yashwanth.jpg",
    bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Annam DevikaLahari",
    role: "Women Empowerment Lead",
    imageUrl: "/team/lahari.jpeg",
    bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Thushar KE",
    role: "Web Development Lead",
    imageUrl: "/team/thushar.jpeg",
    bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Shaik Adil",
    role: "GCP Facilitator & Web development core team",
    imageUrl: "/team/adil.jpeg",
    bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Karthik Pavoor ",
    role: "Wed development core team",
    imageUrl: "/team/karthikpavoor.jpg",
    bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Rishi Shreshtham",
    role: "Machine Learning core team",
    imageUrl: "/team/rishishrestham.jpeg",
    bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Hari Sri Purna Vishnu Karthik",
    role: "Machine Learning core team",
    imageUrl: "/team/harikarthik.jpeg",
    bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "S Abhinav",
    role: "Machine Learning core team",
    imageUrl: "/team/Abhinav.png",
    bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Pisati Sai Charan Reddy",
    role: "Machine Learning core team",
    imageUrl: "/team/Pisati.JPG",
    bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Sandeep P",
    role: "Android Lead",
    imageUrl: "/team/sandeepprabhakula.jpg",
    bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Nimma Likhitha",
    role: "Android core team",
    imageUrl: "/team/LikhithaNimma.jpeg",
    bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
];

const team: React.FC = () => {
  return (
    <React.Fragment>
      <Head>
        <title>GDSC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div className="bg-white">
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="text-center my-10">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Our Team
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
              libero labore natus atque, ducimus sed.
            </p>
          </div>
          <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
            <div className="lg:col-span-3">
              <ul
                role="list"
                className="space-y-12 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
              >
                {people.map((person) => (
                  <li key={person.name}>
                    <TeamCard person={person} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default team;
