import { TRAINER } from "../../data/trainerData";
import { TrainersCard } from "../../components/card";
import { useNavigate } from "react-router-dom";
export default function Trainers() {
    const navigate = useNavigate();

  const handleCardClick = (name) => {
    navigate(`/trainer_bio/${name}`);
  };
  return (
    <section className="gf-bg-primary px-1 px-sm-3 px-md-5">
      <div className="max-w-1280 mx-auto mt-5">
        <div className="row justify-content-center text-center g-0 mt-4">
          <div
            className="col-12 col-lg-8 d-flex flex-column align-items-center"
            style={{ width: "40rem" }}
          >
            <h1 className="gf-fs-p-2 mb-0">OUR TEAM</h1>
            <h1 className="gf-text-accent gf-fs-header-3 mb-0">
              Meet our professional trainers
            </h1>
            <p className="gf-fs-p-4 poppins mb-0">
              Our expert trainers provide guidance, motivation, and personalized
              support to help you achieve your fitness goals.
            </p>
          </div>
        </div>

        <div className="row row-cols-1 justify-content-center row-cols-sm-2 row-cols-md-3 g-4 mb-5 mt-2 ">
          {TRAINER.map((items, index) => (
            <TrainersCard
            onClick={() => handleCardClick(items.name)}
              key={index}
              image={items.image}
              name={items.name}
              profession={items.profession}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
