import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Dashboard = () => {
  const [jobs, setJobs] = useState([]);
  const name = localStorage.getItem('name')

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      
      try {
        const response = await axios.get("http://localhost:3000/api/v1/jobs", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setJobs(response.data.jobs);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <p>Dashboard .. Welcome {name}</p>
      <ul>
        {jobs.map(job => (
          <li key={job._id}>
            {job.company} - {job.position}
          </li>
        ))}
      </ul>
    </>
  );
};
