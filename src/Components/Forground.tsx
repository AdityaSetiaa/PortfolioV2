import Container from "./Container";

function Foreground() {
  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };
  return (
    <div onContextMenu={handleRightClick} className="absolute z-[3] top-0 left-0 w-full h-full justify-center flex px-2">
      <Container />
    </div>
  );
}

export default Foreground;
