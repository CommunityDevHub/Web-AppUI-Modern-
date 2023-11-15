import { Link } from "react-router-dom";
import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Project = () => {
    return (
        <>
            <section className="max-container">
                <h1 className="head-text"> 
                    My{" "}
                    <span className='blue-gradient_text drop-shadow font-semibold'>
                        Projects
                    </span>
                </h1>

                <p className='text-slate-500 mt-2 leading-relaxed'>
                    My main major is Computer Science in Open University, but these are
                    the ones I hold closest to my heart. To learn Fullstack developer, to build some mini projects.
                </p>

                <div className="flex flex-wrap my-20 gap-16">
                    {projects.map((project) => (
                        <>
                            <div className="lg:w-[400px] w-full" key={project.name}>
                                <div className="block-container w-12 h-12">
                                    <div className={`btn-back rounded-xl ${project.theme}`} />
                                    <div className="btn-font rounded-xl flex justify-center items-center">
                                        <img
                                            src={project.iconUrl}
                                            alt='threads'
                                            className='w-1/2 h-1/2 object-contain flex items-center justify-center'
                                        />
                                    </div>  
                                </div>


                                <div className="mt-5 flex flex-col">
                                    <h4 className="text-2xl font-poppins font-semibold">
                                        {project.name}
                                    </h4>
                                    <p className="mt-2 text-slate-500">
                                        {project.description}
                                    </p>

                                    <div className='mt-5 flex items-center gap-2 font-poppins'>
                                        <Link
                                            to={project.link}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='font-semibold text-blue-600'
                                        >
                                            Live Link
                                        </Link>
                                        <img
                                            src={arrow}
                                            alt='arrow'
                                            className='w-4 h-4 object-contain'
                                        />
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Project;