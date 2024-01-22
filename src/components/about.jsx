import { useState } from "react";
import "../css/about.css";

const About = () => {
  const [visible, setVisible] = useState(false);
  const displayMore = (e) => {
    e.preventDefault();
    setVisible(!visible);
  };
  return (
    <>
      <div className="mt-24 flex place-content-center place-items-center">
        <div className="gif-div">
          <img
            src="https://camo.githubusercontent.com/0314718bada43a44fa7eb33a076b55e92c5b1fb20ec0dc4f0713b83bde3c86f6/68747470733a2f2f692e70696e696d672e636f6d2f6f726967696e616c732f62622f33372f35632f62623337356364643635353138346361323731356163353035396537333635312e676966"
            height="550px"
            width="550px"
          ></img>
        </div>
        <div className="about-dec-main-div text-white">
          <div className="about-head-title text-3xl font-semibold">
            About Me
          </div>
          <div className="title-desc-about text-4xl mt-4 font-semibold">
            Versatile Full Stack Developer Bridging MERN and Django Expertise
          </div>
          <div className="full-desc-about text-md text-justify mt-4">
            Passionate about web development, I excel in <b>React.js</b>,{" "}
            <b>Redux Toolkit</b>,<b> Node.js</b>, <b>Express.js</b>,{" "}
            <b>Django</b>, <b>PostgreSQL</b>, <b> MongoDB</b> and <b>Django</b>{" "}
            stacks, seamlessly integrating client-side finesse and server-side
            robustness. My skills drive innovative, efficient solutions,
            reflecting a ommitment to crafting dynamic and impactful web
            applications.
          </div>
          <div className="mt-12">
            <center>
              <button
                className="btn-more bg-gray-900 px-3 py-1 border-2 text-2xl font-semibold text-cyan-300 border-slate-600 rounded-xl"
                onClick={displayMore}
              >
                {" "}
                More
              </button>
            </center>
          </div>
        </div>
      </div>
      {visible ? (
        <div className="">
          <div className="flex mt-16 gap-24 place-content-center place-items-center">
          <div className="self-desc-div text-white">
            <div className="">
              <div className="biography-div-about text-4xl font-semibold mb-12">
                My Biography
              </div>
              <div className="flex mb-1">
                <div className="text-head text-xl">Name</div>
                <div className=" text-ans ml-auto">Radheshyam Jha</div>
              </div>
              <hr></hr>

              <div className="flex mt-3">
                <div className="text-head text-xl">Email</div>
                <div className="text-ans ml-auto">
                  radheshyamjha469@gmail.com
                </div>
              </div>
              <hr></hr>
              <div className="flex mt-3">
                <div className="text-head text-xl">Phone</div>
                <div className="text-ans ml-auto">+91 6204293537</div>
              </div>
              <hr></hr>

              <div className="flex mt-3">
                <div className="text-head text-xl">Freelance/Job</div>
                <div className="text-ans ml-auto">Available</div>
              </div>
              <hr></hr>
              <div className="flex mt-3">
                <div className="text-head text-xl">Birthday</div>
                <div className="text-ans ml-auto">08/Dec/2001</div>
              </div>
              <hr></hr>
              <div className="flex mt-3">
                <div className="text-head text-xl">Address</div>
                <div className="text-ans ml-auto">
                  Chaheru, Phagwara, Punjab
                </div>
              </div>
              <hr></hr>
            </div>
          </div>
          <div className="rest-div grid gap-4 mt-8 ">
            <div className="glass px-8 py-2 rounded-2xl h-36 mb-4 border-2 border-cyan-800 text-white">
              <div className="know-head text-2xl font-semibold mb-2">
                10+ Complete Project
              </div>
              <div className="know-body  text-justify">
                Developed 10+ diverse projects encompassing full-stack and
                backend solutions with Django, Flutter, and MERN. Includes three
                successful live projects.
              </div>
            </div>
            <div className="glass px-8 py-2 rounded-2xl h-36 mb-4 border-2 border-cyan-800 text-white">
              <div className="know-head text-2xl font-semibold mb-3">
                200+ DSA Problems
              </div>
              <div className="know-body  text-justify">
                Conquered 200+ DSA questions on HackerRank, CodeChef, and
                LeetCode, demonstrating proficiency in C++, Java, Python, and
                JavaScript.
              </div>
            </div>
          </div>
        </div>
        <div className="flex place-content-center gap-4 mt-16 mb-12 text-white">
          <div className="div-left-about">
            <div className="flex place-content-center mb-6 text-2xl font-semibold">Courses</div>
            <div className="flex place-content-center">
              <div className=""> <div className="edu-detail-div-glass mb-8 rounded-t-2xl py-3 px-6">
              <div className="edu-detail-div-glass-head text-xl font-semibold mb-1">Web Development Bootcamp</div>
              <div className="edu-detail-div-glass-body text-xl mb-4">From Udemy</div>
              <div className="flex place-content-center">
                <button className="edu-detail-div-glass-time text-lg font-semibold px-4 py-1 rounded-lg">02 Months</button>
              </div>
            </div>
            <div className="edu-detail-div-glass mb-8 py-3 px-6">
              <div className="edu-detail-div-glass-head text-xl font-semibold mb-1">Django Development Masterclass</div>
              <div className="edu-detail-div-glass-body text-xl mb-4">From Udemy</div>
              <div className="flex place-content-center">
                <button className="edu-detail-div-glass-time text-lg font-semibold px-4 py-1 rounded-lg">02 Months</button>
              </div>
            </div>
            <div className="edu-detail-div-glass mb-8 rounded-b-2xl py-3 px-6">
              <div className="edu-detail-div-glass-head text-xl font-semibold mb-1">Java with DSA & System Design</div>
              <div className="edu-detail-div-glass-body text-xl mb-4">From PW Skills</div>
              <div className="flex place-content-center">
                <button className="edu-detail-div-glass-time text-lg font-semibold px-4 py-1 rounded-lg">06 Months</button>
              </div>
            </div></div>
            </div>
          </div>
          <div className="div-right-about">
            <div className="flex place-content-center mb-6 text-2xl font-semibold">Academic Education</div>
            <div className="flex place-content-center">
              <div className=""> <div className="edu-detail-div-glass mb-8 rounded-t-2xl py-3 px-6">
              <div className="edu-detail-div-glass-head text-xl font-semibold mb-1">Master's of Science in IT</div>
              <div className="edu-detail-div-glass-body text-xl mb-4">From Lovely Professional University, Punjab</div>
              <div className="flex place-content-center">
                <button className="edu-detail-div-glass-time text-lg font-semibold px-4 py-1 rounded-lg">02 Years</button>
              </div> 
            </div>
            <div className="edu-detail-div-glass mb-8 py-3 px-6">
              <div className="edu-detail-div-glass-head text-xl font-semibold mb-1">Bachelor's of Arts (History hons.)</div>
              <div className="edu-detail-div-glass-body text-xl mb-4">From Anugrah Narayan College, Patna</div>
              <div className="flex place-content-center">
                <button className="edu-detail-div-glass-time text-lg font-semibold px-4 py-1 rounded-lg">03 Years</button>
              </div>
            </div>
            <div className="edu-detail-div-glass mb-8 rounded-b-2xl py-3 px-6">
              <div className="edu-detail-div-glass-head text-xl font-semibold mb-1">Higher Secondary</div>
              <div className="edu-detail-div-glass-body text-xl mb-4">From Xavier's English School, Konnagar, WB</div>
              <div className="flex place-content-center">
                <button className="edu-detail-div-glass-time text-lg font-semibold px-4 py-1 rounded-lg">02 Years</button>
              </div>
            </div></div>
            </div>
          </div>
        </div>
        </div>
        
      ) : null}
    </>
  );
};

export default About;
