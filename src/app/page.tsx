import NavBar from "@/components/NavBar";
import { CardButtonType } from "@/types/button-type";
import Image from "next/image";
import {
  MdHtml,
  MdOutlineImage,
  MdOutlineSecurity,
  MdOutlineSearch,
} from "react-icons/md";

import {
  FaSitemap,
  FaRobot,
  FaCode,
  FaServer,
  FaLongArrowAltRight,
} from "react-icons/fa";

import {
  TbSeo,
  TbBrandGoogleAnalytics,
} from "react-icons/tb";
import CardButton from "@/components/CardButton";
import { getColorTheme } from "@/utils/color-shader";

export default function Home() {
  const cardbtns: CardButtonType[] = [
  {
    name: "Semantic HTML",
    icon: <MdHtml size={40}/>,
    description:
      "Learn how semantic tags help search engines understand webpage structure.",
  },
  {
    name: "Non-Semantic HTML",
    icon: <FaCode size={40}/>,
    description:
      "Compare traditional div-based layouts with semantic HTML elements.",
  },
  {
    name: "Metadata",
    icon: <TbSeo size={40}/>,
    description:
      "Explore title tags, meta descriptions, Open Graph tags, and SEO metadata.",
  },
  {
    name: "Image SEO",
    icon: <MdOutlineImage size={40}/>,
    description:
      "Understand alt text, image optimization, accessibility, and discoverability.",
  },
  {
    name: "robots.txt",
    icon: <FaRobot size={40}/>,
    description:
      "Control how search engine crawlers access and scan website content.",
  },
  {
    name: "XML Sitemap",
    icon: <FaSitemap size={40}/>,
    description:
      "Help search engines discover and index important website pages efficiently.",
  },
  {
    name: "Structured Data",
    icon: <FaCode size={40}/>,
    description:
      "Add schema markup to provide richer information to search engines.",
  },
  {
    name: "CSR Rendering",
    icon: <FaServer size={40}/>,
    description:
      "Understand Client-Side Rendering and its impact on SEO performance.",
  },
  {
    name: "SSR & SSG",
    icon: <MdOutlineSearch size={40}/>,
    description:
      "Explore Server-Side Rendering and Static Site Generation in modern frameworks.",
  },
  {
    name: "SEO Analyzer",
    icon: <TbBrandGoogleAnalytics size={40}/>,
    description:
      "Analyze SEO elements such as headings, metadata, images, and page structure.",
  },
];
const colors = [
  "blue",
  "green",
  "purple",
  "orange",
  "red",
  "cyan",
] as const;

  return (
    <div className="">
          <NavBar/>

          <div className="grid grid-cols-5 gap-5 p-3">
              {
                cardbtns.map((data,index)=>{
                  const theme = getColorTheme(colors[index % colors.length]);

                    return (
                      <div
                      key={`cb-${index}`}
                        className={`bg-white  h-fit p-3 rounded-lg`}
                        style={{
                          //borderColor: theme.border,
                          backgroundColor:theme.light
                        }}
                      >
                        <div className="w-fit p-2 h-fit rounded-lg" style={{
                          color: theme.light,
                          backgroundColor: theme.dark
                        }}>
                          {data.icon}
                        </div>
                        <p className="text-lg uppercase font-bold mt-2">{data.name}</p>

                        <p>{data.description}</p>

                        <button className="flex items-center gap-2 mt-2 text-blue-500
                        hover:scale-105 active:scale-95 cursor-pointer
                        ">Explore <FaLongArrowAltRight></FaLongArrowAltRight></button>
                      </div>
                    );
                })
              }
          </div>
    </div>
  );
}
