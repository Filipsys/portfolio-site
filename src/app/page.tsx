import { Grid } from "@/components/Grid";
import { FullContent } from "@/components/FullContent";
import { ContextProvider } from "@/providers/ContextProvider";

export default function Home() {
  return (
    <ContextProvider>
      <FullContent />

      <Grid />
    </ContextProvider>
  );
}
