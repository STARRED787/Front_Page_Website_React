import img from "../assets/Logo.png";

const TopNavigation = () => {
  return (
    <div>
      <div className=" bg-purple-700 layout p-1">
        <div className=" p-5 flex">
          <div className=" flex gap-2 text-2xl cursor-pointer items-center">
            <img src={img} alt="logo" width={190} height={190} />
          </div>
          <div className=" flex gap-4">
            <ul className=" flex gap-4 end text-slate-300 font-semibold">
              <a href="#">SERVICE</a>
              <a href="#">ABOUT US</a>
              <a href="#">CANTACT US</a>
              <a href="#">CAREERS</a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;
