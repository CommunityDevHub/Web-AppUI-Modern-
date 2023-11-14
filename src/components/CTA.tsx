import { Link } from "react-router-dom";

const CTA = () => {
    return (
        <>
            <section className="cta">
                <p className="cta-text">
                    Have a project in mind? <br className='sm:block hidden' />
                    Let’s build something together!
                </p>
                <Link 
                    to='/contact' 
                    className='btn hover:scale-125 transition-all duration-300'>
                    Contact Me now
                </Link>
            </section>
        </>
    );
};

export default CTA;