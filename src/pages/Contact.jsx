import { useSelector } from "react-redux";

export default function Contact() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <div
      className={`transition-colors duration-300 min-h-screen flex items-center justify-center px-4 
      ${darkMode ? "bg-slate-800 text-white" : "bg-gray-100 text-gray-900"}`}
    >
      <div className="max-w-lg w-full bg-white dark:bg-slate-700 shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Contact Us</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className={`w-full p-3 rounded-lg border focus:outline-none transition-colors duration-300 
              ${darkMode ? "bg-slate-600 border-slate-500 focus:border-slate-400" : "bg-gray-50 border-gray-300 focus:border-gray-500"}`}
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className={`w-full p-3 rounded-lg border focus:outline-none transition-colors duration-300 
              ${darkMode ? "bg-slate-600 border-slate-500 focus:border-slate-400" : "bg-gray-50 border-gray-300 focus:border-gray-500"}`}
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className={`w-full p-3 rounded-lg border focus:outline-none transition-colors duration-300 
              ${darkMode ? "bg-slate-600 border-slate-500 focus:border-slate-400" : "bg-gray-50 border-gray-300 focus:border-gray-500"}`}
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3  font-medium text-white transition-colors duration-300 
             bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
