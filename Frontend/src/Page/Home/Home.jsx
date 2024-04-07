import React, { useState } from "react";
import Barriers from "../../component/Barriers";
import { Input } from "../../component/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "../../component/ui/form";
import { Button } from "../../component/ui/button";
import { toast } from "../../component/ui/use-toast";
import { Label } from "../../component/ui/label";
import { DropdownMenuCheckboxes } from "../../component/DropDownMenuCheckboxes";
import axios from "axios";
// UPLOAD
export default function Home() {
  const [fileDescription, setFileDescription] = useState("");
  const [file, setFile] = useState(false);
  const [fileName, setFileName] = useState("");
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleMarksheet10Change = (event) => {
    setMarksheet10(event.target.files[0]);
  };

  const handleOlympiadRankChange = (event) => {
    setOlympiadRank(event.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("name", fileName); // Add file name to form data
      formData.append("description", fileDescription); // Add file description to form data

      const resFile = await axios({
        method: "post",
        url: "http://localhost:8000/upload",
        data: formData,
        // headers: {
        //   pinata_api_key: `6494f6c1e744b0265920`,
        //   pinata_secret_api_key: `cc34679e8a8270c4d9596c8dca28bf4aaa89a0e026f8026e513955aba9f3bddd`,
        //   "Content-Type": "multipart/form-data",
        // },
      });
    } catch (e) {
      alert("Successfully uploaded");
    }
  };

  const retrieveFile = (e) => {
    const data = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      setFile(e.target.files[0]);
    };
    setFileName(e.target.files[0].name);
    e.preventDefault();
  };

  // function handleSubmit(e) {
  //   e.preventDefault()
  //   axios.post(('http://localhost:8000/upload'))
  //   toast({
  //     title: "You submitted the following values:",
  //     description: (
  //       <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
  //         <code className="text-white">{JSON.stringify(data, null, 2)}</code>
  //       </pre>
  //     ),
  //   })
  return (
    <div className="w-screen h-screen grid place-items-center">
      <form
        className="grid justify-center gap-4 text-gray-10"
        onSubmit={handleSubmit}
      >
        <input
          // disabled={!account}
          type="file"
          id="file-upload"
          name="data"
          className="p-5 "
          onChange={retrieveFile}
        />
        <input
          type="text"
          placeholder="Board Name"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
          className="p-5 rounded-lg"
        />
        <textarea
          placeholder="Passing Year"
          value={fileDescription}
          onChange={(e) => setFileDescription(e.target.value)}
          className="p-5 rounded-lg"
        />
        <button
          variant="secondary"
          type="submit"
          className="bg-blues-3 text-gray-5 p-2 rounded-lg"
          disabled={!file}
        >
          Upload File
        </button>
      </form>
    </div>
  );
}
