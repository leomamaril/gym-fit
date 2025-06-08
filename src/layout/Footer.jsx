import logo from "../assets/icon/logo_2.png";
export default function Footer() {
  return (
    <section className="gf-bg-dark py-4 px-1 px-sm-3 px-md-5" id="footer">
      <div className="max-w-1280 mx-auto">
        <div className="row align-items-center mb-4">
          {/* Large screens (lg+) - Original side-by-side layout */}
          <div className="col-md-6 d-none d-md-block">
            <img
              src={logo}
              alt="Gymfit"
              className="img-fluid d-block"
              style={{ width: "15rem" }}
            />
          </div>
          <div className="col-md-6 d-none d-md-block text-start">
            <p className="font-p poppins">
              We believe in pushing limits, supporting each other, and creating
              an environment where everyone, from beginners to athletes, can
              thrive.
            </p>
          </div>
          {/* Medium screens (md) - Centered stacked layout */}
          <div className="col-12 d-md-none d-lg-none text-center">
            <img
              src={logo}
              alt="Gymfit"
              className="img-fluid mb-3"
              style={{ width: "40vw" }}
            />
            <p className="font-p poppins mx-auto" style={{ maxWidth: "25rem" }}>
              We believe in pushing limits, supporting each other, and creating
              an environment where everyone, from beginners to athletes, can
              thrive.
            </p>
          </div>
        </div>

        <hr className="my-4 border-3 opacity-25" />

        <div className="row">
          <div className="col-5">
            <h1 className="gf-fs-p-2">Quick Links</h1>
            <div className="navbar-collapse" id="navbarNav">
              <div className="d-none d-lg-block fw-light">
                <ul className="navbar-nav flex-row gap-4 poppins gf-fs-p-4">
                  <li>Home</li>
                  <li> About Us</li>
                  <li>Classes</li>
                  <li>Pricing Plan</li>
                </ul>
              </div>

              <div className="col-12 d-block d-lg-none fw-light">
                <div className="row">
                  <div className="col-6 ">
                    <ul className="navbar-nav poppins gf-fs-p-4">
                    <li>Home</li>
                    <li> About Us</li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul className="navbar-nav poppins gf-fs-p-4">
                    <li>Classes</li>
                    <li>Pricing Plan</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1 d-flex justify-content-center">
            <div style={{ borderLeft: "1px solid #ccc", height: "100%" }}></div>
          </div>

          <div className="col-6">
            <h1 className="gf-fs-p-2">follow us on our social medias</h1>
            <div className="d-flex gap-3 ">
              <span>
                <i className="bi bi-facebook"></i>
              </span>
              <span>
                <i className="bi bi-instagram"></i>
              </span>
              <span>
                <i className="bi bi-twitter-x"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
