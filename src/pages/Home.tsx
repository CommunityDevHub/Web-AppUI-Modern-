import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useRef, useState } from 'react';

import sakura from "../assets/sakura.mp3";
import { HomeInfo, Loader } from '../components';
import { soundoff, soundon } from '../assets/icons';

const Home = () => {

    const [isRotating, setIsRotating] = useState(false);

    return (
        <>
            <section className='w-full h-screen relative'>
                <div 
                    className='absolute top-28 left-0 right-0 z-10 
                    flex items-center justify-center'
                >
                    
                </div>

                <Canvas 
                    className={`w-full h-screen bg-transparent ${
                        isRotating ? "cursor-grabbing" : "cursor-grab"
                    }`}
                    camera={{ near: 0.1, far: 1000 }}
                >
                    <Suspense fallback={<Loader />}>
                        
                    </Suspense>
                </Canvas>
            </section>
        </>
    );
};

export default Home;