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

                <div className="py-16 mt-5 border-t-[1px]">
                    <div className="subhead-text">
                        Work Experiences
                    </div>
                    <div className='mt-5 flex flex-col gap-3 text-slate-500'>
                        <p>
                            Build some mini projects, leveling up my skills everyday and do paper research about Detection Object
                        </p>
                    </div>

                    <div className='mt-12 flex'>
                        <VerticalTimeline>
                            {experiences.map((experience) => (
                                <VerticalTimelineElement
                                    key={experience.company_name}
                                    date={experience.date}
                                    iconStyle={{ background: experience.iconBg }}
                                    icon={
                                        <div className='flex justify-center items-center w-full h-full cursor-pointer border-4 rounded-full'>
                                            <img
                                                src={experience.icon}
                                                alt={experience.company_name}
                                                className='w-[60%] h-[60%] object-contain'
                                            />
                                        </div>
                                    }
                                    contentStyle={{
                                        borderBottom: "8px",
                                        borderStyle: "solid",
                                        borderBottomColor: experience.iconBg,
                                        boxShadow: "none",
                                    }}
                                >
                                    <div className="border-2 p-4 rounded-xl">
                                        <h3 className='text-black text-xl font-poppins font-semibold'>
                                            {experience.title}
                                        </h3>
                                        <p
                                            className='text-black-500 font-medium text-base'
                                            style={{ margin: 0 }}
                                        >
                                            {experience.company_name}
                                        </p>
                                    </div>

                                    <ul className='my-5 list-disc ml-5 space-y-2'>
                                        {experience.points.map((point, index) => (
                                            <li
                                                key={`experience-point-${index}`}
                                                className='text-black-500/50 font-normal pl-1 text-sm'
                                            >
                                            {point}
                                            </li>
                                        ))}
                                    </ul>
                                </VerticalTimelineElement>
                            ))}
                        </VerticalTimeline>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;