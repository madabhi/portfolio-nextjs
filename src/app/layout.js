import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar/NavBar";
import Footer from "@/components/Footer";
import { SessionProvider } from "next-auth/react";
import { SkeletonTheme } from "react-loading-skeleton";
const mont = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Abhinav Singh",
    template: "%s | Abhinav Singh",
  },
  description:
    "Welcome to my digital space! I am Abhinav Singh, a passionate and innovative Computer Science and Engineering student at Sagar Institute of Science and Technology, Bhopal. As a Google Cloud Career Practitioner Facilitator and leader of the dynamic 'Ikshana' team in my college, I am deeply immersed in organizing and participating in technical events. My keen interest lies in the realms of web development and cloud computing. Explore my portfolio to witness my journey, projects, and the impact I strive to make in the ever-evolving world of technology. Join me as I embrace the exciting intersection of creativity and code!",
};

export default function RootLayout({
  children,
  params: { session, ...params },
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="3_yA6g383IuLb_Bba-sY9baBcWxPG4G8kdqK7mqr4Bc"
        />
        <meta
          name="keywords"
          content="Abhinav Singh, Abhinav Singh SISTec, Abhinav Singh Bhopal, Abhinav Singh Gandhidham, SISTec, Bhopal, Sagar Institute of Science and Technology, Blogs, Abhinav Singh Student, alphaabhi.in, madabhi"
        />
      </head>
      <body
        className={`flex max-w-screen-xl md:mx-auto flex-col min-h-screen justify-between  ${mont.className}`}
      >
        <SkeletonTheme color="##f0eded" highlightColor="#dedcde">
            <NavBar />
            <div className="flex-grow">{children}</div>
          <Footer />
        </SkeletonTheme>
      </body>
    </html>
  );
}
