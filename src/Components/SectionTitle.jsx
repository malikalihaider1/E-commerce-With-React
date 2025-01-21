export default function SectionTitle(props) {
  return (
    <div className="gap-4 flex items-center">
      <div className="w-5 h-10 bg-primary rounded"></div>
      <h2 className="font-semibold text-base text-primary">{props.text}</h2>
    </div>
  );
}
