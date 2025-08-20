export const Socials = () => (
  <div>
    <h2 className="text-5xl text-red-500">Links to my socials</h2>

    <ol className="px-2 *:mb-2">
      <li>
        <div className="group/github z-50 transition-colors duration-0 border-2 border-red-500 hover:animate-spin hover:border-dashed hover:border-white hover:text-white/50">
          <a
            href="https://github.com/Filipsys"
            target="_blank"
            rel="noreferrer"
          >
            github.com/Filipsys
          </a>
          <p className="italic">Github</p>
        </div>
      </li>

      <li>
        <div className="group/linkedin py-1 transition-colors duration-0 border-2 border-red-500 hover:border-dashed hover:animate-sidewaysMove hover:rotate-180 hover:border-white hover:text-[#0A66C2]">
          <a
            href="https://linkedin.com/in/filipsysak"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/filipsysak
          </a>
          <p className="italic">LinkedIn</p>
        </div>
      </li>

      <li>
        <div className="group/email transition-colors duration-0 border-2 border-red-500 hover:border-dashed hover:border-white hover:animate-verticalMove hover:text-[#EA4335]">
          <a href="mailto:mail@filyys.dev">mail@filyys.dev</a>
          <p className="italic">Email</p>
        </div>
      </li>
    </ol>
  </div>
);
