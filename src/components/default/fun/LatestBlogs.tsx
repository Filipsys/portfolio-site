import { GlitchingText } from "./GlitchingText";

export const LatestBlogs = () => (
  <div>
    <h2 className="text-5xl text-red-500">Latest blog posts :)</h2>

    <ol className="list-decimal px-6">
      <li><GlitchingText frequency={0.1} text="How does Next.js caching work? Why was it reworked?" /></li>
      <li><GlitchingText frequency={0.3} text="Encrypted images & why/they don&apos;t work well." /></li>
      <li><GlitchingText frequency={0.6} text="The flood of JavaScript frameworks, will it get any better?" /></li>
      <li><GlitchingText frequency={1} text="C vs C++ aka the old JavaScript vs Typescript" /></li>
    </ol>
  </div>
);
