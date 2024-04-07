import React from "react";

export default function DownloadButton() {
  const handleDownload = () => {
    // Create a dummy CSV content
    const csvContent =
      "data:text/csv;charset=utf-8," +
      "Column1,Column2,Column3\nValue1,Value2,Value3";

    // Create a link element
    const link = document.createElement("a");
    link.href = encodeURI(csvContent);
    link.target = "_blank";
    link.download = "Dataset - Analytics.pdf";

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Remove the link from the body
    document.body.removeChild(link);

    // Show alert
    alert("Download successful!");
  };

  return (
    <div>
      <button onClick={handleDownload}>Download Analyzed Results</button>
    </div>
  );
}
