import { Route, RouterProvider, Routes } from 'react-router-dom';
import './App.css';
import Main from './day06/router/Main';
import Intro from './day06/router/Intro';
import router from './day06/router/router';



function App() {
  return (
    <>
     {/* <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/intro' element={<Intro />} >
          <Route path=':title' element={<Intro />}></Route>
        </Route>
     </Routes> */}
     <RouterProvider router={router} />
    </>
  );
}

export default App;
