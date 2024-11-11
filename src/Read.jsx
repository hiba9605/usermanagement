// // import axios from 'axios';
// // import React from 'react'
// // import { Link } from 'react-router-dom'


// // const read = () => {

 
// //   return (
// //     <div id='read' className='d-flex w-100 vh-100 justify-content-center align-items-center '>
// //       <div className='w-50 border border-5 border-dark-subtle bg-white shadow-lg px-5 pt-3 pb-5 rounded'> 
// //         <h1>Details of User</h1>
// //         <div className='mb-2'>
// //         <strong >Name:</strong>
// //       </div>
// //       <div className='mb-2'>
// //         <strong>Email:</strong>
// //         </div>
// //         <div className='mb-2'>
// //         <strong>Phone:</strong>
// //         </div>

    

// //         <Link to={`/update/:id`}><button className='btn btn-success'>Edit</button></Link>
// //         <Link to="/"><button className='ms-3 btn btn-primary'>Back</button></Link>

// //       </div>
// //     </div>
// //   )
// // }

// // export default read;



// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';

// const Read = () => {
//   const { id } = useParams(); // Get the user ID from the URL
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch user data when the component mounts
//   useEffect(() => {
//     axios
//       .get(`http://localhost:3000/users/${id}`)
//       .then(response => {
//         setUser(response.data);
//         setLoading(false);
//       })
//       .catch(err => {
//         setError('User not found');
//         setLoading(false);
//       });
//   }, [id]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div id='read' className='d-flex w-100 vh-100 justify-content-center align-items-center'>
//       <div className='w-50 border border-5 border-dark-subtle bg-white shadow-lg px-5 pt-3 pb-5 rounded'>
//         <h1>Details of User</h1>
//         {user && (
//           <>
//             <div className='mb-2'>
//               <strong>Name:</strong> {user.name}
//             </div>
//             <div className='mb-2'>
//               <strong>Email:</strong> {user.email}
//             </div>
//             <div className='mb-2'>
//               <strong>Phone:</strong> {user.phone}
//             </div>

//             {/* Dynamic Link to Update Page */}
//             <Link to={`/update/${user.id}`}>
//               <button className='btn btn-success'>Edit</button>
//             </Link>
//             <Link to="/">
//               <button className='ms-3 btn btn-primary'>Back</button>
//             </Link>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Read;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Read = () => {
  const { id } = useParams(); // Get the user ID from the URL
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user data when the component mounts
  useEffect(() => {
    axios
      .get(`https://usermanagement-server-sq6u.onrender.com/users/${id}`)
      .then(response => {
        setUser(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('User not found');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div id='read' className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border border-5 border-dark-subtle bg-white shadow-lg px-5 pt-3 pb-5 rounded'>
        <h1>Details of User</h1>
        {user && (
          <>
            <div className='mb-2'>
              <strong>Name:</strong> {user.name}
            </div>
            <div className='mb-2'>
              <strong>Email:</strong> {user.email}
            </div>
            <div className='mb-2'>
              <strong>Phone:</strong> {user.phone}
            </div>

            {/* Dynamic Link to Update Page */}
            <Link to={`/update/${user.id}`}>
              <button className='btn btn-success'>Edit</button>
            </Link>
            <Link to="/">
              <button className='ms-3 btn btn-primary'>Back</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Read;