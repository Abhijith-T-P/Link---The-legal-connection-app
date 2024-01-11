import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../../config/Firebase';
import { Typography } from '@mui/material';

const ViewCase = () => {
    const [caseDisp, setCaseDisp] = useState([]);

    const dispaly = async () => {
      const data = await getDocs(collection(db, "PoliceComplaint"));
      const filteredData = data.docs.map((doc, key) => ({
        ...doc.data(),
        id: doc.id,
        timestamp: doc.data().timestamp.toDate(), // Convert timestamp to JavaScript Date object
      }));
      console.log(filteredData);
      setCaseDisp(filteredData);
    };
  
    useEffect(() => {
      dispaly();
    }, []);
  
  return (
    <div className='ViewCase'>
<Typography variant='h2' >Case View</Typography>

<div className="caseVieContainer">
    {caseDisp.map((row,key)=>(

        <div className="CaseContainer">
        <div className="Name">Complainte name : {row.complainantName} </div>
        <div className="type">Type : </div>
        <div className="number">Number : {row.contactNumber} </div>
        <div className="description">Description : {row.complaintDescription} </div>
        <div className="date">Date : {row.timestamp.toDateString()} </div>
        <div className="img">Document link : {row.documentURLs} </div>
    </div>
        ))}
</div>
    </div>
  )
}

export default ViewCase