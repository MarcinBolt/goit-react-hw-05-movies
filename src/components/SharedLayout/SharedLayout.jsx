import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink className={css.navLink} to="/">
            Home
          </NavLink>
          <NavLink className={css.navLink} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
