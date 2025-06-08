function ClassesCard({ image, name, description, onClick, className = "" }) {
  return (
    <div
      className={`col ${className}`}
      style={{ cursor: "pointer" }}
      onClick={onClick}
    >
      <div className="workout text-white bg-transparent pb-2 h-100 border-0">
        <img src={image} className="workout-img rounded-5 h-100" alt={name} />
        <div className="workout-body">
          <h1 className=" gf-fs-p-1 gf-text-accent card-title text-base mt-3">
            {name}
          </h1>
          <p className="gf-fs-p-4 card-text poppins">{description}</p>
          <a className="gf-fs-btn gf-text-accent">Discover &gt;</a>
        </div>
      </div>
    </div>
  );
}

function TrainerCard({ image, name, profession, onClick, className = "" }) {
  return (
    <div
      className={`col ${className}`}
      style={{ cursor: "pointer" }}
      onClick={onClick}
    >
      <div className="trainer rounded-4 gf-bg-dark pb-2 h-100 border-0">
        <img src={image} className="trainer-img rounded-4 h-100" alt={name} />
        <div className="trainer-body px-3 py-2">
          <h1 className=" gf-fs-p-2 gf-text-accent card-title text-base mt-3">
            {name}
          </h1>
          <p className="gf-fs-p-4 card-text poppins">{profession}</p>
        </div>
      </div>
    </div>
  );
}

function TrainersCard({ image, name, profession, onClick }) {
  return (
    <div className="col " style={{ cursor: "pointer" }} onClick={onClick}>
      <div className="card text-white gf-bg-dark pb-2 h-100 cursor-pointer rounded-4">
        <img
          src={image}
          className="card-img-top "
          style={{ height: "100%" }}
          alt={name}
        />
        <div className="card-body">
          <h5 className="gf-fs-p-1 card-title mb-0 gf-text-accent">
            {name}
          </h5>
          <p className="gf-fs-p-4 poppins mb-0 card-text">{profession}</p>
        </div>
      </div>
    </div>
  );
}

function WorkoutCard({ image, name, profession, onClick }) {
  return (
    <div className="col " style={{ cursor: "pointer" }} onClick={onClick}>
      <div className="card text-white border-0 bg-transparent pb-2 h-100 rounded-4">
        <img
          src={image}
          className="card-img-top "
          style={{ height: "100%" }}
          alt={name}
        />
        <div className="card-body">
          <h5 className="gf-fs-p-2 card-title mt-3 gf-text-accent">
            {name}
          </h5>
          <p className="gf-fs-p-4 card-text poppins ">{profession}</p>
          <a href="#" className="gf-fs-btn gf-text-accent">
            Discover &gt;
          </a>
        </div>
      </div>
    </div>
  );
}

export { ClassesCard, TrainerCard, TrainersCard, WorkoutCard };
