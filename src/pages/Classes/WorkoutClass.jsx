import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { WORKOUT } from "../../data/workoutData";

export default function WorkoutClass() {
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

  const { classes } = useParams();
  const workouts = WORKOUT.find((item) => item.classes === classes);

  if (!workouts) {
    return <p>Workout not found.</p>;
  }

  return (
    <section
      className="gf-bg-primary px-1 px-sm-3 px-md-5 position-relative"
      id="workout-classes"
    >
      <div className="max-w-1280 mx-auto">
        <div className="py-4">
          <span className="poppins gf-fs-p-5">
            <Link to="/classes" className="gf-text-accent">
              {" "}
              Classes
            </Link>{" "}
            | {workouts.classes}
          </span>
        </div>
        <div className="row g-0 my-5">
          <div className="col-lg-9 pe-3 mb-4">
            <div className="h-100 border-0 bg-transparent text-white">
              <div className=" line-sm">
                <h1 className="gf-fs-p-2 mb-2">{workouts.classes}</h1>
                <h1 className="gf-fs-header-2 lh-1 mb-1 gf-text-accent">
                  {workouts.name}
                </h1>
                <p
                  className="gf-fs-p-4 lh-2 poppins mb-0 "
                  style={{ maxWidth: "800px" }}
                >
                  {workouts.description}
                </p>
                <img
                  src={workouts.image}
                  alt={workouts.name}
                  loading="lazy"
                  className="w-100 my-3 rounded-4"
                />
                {/* Mobile View */}
                <div className=" mt-5 d-block d-lg-none">
                  <div
                    className="px-3 py-4 bg-gray text-white"
                    style={{ height: "auto", overflow: "auto" }}
                  >
                    <h1 className="gf-fs-p-1">Class Detail</h1>
                    <p className="card-title poppins gf-fs-p-4">
                      {workouts.classDetail.detail}
                    </p>
                    <p className="my-2 poppins fw-lighter">
                      Duration:{" "}
                      <span className="gf-text-accent poppins gf-fs-p-4 fw-normal">
                        {workouts.classDetail.duration}
                      </span>
                    </p>
                    <p className="my-2 poppins fw-lighter">
                      Intensity:{" "}
                      <span className="gf-text-accent poppins gf-fs-p-4 fw-normal">
                        {workouts.classDetail.intensity}
                      </span>
                    </p>
                    <p className="my-2 poppins fw-lighter">
                      Fitness:{" "}
                      <span className="gf-text-accent poppins gf-fs-p-4 fw-normal">
                        {workouts.classDetail.fitnessLevel}
                      </span>
                    </p>
                    <p className="my-2 poppins fw-lighter">
                      Schedule:{" "}
                      <span className="gf-text-accent poppins gf-fs-p-4 fw-normal">
                        {" "}
                        {workouts.classDetail.schedule.join(", ")}
                      </span>
                    </p>
                    <hr className="my-4" />

                    <div className="row">
                      <div className="col-3">
                        <img
                          className="rounded-circle"
                          height="70"
                          width="70"
                          src={workouts.classDetail.img}
                        />
                      </div>

                      <div className="col-9 d-flex flex-column justify-content-center ">
                        <p className="poppins mb-0 fw-lighter">INSTRUCTOR</p>
                        <p className="poppins mb-0">
                          {workouts.classDetail.instructor}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h1 className="gf-fs-header-3 gf-text-accent mt-4">
                  ABOUT CLASS
                </h1>
                <p className="gf-fs-p-4 poppins mb-0">{workouts.about1}</p>
                <p className="gf-fs-p-4 poppins mb-0 my-4">{workouts.about2}</p>
                <p className="gf-fs-p-4 poppins mb-0 my-4">What to Expect:</p>
                <ul className="gf-fs-p-4 poppins">{workouts.wte}</ul>
                <h1 className="gf-fs-header-3 gf-text-accent lh-1 mb-1 mt-5 ">
                  Class Schedule
                </h1>
                <p className="gf-fs-p-4 poppins mb-0 mt-0">
                  {workouts.classSched}
                </p>
                <h1 className="gf-fs-p-1 lh-1 mb-1 bebas gf-text-accent my-4">
                  Monday
                </h1>
                <ul className="gf-fs-p-4 poppins mb-0 ">
                  {workouts.time.monday}
                </ul>
                <h1 className="gf-fs-p-1 lh-1 mb-1 bebas gf-text-accent my-4">
                  Wednesday
                </h1>
                <ul className="gf-fs-p-4  poppins mb-0 ">
                  {workouts.time.monday}
                </ul>
                <h1 className="gf-fs-p-1 lh-1 mb-1 bebas gf-text-accent my-4">
                  Friday
                </h1>
                <ul className="gf-fs-p-4  poppins mb-0 ">
                  {workouts.time.monday}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-3 px-3 d-lg-block d-none mt-5" ref={containerRef}>
            <div
              ref={sidebarRef}
              className={`px-3 py-4 gf-bg-dark text-white sticky-sidebar }`}
              
            >
              <h1 className="bebas gf-fs-p-1">Class Detail</h1>
              <p className="card-title poppins gf-fs-p-4">
                {workouts.classDetail.detail}
              </p>
              <p className="my-2 poppins fw-lighter">
                Duration:{" "}
                <span className="gf-text-accent poppins gf-fs-p-4 fw-normal">
                  {workouts.classDetail.duration}
                </span>
              </p>
              <p className="my-2 poppins fw-lighter">
                Intensity:{" "}
                <span className="gf-text-accent poppins gf-fs-p-4 fw-normal">
                  {workouts.classDetail.intensity}
                </span>
              </p>
              <p className="my-2 poppins fw-lighter">
                Fitness:{" "}
                <span className="gf-text-accent poppins  gf-fs-p-4 fw-normal">
                  {workouts.classDetail.fitnessLevel}
                </span>
              </p>
              <p className="my-2 poppins fw-lighter">
                Schedule:{" "}
                <span className="gf-text-accent poppins gf-fs-p-4 fw-normal">
                  {" "}
                  {workouts.classDetail.schedule.join(", ")}
                </span>
              </p>
              <hr className="my-4" />

              <div className="row">
                <div className="col-4">
                  <img
                    className="rounded-circle"
                    height="70"
                    width="70"
                    src={workouts.classDetail.img}
                  />
                </div>

                <div className="col-8 d-flex flex-column justify-content-center ">
                  <p className="poppins mb-0 fw-lighter">INSTRUCTOR</p>
                  <p className="poppins mb-0">
                    {workouts.classDetail.instructor}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
