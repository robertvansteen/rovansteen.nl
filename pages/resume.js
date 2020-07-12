export default () => (
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
                <dt className="font-bold mt-2">Phone</dt>
                <dd>
                  <a href="tel:+31653265684">+31653265684</a>
                </dd>
                <dt className="font-bold mt-2">Email</dt>
                <dd>
                  <a href="mailto:hello@rovansteen.nl">hello@rovansteen.nl</a>
                </dd>
                <dt className="font-bold mt-2">Website</dt>
                <dd>
                  <a href="https://rovansteen.nl">rovansteen.nl</a>
                </dd>
                <dt className="font-bold mt-2">Github</dt>
                <dd>
                  <a href="https://github.com/rovansteen">
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
              <div className="text-sm opacity-50">2012-2017</div>
            </div>
          </div>
        </section>

        {/* Work */}
        <section class="mt-12">
          <h2 className="text-md font-bold">Work</h2>
          <hr className="w-12 bg-black mt-1 mb-3 border border-black" />
          {/* Peakfijn */}
          <div>
            <div class="grid grid-gap-4 grid-cols-8">
              <div className="col-span-5">
                <h3 className="text-sm font-bold">Peakfijn</h3>
                <div className="text-sm">Full-stack developer</div>
              </div>
              <div className="col-span-3 text-right">
                <div className="text-sm opacity-50">
                  October 2014 - January 2016
                </div>
              </div>
            </div>
            <p class="text-sm mt-4">
              Worked as full stack developer on projects for various clients
              including Unilever, Oaky and Kilroy.
            </p>
          </div>

          {/* Scrn */}
          <div>
            <div class="grid grid-gap-4 grid-cols-8 mt-6">
              <div className="col-span-5">
                <h3 className="text-sm font-bold">Scrn</h3>
                <div className="text-sm">Lead Developer</div>
              </div>
              <div className="col-span-3 text-right">
                <div className="text-sm opacity-50">July 2016 - July 2020</div>
              </div>
            </div>
            <p class="text-sm mt-4">
              Developed the official website and intranet of the Eurovision Song
              Contest. Designed and developed Accredion, a SaaS for events to
              manage their accreditations. Used techniques: Laravel, PostgreSQL,
              GraphQL, TypeScript, React.
            </p>
          </div>
        </section>
      </div>
    </div>
  </div>
);
