// import axios from 'axios'
// import React,{useState} from 'react'
// import { Link } from 'react-router-dom'
// import { addUserAPI } from './services/allAPI'


// const Create = () => {

//   const [userDetails,setUserDetails]=useState({
//     name:"" ,email:"",phone:""
//   })
//   console.log(userDetails);

//   const handleAddUser=async()=>{
//     const {name,email,phone}=userDetails
//     if(name && email && phone){
//       try{
//         await addUserAPI(userDetails)
//         console.log(result);
        
        
//       }catch(err){
//         console.log(err);
        
//       }

//     }else{
//       alert("please fill the form")
//     }
//   }




//   return (
//     <div id='create' className='d-flex w-100 vh-100 justify-content-center align-items-center '>
//       <div className='w-50 border border-5  border-dark-subtle bg-white shadow-lg px-5 pt-3 pb-5 rounded'>
//         <h1>Add a User</h1>
//         <form>
//           <div className='mb-2'>
//             <label htmlFor="name">Name:</label>  <br />
//             <input onChange={e=>setUserDetails({...userDetails,name:e.target.value})} type="text" name='name' className='form-control' placeholder='Enter Name'/>
//           </div>
//           <div className='mb-2'>
//             <label htmlFor="name">Email:</label>  <br />
//             <input  onChange={e=>setUserDetails({...userDetails,email:e.target.value})} type="email" name='email' className='form-control' placeholder='Enter Email' />
//           </div>
//           <div className='mb-3'>
//             <label htmlFor="name">Phone:</label>  <br />
//             <input  onChange={e=>setUserDetails({...userDetails,phone:e.target.value})} type="text" name='phone' className='form-control' placeholder='Enter Phone' />
//           </div>
//           <button onClick={handleAddUser} className='btn btn-success'>Submit</button>
//           <Link to="/" className='btn btn-primary ms-3'>Back</Link>

//         </form>
//       </div>
//     </div>
//   )
// }

// export default Create

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { addUserAPI } from './services/allAPI';

const Create = () => {
  const [userDetails, setUserDetails] = useState({
    name: "", email: "", phone: ""
  });
  const navigate = useNavigate(); // To redirect after adding user

  const handleAddUser = async (e) => {
    e.preventDefault();
    const { name, email, phone } = userDetails;
    if (name && email && phone) {
      try {
        const result = await addUserAPI(userDetails);
        console.log(result);
        navigate('/'); // Redirect to home page after successful addition
      } catch (err) {
        console.error('Error adding user:', err);
      }
    } else {
      alert("Please fill out the form.");
    }
  };

  return (
    <div id='create' className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border border-5 border-dark-subtle bg-white shadow-lg px-5 pt-3 pb-5 rounded'>
        <h1>Add a User</h1>
        <form onSubmit={handleAddUser}>
          <div className='mb-2'>
            <label htmlFor="name">Name:</label>
            <input
              onChange={e => setUserDetails({ ...userDetails, name: e.target.value })}
              type="text"
              name='name'
              className='form-control'
              placeholder='Enter Name'
            />
          </div>
          <div className='mb-2'>
            <label htmlFor="email">Email:</label>
            <input
              onChange={e => setUserDetails({ ...userDetails, email: e.target.value })}
              type="email"
              name='email'
              className='form-control'
              placeholder='Enter Email'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor="phone">Phone:</label>
            <input
              onChange={e => setUserDetails({ ...userDetails, phone: e.target.value })}
              type="text"
              name='phone'
              className='form-control'
              placeholder='Enter Phone'
            />
          </div>
          <button type="submit" className='btn btn-success'>Submit</button>
          <Link to="/" className='btn btn-primary ms-3'>Back</Link>
        </form>
      </div>
    </div>
  );
};

export default Create;

