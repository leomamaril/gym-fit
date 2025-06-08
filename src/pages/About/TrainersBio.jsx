import { Link, useParams } from "react-router-dom";
import { TRAINER } from "../../data/trainerData";
export default function TrainersBio() {
  const { name } = useParams();
  const trainer = TRAINER.find((item) => item.name === name);
  console.log(trainer);
  if (!trainer) {
    return (
      <div className="gf-bg-primary px-3 py-5 text-center">
        <h2 className="gf-text-accent">Trainer not found</h2>
        <Link to="/aboutus" className="btn gf-btn-accent mt-3">
          Back to About Us
        </Link>
      </div>
    );
  }
  return (
    <section className="gf-bg-primary px-1 px-sm-3 px-md-5">
      <div className="max-w-1280 mx-auto ">
        <div className="py-4">
          <span className="poppins gf-fs-p-5">
            <Link to="/aboutus" className="gf-text-accent">
              {" "}
              About Us
            </Link>{" "}
            | {trainer.name}
          </span>
        </div>

        <div className="row my-5">
          <div className="col-12 col-md-7 order-md-1 d-block order-1 my-auto">
            <h2 className="gf-fs-p-2">{trainer.profession}</h2>
            <h1 className="gf-fs-header-2 gf-text-accent">{trainer.name}</h1>

            <div className="d-flex d-md-none col-12 justify-content-center my-4">
              <img src={trainer.image} alt={trainer.name} className="w-100 h-100"  loading="lazy" />
            </div>
            <p className="gf-fs-p-4 poppins lh-3">{trainer.bio}</p>
            <h2 className="gf-fs-p-2  mt-5 ">Past Experience</h2>
            <p className="gf-fs-p-4  poppins lh-3">{trainer.experience}</p>
          </div>
          <div className="d-none d-md-flex col-12 col-md-5 order-md-2 mb-3">
            <div className="d-flex gap-5 w-100 justify-content-end">
              <div className="">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="zoom rounded-4"
                  loading="lazy"
                  style={{
                    height: "473px",
                    width: "395px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
