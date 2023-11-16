import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useRef, useState } from 'react';

import sakura from "../assets/sakura.mp3";
import { HomeInfo, Loader } from '../components';
import { soundoff, soundon } from '../assets/icons';
import { Bird, Island, Plane, Sky } from "../models";
import { HemisphereLightProps } from '@react-three/fiber';

const hemisphereLightProps: HemisphereLightProps = {
    groundColor: '#000000',
    intensity: 1,
};

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
                        <directionalLight position={[1, 1, 1]} intensity={2} />
                            <ambientLight intensity={0.5} />
                            <pointLight position={[10, 5, 10]} intensity={2} />
                            <spotLight
                                position={[0, 50, 10]}
                                angle={0.15}
                                penumbra={1}
                                intensity={2}
                            />

                                <hemisphereLight {...hemisphereLightProps} />
                            <Bird />
                    </Suspense>
                </Canvas>
            </section>
        </>
    );
};

export default Home;