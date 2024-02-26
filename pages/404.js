import Link from "next/link";
import Head from "next/head";

const Error404 = () => {
  return (
    <section className="flex items-center text-black">
      <Head>
        <title>404 | Hasan Yurdakul</title>
      </Head>

      <div className="h-screen container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-black">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl text-black font-semibold md:text-3xl">
            Sorry, I couldn&#39;t find this page.
          </p>
          <p className="mt-4 mb-8 dark:text-gray-400"></p>
          <Link href="/">
            <a
              rel="noopener noreferrer"
              className="inline-flex w-full justify-center   px-12 py-3 text-sm font-medium text-white  bg-black  hover:bg-white hover:text-black hover:border-black hover:border-2 focus:outline-none focus:ring"
            >
              Back to homepage
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error404;
