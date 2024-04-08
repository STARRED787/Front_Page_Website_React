import img from "../assets/Logo.png";

const Footer = () => {
  return (
    <div className="layout mt-60">
      <footer className="w-full bg-purple-700 text-white py-y px-2 h-full">
        <div className="  mx auto grid grid-cols-3 p-2">
          <div className=" ml-14">
            <img src={img} alt="Fotter log" width={200} height={200} />
            <p className="mt-3 text-slate-300">
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve single objective - your
              business results.
            </p>
          </div>
          <div className=" ml-60 ">
            <h2 className=" font-bold"> Our Technologies</h2>
            <ul className=" text-slate-300 le">
              <li>React.js</li>
              <li>Gatsby</li>
              <li>Next.Js</li>
              <li>Node.Js</li>
              <li>Graph.QL</li>
              <li>Laravel</li>
            </ul>
          </div>
          <div className=" ml-44">
            <h2 className=" font-bold">Our Services</h2>
            <ul className=" text-slate-300">
              <li>Social Media Marketing</li>
              <li>Web & Mobile App Development</li>
              <li>Data & Analytics</li>
              <li>Google Soulutions</li>
              <li>Search Engine Optimization</li>
            </ul>
          </div>
        </div>

        <div className=" text-center p-2 mt-2">
          <hr className=" bg-slate-600" />
          <span>Privacy policy | Terms & conditions</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
