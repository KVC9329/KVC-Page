"use client"

import Link from "next/link";
import React, { useEffect, useState } from "react";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbzyATvm-z5Zx-BnzyUHVGpO4TSTCVR7zKIdPdTD0x4Uw08vi2sk1rQIjPFe6jYiz3C1/exec");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setJobs(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // fetchData();

  if (loading) {
    return <div className="flex flex-col justify-center items-center h-screen">
            <div className="content-center w-16 h-16 border-4 border-white border-dashed rounded-full animate-spin"></div>
            <p className="text-white">Loading jobs...</p>
    </div>;
  }

  if (error) {
    return <p className="text-center text-red-500 mt-8">Error: {error}</p>;
  }



  return (
    <div className="h-screen content-center container mx-auto p-4 mb-12">
      <div className="grid sm:grid-cols-3 gap-10">
      {jobs.map((job, index) => {
              
            const templateMessage = `Name: [Your Name]%0AEmail: [Your Email]%0AExperience: [Your Experience]%0AJob Title: ${job["Job Title"]}`;
            const emailRecipient = job["Email"];
            const emailSubject = `Job Application`;
            const emailBody = `Name: [Your Name]\nEmail: [Your Email]\nExperience: [Your Experience]\nJob Title: ${job["Job Title"]}`;
              // const templateMessage = `Name: [Your Name]%0AEmail: [Your Email]%0AExperience: [Your Experience]%0AJob Title: ${job["Job Title"]}`;
        
            return (
              <div key={index} className="grid-grow bg-white drop-shadow hover:shadow-md rounded-lg ease-in-out duration-300 bg-whitesmoke">
                <h1 className="py-5 px-2 font-semibold text-xl text-center">{job["Title"]}</h1>
                <p className="px-5 font-semibold">Location : {job["Location"]}</p>
                <p className="px-5 font-semibold">Experience : {job["Experience"]}</p>
                <p className="px-5 font-semibold mb-5">Salary : {job["Salary"]}</p>
                <div className="flex flex-col sm:flex-row mb-5 ml-5">
                <Link
                    href={`https://wa.me/${job["Whatsapp"]}?text=${templateMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300 my-2"
                >
                  Apply @WhatsApp
                </Link>
                <Link
                  href={`mailto:${emailRecipient}?subject=${encodeURIComponent(
                    emailSubject
                  )}&body=${encodeURIComponent(emailBody)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center bg-red-700 text-white px-4 py-2 rounded-full hover:bg-red-900 transition duration-300 mx-5 my-2"
                >
                  Apply @Email
                </Link>
                </div>
              </div>
            )})}
      </div>
    </div>
  );
};

export default JobList;
