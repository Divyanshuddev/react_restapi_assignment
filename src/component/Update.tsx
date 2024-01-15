import Form from './Form'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {useLocation} from 'react-router-dom';
const Update = (props) => {
    const navigate=useNavigate();
    const location = useLocation();
    
    const formData = {
        first_name: location?.state?.posts?.first_name,
        last_name: location?.state?.posts?.last_name,
        email:location?.state?.posts?.email,
        phoneNumber: location?.state?.posts?.phoneNumber
    }
    const submitData = (data)=>{
        axios.post(`https://65a5093152f07a8b4a3e3769.mockapi.io/Data/data/${location.state.id}`,data)
            .then(()=>{
                console.log("Data Updated");
            });
    
            navigate('/profiles');
    }
  return (
    <Form formData = {formData} submitData = {submitData}/>
  )
}

export default Update
