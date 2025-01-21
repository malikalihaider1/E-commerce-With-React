export default function Button(props) {
  return (
    <button
      className={`font-medium rounded bg-primary centre text-white ${props.className}`}
    >
      {props.children}
    </button>
  );
}
