import { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import emailjs from "@emailjs/browser";

import useAlert from "../hooks/useAlert";
import { Loader, Alert } from "../components";
import { Fox } from "../models";
const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <section className="relative flex lg:flex-row max-container">
                {/* Use ALert */}

                <div className="flex-1 min-w-[50%] flex flex-col">
                    <h1 className="head-text">Get in touch</h1>

                    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-7 mt-14">
                        <label className="text-black-500 font-semibold">
                            Name
                            <input 
                                type="text"
                                name="name"
                                className="input"
                                placeholder="DevAnonitos"
                                required
                            />
                        </label>
                        <label className="text-black-500 font-semibold">
                            Email
                            <input 
                                type="email"
                                name="email"
                                className="input"
                                placeholder="DevAnonitos@gmail.com"
                                required
                            />
                        </label>
                        <label className="text-black-500 font-semibold">
                            Your Message
                            <textarea
                                name="message"
                                className="textarea"
                                placeholder="Write your contact here..."
                                required
                            />
                        </label>
                        
                        <button
                            type="submit"
                            disabled
                            className="btn cursor-pointer"

                        >
                            Submit
                        </button>
                    </form>
                </div>

                <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
                    <Canvas
                        camera={{
                            position: [0, 0, 5],
                            fov: 75,
                            near: 0.1,
                            far: 1000,
                        }}
                    >
                        <directionalLight 
                            position={[0, 0, 1]} 
                            intensity={2.5} 
                        />
                        <ambientLight 
                            intensity={1} 
                        />
                        <pointLight 
                            position={[5, 10, 0]} 
                            intensity={2} 
                        />
                        <spotLight
                            position={[10, 10, 10]}
                            angle={0.15}
                            penumbra={1}
                            intensity={2}
                        />
                        <Suspense fallback={<Loader />}>
                            
                        </Suspense>
                    </Canvas>
                </div>
            </section>
        </>
    );
};

export default Contact;