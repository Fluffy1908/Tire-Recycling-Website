import Gallery from "../Gallery/Gallery";
import Contact from "../Contact/Contact";
import { useTranslations } from "next-intl";

const FinalComp: React.FC = () => {
  const t = useTranslations("TextileCordPage");

  return (
    <section className="bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 lg:flex block">
        <div className="max-w-screen-lg sm:text-lg text-gray-400 flex-grow">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-white">
            {t("bead-ring-title")}
          </h2>
          <p className="mb-4 font-light">{t("bead-ring-description")}</p>
        </div>
        <Gallery />
      </div>
      <Contact />
    </section>
  );
};

export default FinalComp;
