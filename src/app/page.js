import { Montserrat } from "next/font/google"
import NavBar from '@/components/Navbar/NavBar'
import Image from "next/image"
import Layout from "@/components/Layout"
import AnimatedText from "@/components/AnimatedText/AnimatedText"
import { OpenLinkIcon } from "@/components/Icons/Icons"
import Link from "next/link"

const mont = Montserrat({
  subsets: ['latin'],
  variable: "--font-mont"
})

export default function Home() {
  return (
    <>
      <div className={`${mont.variable} font-mont bg-light w-full h-full`}>

        <main className="flex item-center text-dark w-full h-full">

          <Layout className="pt-0">
            <div className=" flex w-full items-center justify-center ">
              <div className="w-1/2">
                <Image src="/images/profile.png" width={600} height={600} />
              </div>
              <div className="w-1/2 pr-8">

                <AnimatedText title={"Hey, I'm Abhinav"} className="text-[100px] font-[900]" />
                <p className="font-[400] text-[16px]">As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.</p>
                <div className="mt-[100px] flex justify-left items-center ">
                  <button className=" bg-dark text-light w-40 h-12 rounded-lg text-xl flex justify-center items-center ">Resume <span><OpenLinkIcon className="text-white ml-2" width={20} fill={"white"} /></span>
                  </button>
                  <Link href="/contact" className="ml-8 text-lg underline font-[500]">Contact</Link>

                </div>
              </div>


            </div>
          </Layout>
        </main >

      </div >
    </>
  )
}
