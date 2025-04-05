import { FullContent } from "@/components/FullContent";
import { ContextProvider } from "@/providers/ContextProvider";
// import { Grid } from "@/components/Grid";

export default function Home() {
  return (
    <ContextProvider>
      <FullContent />

      {/* <Grid /> */}
    </ContextProvider>
  );
}
