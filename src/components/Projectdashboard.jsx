import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import axiosInstance from "../axiosinterceptor";

import Typography from '@mui/material/Typography';

const Projectdashboard = () => {

  const [formData, setFormData] = useState("");

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const currentDate = new Date();
      const currentDay = currentDate.getDay(); // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
      //       Sunday: 0
      // Monday: 1
      // Tuesday: 2
      // Wednesday: 3
      // Thursday: 4
      // Friday: 5
      // Saturday: 6
      // const currentDay='Sun Apr 29 2024 21:43:20 GMT+0530 (India Standard Time)';
      // Check if it's Saturday (day 6) or Sunday (day 0)
      if (currentDay === 6 || currentDay === 0) {
        const response = await axiosInstance.post("https://hosting-project-1.onrender.com/api/student/weekly-submission", { data: formData });
        console.log(response.data); // Log the response from the backend
      } else {
        alert("Weekly submission is only allowed on weekends."); // Inform the user that submission is only allowed on weekends
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div

      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center", // Center vertically
        minHeight: "100vh", // Full height of the viewport
        background: "linear-gradient(130deg, #231a6f, #0f054c)", // Background gradient

      }}
    >


      <div style={{ flex: 3, padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="h5" align="center" color="white">
            PROJECT-DASHBOARD
          </Typography>
        </div>
        <br></br>
        <br />
        <div style={{ padding: '40px' }}>
          <Accordion sx={{ width: "100%" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                fontSize: "1.2rem", backgroundColor: "#D3D3D3", color: " #000000",
                "&:hover": {
                  backgroundColor: "#A9A9A9", // Change background color on hover 
                  color: "#FFFFFF"
                }
              }} // Increase font size and add background color
            >
              Project Summary
            </AccordionSummary>
            <AccordionDetails>
              <div style={{ fontSize: window.innerWidth <= 768 ? "1 rem" : "1.2rem", textAlign: 'start' }}>
                {" "}
                {/* Increase font size */}
                This is an online blood bank management system that helps in managing various blood bank operations effectively.
                The project consists of a central depository containing various blood deposits available along with associated details.
                These details include blood type, storage area and date of storage. Maintenance and the monitoring of blood deposits
                become easy with the help of this system. The project is an online system that provides an option to check the availability
                of the required blood group within the blood bank. Moreover, the system also has added features such as patient name and
                contacts, blood booking and requirement of blood group is posted on the website to find available donors for a blood
                emergency.This online system is developed on .net platform and supported by an Sql database to store blood and
                user specific details.
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion defaultExpanded sx={{ width: "100%" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
              sx={{
                fontSize: "1.2rem", backgroundColor: "#D3D3D3", color: " #000000",
                "&:hover": {
                  backgroundColor: "#A9A9A9", // Change background color on hover 
                  color: "#FFFFFF"
                }
              }} // Increase font size and add background color
            >
              Project Overview Document
            </AccordionSummary>
            <AccordionDetails>
              <div style={{ fontSize: window.innerWidth <= 768 ? "1 rem" : "1.2rem", textAlign: 'start' }}>
                {" "}
                {/* Increase font size */}
                <a href="https://docs.google.com/document/d/1NFIpLm62qxZioa0gjIQVBszXldxytYklehKvAbrPyy4/edit?usp=sharing">Detailed documentation of the project must be provided in the pdf or document Format.
                </a>
              </div>
            </AccordionDetails>
            <AccordionActions>
              <Button>Cancel</Button>
              <Button>Agree</Button>
            </AccordionActions>
          </Accordion>
          <Accordion sx={{ width: "100%" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                fontSize: "1.2rem", backgroundColor: "#D3D3D3", color: " #000000",
                "&:hover": {
                  backgroundColor: "#A9A9A9", // Change background color on hover 
                  color: "#FFFFFF"
                }
              }} // Increase font size and add background color
            >
              Technologies Used
            </AccordionSummary>
            <AccordionDetails>
              <div style={{ fontSize: window.innerWidth <= 768 ? "1 rem" : "1.2rem", textAlign: 'start' }}>
                React, Node.js, Express, MongoDB
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ width: "100%" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                fontSize: "1.2rem", backgroundColor: "#D3D3D3", color: " #000000",
                "&:hover": {
                  backgroundColor: "#A9A9A9", // Change background color on hover 
                  color: "#FFFFFF"
                }
              }} // Increase font size and add background color
            >
              Team Size
            </AccordionSummary>
            <AccordionDetails>
              <div style={{ fontSize: window.innerWidth <= 768 ? "1 rem" : "1.2rem", textAlign: 'start' }}>
                {" "}
                {/* Increase font size */}
                A group of 4 or 5 Members
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ width: "100%" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                fontSize: "1.2rem", backgroundColor: "#D3D3D3", color: " #000000",
                "&:hover": {
                  backgroundColor: "#A9A9A9", // Change background color on hover 
                  color: "#FFFFFF"
                }
              }} // Increase font size and add background color
            >
              Duration
            </AccordionSummary>
            <AccordionDetails>
              <div style={{ fontSize: window.innerWidth <= 768 ? "1 rem" : "1.2rem", textAlign: 'start' }}>
                {" "}
                {/* Increase font size */}
                Three to five months.
              </div>
            </AccordionDetails>
          </Accordion>






          <Accordion sx={{ width: "100%" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                fontSize: "1.2rem", backgroundColor: "#D3D3D3", color: " #000000",
                "&:hover": {
                  backgroundColor: "#A9A9A9", // Change background color on hover 
                  color: "#FFFFFF"
                }
              }} // Increase font size and add background color
            >
              Reference materials
            </AccordionSummary>
            <AccordionDetails>
              <div style={{ fontSize: window.innerWidth <= 768 ? "1 rem" : "1.2rem", textAlign: 'start' }}>
                {" "}
                {/* Increase font size */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </div>
            </AccordionDetails>
          </Accordion>

        </div>
      </div>
      <div style={{ background: "red", flex: 1 }}>
        {/* Content for the right side */}
      </div>
    </div>


  );
};

export default Projectdashboard;