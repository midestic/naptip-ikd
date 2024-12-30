import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Routes
} from 'react-router-dom';

import 'animate.css';


import RootLayout from './layouts/navbar/RootLayout';
import Home from './pages/homepage/Home.js';
import AboutUs from './pages/aboutUsPage/AboutUs.js';
import ImagePage from './pages/imagePage/ImagePage.js';
import VideoPage from './pages/videopage/VideoPage.js';
import Events from './pages/eventsPage/Events.js';
import Contact from './pages/Contact/Contact.js';



const router = createBrowserRouter(
  createRoutesFromElements(



    <Route path='/' element={<RootLayout />}>



      <Route index element={<Home />} />

      <Route path='aboutus' element={<AboutUs />} />

      <Route path='images' element={<ImagePage />} />

      <Route path='videos' element={<VideoPage />} />

      <Route path='events' element={<Events />} />

      <Route path='contact' element={<Contact />} />






    </Route>
  )
)



function App() {
  return (
    <div className="App">

      <RouterProvider router={router} />


    </div>
  );
}

export default App;
