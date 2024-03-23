import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar/NavBar";
import Footer from "@/components/Footer";
import { SkeletonTheme } from "react-loading-skeleton";
import { siteMetaData } from "@/utils/siteMetaData";
const mont = Montserrat({ subsets: ["latin"], display: "swap" });

export const metadata = {
  metadataBase: new URL(siteMetaData.siteUrl),
  title: {
    default: siteMetaData.title,
    template: `%s | ${siteMetaData.title}`,
  },
  description: {
    default: siteMetaData.description,
    template: `%s`,
  },
  keywords: siteMetaData.keywords,
  language: siteMetaData.language,
  openGraph: {
    type: "website",
    locale: siteMetaData.locale,
    url: siteMetaData.siteUrl,
    title: siteMetaData.title,
    description: {
      default: siteMetaData.description,
      template: `%s`,
    },
    image: siteMetaData.socialBanner,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  appLinks: {
    web: siteMetaData.siteUrl,
  },
  author: {
    name: siteMetaData.author,
    email: siteMetaData.email,
  },
  social: {
    instagram: siteMetaData.instagram,
    linkedin: siteMetaData.linkedin,
    github: siteMetaData.github,
  },
  creator: "Abhinav Singh",
  theme: siteMetaData.theme,
  favicon: siteMetaData.favicon,
  publisher: "Abhinav Singh",
  applicationName: siteMetaData.title,
  canonical: siteMetaData.siteUrl,
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
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-T1J87S39TL"
        ></script>
        <script defer>
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-T1J87S39TL');
        </script>
      </body>
    </html>
  );
}
