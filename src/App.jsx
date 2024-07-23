import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Head from './components/Head.jsx';
import Body from './components/Body.jsx';
import MainContainer from './components/MainContainer.jsx';
import Error from './components/Error.jsx';

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
                <h1>Loading WatchPage....</h1>
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
                <h1>Loading Profile...</h1>
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
