import { FullContent } from "@/components/FullContent";
import { LanguageSwitch } from "@/components/LanguageSwitchModal";
import { ContextProvider } from "@/providers/ContextProvider";

export default function Home() {
  return (
    <ContextProvider>
      <LanguageSwitch />

      <FullContent />
    </ContextProvider>
  );
}
