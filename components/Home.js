import Link from "next/link";
import Lottie from "./Lottie";
const Home = () => {
  return (
    <div className="font-mono px-8 py-28 md:pt-28  items-start h-screen ">
      <div className="text-left mx-auto">
        <p className="text-sm  md:text-sm md:mt-2 mt-2 text-black">
          .NET Developer, UI Design Enthusiast
        </p>
        <Lottie className="w-20 h-20 mt-8 md:mt-8" />
        <div className="flex flex-wrap justify-left gap-4 mt-8 grid-cols-2">
          <Link href="/hasanyurdakulresume.pdf">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-3 text-sm font-medium text-white bg-black  hover:bg-white hover:text-black hover:border-black hover:border-2 focus:outline-none focus:ring"
            >
              Click to get my Resume!
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
