import { useNavigate } from "react-router-dom";

const Card = () => {
  const Navigate = useNavigate();

  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          {/* Card 1 */}
          <div
            className="card shadow-lg"
            style={{ width: "18rem", border: "none" }}
          >
            {" "}
            <div className="card-body">
              <h5 className="card-title">Show data image</h5>
              <p className="card-text">
                View all image data that has been uploaded
              </p>

              <button
                className="btn btn-primary btn-sm"
                onClick={() => Navigate("photos")}
              >
                All Data
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          {/* Card 2 */}
          <div
            className="card shadow-lg"
            style={{ width: "18rem", border: "none" }}
          >
            {" "}
            <div className="card-body">
              <h5 className="card-title">Show data File</h5>
              <p className="card-text">
                View all file data that has been uploaded
              </p>

              <button
                className="btn btn-primary btn-sm"
                onClick={() => Navigate("files")}
              >
                All Data
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
