import Head from "next/head";
import MailIcon from "../components/icons/mail";
import GithubIcon from "../components/icons/github";
import AccredionIcon from "../components/icons/accredion";

export default () => (
  <>
    <Head>
      <title>Robert van Steen</title>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
    </Head>
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl relative flex w-full">
        <div>
          <h1 className="clip-background text-3xl leading-normal font-bold text-left">
            <span className="clip-background-revert text-black dark:text-white mr-4 inline-block">
              👋🏻
            </span>
            Hey, I'm{" "}
            <span className="clip-background-revert text-black dark:text-white">
              Robert
            </span>
            <br />
            Product developer in Amsterdam
          </h1>
          <p className="text-2xl mt-6">
            I'm passionate about building accessible products that actually
            solve problems.
          </p>
          <div className="bg-accredion text-white p-4 mt-12 rounded-md inline-block cursor-default">
            <div className="flex items-center">
              <AccredionIcon />
              <p className="text-lg ml-4">Currently working on Accredion</p>
            </div>
          </div>
          {/* Mail */}
          <div className="mt-8">
            <a
              href="mailto:hello@rovansteen.nl"
              className=" flex items-center hover:underline"
            >
              <MailIcon height={20} width={20} />
              <span className="inline-block ml-2">hello@rovansteen.nl</span>
            </a>
          </div>
          {/* Github */}
          <div className="mt-2">
            <a
              href="https://github.com/rovansteen"
              className=" flex items-center hover:underline"
            >
              <GithubIcon height={20} width={20} />
              <span className="inline-block ml-2">rovansteen</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </>
);
