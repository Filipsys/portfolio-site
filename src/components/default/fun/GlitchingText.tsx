export const GlitchingText = (props: { frequency?: number; text: string }) => (
  <span style={{ whiteSpace: "pre" }}>
    {props.text.split("").map((char) => {
      const random = Math.random();

      if (random <= (props.frequency ?? 0.2)) {
        return <span
          className={`inline-block ${Math.random() < 0.5 ? "animate-horizontalGlitch" : "animate-verticalGlitch"}`}
          style={{
            animationDelay: Math.round(Math.random() * 5000) + "ms",
            animationDuration: Math.round(Math.random() * 10000) + "ms"
          }}
        >{char}</span>
      }

      return char;
    })}
  </span>
);
