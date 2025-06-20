import heroImage from "../assets/images/illustration-working.svg";

const Hero = () => {
  return (
    <section className="hero-section flex flex-col justify-between items-center lg:flex-row-reverse">
      <div className="hero-image transform translate-x-10">
        <img src={heroImage} alt="illustration for working" />
      </div>
      <article className="flex flex-col justify-center items-center gap-4 px-4 py-8 w-full lg:items-start lg:text-left lg:px-12">
        <h1 className="font-bold text-4xl leading-12 tracking-[-1.05px] text-center text-neutral-very-dark-blue lg:text-left lg:text-7xl lg:leading-20 lg:tracking-[-2px] lg:max-w-xl">More than just shorter links</h1>

        <p className="font-medium text-center text-neutral-grayish-violet lg:text-left lg:max-w-lg">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>

        <button className="rounded-4xl px-6 py-3 bg-primary-cyan font-bold text-xl text-white cursor-pointer hover:bg-cyan-hover">Get Started</button>
      </article>
    </section>
  );
};

export default Hero;
