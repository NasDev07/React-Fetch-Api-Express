import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const SingleAll = () => {
  const Navigate = useNavigate();

  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    const eventSource = new EventSource("http://localhost:3000/photos-single");
    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        setPhoto(data.photo);
        console.log(data.p);
      } catch (error) {
        console.error("Error parsing photo data:", error);
      }
    };
    eventSource.onerror = (error) => {
      console.error("EventSource error:", error);
    };
    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div>
      <div className="container">
        <h2 className="fw-bold">Data</h2>
        <button
          className="btn btn-primary my-2"
          onClick={() => Navigate("/single-all")}
        >
          All Data
        </button>
        {photo ? (
          <div className="container">
            <div className="card__img">
              <img src={photo.filename} className="card-img-top" alt="photo" />
              <div className="card-body">
                <p>ID: {photo.id}</p>
                <p>Size: {photo.size}</p>
                <p>
                  Last Modified: {new Date(photo.lastModified).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <p>No photo available</p>
        )}
      </div>
    </div>
  );
};

export default SingleAll;
