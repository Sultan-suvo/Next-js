import React from 'react';
import Image from 'next/image';
import image from '../../../public/image.jpg'

const page = () => {
    return (
        <div>
            <Image src={image} height={200}/>
        </div>
    );
};

export default page;