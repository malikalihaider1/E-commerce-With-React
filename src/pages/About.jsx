import { useSelector } from "react-redux";

export default function About() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  return (
    <div
      className={`transition-colors duration-300 ${darkMode ? "bg-slate-700" : ""}`}
    >
      <p
        className={`${darkMode ? "text-white" : ""} transition-colors duration-300 `}
      >
        About
      </p>
    </div>
  );
}
