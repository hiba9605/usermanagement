
// import React, { useEffect, useState } from 'react';
// import { Link, useParams, useNavigate } from 'react-router-dom';
// import { updateUserAPI, getUserAPI } from './services/allAPI'; // Assuming getUserAPI is used to fetch user details

// const Update = () => {
//   const { id } = useParams(); // Get user ID from URL
//   const navigate = useNavigate();
//   const [userDetails, setUserDetails] = useState({
//     name: '',
//     email: '',
//     phone: ''
//   });

//   // Fetch the user's current data when the component mounts
//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const result = await getUserAPI(id);
//         setUserDetails(result.data); // Set user data to form fields
//       } catch (err) {
//         console.error('Error fetching user data:', err);
//       }
//     };
//     fetchUserData();
//   }, [id]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserDetails((prevDetails) => ({
//       ...prevDetails,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await updateUserAPI(id, userDetails); // Pass the updated user details to the API
//       console.log('User updated successfully');
//       navigate('/'); // Redirect back to the homepage or another route after updating
//     } catch (err) {
//       console.error('Error updating user:', err);
//     }
//   };

//   return (
//     <div id='update' className='d-flex w-100 vh-100 justify-content-center align-items-center'>
//       <div className='w-50 border border-5 border-dark-subtle bg-white shadow-lg px-5 pt-3 pb-5 rounded'>
//         <h1>Update User</h1>
//         <form onSubmit={handleSubmit}>
//           <div className='mb-2'>
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               name="name"
//               className='form-control'
//               placeholder='Enter Name'
//               value={userDetails.name}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className='mb-2'>
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               name="email"
//               className='form-control'
//               placeholder='Enter Email'
//               value={userDetails.email}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className='mb-3'>
//             <label htmlFor="phone">Phone</label>
//             <input
//               type="text"
//               name="phone"
//               className='form-control'
//               placeholder='Enter Phone'
//               value={userDetails.phone}
//               onChange={handleInputChange}
//             />
//           </div>
//           <button type="submit" className='btn btn-success'>Update</button>
//           <Link to="/">
//             <button type="button" className='ms-3 btn btn-primary'>Back</button>
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Update;


import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { updateUserAPI, getUserAPI } from './services/allAPI';

const Update = () => {
  const { id } = useParams(); // Get user ID from URL
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: ''
  });

  // Fetch the user's current data when the component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const result = await getUserAPI(id);
        setUserDetails(result.data); // Set user data to form fields
      } catch (err) {
        console.error('Error fetching user data:', err);
      }
    };
    fetchUserData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUserAPI(id, userDetails); // Pass the updated user details to the API
      console.log('User updated successfully');
      navigate('/'); // Redirect back to the homepage after updating
    } catch (err) {
      console.error('Error updating user:', err);
    }
  };

  return (
    <div id='update' className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border border-5 border-dark-subtle bg-white shadow-lg px-5 pt-3 pb-5 rounded'>
        <h1>Update User</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-2'>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className='form-control'
              placeholder='Enter Name'
              value={userDetails.name}
              onChange={handleInputChange}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className='form-control'
              placeholder='Enter Email'
              value={userDetails.email}
              onChange={handleInputChange}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              name="phone"
              className='form-control'
              placeholder='Enter Phone'
              value={userDetails.phone}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className='btn btn-success'>Update</button>
          <Link to="/">
            <button type="button" className='ms-3 btn btn-primary'>Back</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Update;