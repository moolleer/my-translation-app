import Image from "next/image";

import TranslationInput from "@/components/TranslationInput";
import LanguageSelector from "@/components/LanguageSelector";

export default function Home() {
  return (
    <div className="container">
      <LanguageSelector />
      <div className="input-container">
        <TranslationInput id="nombre" type="text"
          dataTranslateKey="full_name_field" />
        <TranslationInput id="email" type="text"
          dataTranslateKey="email_field" />
      </div>
    </div>
  );
}
