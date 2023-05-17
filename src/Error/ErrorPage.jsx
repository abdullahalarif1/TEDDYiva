import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className="flex items-center h-screen py-20 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <img
        className="h-96 mt-4 rounded-full border-blue-300 border-2"
          src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg?size=626&ext=jpg&ga=GA1.1.675751479.1660202141&semt=ais"
          alt=""
        />
        <div className="max-w-md text-center pb-10">
          <h2 className="mt-10 font-semibold text-2xl text-red-600">
            {status || "not available status"}
          </h2>
          <p className="text-2xl font-semibold md:text-3xl mb-8">
            {error?.message}
          </p>
          <Link
            to="/"
            className="px-8 py-3 text-white font-semibold rounded bg-blue-500 "
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
