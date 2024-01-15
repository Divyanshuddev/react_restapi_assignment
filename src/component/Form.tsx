import {useForm} from "react-hook-form";

type FormValues={
    first_name:string;
    last_name:string;
    email:string;
    phoneNumber:string;
}
const Form = (props) => {
    
    const form = useForm<FormValues>({

        defaultValues:{
            first_name:props?.formData?.first_name || "",
            last_name:props?.formData?.last_name||"",
            email:props?.formData?.email||"",
            phoneNumber:props?.formData?.phoneNumber||"",
        }
    });

    const {register,handleSubmit,formState}=form;
    const {errors,}=formState;
    
    const onSubmit=(data:FormValues)=>{
        console.log("I am here");
        props?.submitData(data);
        
    }


    let flag:number;
    flag=0;
    let phone_number:string;
    let arrPhone:string[];
  return (
    <div className='component'>

    <form onSubmit={handleSubmit(onSubmit)} noValidate>

            <div>
                <label htmlFor="first_name">First Name</label>
                <input type="text" {...register("first_name",{required:{value:true,message:"First name is required"}})} />
                <p>{errors.first_name?.message}</p>
            </div>


            <div>
            <label htmlFor="last_name">Last Name</label>
            <input type="text" {...register("last_name",{required:{value:true,message:"Last name is required"}})} />
            <p>{errors.last_name?.message}</p>
            </div>

            <div>
            <label htmlFor="email">Email</label>
            <input type="email" {...register("email",{pattern:{value:/^([a-zA-Z0-9_\-/.]+)@([a-zA-Z0-9_/-]+)(\.[a-zA-Z]{2,5}){1,2}$/,message:"Invalid Email format"},validate:(fieldValue)=>{return (fieldValue!==""||"Email is required")}})} />
            <p>{errors.email?.message}</p>
            </div>

            <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="text" {...register("phoneNumber",{required:{value:true,message:"Phone number is required"},validate:(fieldValue)=>{
                phone_number=fieldValue;
                arrPhone=phone_number.split('');
                arrPhone.map((e,id)=>{
                    
                    if ((fieldValue.charCodeAt(id)<48||fieldValue.charCodeAt(id)>57))
                    {
                        flag=1;
                    }
                })
                if (flag==1)
                {
                    flag=0;
                    return "Phone number contain digits only";
                }
                else{
                    return (fieldValue.length===10||"Phone number should be 10 digits");
                }
                
                }})} />
            <p>{errors.phoneNumber?.message}</p>
            </div>

            <div>
                
                <button >Submit</button>
                
            </div>
    </form>
    </div>
  )
}

export default Form
