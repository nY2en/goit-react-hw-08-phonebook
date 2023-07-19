import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Navigation } from 'components/Navigation';
import { UserMenu } from 'components/UserMenu';

import { Header, Div } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <Div>
          <Navigation />
          <UserMenu />
        </Div>
      </Header>

      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>

      <footer></footer>
    </>
  );
};
