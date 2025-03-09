import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Head from './components/Head.jsx';
import Body from './components/Body.jsx';
import MainContainer from './components/MainContainer.jsx';
import Error from './components/Error.jsx';
import { FaCircleNotch } from 'react-icons/fa';

const WatchPage = lazy(() => import('./components/WatchPage.jsx'));
const Profile = lazy(() => import('./components/Profile.jsx'));

function App() {
  console.log('App component rendered'); // Debug log

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Body />,
      errorElement: <Error className="flex justify-center items-center" />,
      children: [
        {
          path: '/',
          element: <MainContainer />,
        },
        {
          path: 'watch',
          element: (
            <Suspense
              fallback={
                <div className="flex flex-col justify-center items-center h-screen">
                  <FaCircleNotch className="animate-spin text-4xl text-blue-500 mb-4" />
                  <p className="text-gray-600">Loading WatchPage...</p>
                </div>
              }
            >
              <WatchPage />
            </Suspense>
          ),
        },
        {
          path: 'profile',
          element: (
            <Suspense
              fallback={
                <div className="flex flex-col justify-center items-center h-screen">
                  <FaCircleNotch className="animate-spin text-4xl text-blue-500 mb-4" />
                  <p className="text-gray-600">Loading Profile...</p>
                </div>
              }
            >
              <Profile />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <Head />
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
