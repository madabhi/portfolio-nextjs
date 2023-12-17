import Link from "next/link";
const NotFound=() => {
  return (
    <main>
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col  items-center justify-start h-screen md:px-8">
        <Link href="/">
          {" "}
          <button className="font-semibold bg-dark text-light rounded-full p-4">
            Go Back
          </button>
        </Link>
        <div className="max-w-lg mx-auto text-center">
          <div className="pb-6">
            <h1 className="text-2xl font-semibold">
              We are sorry, but this page doesn't exist
            </h1>
          </div>
          <h3 className="text-gray-800 text-4xl font-semibold sm:text-5xl">
            Page not found
          </h3>
          <p className="text-gray-600 mt-3">
            Sorry, the page you are looking for could not be found or has been
            removed.
          </p>
        </div>
      </div>
    </main>
  );
};

export default NotFound;