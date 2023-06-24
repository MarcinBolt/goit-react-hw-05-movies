import { useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import css from './NotFound.module.css';

const NotFound = () => {
  const location = useLocation();
    const backToHome = useRef(location.state?.from ?? '/');
    const navigate = useNavigate();  
    const backNavigate = navigate(-1);

  return (
    <>
      <div className={css.container}>
        <h2 className={css.notFound}>Page did not find.</h2>
        <Link className={css.goBack} to={backNavigate}>
          Go back
        </Link>
        <Link className={css.goBack} to={backToHome.current}>
          Home
        </Link>
      </div>
    </>
  );
};
export default NotFound;
