import { Link } from "react-router-dom";
import image_1 from "../../assets/img/hero_image_1.png";
import image_2 from "../../assets/img/hero_image_2.png";
export default function HeroPanel() {
  return (
    <section className="gf-bg-dark py-4 px-1 px-sm-3 px-md-5" id="hero-panel">
      <div className="max-w-1280 mx-auto">
        <div className="row align-items-end justify-content-between g-0">
          <div className="col-12 col-lg-7 order-1">
            <h1 className="lh-1 mb-0 gf-fs-header-1">
              <span className="gf-text-accent">IMPROVE YOUR FITNESS </span>
              LEVEL FOR THE BETTER
            </h1>
          </div>

          <div className="col-12 col-md-5 d-none d-lg-block order-2 pb-3">
            <div className="d-flex flex-md-row flex-column gap-4 justify-content-end">
              <Link to="/consultation" className="gf-btn-primary text-center">
                Book A Consultation
              </Link>
              <Link
                to="/classes"
                className="gf-btn-outline font-btn text-center"
              >
                Browse Class
              </Link>
            </div>
          </div>
        </div>

        <div className="row my-4">
          <div className="col-lg-4 order-2">
            {/* Mobile */}
            <div className="d-block d-lg-none mb-3">
              <img src={image_1} alt="Image 2" className="img-fluid w-100" />
            </div>

            <div className="col-7 col-lg-12">
              <img src={image_2} alt="Image 1" className="img-fluid w-100" />
            </div>

            <div className="d-none d-lg-block">
              <p className="mt-3 lh-2 gf-fs-p-4 poppins">
                Effective training starts with the right environment. Modern
                equipment, professional trainers and atmosphere charged with
                winning will help you achieve your goals.
              </p>
            </div>
            {/* Mobile */}
            <div className="d-flex d-lg-none justify-content-center gap-3 mt-3 w-100">
              <p className="mt-3 lh-2 poppins">
                Effective training starts with the right environment. Modern
                equipment, professional trainers and atmosphere charged with
                winning will help you achieve your goals.
              </p>
            </div>
            {/* Mobile */}
            <div className="d-flex d-lg-none justify-content-center gap-3 mt-3 w-100">
              <Link to="/consultation" className="gf-btn-primary text-center">
                Book A Consultation
              </Link>
              <Link
                to="/classes"
                className="gf-btn-outline font-btn text-center"
              >
                Browse Class
              </Link>
            </div>
          </div>

          <div className="col d-none d-lg-block order-2">
            <img src={image_1} alt="Image 2" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
  );
}
