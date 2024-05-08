import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DataFile = () => {
  const navigate = useNavigate();

  const [files, setFiles] = useState([]);

  useEffect(() => {
    const eventSource = new EventSource("http://localhost:3000/files");
    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        setFiles(data.files);
        console.log(data.files);
      } catch (error) {
        console.log("Error parsing file data: ", error);
      }
    };
    eventSource.onerror = (error) => {
      console.log("EventSource error: ", error);
    };
    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div>
      <div className="container">
        <h2 className="fw-bold">Data File</h2>
        <button
          className="btn btn-primary btn-sm my-3"
          onClick={() => navigate("/")}
        >
          Kembali
        </button>
        <div className="row">
          {files.length > 0 ? (
            files.map((file) => (
              <div
                key={file.id}
                className="card shadow-sm"
                style={{ border: "none" }}
              >
                <a
                  href={file.filename}
                  download
                  className="btn btn-info btn-sm mt-2"
                >
                  Download File
                </a>
                <div className="card-body">
                  <p>ID : {file.id}</p>
                  <p>Size : {file.size}</p>
                  <p>
                    Last Modified:{" "}
                    {new Date(file.lastModified).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>No File available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DataFile;
