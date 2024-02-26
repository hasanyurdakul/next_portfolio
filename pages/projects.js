import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";
import Image from "next/image";
import Head from "next/head";

const projects = () => {
  return (
    <div className="h-screen sm:mx-auto pt-24 font-mono">
      <Head>
        <title>Projects | Hasan Yurdakul</title>
      </Head>
      <div className="grid max-w-lg md:px-0 py-8 pb-32 mx-8 space-y-12">
        <section className="p-4 md:p-4 bg-white   border-black border-2">
          <h1 className="font-bold text-lg md:text-xl text-black pb-4">
            Reddit Clone Social Media App
          </h1>
          <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-1 items-center">
            <div className="items-center aspect-w-5 aspect-h-3 ">
              <Image
                src="/images/project-images/reddit_clone.png"
                layout="fill"
                objectFit="contain"
                alt=""
                className=""
              />
            </div>
            <blockquote className="sm:col-span-2">
              <p className="text-xs text-justify md:text-sm">
                This Next.js based Reddit Clone allows users to create
                communities, share posts and comments, and vote on posts. You
                can also sign in with Google or email with Firebase
                Authentication.
              </p>
              <cite className="inline-flex items-center mt-8 not-italic">
                <span className="hidden w-3 h-px bg-gray-400 sm:inline-block"></span>
                <p className="text-xs md:text-sm text-justify text-gray-500 sm:ml-3">
                  React, Next.js, Chakra, Firebase, Recoil, TypeScript
                </p>
              </cite>
              <div className="flex pt-8 space-x-4">
                <div>
                  <a
                    href="https://github.com/hsnyrdkl/social-media-app"
                    target="_blank"
                    rel="noopner noreferrer"
                  >
                    <FiGithub size="30px" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://hasansocial.netlify.app/"
                    target="_blank"
                    rel="noopner noreferrer"
                  >
                    <HiOutlineExternalLink size="30px" />
                  </a>
                </div>
              </div>
            </blockquote>
          </div>
        </section>

        <section className="p-4 md:p-4 bg-white   border-black border-2">
          <h1 className="font-bold text-lg md:text-xl text-black pb-4">
            Image Generator
          </h1>
          <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-1 items-center">
            <div className="aspect-w-5 aspect-h-3">
              <Image
                src="/images/project-images/image_generator.png"
                layout="fill"
                objectFit="contain"
                alt=""
              />
            </div>
            <blockquote className="sm:col-span-2">
              <p className="text-xs text-justify md:text-sm">
                Image Generator uses OpenAI API to create the image that user
                desired. Users can create images, share them and view the images
                that created by the community. Cloudinary is used to store the
                images. MongoDB holds the informations about images. And finally
                Render is used for hosting.
              </p>
              <cite className="inline-flex items-center mt-8 not-italic">
                <span className="hidden w-3 h-px bg-gray-400 sm:inline-block"></span>
                <p className="text-xs md:text-sm text-justify text-gray-500 sm:ml-3">
                  React, Next.js, Tailwind CSS, MongoDB, Express, Render,
                  Cloudinary
                </p>
              </cite>
              <div className="flex pt-8 space-x-4">
                <div>
                  <a
                    href="https://github.com/hsnyrdkl/image_generator_app"
                    target="_blank"
                    rel="noopner noreferrer"
                  >
                    <FiGithub size="30px" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://hasanimagegenerator.netlify.app/  "
                    target="_blank"
                    rel="noopner noreferrer"
                  >
                    <HiOutlineExternalLink size="30px" />
                  </a>
                </div>
              </div>
            </blockquote>
          </div>
        </section>
      </div>
    </div>
  );
};

export default projects;
