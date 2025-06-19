import logoWhite from "../assets/images/Shortly-white.svg";
const Footer = () => {
  return (
    <>
      <footer>
        <section
          className="flex flex-col justify-center items-center gap-8 px-4 py-16
           bg-no-repeat bg-cover bg-center w-full
    bg-[url('/bg-boost-mobile.svg')]
    md:bg-[url('/bg-boost-desktop.svg')]"
        >
          <h2 className="font-bold text-3xl leading-12 text-center tracking-[-0.7px] text-white">
            Boost your links today
          </h2>
          <button className="rounded-4xl px-6 py-3 bg-primary-cyan font-bold text-xl text-white cursor-pointer hover:bg-cyan-hover">
            Get Started
          </button>
        </section>
        <section className="footer flex flex-col justify-center items-center px-4 py-10 text-center gap-10 bg-neutral-very-violet md:flex-row md:justify-between md:items-start">
          <div>
            <img src={logoWhite} alt="shortly logo" className="h-8" />
          </div>
          <nav className="flex flex-col justify-center items-center gap-12 md:flex-row md:items-start md:text-left">
            <ul>
              <li><h4>Features</h4></li>
               <li> <a>Link Shortening</a></li>
               <li> <a>Branded Links</a></li>
               <li> <a>Analytics</a></li>
            </ul>
            <ul>
              <li><h4>Resources</h4></li>
               <li> <a>Blog</a></li>
               <li> <a>Developers</a></li>
               <li> <a>Support</a></li>
            </ul>
            <ul>
              <li><h4>Company</h4></li>
               <li> <a>About</a></li>
               <li> <a>Our Team</a> </li>
               <li> <a>Careers</a></li>
               <li> <a>Contact</a></li>
            </ul>
          </nav>
          <div className="social-icons flex gap-8 ">
            <i className="fa-brands text-white hover:text-primary-cyan hover:scale-110 transition-transform duration-200 cursor-pointer fa-square-facebook"></i>
            <i className="fa-brands text-white hover:text-primary-cyan hover:scale-110 transition-transform duration-200 cursor-pointer fa-twitter"></i>
            <i className="fa-brands text-white hover:text-primary-cyan hover:scale-110 transition-transform duration-200 cursor-pointer fa-pinterest"></i>
            <i className="fa-brands text-white hover:text-primary-cyan hover:scale-110 transition-transform duration-200 cursor-pointer fa-instagram"></i>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
