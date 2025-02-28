export const Socials = () => (
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
);
