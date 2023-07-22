import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Navigation } from 'components/Navigation';
import { UserMenu } from 'components/UserMenu';

import { Header, HeaderDiv, MainDiv } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <HeaderDiv>
          <Navigation />
          <UserMenu />
        </HeaderDiv>
      </Header>

      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <section>
            <MainDiv>
              <Outlet />
            </MainDiv>
          </section>
        </main>
      </Suspense>

      <footer></footer>
    </>
  );
};
