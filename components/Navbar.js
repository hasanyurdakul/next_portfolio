import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaStarOfLife } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="font-mono">
      <nav className="fixed z-20 bg-white  w-full ">
        <div className="w-full">
          <div className="flex  items-center h-20 w-full ">
            <div className="flex flex-col  lg:mx-8 justify-between w-full pl-8 lg:pl-0">
              <div className="flex  items-center  flex-shrink-0 ">
                <h1 className=" flex items-center font-bold text-xl cursor-pointer">
                  <Link href="/">
                    <a className="text-2xl flex items-center ">
                      <FaStarOfLife className="mr-1" />
                      Hasan <span className="">Yurdakul</span>
                    </a>
                  </Link>
                </h1>
              </div>
              <div className=" md:block">
                <div className="flex items-baseline space-x-1">
                  <h1
                    className={
                      router.pathname == "/"
                        ? "font-bold"
                        : "cursor-pointer hover:underline hover:font-bold"
                    }
                  >
                    <Link id="about" href="/">
                      <a>Home</a>
                    </Link>
                  </h1>
                  <p>|</p>
                  <h1
                    className={
                      router.pathname == "/about"
                        ? "font-bold"
                        : "cursor-pointer hover:underline hover:font-bold"
                    }
                  >
                    <Link id="about" href="/about">
                      <a>About</a>
                    </Link>
                  </h1>
                  <p>|</p>

                  <h1
                    className={
                      router.pathname == "/projects"
                        ? "font-bold"
                        : "cursor-pointer hover:underline hover:font-bold"
                    }
                  >
                    <Link id="projects" href="/projects">
                      <a>Projects</a>
                    </Link>
                  </h1>
                  <p>|</p>

                  <h1
                    className={
                      router.pathname == "/blog"
                        ? "font-bold"
                        : "cursor-pointer hover:underline hover:font-bold"
                    }
                  >
                    <Link id="blog" href="/blog">
                      <a>Blog</a>
                    </Link>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
