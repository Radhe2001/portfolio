import "../css/project.css";
import github from "../assets/github.png";
import live from "../assets/live.png";
import chatgpt from "../assets/chatgpt.png";
import natureTour from "../assets/naturetour.jpg";
import urbanHarbour from "../assets/urbanharbour.jpg";

const Project = () => {
  return (
    <>
      <div className="mt-24 mb-16">
        <center>
          <div className=" text-blue-700 text-5xl font-bold mb-12">
            My Projects
          </div>
        </center>
        <div className="flex place-content-center gap-12">
          <div
            className="chatgpt-image-project bg-cover rounded-xl shadow-md shadow-red-50 border-slate-800 border-2"
            style={{ backgroundImage: `url(${chatgpt})` }}
          ></div>
          <div className="chatgpt-image-project-desc flex place-items-center ">
            <div className="">
              <div className=" title text-3xl font-semibold mb-4">
                ChatGPT Clone
              </div>
              <div className="text-justify body text-md mb-3">
                ChatGPT clone project developed on the MERN stack. Featuring a
                highly efficient backend, the application ensures seamless data
                handling with MongoDB. The eye-catching UI enhances user
                engagement, blending functionality with aesthetics. Experience
                the future of chatbot technology through this project, where a
                dynamic MERN foundation meets an appealing design for optimal
                performance.
              </div>
              <div className="flex mb-6">
                <div className="text-justify text-lg font-semibold text-cyan-500">
                  {"Tech " + " Stack "}
                </div>
                <span className="px-2 text-white">:</span>
                <div className="text-justify text-cyan-200">
                  React.js | Express.js | Node.js | Tailwind CSS | MongoDB |
                  OpenAI
                </div>
              </div>
              <div className="flex gap-6 ">
                <a href="https://github.com/Radhe2001/chatgpt-clone-frontend">
                  <div className="flex btn-github px-3 py-1 place-items-center rounded-xl">
                    <div className="text-xl font-semibold mr-2">Github </div>
                    <div
                      className="bg-cover h-5 w-5"
                      style={{ backgroundImage: `url(${github})` }}
                    ></div>
                  </div>
                </a>
                <a href="https://chatgpt-clone-frontend.vercel.app/">
                  <div className="flex btn-live px-3 py-1 place-items-center rounded-xl">
                    <div className="text-xl font-semibold mr-2">Live </div>
                    <div
                      className="bg-cover h-5 w-5"
                      style={{ backgroundImage: `url(${live})` }}
                    ></div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex place-content-center gap-12 mt-16 mb-16">
          <div className="chatgpt-image-project-desc flex place-items-center ">
            <div className="">
              <div className=" title text-3xl font-semibold mb-4">
                NatureTour - Travel Planner
              </div>
              <div className="text-justify body text-md mb-3">
                My project integrates MongoDB, Express.js, React.js, and Node.js
                to offer a dynamic and user-friendly experience. From itinerary
                creation to blog writing, it streamlines the entire process. The
                efficient admin page ensures easy management, allowing admins to
                oversee user activities effortlessly.
              </div>
              <div className="flex mb-6">
                <div className="text-justify text-lg font-semibold text-cyan-500">
                  {"Tech " + " Stack "}
                </div>
                <span className="px-2 text-white">:</span>
                <div className="text-justify text-cyan-200">
                  React.js | Express.js | Node.js | Redux.js | Tailwind CSS |
                  MongoDB
                </div>
              </div>
              <div className="flex gap-6 ">
                <a href="https://github.com/Radhe2001/naturetour">
                  <div className="flex btn-github px-3 py-1 place-items-center rounded-xl">
                    <div className="text-xl font-semibold mr-2">Github </div>
                    <div
                      className="bg-cover h-5 w-5"
                      style={{ backgroundImage: `url(${github})` }}
                    ></div>
                  </div>
                </a>
                <a href="https://naturetour.vercel.app/">
                  <div className="flex btn-live px-3 py-1 place-items-center rounded-xl">
                    <div className="text-xl font-semibold mr-2">Live </div>
                    <div
                      className="bg-cover h-5 w-5"
                      style={{ backgroundImage: `url(${live})` }}
                    ></div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div
            className="nature-image-project bg-cover rounded-xl shadow-md shadow-red-50 border-slate-800 border-2"
            style={{ backgroundImage: `url(${natureTour})` }}
          ></div>
        </div>
        <div className="flex place-content-center gap-12">
          <div
            className="chatgpt-image-project bg-cover rounded-xl shadow-md shadow-red-50 border-slate-800 border-2"
            style={{ backgroundImage: `url(${urbanHarbour})` }}
          ></div>
          <div className="chatgpt-image-project-desc flex place-items-center ">
            <div className="">
              <div className=" title text-3xl font-semibold mb-4">
                UrbanHarbour - E-commerce Site
              </div>
              <div className="text-justify body text-md mb-3">
                An e-commerce website, meticulously crafted using Django,
                Tailwind CSS, and PostgreSQL. Having a nice looking UI that
                seamlessly merges style and functionality. It has an efficient
                backend ensures smooth transactions, while the admin page
                empowers easy management.
              </div>
              <div className="flex mb-6">
                <div className="text-justify text-lg font-semibold text-cyan-500">
                  {"Tech " + " Stack "}
                </div>
                <span className="px-2">:</span>
                <div className="text-justify text-cyan-200">
                  Django | Tailwind CSS | HTML5 | PostgreSQL
                </div>
              </div>
              <div className="flex gap-6 ">
                <a href="https://github.com/Radhe2001/urbanharbour">
                  <div className="flex btn-github px-3 py-1 place-items-center rounded-xl">
                    <div className="text-xl font-semibold mr-2">Github </div>
                    <div
                      className="bg-cover h-5 w-5"
                      style={{ backgroundImage: `url(${github})` }}
                    ></div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
