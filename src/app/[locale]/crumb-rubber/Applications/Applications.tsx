import { useTranslations } from "next-intl";

const Applications: React.FC = () => {
  const one = "/images/crumbRubber/rub-asphalt.webp";
  const two = "/images/crumbRubber/sport-coverings.webp";
  const t = useTranslations("CrumbRubberPage");

  return (
    <div className=" bg-gray-900 mt-10">
      {/* First application */}
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img className="w-full block" src={one} alt="dashboard image" />
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold  text-white sm:text-3xl">
            {t("rubberized-asphalt-one")}
          </h2>
          <p className="mb-6 font-light md:text-lg text-gray-400 sm:text-base">
            {t("rubberized-asphalt-description")}
          </p>
        </div>
      </div>

      {/* Second application */}
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img className="w-full block" src={two} alt="dashboard image" />
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white sm:text-3xl">
            {t("sport-coverings-title")}
          </h2>
          <p className="mb-6 font-light md:text-lg text-gray-400 sm:text-base">
            {t("sport-coverings-description")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Applications;
