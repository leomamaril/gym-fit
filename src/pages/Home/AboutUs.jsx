import { ABOUT } from "../../data/about";
import image_2 from "../../assets/img/about_me_image_2.png";
import image_3 from "../../assets/img/about_me_image_1.png";
import { Link } from "react-router-dom";
export default function AboutUs() {
  return (
    <section className="gf-bg-primary px-1 px-sm-3 px-md-5" id="about-me">
      <div className="max-w-1280 mx-auto mt-5">
        <div className="container-fluid d-none d-md-block">
          <div className="row justify-content-center">
            {ABOUT.map((items, index) => (
              <div key={index} className="col-6 col-sm-3 mb-4">
                <div className="card h-100 border-0 bg-transparent text-white">
                  <div className="card-body line-sm">
                    <h1 className="gf-fs-header-3 gf-text-accent mb-2">
                      {items.title}
                    </h1>
                    <p className="gf-fs-p-4 poppins lh-1 mb-1">
                      {items.subtitle}
                    </p>
                    <p className="gf-fs-p-5 lh-1 poppins mb-0 fw-light">
                      {items.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className=" d-block d-md-none">
          <div className="row justify-content-center mt-5">
            {ABOUT.map((items, index) => (
              <div key={index} className="col-6 col-lg-3 mb-4">
                <div className="card h-100 border-0 bg-transparent text-white">
                  <div className="card-body">
                    <h1 className="gf-fs-header-3 gf-text-accent mb-2">
                      {items.title}
                    </h1>
                    <p className="gf-fs-p-4 poppins lh-1 mb-1">
                      {items.subtitle}
                    </p>
                    <p className="gf-fs-p-5 lh-1 poppins mb-0 fw-light">
                      {items.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="row g-0 my-5">
          <div className="col-12 col-md-6 order-md-1 order-1 d-flex flex-column align-items-start justify-content-center">
            <h4 className="gf-fs-p-2 bebas">ABOUT US</h4>
            <h1 className="gf-fs-header-2 bebas gf-text-accent">We are not just a gym,
            we are a whole community</h1>
            {/* Mobile */}
            <div className="d-flex d-md-none">
              <img
                src={image_3}
                alt="Image 3"
                className="img-fluid mt-3 w-50"
              />
              <div className="mx-3">
                <img
                  src={image_2}
                  alt="Image 2"
                  className="img-fluid mt-3 w-100"
                />
              </div>
            </div>

            <div className="d-none d-md-flex gap-3 w-100">
              <p
                className="gf-fs-p-4 justify-content-center poppins line-2"
                style={{ maxWidth: "470px" }}
              >
                At our core, we believe fitness is more than just workouts—it’s about support, motivation, and growth. Our community is built on encouragement, shared goals, and a passion for a healthier lifestyle. Whether you’re a beginner or a seasoned athlete, you’ll find a place where you belong, push limits, and celebrate every milestone together.
              </p>
            </div>
            <div className="d-flex d-md-none gap-3 w-100">
              <p className="gf-fs-p-4 justify-content-center poppins mt-3 line-2">
              At our core, we believe fitness is more than just workouts—it’s about support, motivation, and growth. Our community is built on encouragement, shared goals, and a passion for a healthier lifestyle. Whether you’re a beginner or a seasoned athlete, you’ll find a place where you belong, push limits, and celebrate every milestone together.
              </p>
            </div>

            <Link
              to="/aboutus"
              className="d-none d-md-block gf-btn-primary font-btn mt-3 text-center"
            >
              learn more about us
            </Link>
            {/* Mobile */}
            <div className="d-flex d-md-none justify-content-center gap-3 mt-3 w-100">
              <Link
                to="/aboutus"
                className="gf-btn-primary w-100 font-btn  text-center"
              >
                learn more about us
              </Link>
            </div>
          </div>

          <div className="d-none d-md-flex col-12 col-md-6 order-md-2">
            <div className="d-flex gap-4 w-100 justify-content-end">
              <div>
                <img
                  src={image_3}
                  alt="Image 3"
                  className="img-fluid w-auto h-auto"
                />
              </div>
              <div>
                <img
                  src={image_2}
                  alt="Image 2"
                  className="img-fluid w-auto h-auto mt-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
