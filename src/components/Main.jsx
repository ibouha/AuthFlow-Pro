import mainImg from "../assets/main.svg";
function Main() {
  return (
    <div className="flex bg-hero w-full bg-no-repeat bg-cover">
      <div className="flex-1 mt-8 ml-8">
        <h1 className="text-7xl font-bold text-blue-600  mt-3 ml-7">
          Organize Your
        </h1>
        <h1 className="text-7xl font-bold text-blue-600  mt-3 ml-7">
          Life Better With
        </h1>
        <h1 className="text-7xl font-bold text-blue-600  mt-3 ml-7">
          AuthFlow Pro
        </h1>
      </div>
      <div className="flex-1">
        <img src={mainImg} alt="" />
      </div>
    </div>
  );
}

export default Main;
