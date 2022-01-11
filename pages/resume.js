import Head from "next/head";

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
    <div
      id="resume"
      className="resume resume-background flex flex-row justify-center"
    >
      <div
        className="grid grid-cols-12 min-h-screen"
        style={{ maxWidth: "896px" }}
      >
        <div className="col-span-4 bg-black text-white px-8 py-10 flex flex-col items-end">
          <div className="w-48 text-right">
            <img src="/robert.jpg" alt="Robert van Steen" />
            <div className="mt-4 flex flex-col justify-end">
              <h1 className="inline-block leading-none text-3xl">
                <span className="font-bold">Robert</span> <br />
                van Steen
              </h1>

              {/* Biography */}
              <section className="flex flex-col justify-end">
                <h2 className="text-md font-bold mt-4">Biography</h2>
                <hr className="w-12 border-white self-end mt-1 mb-3 border" />
                <p className="text-sm">
                  I'm a full-stack developer passionate about building accessible
                  products that actually solve problems.
                </p>
              </section>

              {/* Contact */}
              <section className="flex flex-col justify-end">
                <h2 className="text-md font-bold mt-4">Contact</h2>
                <hr className="w-12 border-white self-end mt-1 mb-3 border" />

                <dl className="text-xs">
                  <dt className="font-bold">Location</dt>
                  <dd>Amsterdam</dd>
                  <dt className="font-bold mt-2">Nationality</dt>
                  <dd>Dutch</dd>
                  <dt className="font-bold mt-2">Email</dt>
                  <dd>
                    <a
                      href="mailto:hello@rovansteen.nl"
                      className="hover:underline"
                    >
                      hello@rovansteen.nl
                    </a>
                  </dd>
                  <dt className="font-bold mt-2">Website</dt>
                  <dd>
                    <a href="https://rovansteen.nl" className="hover:underline">
                      rovansteen.nl
                    </a>
                  </dd>
                  <dt className="font-bold mt-2">Github</dt>
                  <dd>
                    <a
                      href="https://github.com/rovansteen"
                      className="hover:underline"
                    >
                      github.com/rovansteen
                    </a>
                  </dd>
                </dl>
              </section>
            </div>
          </div>
        </div>
        <div className="col-span-8 bg-white px-6 py-10">
          {/* Education */}
          <section>
            <h2 className="text-md font-bold">Education</h2>
            <hr className="w-12 bg-black mt-1 mb-3 border border-black" />
            {/* Communication & Multimedia Design */}
            <div className="grid grid-gap-4 grid-cols-8">
              <div className="col-span-5">
                <h3 className="text-sm font-bold">
                  Communication &amp; Multimedia Design
                </h3>
                <div className="text-sm">Hogeschool van Amsterdam</div>
              </div>
              <div className="col-span-3 text-right">
                <div className="text-xs opacity-50">2012-2018</div>
              </div>
            </div>
          </section>

          {/* Internships */}
          <section className="mt-10">
            <h2 className="text-md font-bold">Internships</h2>
            <hr className="w-12 bg-black mt-1 mb-3 border border-black" />
            {/* Studio Stomp */}
            <div className="space-y-6">
              <div>
                <div className="grid grid-gap-4 grid-cols-8">
                  <div className="col-span-5">
                    <h3 className="text-sm font-bold">Studio Stomp</h3>
                    <div className="text-sm">Web Developer</div>
                  </div>
                  <div className="col-span-3 text-right">
                    <div className="text-xs opacity-50">
                      April 2014 - July 2016
                    </div>
                  </div>
                </div>
                <p className="text-xs mt-4">
                  Worked as a web developer on a WordPress/JavaScript project.
                </p>
              </div>

              {/* Scrn */}
              <div>
                <div className="grid grid-gap-4 grid-cols-8">
                  <div className="col-span-4">
                    <h3 className="text-sm font-bold">Scrn</h3>
                    <div className="text-sm">Front-end Developer</div>
                  </div>
                  <div className="col-span-4 text-right">
                    <div className="text-xs opacity-50">
                      September 2017 - January 2017
                    </div>
                  </div>
                </div>
                <p className="text-xs mt-4">
                  Worked on rebuilding the official website of the Eurovision Song
                  Contest with Laravel and React by exchanging data through
                  GraphQL.
                </p>
              </div>
            </div>
          </section>

          {/* Work */}
          <section className="mt-10">
            <h2 className="text-md font-bold">Work</h2>
            <hr className="w-12 bg-black mt-1 mb-3 border border-black" />
            <div className="space-y-6">
              {/* Peakfijn */}
              <div>
                <div className="grid grid-gap-4 grid-cols-8">
                  <div className="col-span-4">
                    <h3 className="text-sm font-bold">Peakfijn</h3>
                    <div className="text-sm">Full-stack developer</div>
                  </div>
                  <div className="col-span-4 text-right">
                    <div className="text-xs opacity-50">
                      October 2014 - January 2016
                    </div>
                  </div>
                </div>
                <p className="text-xs mt-4">
                  Worked as full stack developer on projects for various clients
                  including Unilever, Oaky, and Kilroy. <br />
                  Used techniques: JavaScript, PHP, Backbone, React, Redux,
                  Laravel, MySQL, Rest API.
                </p>
              </div>

              {/* Scrn */}
              <div>
                <div className="grid grid-gap-4 grid-cols-8">
                  <div className="col-span-5">
                    <h3 className="text-sm font-bold">Scrn</h3>
                    <div className="text-sm">Lead Developer</div>
                  </div>
                  <div className="col-span-3 text-right">
                    <div className="text-xs opacity-50">
                      July 2016 - July 2020
                    </div>
                  </div>
                </div>
                <p className="text-xs mt-4">
                  Developed the official website and intranet of the Eurovision
                  Song Contest. Designed and developed Accredion, a SaaS for
                  events to manage access and accreditation. <br />
                  Used techniques: JavaScript, PHP, Laravel, PostgreSQL, GraphQL,
                  TypeScript, React.
                </p>
              </div>

              {/* Passionate People */}
              <div>
                <div className="grid grid-gap-4 grid-cols-8">
                  <div className="col-span-5">
                    <h3 className="text-sm font-bold">Passionate People</h3>
                    <div className="text-sm">Senior Full Stack Consultant</div>
                  </div>
                  <div className="col-span-3 text-right">
                    <div className="text-xs opacity-50">
                      August 2020 - current
                    </div>
                  </div>
                </div>
                <p className="text-xs mt-4">
                  Working as a senior full stack consultant giving consultancy and helping out companies solve complex technical solutions.
                </p>
              </div>

              {/* Rodeo */}
              <div>
                <div className="grid grid-gap-4 grid-cols-8">
                  <div className="col-span-5">
                    <h3 className="text-sm font-bold">Rodeo</h3>
                    <div className="text-sm">Senior Full Stack Engineer</div>
                  </div>
                  <div className="col-span-3 text-right">
                    <div className="text-xs opacity-50">
                      August 2020 - current
                    </div>
                  </div>
                </div>
                <p className="text-xs mt-4">
                  Working on Rodeo: a project management tool. Used techniques: NodeJS, React, MongoDB, Postgres.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-md font-bold">Languages</h2>
            <hr className="w-12 bg-black mt-1 mb-3 border border-black" />
            <ul className="space-y-1 text-sm">
              <li>Dutch - Native</li>
              <li>English - Working Professional</li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-md font-bold">Skills & techniques</h2>
            <hr className="w-12 bg-black mt-1 mb-3 border border-black" />
            <ul className="flex flex-wrap -m-1 text-xs">
              <li className="m-1">JavaScript</li>
              <li className="m-1">TypeScript</li>
              <li className="m-1">PHP</li>
              <li className="m-1">Node.js</li>
              <li className="m-1">React</li>
              <li className="m-1">Redux</li>
              <li className="m-1">Apollo</li>
              <li className="m-1">Next.js</li>
              <li className="m-1">CSS</li>
              <li className="m-1">PostCSS/Sass</li>
              <li className="m-1">Laravel</li>
              <li className="m-1">MySQL/PostgreSQL</li>
              <li className="m-1">GraphQL</li>
              <li className="m-1">Git</li>
              <li className="m-1">TDD</li>
              <li className="m-1">DDD</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </>
);
