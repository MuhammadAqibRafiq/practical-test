import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Question1 from './component/Question1';
import Question2 from './component/Question2';
import Question3 from './component/Question3';
import Question4 from './component/Question4';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



import { useGetAllPostQuery } from './services/post'


function App() {

  const { data, error, isLoading } = useGetAllPostQuery()

  console.log(data)

  return (
    <div className="">

      {/* <Navbar /> */}
      {/* <Question2 data={data} error={error} isLoading={isLoading} /> */}
     
      <Router>
        <Navbar />
        {/* <Question2 /> */}

        <Routes>
          <Route exact path='/' element={<Question1 />} />
          <Route path='/question2' element={<Question2  />} data={data} error={error} isLoading={isLoading} />
          <Route exact path='/question3' element={<Question3 />} />
          <Route path='/question4' element={<Question4 />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;


/* <Question2 data={data} error={error} isLoading={isLoading} /> */ 
/* <Question3  /> */
/* <Question4 /> */