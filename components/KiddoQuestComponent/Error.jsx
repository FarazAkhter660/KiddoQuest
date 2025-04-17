export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <div className="p-5 flex flex-col items-center">
        <div
          className="text-red-500 text-8xl"
          style={{ fontFamily: "'Lobster Two', cursive" }}
        >
          ⚠
        </div>
        <h1
          className="text-7xl font-bold text-gray-800 mt-4"
          style={{ fontFamily: "'Lobster Two', cursive" }}
        >
          404
        </h1>
        <h2
          className="text-3xl font-semibold text-gray-700 mt-2"
          style={{ fontFamily: "'Lobster Two', cursive" }}
        >
          Page Not Found
        </h2>
        <p
          className="text-gray-500 mt-2"
          style={{ fontFamily: "'Lobster Two', cursive" }}
        >
          We're sorry, the page you have looked for does not exist in our
          website! Maybe go to our home page or try to use a search?
        </p>
      </div>
      <div className="mt-6">
        <a
          href="/kiddoquest"
          className="px-6 py-3 bg-orange-500 text-white text-lg rounded-full shadow-md hover:bg-orange-600 transition"
          style={{ fontFamily: "'Lobster Two', cursive" }}
        >
          Go Back To Home
        </a>
      </div>
    </div>
  );
}
