import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

interface HomeInfoProps {
    currentStage: number | string;
}

const HomeInfo = ({ currentStage }: HomeInfoProps) => {

    if(currentStage === 1) {
        return (
            <>
                <h1 
                    className="sm:text-xl sm:leading-snug text-center 
                    neo-brutalism-blue py-4 px-8 text-white mx-5"
                >
                    Hi, I'm
                    <span className="font-semibold mx-2 text-white">
                        DevAnonitos
                    </span>
                    👋
                    <br />
                    A Software Engineer | AI Engineer from VietNam
                </h1>
            </>
        );
    }

    if(currentStage === 2){
        return (
            <>
                <div className="info-box">
                    <p className="font-medium sm:text-xl text-center">
                        I'm student in Open University <br/> and My Major is Computer Science
                    </p>

                    <Link to="/about" className="neo-brutalism-white neo-btn">
                        LearnMore
                        <img src={arrow} alt="Arrow"  className="w-4 h-4 object-contain" />
                    </Link>
                </div>
            </>
        );
    }

    if(currentStage === 3){
        return (
            <>
                <div className="info-box">
                    <p className="font-medium text-center sm:text-xl">
                        Love Coding and thinking about algorithms  <br/>  Curious about the impact?
                    </p>

                    <Link to="/projects" className="neo-brutalism-white neo-btn">
                        Visit My Portfolio
                        <img src={arrow} alt="Arrow"  className="w-4 h-4 object-contain" />
                    </Link>
                </div>
            </>
        );
    }

    if(currentStage === 4){
        return (
            <>
                <div className="info-box">
                    <p className="font-medium text-center sm:text-xl">
                        Need a project done or looking for a dev? <br/> I'm just a few keystrokes away
                    </p>

                    <Link to="/contact" className="neo-brutalism-white neo-btn">
                        Contact Me
                        <img src={arrow} alt="Arrow"  className="w-4 h-4 object-contain" />
                    </Link>
                </div>
            </>
        );
    }
};

export default HomeInfo;