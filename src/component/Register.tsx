import './style.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Form from './Form';

export default function Register() {
    const navigate=useNavigate();
    const submitData = (data)=>{
        axios.post("https://65a5093152f07a8b4a3e3769.mockapi.io/Data/data",data)
            .then(()=>{
                console.log("Data Updated");
            });
    
            navigate('/profiles');
    }
  return (
    <>
        <Form  submitData = {submitData}/>
    </>
  )
}
