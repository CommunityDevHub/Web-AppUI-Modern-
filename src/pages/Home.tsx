import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useRef, useState } from 'react';

import sakura from "../assets/sakura.mp3";
import { HomeInfo, Loader } from '../components';
import { soundoff, soundon } from '../assets/icons';

const Home = () => {
    return (
        <>
            <section className='w-full h-screen relative'>
                <div 
                    className='absolute top-28 left-0 right-0 z-10 
                    flex items-center justify-center'
                >

                </div>
            </section>
        </>
    );
};

export default Home;