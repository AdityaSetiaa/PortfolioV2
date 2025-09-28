import Container from "./Container";

function Foreground() {
 
  return (
    <div className="absolute z-[3] top-0 left-0 w-full h-full justify-center flex px-2 p-3">
      <Container />
    </div>
  );
}

export default Foreground;
