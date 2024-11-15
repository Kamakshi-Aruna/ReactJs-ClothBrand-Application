// import React from 'react';
// import Navbar from './components/Navbar/Navbar';


// const App = () => {
//   return (
//     <div>
//       <Navbar/>
//         <div style={{ padding: '20px', textAlign: 'center' }}>
//         <h1>Welcome to the Clothing Brand Website!</h1>
//         <p>Explore our amazing collection of clothes and accessories.</p>
//       </div>
//     </div>
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/LandingPage/HomePage';
import SignUpPage from './components/Authentication/SignupPage';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={<SignUpPage/>} />
      </Routes>
    </Router>
  );
};

export default App;

