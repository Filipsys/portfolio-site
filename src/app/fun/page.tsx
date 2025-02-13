import Layout from "@/app/layout";

export default function Fun() {
  return (
    <Layout>
      <main
        className="text-white w-full"
        id="hover-div"
        style={{
          backgroundImage: "url(/background3.webp)",
          backgroundSize: "10vw 10vw",
        }}
      >
        <div className="h-full w-2/3 px-4">
          <div className="w-full flex justify-center">
            <div
              className="h-32 w-32"
              style={{
                backgroundImage: "url(./campfire.gif)",
                backgroundSize: "150px",
              }}
            />
          </div>
        </div>

        <div className="bg-zinc-950 [font-family:serif] flex flex-col h-full justify-center lg:mx-40 lg:flex xl:mx-80 2xl:mx-80 [box-shadow:_0px_0px_50px_30px_rgba(0,_0,_0,_1)]">
          <div
            className="w-full h-24 mb-12"
            style={{
              backgroundImage: "url(./sparkles.gif)",
              backgroundSize: "12vw",
              backgroundRepeat: "10",
            }}
          />

          <main id="main" className="w-full h-dvh flex flex-row">
            <div className="h-full w-1/3 gap-4 flex flex-col">
              <div>
                <p>
                  Welcome to my hidden part of the internet. You have been through a lot, take a rest, relax, sip some
                  coffee and sit down next to the campfire. Don&apos;t worry, it won&apos;t bite :)
                </p>

                <div className="w-full h-[1px] bg-white/20 my-4" />

                <div className="w-full flex justify-center">
                  <p className="text-3xl text-red-700 text-center">About Me Section</p>
                </div>

                <div className="w-full h-[1px] bg-white/20 my-4" />

                <div className="px-2 py-6">
                  Hi, I&apos;m Filip, also known as filyys or Filipsys. I&apos;m a self-taught front-end developer from
                  Poland. I mainly work with React, NextJS, TailwindCSS, TypeScript, and relational databases like
                  SQLite.
                </div>

                <div className="z-50 px-2">
                  <div className="w-full h-[1px] bg-white/20 my-4" />

                  <div className="flex justify-center">
                    <h2 className="text-3xl text-red-700 text-center">Tech I Know and Use on a Daily Basis</h2>
                  </div>
                  <div className="w-full h-[1px] bg-white/20 my-4" />

                  <ul className="list-disc w-full gap-3 text-white">
                    <li>
                      <p className="text-xl italic">TypeScript</p>
                      <p>
                        I use TypeScript in my code because it makes me more productive, I can spend more time writing
                        code and not worrying about wrong data getting into a function without any errors. I think it is
                        a better JavaScript which brings back the old days of static types.
                      </p>
                    </li>
                    <li>
                      <p className="text-xl italic">TailwindCSS</p>
                      <p>
                        Hated by many, liked by others. I use tailwind because it breaks the need of switching between
                        files to change CSS, removes the need for naming classes and makes my code cleaner. It is pretty
                        easy to learn once you have a good foundation in vanilla CSS and want to try out something
                        fresh.
                      </p>
                    </li>
                    <li>
                      <p className="text-xl italic">Vercel</p>
                      <p>
                        I like Vercel because they have a pretty generous free tier for their hosting. I can host my
                        personal projects on vercel pretty easily by connecting to my GitHub repository and sharing my
                        projects to the other sides of our globe!
                      </p>
                    </li>
                    <li>
                      <p className="text-xl italic">Bun</p>
                      <p>
                        Easy to use, all-in-one JavaScript toolbox. I love it because it can save a ton of time when
                        configuring projects. It supports stuff like TypeScript out of the box so you don&apos;t need to
                        fret about unnecessary problems. It&apos;s really fast and fits my needs as well. As a good
                        alternative to Bun I also like to use{" "}
                        <a className="text-blue-400 underline" target="_blank" href="https://pnpm.io/">
                          pnpm
                        </a>
                        .
                      </p>
                    </li>
                    <li>
                      <p className="text-xl italic">React</p>
                      <p>
                        React is a widely known JavaScript library which provides developers with many useful features
                        such as creating components allowing for reusable pieces of code. When working with React, I
                        also use{" "}
                        <a
                          className="text-blue-400 underline"
                          target="_blank"
                          href="https://www.npmjs.com/package/react-dom"
                        >
                          React-dom
                        </a>
                        , which allows for working with websites like this one :)
                      </p>
                    </li>
                    <li>
                      <p className="text-xl italic">SQLite</p>
                      <p>
                        SQLite, (pronounced SEQUEL-ite) is a really simple and lightweight database that can hold all my
                        data storage needs, I&apos;ve never had any issues with it or any slow queries which makes it
                        perfect for my needs. It also allows for in-memory databases which are perfect for temporarily
                        saving data which gets wiped on process kill.
                      </p>
                    </li>
                    <li>
                      <p className="text-xl italic">Vite</p>
                      <p>
                        Vite is the perfect build tool for me. It is easy to configure, lightweight, supports plugins in
                        a simple and easy to grasp way. It is loved by many, as a saviour from needing to work with
                        Webpack. I also plan on using{" "}
                        <a className="text-blue-400 underline" target="_blank" href="https://rspack.dev/">
                          rspack
                        </a>{" "}
                        more often as it is <i>even</i> more lightweight and performant than Vite, not as widely known
                        yet as it&apos;s pretty new.
                      </p>
                    </li>
                    <li>
                      <p className="text-xl italic">Next.js</p>
                      <p>
                        Really powerful JavaScript framework with a pretty tricky learning curve, works perfectly with
                        Vercel hosting and{" "}
                        <a className="text-blue-400 underline" target="_blank" href="https://turbo.build/">
                          Turbopack
                        </a>{" "}
                        (also from Vercel). I use Next.js whenever I need something more complex than something I would
                        normally use Vite for. It has great server/client components which can be a bit weird to
                        understand at first. Try adding a server component inside a client component!
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border-4 border-red-500 shadow-lg shadow-red-500">
                <h2 className="text-5xl text-red-500">Links to my socials</h2>

                <ol className="px-2 *:mb-2">
                  <li>
                    <div className="group/github z-50 transition-colors duration-0 border-2 border-red-500 hover:animate-spin hover:border-dashed hover:border-white hover:text-white/50">
                      <a href="https://github.com/Filipsys" target="_blank">
                        github.com/Filipsys
                      </a>
                      <p className="italic">Github</p>
                    </div>
                  </li>

                  <li>
                    <div className="group/linkedin py-1 transition-colors duration-0 border-2 border-red-500 hover:border-dashed hover:animate-spin hover:rotate-180 hover:border-white hover:text-[#0A66C2]">
                      <a href="https://linkedin.com/in/filipsysak" target="_blank">
                        linkedin.com/in/filipsysak
                      </a>
                      <p className="italic">LinkedIn</p>
                    </div>
                  </li>

                  <li>
                    <div className="group/email transition-colors duration-0 border-2 border-red-500 hover:border-dashed hover:border-white hover:animate-bounce hover:text-[#EA4335]">
                      <a href="mailto:quietus.fits_0p@icloud.com">quietus.fits_0p@icloud.com</a>
                      <p className="italic">Email</p>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="border-4 border-red-500 shadow-lg shadow-red-500">
                <h2 className="text-5xl text-red-500">Latest blog posts :)</h2>

                <ol className="list-decimal px-6">
                  <li>How does Next.js caching work? Why was it reworked?</li>
                  <li>Encrypted images & why/they don&apos;t work well.</li>
                  <li>The fl\ood of JavaSc%ipt frameworks, will it gg%et any %etter?</li>
                  <li>
                    C vs-@C++ a%. th<span className="line-through">e ol@d Jav/Sc</span>ri]]]]tvs
                    <span className="line-through">..,</span>5T5peScr%pt.
                  </li>
                </ol>
              </div>

              <div className="flex flex-col gap-8">
                <div className="w-2/3 h-auto">
                  <div
                    className="h-36 w-36"
                    style={{
                      backgroundImage: "url(./noai.gif)",
                      backgroundSize: "150px",
                      backgroundRepeat: "no-repeat",
                    }}
                  />

                  <p className="w-full">
                    This place is a <i>NO AI</i> sanctuary. Any AI models seen around will be unmercifully deleted using
                    the newest top technology laser ray.
                  </p>
                </div>

                <p className="italic text-4xl font-bold ">Website of the week</p>

                <div>
                  <a target="_blank" href="https://neobrutalism.com/" className="text-green-500">
                    https://neobrutalism.com
                  </a>
                  <iframe
                    src="https://neobrutalism.com"
                    title="WOTW"
                    className="w-full border-dashed aspect-video border-8 border-green-500 shadow-lg shadow-green-500"
                    style={{ zoom: "0.25" }}
                  ></iframe>
                </div>

                <p className="text-yellow-400 font-mono text-4xl">Quote of the day</p>
                <p className="italic">&quot;When one does not want, you cannot make him want it.&quot; - Arystoteles</p>
              </div>
            </div>
          </main>
        </div>

        <div
          className="h-40 w-24"
          id="extinguisher"
          style={{
            backgroundImage: "url(./extinguisher.gif)",
            backgroundSize: "150px",
            backgroundRepeat: "no-repeat",
            opacity: "0",
            zIndex: "100",
          }}
        />
      </main>
    </Layout>
  );
}
