import { Separator } from "@/components/fun/Separator";

export const TechList = () => (
  <>
    <Separator />

    <div className="flex justify-center">
      <h2 className="text-3xl text-red-700 text-center">Tech I Know and Use on a Daily Basis</h2>
    </div>

    <Separator />

    <ul className="list-disc w-full gap-3 text-white">
      <li>
        <p className="text-xl italic">TypeScript</p>
        <p>
          I use TypeScript in my code because it makes me more productive, I can spend more time writing code and not
          worrying about wrong data getting into a function without any errors. I think it is a better JavaScript which
          brings back the old days of static types.
        </p>
      </li>
      <li>
        <p className="text-xl italic">TailwindCSS</p>
        <p>
          Hated by many, liked by others. I use tailwind because it breaks the need of switching between files to change
          CSS, removes the need for naming classes and makes my code cleaner. It is pretty easy to learn once you have a
          good foundation in vanilla CSS and want to try out something fresh.
        </p>
      </li>
      <li>
        <p className="text-xl italic">Vercel</p>
        <p>
          I like Vercel because they have a pretty generous free tier for their hosting. I can host my personal projects
          on vercel pretty easily by connecting to my GitHub repository and sharing my projects to the other sides of
          our globe!
        </p>
      </li>
      <li>
        <p className="text-xl italic">Bun</p>
        <p>
          Easy to use, all-in-one JavaScript toolbox. I love it because it can save a ton of time when configuring
          projects. It supports stuff like TypeScript out of the box so you don&apos;t need to fret about unnecessary
          problems. It&apos;s really fast and fits my needs as well. As a good alternative to Bun I also like to use{" "}
          <a className="text-blue-400 underline" target="_blank" href="https://pnpm.io/">
            pnpm
          </a>
          .
        </p>
      </li>
      <li>
        <p className="text-xl italic">React</p>
        <p>
          React is a widely known JavaScript library which provides developers with many useful features such as
          creating components allowing for reusable pieces of code. When working with React, I also use{" "}
          <a className="text-blue-400 underline" target="_blank" href="https://www.npmjs.com/package/react-dom">
            React-dom
          </a>
          , which allows for working with websites like this one :)
        </p>
      </li>
      <li>
        <p className="text-xl italic">SQLite</p>
        <p>
          SQLite, (pronounced SEQUEL-ite) is a really simple and lightweight database that can hold all my data storage
          needs, I&apos;ve never had any issues with it or any slow queries which makes it perfect for my needs. It also
          allows for in-memory databases which are perfect for temporarily saving data which gets wiped on process kill.
        </p>
      </li>
      <li>
        <p className="text-xl italic">Vite</p>
        <p>
          Vite is the perfect build tool for me. It is easy to configure, lightweight, supports plugins in a simple and
          easy to grasp way. It is loved by many, as a saviour from needing to work with Webpack. I also plan on using{" "}
          <a className="text-blue-400 underline" target="_blank" href="https://rspack.dev/">
            rspack
          </a>{" "}
          more often as it is <i>even</i> more lightweight and performant than Vite, not as widely known yet as
          it&apos;s pretty new.
        </p>
      </li>
      <li>
        <p className="text-xl italic">Next.js</p>
        <p>
          Really powerful JavaScript framework with a pretty tricky learning curve, works perfectly with Vercel hosting
          and{" "}
          <a className="text-blue-400 underline" target="_blank" href="https://turbo.build/">
            Turbopack
          </a>{" "}
          (also from Vercel). I use Next.js whenever I need something more complex than something I would normally use
          Vite for. It has great server/client components which can be a bit weird to understand at first. Try adding a
          server component inside a client component!
        </p>
      </li>
    </ul>
  </>
);
