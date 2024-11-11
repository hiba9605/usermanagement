


// import React, { useEffect, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { deleteUserAPI, getUserAPI } from './services/allAPI';

// const Home = () => {
//   const [allUser, setAllUser] = useState([]);
//   const location = useLocation();

//   // Fetch users when the component mounts or when the state changes
//   useEffect(() => {
//     getAddUser();
//   }, [location.state]);

//   const getAddUser = async () => {
//     try {
//       const result = await getUserAPI();
//       if (result.status >= 200 && result.status < 300) {
//         setAllUser(result.data);
//       }
//     } catch (err) {
//       console.error('Error fetching users:', err);
//     }
//   };

//   const removeUser = async (id) => {
//     try {
//       await deleteUserAPI(id);
//       getAddUser(); 
//     } catch (err) {
//       console.error('Error deleting user:', err);
//     }
//   };

//   return (
//     <div id='main' className='d-flex flex-column justify-content-center align-items-center vh-100'>
//       <h1 style={{color:'white',fontSize:'60px',fontFamily:'sans-serif'}}>List of Users</h1>
//       <div className='w-75 rounded bg-white border shadow-lg p-4 border border-5 border-dark-subtle'>
//         <div className='d-flex justify-content-end'>
//           <Link to='/create' className='btn btn-success'>Add +</Link>
//         </div>
//         <table className='table table-striped'>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Phone</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {allUser.length > 0 ? (
//               allUser.map((user) => (
//                 <tr key={user.id}>
//                   <td>{user.id}</td>
//                   <td>{user.name}</td>
//                   <td>{user.email}</td>
//                   <td>{user.phone}</td>
//                   <td>
//                     <Link to={`/read/${user.id}`}>
//                       <button  className='btn btn-sm btn-info me-2'>Read</button>
//                     </Link>
//                     <Link to={`/update/${user.id}`}>
//                       <button className='btn btn-sm btn-primary me-2'>Edit</button>
//                     </Link>
//                     <button onClick={() => removeUser(user.id)} className='btn btn-sm btn-danger me-2'>Delete</button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5">No users found</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { deleteUserAPI, getUserAPI } from './services/allAPI';

const Home = () => {
  const [allUser, setAllUser] = useState([]);
  const location = useLocation();

  // Fetch users when the component mounts or when the state changes
  useEffect(() => {
    getAddUser();
  }, [location.state]);

  const getAddUser = async () => {
    try {
      const result = await getUserAPI();
      if (result.status >= 200 && result.status < 300) {
        setAllUser(result.data);
      }
    } catch (err) {
      console.error('Error fetching users:', err);
    }
  };

  const removeUser = async (id) => {
    try {
      await deleteUserAPI(id);
      getAddUser(); 
    } catch (err) {
      console.error('Error deleting user:', err);
    }
  };

  return (
    <div id='main' className='d-flex flex-column justify-content-center align-items-center vh-100'>
      <h1 style={{color:'white',fontSize:'60px',fontFamily:'sans-serif'}}>List of Users</h1>
      <div className='w-75 rounded bg-white border shadow-lg p-4 border border-5 border-dark-subtle'>
        <div className='d-flex justify-content-end'>
          <Link to='/create' className='btn btn-success'>Add +</Link>
        </div>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allUser.length > 0 ? (
              allUser.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <Link to={`/read/${user.id}`}>
                      <button className='btn btn-sm btn-info me-2'>Read</button>
                    </Link>
                    <Link to={`/update/${user.id}`}>
                      <button className='btn btn-sm btn-primary me-2'>Edit</button>
                    </Link>
                    <button onClick={() => removeUser(user.id)} className='btn btn-sm btn-danger me-2'>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No users found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;


