import { CTA } from "../components";
import { skills, experiences } from "../constants";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
    return (
        <>
            <section className="max-container">
                <h1 className="head-text">
                    Hello, I'm{" "}
                    <span className="blue-gradient_text font-semibold drop-shadow">
                        {" "}
                        DevAnonitos
                    </span>{" "}
                    👋
                </h1>

                <div className="mt-5 flex flex-col gap-3 text-slate-500">
                    <p>
                        Fullstack Dev based in VietNam, try learning Fullstack App to build FrontEnd App and Backend Server.
                    </p>
                </div>

                <div className="mt-5 py-10 flex flex-col border-t-[1px]">
                    <h3 className="subhead-text">My Skills</h3>

                    <div className="mt-16 flex flex-wrap gap-12">
                        {skills.map((skill) => (
                            <>
                                <div 
                                    className="block-container w-20 h-20" 
                                    key={skill.name}
                                >
                                    <div className='btn-back rounded-xl' />
                                    <div className='btn-front rounded-xl flex justify-center items-center cursor-pointer'>
                                        <img
                                            src={skill.imageUrl}
                                            alt={skill.name}
                                            className='w-1/2 h-1/2 object-contain'
                                        />
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;