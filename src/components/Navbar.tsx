import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import Lenis from "lenis";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);
export let smoother: any;

const Navbar = () => {
  useEffect(() => {
    smoother = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    const raf = (time: number) => {
      smoother.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    smoother.on("scroll", ScrollTrigger.update);

    const links = document.querySelectorAll<HTMLAnchorElement>(".header a[data-href]");
    const handlers: Array<() => void> = [];

    links.forEach((link) => {
      const handler = () => {
        if (window.innerWidth > 1024) {
          const section = link.getAttribute("data-href");
          if (section) smoother.scrollTo(section, { duration: 1.1 });
        }
      };
      link.addEventListener("click", handler);
      handlers.push(handler);
    });

    return () => {
      links.forEach((link, index) => link.removeEventListener("click", handlers[index]));
      smoother?.destroy();
    };
  }, []);

  return (
    <>
      <header className="header">
        <a href="#home" className="navbar-title" data-cursor="disable">
          AV<span>.</span>
        </a>

        <div className="navbar-center">
          <span className="nav-status"><i /> Freelance / Available</span>
        </div>

        <nav>
          <a data-href="#work" href="#work" data-cursor="disable">Work</a>
          <a data-href="#services" href="#services" data-cursor="disable">Services</a>
          <a data-href="#about" href="#about" data-cursor="disable">About</a>
          <a data-href="#contact" href="#contact" data-cursor="disable">Start a project</a>
        </nav>
      </header>
      <div className="nav-fade" />
    </>
  );
};

export default Navbar;
