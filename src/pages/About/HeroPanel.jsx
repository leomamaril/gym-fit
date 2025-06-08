
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import image_2 from "../../assets/img/about_me_image_2.png";
import image_3 from "../../assets/img/about_me_image_1.png";
export default function HeroPanel() {
  const [isSticky, setIsSticky] = useState(false);
  const [reachedBottom, setReachedBottom] = useState(false);
  const sidebarRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !sidebarRef.current) return;

      const container = containerRef.current;
      const sidebar = sidebarRef.current;

      const containerRect = container.getBoundingClientRect();
      const sidebarHeight = sidebar.offsetHeight;
      const viewportHeight = window.innerHeight;

      const distanceToBottom = containerRect.bottom - viewportHeight;

      if (distanceToBottom <= 0) {
        setReachedBottom(true);
        setIsSticky(false);
      } else {
        setReachedBottom(false);

        setIsSticky(containerRect.top <= 60);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
      <section className="gf-bg-primary px-1 px-sm-3 px-md-5 position-relative" id="about-us">
        <div className="max-w-1280 mx-auto">
          <div className="py-4">
            <span className="poppins gf-fs-p-5">
              <Link to="/home" className="gf-text-accent">
                {" "}
                Home
              </Link>{" "}
              | About Us
            </span>
          </div>

          <div className="row my-5">
            <div className="col-12 col-md-5 order-md-1 order-1">
              <h1 className="gf-fs-p-2">About Us</h1>
              <h1 className="gf-fs-header-2 gf-text-accent">
                We are not just a gym, we are a whole community
              </h1>
              <div className="d-flex d-md-none">
                <img
                  src={image_3}
                  alt="Image 3"
                  className="img-fluid mt-3 w-50  mb-3"
                />
                <div className="mx-3">
                  <img
                    src={image_2}
                    alt="Image 2"
                    className="img-fluid mt-3 w-100 mb-3"
                  />
                </div>
              </div>
              <p className="gf-fs-p-4 poppins lh-3">
                At our core, we believe fitness is more than just workouts—it’s
                about support, motivation, and growth. Our community is built on
                encouragement, shared goals, and a passion for a healthier
                lifestyle. Whether you’re a beginner or a seasoned athlete,
                you’ll find a place where you belong, push limits, and celebrate
                every milestone together.
              </p>
              <p className="gf-fs-p-4 poppins lh-3">
                We are more than a gym; we are a family that lifts each other
                up—inside and outside the gym. Our expert trainers,
                state-of-the-art equipment, and diverse workout programs are
                designed to help you achieve your goals, no matter your fitness
                level. From high-energy group classes to personalized training
                sessions, we provide an environment where you can challenge
                yourself, stay accountable, and feel empowered every step of the
                way.
              </p>
              <p className="gf-fs-p-4 poppins lh-3">
                At GymFitness, your journey is our mission. We are here to
                inspire, support, and transform the way you approach health and
                wellness. Join us and become part of a community that thrives on
                progress, determination, and the shared commitment to becoming
                stronger together.
              </p>
            </div>
            <div
              className="d-none d-md-flex col-12 col-md-7 order-md-2 mb-3"
              ref={containerRef}
            >
              <div
                ref={sidebarRef}
                className={`d-flex gap-md-5 gap-3 ${isSticky ? "sticky" : ""}`}
                style={{
                  height: "auto",
                  overflow: "auto",
                  position: reachedBottom
                    ? "absolute"
                    : isSticky
                    ? "fixed"
                    : "static",
                  top: reachedBottom ? "auto" : isSticky ? "100px" : "auto",
                  bottom: reachedBottom ? "0" : "auto",
                  width: isSticky || reachedBottom ? "auto" : "auto",
                  maxWidth: "100%",
                }}
              >
                <div>
                  <img
                    src={image_3}
                    alt="Image 3"
                    className="img-fluid"
                    style={{ width: "100%", height: "auto" }}
                    loading="lazy"
                  />
                </div>
                <div>
                  <img
                    src={image_2}
                    alt="Image 2"
                    className="img-fluid"
                    style={{ width: "100%", height: "auto" }}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

  );
}
