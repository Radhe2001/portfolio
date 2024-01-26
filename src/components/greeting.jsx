import { useEffect, useState } from "react";
import profile from "../assets/mypic.png";
import "../css/greeting.css";
import { Link } from "react-router-dom";
const Greeting = () => {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(true);
  useEffect(() => {
    let str = "A Full Stack Developer  ";
    setTimeout(() => {
      document.querySelector(".text").innerHTML = str.substring(0, count);
      if (increment) {
        if (count < str.length) {
          setCount(count + 1);
        } else {
          setIncrement(false);
        }
      } else {
        if (count > 1) {
          setCount(count - 1);
        } else {
          setIncrement(true);
        }
      }
    }, 200);
  }, [count, setCount, increment, setIncrement]);
  return (
    <>
      <div className="w-full mt-16 mb-16 flex place-items-center">
        <div className="">
          <div className="hello-text text-4xl mb-2">Hello, I am</div>
          <div className="name-div text-6xl mb-2">Radheshyam Jha</div>
          <div className="text text-5xl mb-6"></div>
          <div className="greet-desc-div text-lg text-white">
            Proficient MERN stack developer with expertise in building robust
            and scalable web applications. Strong command of MongoDB,
            Express.js, React, Node.js, and Django.
          </div>
          <div className="flex  mt-8">
            <Link  to={"/contact"} className="btn1 px-4 py-2 font-bold rounded-xl text-xl mr-3">
              Contact Me
            </Link>
            <Link to={"/about"} className="btn2 px-4 py-2 font-bold rounded-xl text-xl ml-3">
              Know More
            </Link>
          </div>
        </div>
        <div
          className="img-div ml-auto mr-12 border-2 border-cyan-900 rounded-full h-96 w-96 bg-cover "
          style={{ backgroundImage: `url(${profile})` }}
        ></div>
      </div>
    </>
  );
};

export default Greeting;
