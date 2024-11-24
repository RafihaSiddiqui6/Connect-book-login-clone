export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col lg:flex-row items-center justify-center p-4">
      {/* Left Side */}
      <div className="text-center lg:text-left text-3xl lg:w-1/2 px-4 mb-8 lg:mb-0">
        <h1 className="text-blue-600 mb-5 lg:mb-10 text-4xl lg:text-6xl font-bold">
          Connect Book
        </h1>
        <p className="ml-0 lg:ml-1 -mt-3 font-medium text-xl lg:text-3xl">
          Connect book helps you connect and share<br className="hidden sm:block" /> 
          with the people in your life.
        </p>
      </div>

      {/* Right Side */}
      <div className="bg-white flex flex-col p-5 rounded-xl w-full lg:w-1/3 px-4">
        <input
          className="my-2 border border-gray-200 p-3 rounded-md focus:outline-1 outline-blue-600"
          type="text"
          placeholder="Email address or phone number"
        />
        <input
          className="my-2 border border-gray-200 p-3 rounded-md focus:outline-1 outline-blue-600"
          type="password"
          placeholder="Password"
        />
        <button className="bg-blue-600 my-2 py-2 text-lg font-bold text-white rounded-md hover:bg-blue-500">
          Log in
        </button>
        <p className="text-blue-500 text-sm text-center my-2 hover:underline cursor-pointer">
          Forgotten password?
        </p>
        <div className="flex items-center justify-center my-2">
          <hr className="w-full border-gray-300" />
        </div>
        <button className="bg-green-600 text-white text-lg font-semibold my-2 py-3 px-2 mx-auto rounded-md hover:bg-green-500">
          Create new account
        </button>
      </div>
    </div>
  );
}

