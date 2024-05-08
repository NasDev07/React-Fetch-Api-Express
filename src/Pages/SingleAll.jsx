import { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const Navigate = useNavigate();

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const eventSource = new EventSource("http://localhost:3000/photos");
    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        setPhotos(data.photos);
        console.log(data.photos);
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
        <h2 className="fw-bold">Data Image</h2>
        <button
          className="btn btn-primary btn-sm my-2"
          onClick={() => Navigate("/")}
        >
          Kembali
        </button>
        <div className="row">
          {photos.length > 0 ? (
            photos.map((photo) => (
              <div
                key={photo.id}
                className="card shadow-lg"
                style={{ border: "none" }}
              >
                <img
                  src={photo.filename}
                  className="card-img-top"
                  alt="photo"
                />
                <div className="card-body">
                  <p>ID: {photo.id}</p>
                  <p>Size: {photo.size}</p>
                  <p>
                    Last Modified:{" "}
                    {new Date(photo.lastModified).toLocaleString()}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>No photos available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
