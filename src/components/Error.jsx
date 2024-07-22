import { useRouteError } from 'react-router-dom';

const Error = () => {
  const err = useRouteError();
  const { status, statusText } = err;
  return (
    <div className='p-4 mx-auto flex flex-col w-2/4 justify-center items-center bg-red-600 text-white'>
      <h1>OOPS!!!!!!!!!!!!!</h1>
      <h2>Something Went Wrong</h2>
      <h2>{status + ' : ' + statusText}</h2>
    </div>
  );
};

export default Error;
