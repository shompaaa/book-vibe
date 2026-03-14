import React from 'react';
import bannerImage from '../../assets/images/hero_img.jpg'

const Banner = () => {
    return (
        <div className='flex justify-around items-center bg-gray-100 mt-12 mb-24 rounded-xl p-12'>
            <div className='ml-32'>
                <h1 className='text-5xl/20 font-bold mb-10'>Books to freshen up your bookshelf</h1>
                <button className=' font-bold text-white px-7 py-4 bg-[#23BE0A] rounded-xl'>View The List</button>
            </div>
            <div className='mr-28'>
                <img className='h-96 w-80' src={bannerImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;