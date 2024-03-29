import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";
import Krishn from "./project/krishn";
import GridApp from "../Components/4monks/GridApp/GridApp";
import ChargeHome from "../Components/4monks/ChargeHomeComponent/ChargeHome";
import Option1 from "../Components/4monks/LeadCaptureOptions/Option1/Option1";

const elements = [
  { name: "Nike Shoe Animation", link: "/project/shoe1" },
  {
    name: "Fetching data + infinite scroll + tailwind",
    link: "/project/tailwindPage",
  },
  {
    name: "Fetching data + Infinite scroll + SASS",
    link: "/project/infiniteScroll",
  },
  { name: "Drag Framer motion animation", link: "/project/framer" },
  { name: "Sort Filter with Ecart cards", link: "/project/sortPage" },
  { name: "SVG Sigle path Stroke animation", link: "/project/svgSingle" },
  { name: "SVG Multi path Stroke animation", link: "/project/svgMulti" },
  { name: "async to dsync", link: "/project/async" },
  { name: "krishn.ai", link: "/project/krishn" },
  { name: "color match", link: "/project/colorMatch" },
];

const Home = () => {
  return (
    <>
      {/* // <Krishn /> */}
      <div className="bg-black p-4">
        <div className="flex justify-center items-center">
          <h1
            title="Projects"
            className="text-[200px] text-center title font-Mohave italic"
          >
            Projects
          </h1>
        </div>
        <ul className="list-none grid grid-cols-3">
          {elements.map((element, index) => (
            <li
              key={index}
              className="my-2 cardBg hover:animationBg m-5 p-3 rounded-2xl hover:scale-105 hover:duration-500"
            >
              <h1 className="text-[24px] font-Montserrat font-bold italic">
                {index + 1}.{element.name}
              </h1>
              <Link
                href={element.link}
                className="btn buttonBg text-lg font-medium capitalize"
              >
                link <BiLinkExternal />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* // <GridApp/>
    // <ChargeHome/> */}
      <Option1 />
    </>
  );
};

export default Home;
