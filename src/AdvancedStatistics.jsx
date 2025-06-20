import brandRecognition from "./assets/images/icon-brand-recognition.svg";
import detailedRecords from "./assets/images/icon-detailed-records.svg";
import fullyCustomizable from "./assets/images/icon-fully-customizable.svg";

const AdvancedStatistics = () => {
  const cardData = [
    {
      title: "Brand Recognition",
      image: brandRecognition,
      alt: "Brand Recognition",
      content:
        " Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
    },
    {
      title: "Detailed Records",
      image: detailedRecords,
      alt: "Detailed Recoords",
      content:
        " Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    },
    {
      title: "Fully Customizable",
      image: fullyCustomizable,
      alt: "Fully customozable",
      content:
        " Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    },
  ];
  return (
    <section className="bg-bg-light py-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-neutral-dark-violet mb-4">
          Advanced Statistics
        </h2>
        <p className="text-neutral-grayish-violet text-base">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      {/* Card Container with horizontal line on md+ */}
      <div className="relative flex flex-col md:flex-row gap-20 md:gap-6 items-center max-w-6xl mx-auto">
        {/* Horizontal Line for md+ */}
        <div className="hidden md:block absolute top-[4.5rem] left-0 right-0 h-2 bg-primary-cyan z-0" />

        {cardData.map((card, index) => (
          <article
            key={index}
            className={`
    relative bg-white p-6 pt-16 rounded-lg shadow-md z-10 text-center
    md:text-left md:flex md:gap-6 md:items-start
    ${index === 1 ? "md:mt-8" : index === 2 ? "md:mt-16" : ""}
  `}
          >
            {/* Icon */}
            <div
              className="
      absolute -top-10 left-1/2 transform -translate-x-1/2
      w-20 h-20 rounded-full bg-primary-dark-violet flex items-center justify-center z-10
       md:translate-x-0 md:mt-0 md:mr-6
    "
            >
              <img src={card.image} alt={card.alt} className="w-10 h-10" />
            </div>

            {/* Card content */}
            <div>
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-neutral-grayish-violet text-sm">
                {card.content}
              </p>
            </div>

            {/* Vertical connector (for mobile only) */}
            {index < cardData.length - 1 && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-20 bg-primary-cyan md:hidden" />
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default AdvancedStatistics;
