import { Layout } from "../components/layout";
import { Link } from "react-router-dom";
export default function Contacts() {
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
              | Contacts
            </span>
          </div>
          <div className="row my-5">
                <div className="col-12 col-md-12 col-lg-5 order-md-1 order-1">
                    <h1 className="gf-fs-p-2">Contact Us</h1>
                    <h1 className="gf-fs-header-3 gf-text-accent">Get in Touch with us</h1>               
                    <p className="gf-fs-p-4 poppins lh-3" >Have questions about our classes, memberships, or personal training programs? We're here to help! Whether you're a beginner looking to start your fitness journey or a seasoned athlete seeking new challenges, the Gym Fit team is ready to support you every step of the way.</p>
                    <p className="gf-fs-p-4 poppins "><i className="bi bi-envelope me-3"/> <a href="mailto:gymfit@gmail.com.ph" className="gf-text-white">gymfit@gmail.com.ph</a> </p>
                    <p className="gf-fs-p-4 poppins"><i className="bi bi-telephone me-3"/><a href="tel:+ 63 9123 456 789" className="gf-text-white"> + 63 9123 456 789</a></p>
                    <p className="gf-fs-p-4 poppins"><i className="bi bi-geo-alt me-3"/> #123 2nd Building, Dagupan City, Pangasinan, Philippines</p>
                </div>
                <div className=" col-12 col-md-7 order-md-2 mb-3 order-2">
                <form className="w-100 poppins">
                    <input type="text" className="dark-input form-control" placeholder="Full Name" required/>
                    
                    <input type="email" className="dark-input form-control" placeholder="Email Address" required/>
                    
                    <input type="tel" className="dark-input form-control" placeholder="Phone Number" required/>
                    
                    <input type="text" className="dark-input form-control" placeholder="Subject" required/>
                
                    <textarea className="dark-input form-control fixed-textarea " placeholder="Write your message here" rows="4" required/>
                    
                    <button type="submit" className="gf-btn-primary bebas w-100 mt-3">BOOK MY CONSULTATION</button>
                </form>
                </div>
            </div>
        </div>
      </section>
    </Layout>
  );
}
