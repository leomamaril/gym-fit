import { useState, useEffect } from "react";
import { TRAINER } from "../../data/trainerData";
import { TrainerCard } from "../../components/card";
import vector1 from "../../assets/icon/1.png";
import vector2 from "../../assets/icon/2.png";
export default function WorkoutClasses() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % TRAINER.length);
  };
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + TRAINER.length) % TRAINER.length);
  };

  const getVisibleItems = () => {
    let count;
    if (windowSize.width < 576) count = 5;
    else if (windowSize.width < 768) count = 2;
    else count = 3;

    return Array.from(
      { length: count },
      (_, i) => TRAINER[(currentIndex + i) % TRAINER.length]
    );
  };
  const visibleItems = getVisibleItems();

  return (
    <section className="py-4 px-1 px-sm-3 px-md-5" id="workout-classes">
      <div className="max-w-1280 mx-auto mt-5">
        <div className="row align-items-end g-0">
          <div className="col-12 col-md-12  order-md-1">
            <h1 className="gf-fs-p-2">OUR TEAM</h1>
            <h1 className="gf-fs-header-3 gf-text-accent mb-0">
              Meet our professional trainers
            </h1>
            <div className="d-flex flex-column flex-md-row gap-3">
              <p className="gf-fs-p-4 poppins mb-0 flex-grow-1">
                Our expert trainers provide guidance, motivation, and
                personalized support to help you achieve your fitness goals.
              </p>
              <div className="d-none gap-3 d-md-block align-self-md-end">
                <button
                  onClick={prevSlide}
                  className="gf-btn-prev carousel-button carousel-button-prev mx-3"
                  aria-label="Previous slide"
                >
                  <img src={vector1} alt="Previous" />
                </button>
                <button
                  onClick={nextSlide}
                  className="gf-btn-next carousel-button carousel-button-next"
                  aria-label="Next slide"
                >
                  <img src={vector1} alt="Next" />
                </button>
              </div>
            </div>
            <div className="col-12 col-md-3 gap-3 order-2 order-md-2 d-md-none text-end mt-3">
              <button
                onClick={prevSlide}
                className="gf-btn-prev mx-3"
                aria-label="Previous slide"
              >
                <img src={vector1} alt="Previous" />
              </button>
              <button
                onClick={nextSlide}
                className="gf-btn-next "
                aria-label="Next slide"
              >
                <img src={vector1} alt="Next" />
              </button>
            </div>
          </div>
        </div>
        <div className="trainer-container">
          <div className="trainer-track ">
            {visibleItems.map((items, index) => (
              <TrainerCard
                key={index}
                image={items.image}
                name={items.name}
                profession={items.profession}
              />
            ))}
          </div>
        </div>
        <div className="d-none d-sm-block">
          <div className="d-flex w-100 justify-content-center my-4">
            <button
              to="/classes#classes"
              className="gf-btn-primary w-50 text-center bebas font-btn"
            >
              View All Classes
            </button>
          </div>
        </div>
        <div className="d-flex d-sm-none justify-content-center my-4 w-100">
          <button
            to="#classes"
            className="gf-btn-primary w-100 font-btn text-center"
          >
            View All Classes
          </button>
        </div>
      </div>

      <div className="row px-1 px-sm-3 px-md-5 justify-content-center text-center g-0 mt-5">
        <div className="col-12 d-flex flex-column align-items-center ">
          <h1 className="gf-fs-header-1 line-1 mb-0 gf-text-accent">
            ARE you ready for changes?
          </h1>
          <p className="gf-fs-p-4 poppins line-1 mb-0">
            Ready to transform your fitness journey? Contact us today and let’s
            get started!
          </p>
          <div className="d-flex flex-row gap-3 justify-content-center py-3">
            <button to="/pricing" className="gf-btn-primary font-btn">
              CONTACT US
            </button>
            <button to="/consultation" className="gf-btn-outline font-btn">
              BOOK A CONSULTATION
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
