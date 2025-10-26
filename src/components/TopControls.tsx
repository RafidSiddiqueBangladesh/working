import { Button } from "@/components/ui/button";
import { useUI } from "@/context/UIContext";
import { Sun, Moon, Languages } from "lucide-react";

const TopControls = () => {
  const { theme, toggleTheme, language, toggleLanguage, t } = useUI();

  const isDark = theme === "dark";
  const LangIcon = Languages;

  return (
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="sm" onClick={toggleLanguage} className="flex items-center gap-2">
        <LangIcon className="h-4 w-4" />
        <span className="hidden sm:inline">{language === "en" ? t("Bangla") : t("English")}</span>
      </Button>
      <Button variant="outline" size="sm" onClick={toggleTheme} className="flex items-center gap-2">
        {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        <span className="hidden sm:inline">{isDark ? t("Light") : t("Dark")}</span>
      </Button>
    </div>
  );
};

export default TopControls;