import { Layout } from "../components/layout";
import { Link } from "react-router-dom";
export default function Consultation() {
  return (
    <Layout>
      <section className="gf-bg-primary px-1 px-sm-3 px-md-5">
        <div className="max-w-1280 mx-auto">
          <div className="py-4">
            <span className="poppins gf-fs-p-5">
              <Link to="/home" className="gf-text-accent">
                {" "}
                Home{" "}
              </Link>{" "}
              | Consultation
            </span>
          </div>
          <div className="row my-5">
            <div className="col-12 col-md-12 col-lg-5 order-md-1 order-1">
              <h1 className="gf-fs-p-2 ">book a consultation</h1>
              <h1 className="gf-fs-header-3 gf-text-accent">
                Book a free fitness consulation
              </h1>
              <p className="gf-fs-p-4 poppins lh-3">
                Not sure where to start? Let us help! Book a free 1 on 1
                consultation with one of our certified trainers to discuss your
                goals, assess your fitness level, and create a personalized
                workout plan just for you.
              </p>
            </div>
            <div className=" col-12 col-md-7 order-md-2 mb-3 order-2">
              <form className="w-100 poppins">
                <input
                  type="text"
                  className="dark-input form-control"
                  placeholder="Full Name"
                  required
                />

                <input
                  type="email"
                  className="dark-input form-control"
                  placeholder="Email Address"
                  required
                />

                <input
                  type="tel"
                  className="dark-input form-control"
                  placeholder="Phone Number"
                  required
                />

                <input
                  type="date"
                  className="dark-input form-control"
                  placeholder="Preferred Date"
                  required
                />

                <input
                  type="time"
                  className="dark-input form-control"
                  placeholder="Preferred Time"
                  required
                />

                <textarea
                  className="dark-input form-control fixed-textarea"
                  placeholder="Goal or Concern"
                  rows="4"
                  required
                />

                <button
                  type="submit"
                  className="gf-btn-primary bebas w-100 mt-3"
                >
                  BOOK MY CONSULTATION
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
