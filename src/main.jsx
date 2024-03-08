import ReactDOM from 'react-dom/client';
// Todo: Bring in the appropriate imports
import {createBrowserRouter, RouterProvider } from 'react-router-dom';

// Bringing in the required imports from 'react-router-dom' to set up application routing behavior

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from './App';
import Error from './pages/Error';
import Header from './components/Header';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import AboutMe from './pages/AboutMe';
import Resume from './pages/Resume';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
        {
            index: true,
            element: <Header />,
          },
      {
        path: '/Portfolio',
        element: <Portfolio />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/About',
        element: <AboutMe />, 
      },
      {
        path: '/Resume',
        element: <Resume />, 
      },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);