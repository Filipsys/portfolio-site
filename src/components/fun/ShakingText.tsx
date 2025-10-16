export const ShakingText = (props: { text: string }) => {
  return (
    <span>{props.text.split("").map((char, index) => <span key={`${props.text}-${char}-${index}`} className="inline-block animate-charShake" style={{ animationDelay: `${Math.round(Math.random() * 500)}ms` }}>{char}</span>)}</span>
  );
}
