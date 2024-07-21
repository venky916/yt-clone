import Head from "./components/Head.jsx";
import Body from './components/Body.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from "./components/MainContainer.jsx";
import WatchPage from "./components/WatchPage.jsx";
import Demo from "./components/Demo.jsx";
import Demo2 from "./components/Demo2.jsx";
function App() {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Body />,
      children: [
        {
          path: '/',
          element: <MainContainer />,
        },
        {
          path: 'watch',
          element: <WatchPage />,
        },
        {
          path: 'demo',
          element: (
            <>
              <Demo />
              <Demo2/>
            </>
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

export default App
