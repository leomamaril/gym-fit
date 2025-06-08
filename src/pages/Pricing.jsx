import { Layout } from "../components/layout";
import { Link } from "react-router-dom";
import { plans } from "../data/pricing";
import check from "../assets/icon/check.png";
export default function Pricing() {
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
              | Pricing
            </span>
          </div>

          <div className="row justify-content-center text-center g-0 gy-3">
            <div className="col-12 col-lg-6 d-flex flex-column align-items-center mb-0">
              <h1 className="gf-fs-p-2 line-1  ">PRICING PLAN</h1>
              <h1 className="gf-fs-header-3 gf-text-accent">
                SUBSCRIBE TO OUR GYM
              </h1>
              <p className="gf-fs-p-4 poppins line-1 ">
                Ready to take your fitness to the next level? Join Gym Fit today
                and unlock access to state-of-the-art equipment, expert coaches,
                dynamic classes, and a community that keeps you motivated.
              </p>
            </div>
          </div>
          <div className="row g-4 d-flex justify-content-center align-items-center mb-5">
            {plans.map((plan) => (
              <div key={plan.name} className="col-12 col-md-6 col-lg-4">
                <div
                  className="gf-bg-dark px-4 py-5 d-flex flex-column  justify-content-center rounded-3 position-relative"
                  style={{
                    height: plan.name === "Standard Plan" ? "600px" : "550px",
                    border:
                      plan.name === "Standard Plan"
                        ? "2px solid #E2712D"
                        : "none",
                  }}
                >
                  {plan.name === "Standard Plan" && (
                    <div
                      className="position-absolute"
                      style={{
                        top: "-22px",
                        right: "-85px",
                        width: "200px",
                        height: "0",
                        transform: "rotate(45deg)",
                        transformOrigin: "0 0",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          width: "195px",
                          borderBottom: "30px solid #C8662A",
                          borderLeft: "30px solid transparent",
                          borderRight: "30px solid transparent",
                        }}
                      >
                        <div
                          className=" bebas"
                          style={{
                            position: "absolute",
                            top: "3px",
                            left: "0",
                            right: "0",
                            textAlign: "center",
                            fontSize: "18px",
                          }}
                        >
                          BEST OFFER
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="">
                    {" "}
                    <h3 className="gf-text-accent gf-fs-p-2">{plan.name}</h3>
                    <div className="poppins gf-fs-p-1">{plan.price}</div>
                  </div>

                  <p className="gf-fs-p-4 poppins mb-0"> {plan.description}</p>

                  <ul className="gf-fs-p-4 poppins list-unstyled">
                    {" "}
                    {plan.features.map((feature, i) => (
                      <li key={i} className="mt-3">
                        <img src={check} className="pe-2" /> {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="text-center mt-4">
                    <button
                      className={`gf-fs-p-btn w-100 px-4 py-2 ${
                        plan.name === "Standard Plan"
                          ? "gf-btn-primary"
                          : "gf-btn-outline"
                      }`}
                    >
                      Inquire Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
