"use client"
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

const Logo = () => {
    return (
        <div className='flex items-center justify-center mt-2 '>
            <MotionLink className='w-16 h-16 bg-dark text-light flex justify-center items-center rounded-xl text-3xl font-bold' href='/'
                whileHover={{
                    backgroundColor: ['#121212', '#f00', '#0f0', '#00f', '#ff0', '#0ff'],
                    transition: {
                        duration: 2,
                        repeat: Infinity
                    }
                }}
            >
                AS
            </MotionLink>
        </div>
    );
}

export default Logo;
