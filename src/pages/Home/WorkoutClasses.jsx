import { useState, useEffect } from "react";
import { WORKOUT_HEADLINE } from "../../data/workoutData";
import { ClassesCard } from "../../components/card";
import vector1 from '../../assets/icon/1.png'
import vector2 from '../../assets/icon/2.png'
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
    setCurrentIndex((prev) => (prev + 1) % WORKOUT_HEADLINE.length);
  };
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + WORKOUT_HEADLINE.length) % WORKOUT_HEADLINE.length);
  };

  const getVisibleItems = () => {
    let count;
    if (windowSize.width < 576) count = 5;
    
    else count = 5;

    return Array.from(
      { length: count },
      (_, i) => WORKOUT_HEADLINE[(currentIndex + i) % WORKOUT_HEADLINE.length]
    );
  };
  const visibleItems = getVisibleItems();

  return (
    <section
      className="gf-bg-dark py-4 px-1 px-sm-3 px-md-5"
      id="workout-classes"
    >
      <div className="max-w-1280 mx-auto mt-5">
        <div className="row align-items-end g-0">
          <div className="col-12 col-md-12  order-md-1">
            <h1 className="gf-fs-p-2">OUR WORKOUT CLASS</h1>
            <h1 className="gf-fs-header-3 gf-text-accent mb-0">
              WORKOUT CLASSES DESIGNED FOR EVERY GOAL
            </h1>
            <div className="d-flex flex-column flex-md-row gap-3">
              <p className="gf-fs-p-4 poppins mb-0 flex-grow-1">
                Expert-led classes to challenge, inspire, and elevate your
                fitness
              </p>
              <div className="d-none gap-3 d-md-block align-self-md-end">
                <button
                  onClick={prevSlide}
                  className="gf-btn-prev carousel-button carousel-button-prev mx-3"
                  aria-label="Previous slide"
                >
                  <img src={vector2} alt="Previous" />
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
                <img src={vector2} alt="Previous" />
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
        <div className="workout-container">
          <div className="workout-track ">
            {visibleItems.map((items, index) => (
              <ClassesCard
                key={index}
                image={items.image}
                name={items.name}
                description={items.body}
              />
            ))}
          </div>
        </div>
        <div className="d-none d-sm-block">
            <div className="d-flex w-100 justify-content-center my-4">
              <Link to="/classes#classes" className="gf-btn-primary w-50 text-center bebas font-btn">
                View All Classes
              </Link>
            </div>
          </div>
          <div className="d-flex d-sm-none justify-content-center my-4 w-100">
            <Link  to="#classes" className="gf-btn-primary w-100 font-btn text-center">
              View All Classes
            </Link>
          </div>
      </div>
    </section>
  );
}
