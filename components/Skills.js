import {
  SiReact,
  SiCsharp,
  SiDotnet,
  SiFirebase,
  SiMongodb,
  SiNodedotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiNextdotjs,
} from "react-icons/si";

const Skills = () => {
  return (
    <div className="w-full pb-32">
      <div className="mx-auto flex flex-col place-items-start">
        <p className=" font-bold text-black pb-4 text-start text-base">
          Technologies I used before
        </p>

        <div className="grid border-black  grid-cols-2 md:grid-cols-3 gap-y-1 gap-x-2">
          <li className=" text-sm font-bold flex justify-start items-center flex-row mr-4">
            <SiJavascript size="28px" className=" mr-2" />

            <span>Javascript</span>
          </li>
          <li className=" text-sm font-bold flex justify-start items-center flex-row mr-4">
            <SiTypescript size="28px" className="mr-2 space-x-3" />
            Typescript
          </li>
          <li className=" text-sm font-bold flex justify-start items-center flex-row mr-4">
            <SiNodedotjs size="28px" className="mr-2" />
            NodeJS
          </li>
          <li className=" text-sm font-bold flex justify-start items-center flex-row mr-4">
            <SiReact size="28px" className="mr-2" />
            React
          </li>

          <li className=" text-sm font-bold flex justify-start items-center flex-row mr-4">
            <SiRedux size="28px" className="mr-2" />
            Redux
          </li>
          <li className=" text-sm font-bold flex justify-start items-center flex-row mr-4">
            <SiNextdotjs size="28px" className="mr-2" />
            Next
          </li>
          <li className=" text-sm font-bold flex justify-start items-center flex-row mr-4">
            <SiTailwindcss size="28px" className="mr-2" />
            Tailwind CSS
          </li>
          <li className=" text-sm font-bold flex justify-start items-center flex-row mr-4">
            <SiFirebase size="28px" className="mr-2" />
            Firebase
          </li>

          <li className=" text-sm font-bold flex justify-start items-center flex-row mr-4">
            <SiMongodb size="28px" className="mr-2" />
            MongoDB
          </li>

          <li className=" text-sm font-bold flex justify-start items-center flex-row mr-4">
            <SiDotnet size="28px" className="mr-2" />
            .NET
          </li>
          <li className=" text-sm font-bold flex justify-start items-center flex-row mr-4">
            <SiCsharp size="28px" className="mr-2" />
            C#
          </li>
        </div>
      </div>
    </div>
  );
};

export default Skills;
