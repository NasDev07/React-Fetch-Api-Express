import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DataSigleFile = () => {
  const Navigate = useNavigate();

  const [file, setFile] = useState(null);

  useEffect(() => {
    const eventSource = new EventSource("http://localhost:3000/files-single");
    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        setFile(data.file);
        console.log(data.file);
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
          className="btn btn-primary btn-sm my-2"
          onClick={() => Navigate("/files")}
        >
          Show All Data
        </button>
        <div className="row">
          {file ? (
            <div className="container">
              <div className="card">
                <a
                  href={file.filename}
                  download
                  className="btn btn-info btn-sm mt-2"
                >
                  Download File
                </a>
                <div className="card-body">
                  <p>ID: {file.id}</p>
                  <p>Size: {file.size}</p>
                  <p>
                    Last Modified: {new Date(file.lastModefid).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <p>No File available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DataSigleFile;
