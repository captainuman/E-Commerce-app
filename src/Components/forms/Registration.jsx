import * as yup from "yup"
import { useState } from 'react';
import axios from 'axios'
const Registration = ({setActive , setData}) => {
    const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobile: "",
    dob: "",
    gender: "",
    password: "",
    confirmPassword: "",
    adress : ''
    });

    const [errors, setErrors] = useState({});

    const schema = yup.object().shape({
    username: yup
        .string()
        .min(3, "Username too short")
        .required("Username is required"),

    email: yup
        .string()
        .email("Invalid email")
        .required("Email is required"),

    mobile: yup
        .string()
        .matches(/^[6-9]\d{9}$/, "Invalid Indian mobile number")
        .required("Mobile number is required"),

    dob: yup
        .date('must enter a date')
        .max(new Date(), "DOB cannot be in the future")
        .required("DOB is required"),

    gender: yup
        .string()
        .oneOf(["male", "female", "other"], "Select a valid gender")
        .required("Gender is required"),

    password: yup
        .string()
        .min(8, "Password must be at least 8 characters")
        .matches(/[A-Z]/, "One uppercase letter required")
        .matches(/[0-9]/, "One number required")
        .required("Password is required"),

    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords do not match")
        .required("Confirm password is required"),
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try 
        {
        await schema.validate(formData, { abortEarly: false });
        const res = await axios.post("https://e-commerce-app-backend-pi.vercel.app/users" , formData,
            {
                headers:{"Content-Type" : "application/json"}
            }
        )
        setErrors({});
        setActive(true)
        localStorage.setItem('formdata' , JSON.stringify(formData))
        } 
        catch (err) 
        {
            const newErrors = {};
            err.inner.forEach((error) => {
                newErrors[error.path] = error.message;
            });
        setErrors(newErrors);
        }
        
        setData(formData)
        localStorage.setItem('formdata',JSON.stringify(formData))
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    
  return (
    <div className='flex justify-center items-center h-screen overflow-auto bg-linear-to-r from-purple-500 to-pink-500 gap-10'>
      <div className="h-120 w-100 flex flex-col justify-center items-center">
            <h1></h1>
            <p className="text-5xl text-white text-center">Let's Make it Happen Together</p>
      </div>

      <div>
        <form onSubmit={handleSubmit}
        className='border-4 h-fit w-150 flex flex-col px-10 py-5 rounded-2xl border-white bg-linear-to-r from-purple-500 to-pink-500'>

            <h1 className='text-2xl text-white font-bold rounded py-2 pb-5'>Create An Account</h1>

            <div className="flex gap-5">
                <div className='flex flex-col w-60'>
                    <label className=' text-white font-bold'>Full Name</label>
                    <input name="username" 
                    placeholder="Username" 
                    value={formData.username}
                    onChange={handleChange} 
                    className='border-2 rounded text-white px-5 outline-none'/>
                    <p className="text-red-500">{errors.username}</p>
                </div>

                <div className='flex flex-col w-60'>
                    <label className=' text-white font-bold'>Email</label>
                    <input name="email" 
                    placeholder="Email" 
                    value={formData.email}
                    onChange={handleChange} 
                    className='border-2 rounded text-white px-5 outline-none'/>
                    <p className="text-red-500">{errors.email}</p>
                </div>
            </div>

            <div className="flex gap-5 mt-5">
                <div className='flex flex-col w-60'>
                    <label className=' text-white font-bold'>Mobile number</label>
                    <input name="mobile" 
                    placeholder="Mobile Number" 
                    value={formData.matches}
                    onChange={handleChange} 
                    className='border-2 rounded text-white px-5 outline-none'/>
                    <p className="text-red-500">{errors.mobile}</p>
                </div>

                <div className='flex flex-col w-60'>
                    <label className=' text-white font-bold'>Date-of-birth</label>
                    <input type="date" 
                    name="dob" 
                    value={formData.dob}
                    onChange={handleChange} 
                    className='border-2 rounded text-white px-5 outline-none'/>
                    <p className="text-red-500">{errors.dob}</p>
                </div>
            </div>

            <div className="flex gap-5 mt-5">
                <div className='flex flex-col w-60'>
                    <label className=' text-white font-bold'>Gender</label>
                    <select name="gender" 
                    value={formData.gender}
                    onChange={handleChange}
                    className='border-2 rounded text-white px-5 outline-none'>
                        <option value="" className="text-black">Select Gender</option>
                        <option value="male" className="text-black">Male</option>
                        <option value="female" className="text-black">Female</option>
                        <option value="other" className="text-black">Other</option>
                    </select>
                    <p className="text-red-500">{errors.gender}</p>
                </div >

                <div className='flex flex-col w-60'>
                    <label className=' text-white font-bold'>Adress</label>
                    <input name="adress" 
                    placeholder="Adress" 
                    value={formData.adress}
                    onChange={handleChange} 
                    className='border-2 rounded text-white px-5 outline-none'/>
                    <p className="text-red-500"></p>
                </div>
            </div>

            <div className="flex gap-5 mt-5">
                <div className='flex flex-col w-60'>
                    <label className=' text-white font-bold'>Password</label>
                    <input type="password" name="password" placeholder="Password" 
                    value={formData.password}
                    onChange={handleChange} 
                    className='border-2 rounded text-white px-5 outline-none'/>
                    <p className="text-red-500">{errors.password}</p>
                </div>

                <div className='flex flex-col w-60'>
                    <label className=' text-white font-bold'>Confirm Pasword</label>
                    <input type="password" name="confirmPassword" placeholder="Confirm Password"
                    onChange={handleChange}
                    className='border-2 rounded text-white px-5 outline-none'/>
                    <p className="text-red-500">{errors.confirmPassword}</p>
                </div>
            </div>

            <h1 className="text-white opacity-70 my-2">I hereby confirm the above details</h1>

            <button className='text-white w-60  px-10 py-1 bg-linear-to-r from-purple-500 to-pink-500 rounded border'> Create Account
            </button>
        </form>
      </div>
    </div>
  )
}

export default Registration
