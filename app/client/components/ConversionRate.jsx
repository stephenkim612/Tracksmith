import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory";

const rows = [];

const ConversionRates = () => {

const conversionData = useSelector((state) => state.conversions);

console.log(conversionData)

// useEffect(() => {
//   fetch('api/getApplications', {
//     method: 'POST',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify({username: findUsername})
//   }).then((response) => response.json()).then(data => {
//       for(let i = 0; i < data.length;i++) {
//         const currentApplication = {
//           id: data[i].application_id,
//           companyName: data[i].company,
//           position: data[i].job_title,
//           date: data[i].application_date,
//           coverLetter: data[i].cover_letter,
//           resumeSubmitted: data[i].resume_submitted,
//           HRScreen: data[i].hr_date,
//           technicalInterview: data[i].t1_date,
//           onSite: data[i].onsite,
//           status: data[i].application_status,
//           notes: data[i].notes
//         };
//       rows.push(currentApplication);
//     }
//     setAllApplications(rows)})
// }, []);

return (
<>
    <h1>Conversion Rate Chart</h1>
    <Link to="/dashboard">
      <Button variant="contained">
        Back
      </Button>
    </Link>
    <VictoryChart
      padding={{ top: 40, bottom: 80, left: 40, right: 80 }}
      theme={VictoryTheme.material}
      domainPadding={{ x: 10 }}
      height={210}
      width={300}
    >
      <VictoryBar
        barWidth={({ index }) => (index + 1) * 2 + 10}
        cornerRadius={{ topLeft: ({ datum }) => datum.x * 4 }}
        style={{ data: { fill: "#F4511E" } }}
        data={[
          { x: 1, y: conversionData?.totals, label: "Total Applications" },
          { x: 2, y: conversionData?.hrScreen, label: "Initial Phone Call" },
          { x: 3, y: conversionData?.technicalInterview, label: "Technical Interwiews" },
          { x: 4, y: conversionData?.onSite, label: "OnSite Interwiews" },
          { x: 5, y: 5, label: "Offers" },
        ]}
      />
    </VictoryChart>
  </>
  )
}
  //getApplications()
  
  
export default ConversionRates;