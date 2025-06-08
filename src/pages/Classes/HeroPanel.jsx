import { Link } from "react-router-dom";
import classesImage from "../../assets/img/classes_image.png";
export default function HeroPanel() {
  return (
    <section className="gf-bg-primary px-1 px-sm-3 px-md-5" id="hero-panel">
      <div className="max-w-1280 mx-auto">
        <div className="py-4">
          <span className="poppins gf-fs-p-5">
            <Link to="/home" className="gf-text-accent">
              {" "}
              Home
            </Link>{" "}
            | Classes
          </span>
        </div>

        <div className="row mt-5">
          <div className="col-12 col-md-12 col-lg-6 order-md-1 order-1">
            <h2 className="gf-fs-p-2">OUR WORKOUT CLASS</h2>
            <h1 className="gf-fs-header-2 gf-text-accent">
              Workout Classes Designed for Every Goal
            </h1>
            <div className="d-flex d-lg-none col-12">
              <img
                src={classesImage}
                alt="Image 3"
                className="img-fluid mt-3 w-100 mb-3"
              />
            </div>
            <p className="gf-fs-p-4 poppins lh-3">
              Expert-led classes to challenge, inspire, and elevate your
              fitness. Our diverse range of workout classes is designed to keep
              you motivated, engaged, and constantly progressing. Led by
              certified trainers, each session is structured to maximize
              results—whether you’re aiming to build strength, boost endurance,
              or improve flexibility. With a supportive community and expert
              guidance, you'll push past limits and unlock your full potential
              in every workout.
            </p>
          </div>
          <div className="d-none d-lg-flex col-lg-6 order-lg-2 mb-3 justify-content-end">
            <img
              src={classesImage}
              alt="Image 3"
              className="img-fluid w-100 "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
