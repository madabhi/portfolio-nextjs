"use client"
import Link from 'next/link'
import React from 'react'
import Logo from '../Logo/Logo'
import { useRouter } from 'next/navigation'
import { InstaIcon, GithubIcon, LinkedinIcon } from '../Icons/Icons'
import { motion } from 'framer-motion'

const MeriLink = ({ href, title, className = "" }) => {
    const router = useRouter()

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </Link>
    )
}

const NavBar = () => {
    return (
        <header className='w-full px-32 font-medium flex items-center  justify-between'>
            <nav>
                < MeriLink href='/' className='mr-4' title="Home" />
                < MeriLink href='/about' className='mx-4' title="About" />
                < MeriLink href='/projects' className='mx-4' title="Projects" />
                < MeriLink href='/articles' className='ml-4' title="Articles" />
            </nav>
            <h2>
                <Logo /></h2>
            <nav className='flex flex-wrap'>
                <motion.a href='https://instagram.com/alphaabhi.in' target={"_blank"} whileHover={{ y: -2}} whileTap={{scale:.8}}  className='mr-2' > <InstaIcon className="h-8 " /></motion.a>
                <motion.a href='https://github.com/madabhi' target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: .8 }} className='mx-2' ><GithubIcon className="h-8 " /> </motion.a>
                <motion.a href='https://linkedin.com/in/madabhi' target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: .8 }} className='ml-2' ><LinkedinIcon className="h-8 " /> </motion.a>
            </nav>
        </header>
    )
}

export default NavBar