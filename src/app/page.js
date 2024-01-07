import { Montserrat } from "next/font/google";
import NavBar from "@/components/Navbar/NavBar";
import Image from "next/image";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText/AnimatedText";
import { OpenLinkIcon } from "@/components/Icons/Icons";
import Link from "next/link";

const mont = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function Home() {
  return (
    <>
      <div
        className={`${mont.variable} font-mont w-full h-full md:h-screen overflow-hidden`}
      >
        <main className="flex flex-col-reverse md:flex-row items-center text-dark w-full h-full">
          <Layout className="pt-0 md:pt-0 !p-2 !bg-transparent">
            <div className="flex flex-col md:flex-row w-full items-center justify-between">
              <div className="w-full md:w-1/2 order-3 md:order-1 ">
                <AnimatedText
                  title={"Hey, I'm Abhinav"}
                  className="text-xl md:text-[100px] font-[900]"
                />
                <p className="font-[400] text-[16px]">
                  As a skilled full-stack developer, I am dedicated to turning
                  ideas into innovative web applications. Explore my latest
                  projects and articles, showcasing my expertise in React.js and
                  web development.
                </p>
                <div className="mt-4 md:mt-[100px] flex flex-col md:flex-row  items-center">
                  <a
                    href="https://linkedin.com/in/madabhi"
                    className=" w-full md:w-auto"
                  >
                    <button className="bg-dark text-light w-full md:w-40 h-12 rounded-lg text-xl mb-4 md:mb-0 md:mr-4 flex justify-center items-center">
                      Connect
                      <span>
                        <OpenLinkIcon
                          className="text-white ml-2"
                          width={20}
                          fill={"white"}
                        />
                      </span>
                    </button>
                  </a>
                  <a
                    href="mailto:abhinavas430@gmail.com"
                    className="text-lg underline font-[500]"
                  >
                    Contact
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/2 order-2">
                <Image
                  src="/images/profile.png"
                  width={600}
                  height={600}
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </Layout>
        </main>
      </div>
    </>
  );
}
