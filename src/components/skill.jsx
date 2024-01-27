import "../css/skill.css"
import html_logo from "../assets/html_logo.png"
import css_logo from "../assets/CSS3_logo.png"
import js_logo from "../assets/js_logo.png"
import python_logo from "../assets/python_logo.png"
import bootstrap from "../assets/bootstrap_logo.png"
import tailwind from "../assets/tailwind.png"
import react_logo from "../assets/react_logo.png"
import express_logo from "../assets/express_logo.png"
import node_logo from "../assets/node_logo.png"
import django_logo from "../assets/django_logo.png"
import mongoose_logo from "../assets/mongoose_logo.png"
import firebase from "../assets/firebase_logo.png"
import mongodb from "../assets/mongo_logo.svg"
import mysql from "../assets/mysql_logo.png"
import postgresql from "../assets/postgresql.png"
import git from "../assets/git_logo.png"
import awsec2 from "../assets/awsec2_logo.png"
import docker from "../assets/docker_logo.png"


const Skill = () => {
    return (
    <>
        <div className="mt-12 flex place-content-center text-4xl font-bold text-blue-800">My Skills</div>
        <div className="flex  place-content-center mb-12">
            <div className="parent-skill-div rounded-2xl mt-8 flex place-content-center">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 p-6 w-full gap-5">
                    <div className="child-skill-div rounded-2xl">
                        <div className=" flex place-content-center pt-6 pb-4">
                            <img src={html_logo} className="w-5/6 h-auto"/>
                        </div>
                        <div className=" flex place-content-center text-cyan-400 sm:text-xl md:text-xl lg:text-xl xl:text-xl font-semibold pb-3">HTML5</div>
                    </div>
                    <div className="child-skill-div rounded-2xl">
                        <div className=" flex place-content-center pt-6 pb-4">
                            <img src={css_logo} className="w-5/6 h-auto"/>
                        </div>
                        <div className=" flex place-content-center text-cyan-400 text-xl font-semibold pb-3">CSS</div>
                    </div>
                    <div className="child-skill-div rounded-2xl">
                        <div className=" flex place-content-center pt-6 pb-4">
                            <img src={js_logo} className="w-5/6 h-auto"/>
                        </div>
                        <div className=" flex place-content-center text-cyan-400 text-xl font-semibold pb-3">JavaScript</div>
                    </div>
                    <div className="child-skill-div rounded-2xl">
                        <div className=" flex place-content-center pt-6 pb-4">
                            <img src={python_logo} className="w-5/6 h-auto"/>
                        </div>
                        <div className=" flex place-content-center text-cyan-400 text-xl font-semibold pb-3">Python</div>
                    </div>
                    <div className="child-skill-div rounded-2xl">
                        <div className=" flex place-content-center pt-6 pb-4">
                            <img src={bootstrap} className="w-5/6 h-auto"/>
                        </div>
                        <div className=" flex place-content-center text-cyan-400 text-xl font-semibold pb-3">Bootstrap</div>
                    </div>
                    <div className="child-skill-div rounded-2xl">
                        <div className=" flex place-content-center pt-6 pb-4">
                            <img src={tailwind} className="w-5/6 h-auto"/>
                        </div>
                        <div className=" flex place-content-center text-cyan-400 text-xl font-semibold pb-3">Tailwind CSS</div>
                    </div>
                    <div className="child-skill-div rounded-2xl">
                        <div className=" flex place-content-center pt-6 pb-4">
                            <img src={react_logo} className="w-5/6 h-auto"/>
                        </div>
                        <div className=" flex place-content-center text-cyan-400 text-xl font-semibold pb-3">React.js</div>
                    </div>
                    <div className="child-skill-div rounded-2xl">
                        <div className=" flex place-content-center pt-6 pb-4">
                            <img src={node_logo} className="w-5/6 h-auto"/>
                        </div>
                        <div className=" flex place-content-center text-cyan-400 text-xl font-semibold pb-3">Node.js</div>
                    </div>
                    <div className="child-skill-div rounded-2xl">
                        <div className=" flex place-content-center pt-6 pb-4">
                            <img src={express_logo} className="w-5/6 h-auto"/>
                        </div>
                        <div className=" flex place-content-center text-cyan-400 text-xl font-semibold pb-3">Express.js</div>
                    </div>
                    <div className="child-skill-div rounded-2xl">
                        <div className=" flex place-content-center pt-6 pb-4">
                            <img src={django_logo} className="w-5/6 h-auto"/>
                        </div>
                        <div className=" flex place-content-center text-cyan-400 text-xl font-semibold pb-3">Django</div>
                    </div>
                    <div className="child-skill-div rounded-2xl">
                        <div className=" flex place-content-center pt-6 pb-4">
                            <img src={mongoose_logo} className="w-5/6 h-auto"/>
                        </div>
                        <div className=" flex place-content-center text-cyan-400 text-xl font-semibold pb-3">Mongoose</div>
                    </div>
                    <div className="child-skill-div rounded-2xl">
                        <div className=" flex place-content-center pt-6 pb-4">
                            <img src={mongodb} className="w-5/6 h-auto"/>
                        </div>
                        <div className=" flex place-content-center text-cyan-400 text-xl font-semibold pb-3">MongoDB</div>
                    </div>
                    <div className="child-skill-div rounded-2xl">
                        <div className=" flex place-content-center pt-6 pb-4">
                            <img src={firebase} className="w-5/6 h-auto"/>
                        </div>
                        <div className=" flex place-content-center text-cyan-400 text-xl font-semibold pb-3">Firebase</div>
                    </div>
                    <div className="child-skill-div rounded-2xl">
                        <div className=" flex place-content-center pt-6 pb-4">
                            <img src={mysql} className="w-5/6 h-auto"/>
                        </div>
                        <div className=" flex place-content-center text-cyan-400 text-xl font-semibold pb-3">MySQL</div>
                    </div>
                    <div className="child-skill-div rounded-2xl">
                        <div className=" flex place-content-center pt-6 pb-4">
                            <img src={postgresql} className="w-5/6 h-auto"/>
                        </div>
                        <div className=" flex place-content-center text-cyan-400 text-xl font-semibold pb-3">PostgreSQL</div>
                    </div>
                    <div className="child-skill-div rounded-2xl">
                        <div className=" flex place-content-center pt-6 pb-4">
                            <img src={git} className="w-5/6 h-auto"/>
                        </div>
                        <div className=" flex place-content-center text-cyan-400 text-xl font-semibold pb-3">Git</div>
                    </div>
                    <div className="child-skill-div rounded-2xl">
                        <div className=" flex place-content-center pt-6 pb-4">
                            <img src={awsec2} className="w-5/6 h-auto"/>
                        </div>
                        <div className=" flex place-content-center text-cyan-400 text-xl font-semibold pb-3">AWS EC2</div>
                    </div>
                    <div className="child-skill-div rounded-2xl">
                        <div className=" flex place-content-center pt-6 pb-4">
                            <img src={docker} className="w-5/6 h-auto"/>
                        </div>
                        <div className=" flex place-content-center text-cyan-400 text-xl font-semibold pb-3">Docker</div>
                    </div>

                </div>
            </div>
        </div>
    </>
    );
};

export default Skill;
