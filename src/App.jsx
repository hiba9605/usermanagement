
// import { BrowserRouter ,Routes,Route } from 'react-router-dom'
// import Home from './Home'
// import Create from './Create'
// import Update from './Update'
// import Read from './Read'


// import './App.css'

// function App() {

//   return (
//     <>
//      <BrowserRouter>
//      <Routes>
//       <Route path='/' element={<Home/>}></Route>
//       <Route path='/create' element={<Create/>}></Route>
//       <Route path='/update/:id' element={<Update/>}></Route>
//       <Route path='/read/:id' element={<Read/>}></Route>

//      </Routes>


//      </BrowserRouter>
//     </>
//   )
// }

// export default App


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Create from './Create';
import Update from './Update';
import Read from './Read';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for the Home page, which lists all users */}
        <Route path='/' element={<Home />} />
        
        {/* Route to create a new user */}
        <Route path='/create' element={<Create />} />
        
        {/* Route to update an existing user by ID */}
        <Route path='/update/:id' element={<Update />} />
        
        {/* Route to read a user's details by ID */}
        <Route path='/read/:id' element={<Read />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;