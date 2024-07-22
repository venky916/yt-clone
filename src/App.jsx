import Head from './components/Head.jsx';
import Body from './components/Body.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer.jsx';
import Error from './components/Error.jsx';
import {lazy, Suspense } from 'react';


const WatchPage = lazy(() => import('./components/WatchPage.jsx'));
const Profile = lazy(()=>import('./components/Profile.jsx'));

function App() {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Body />,
      errorElement: <Error  className='flex justify-center items-center'/>,
      children: [
        {
          path: '/',
          element: <MainContainer />,
        },
        {
          path: 'watch',
          element: (
            <Suspense fallback={<h1 className='mt-[50%] bg-red-800'>Loading....</h1>}>
              <WatchPage />
            </Suspense>
          ),
        },
        {
          path :'profile',
          element :(
            <Suspense fallback={<h1>Loading</h1>}>
              <Profile/>
            </Suspense>
          )
        }
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
