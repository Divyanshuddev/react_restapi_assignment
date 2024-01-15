import Card from './Card';
import { useEffect, useState} from 'react';
import './style.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Profiles() {
    const [mydata,setUserdata]=useState([]);
    const navigate = useNavigate();
    const getData = async()=>{
        await axios.get("https://65a5093152f07a8b4a3e3769.mockapi.io/Data/data")
        .then((res)=>setUserdata(res.data));
    }
    useEffect(()=>{
        getData();
    },[mydata])

   const handleDelete=(id:number)=>{
    axios.delete(`https://65a5093152f07a8b4a3e3769.mockapi.io/Data/data/${id}`)
    .then(()=>{
        getData();
    })
   }
  return (
    <>
        <div style={{fontSize:"100px",textAlign:"center"}}>Profiles</div>
        <div className='profile'>
            {
                mydata.map((posts)=>{
                    const {id,first_name,last_name,email,phoneNumber} = posts;
                    return (
                        <div key={id}>
                            <Card first_name={first_name} last_name={last_name} email={email} phoneNumber={phoneNumber}/>
                            <button onClick={()=>handleDelete(id)}>Delete</button>
                            <button onClick={()=>navigate("/update",)}>Update</button>
                         </div>
                         
                    )
                })
            }
            
        </div>
        
    </>
  )
}
