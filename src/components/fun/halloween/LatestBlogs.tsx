import { ShakingText } from "@/components/fun/ShakingText";

export const HalloweenLatestBlogs = () => (
  <div>
    <h2 className="text-4xl text-red-500">Latest <ShakingText text="spooky" /> blog posts (('))</h2>

    <ol className="list-decimal px-6">
      <li>How does Next.js caching work? Why was it reworked?</li>
      <li>Encrypted images & why/they don&apos;t work well.</li>
      <li>The fl\ood of JavaSc%ipt frameworks, will it gg%et any %etter?</li>
      <li>
        C vs-@C++ a%. th<span className="line-through">e ol@d Jav/Sc</span>ri]
        ]]]tvs
        <span className="line-through">..,</span>5T5 peScr%pt.
      </li>
    </ol>
  </div>
);
