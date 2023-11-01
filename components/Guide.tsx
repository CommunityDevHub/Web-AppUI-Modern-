import React from 'react';
import Image from 'next/image';

const Guide = () => {
    return (
        <>
            <section className='flexCenter flex-col'>
                <div className='padding-container max-container w-full pb-24'>
                    <Image
                        src="/camp.svg"
                        alt='Camp'
                        width={50}
                        height={50}
                    />
                </div>
            </section>
        </>
    );
};

export default Guide;