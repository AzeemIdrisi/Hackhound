import React, { useState } from "react";
import axios from "axios";
import DownloadButton from "../../component/DownloadButton";
// import Chart from '../../component/Chart'

export default function Admin() {
  const [file, setFile] = useState([]);
  const [Accept, setAccept] = useState(false);
  const GetData = async () => {
    await axios({
      method: "get",
      url: "http://localhost:8000/",
    }).then((data) => {
      console.log(data.data.subject_marks);
      setFile(data.data.subject_marks);
    });
  };
  GetData();
  function handleData() {
    console.log(file);
    setAccept(true);
  }
  return (
    <div className="w-screen h-screen grid place-items-center text-gray-5">
      {/* {Accept && <h1>{file}</h1>} */}
      <button onClick={handleData}>Get Data</button>
      <DownloadButton />
    </div>
  );
}
