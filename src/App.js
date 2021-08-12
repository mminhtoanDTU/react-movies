import React, { Suspense, useEffect } from 'react';
import {
  Route, Switch, useLocation, useRouteMatch
} from "react-router-dom";
import styled from 'styled-components';
import {
  Loading, Navbar, NotFound, SearchBox
} from './components';
import { Container } from './globalStyles';


const Phim = React.lazy(() => import('./Pages/Phim'));
const PhimLe = React.lazy(() => import('./Pages/PhimLe'));
const PhimBo = React.lazy(() => import('./Pages/PhimBo'));
const PhimHoatHinh = React.lazy(() => import('./Pages/PhimHoatHinh'));
const PhimChieuRap = React.lazy(() => import('./Pages/PhimChieuRap'));
const SearchPage = React.lazy(() => import('./Pages/SearchPage'));
const DetailPage = React.lazy(() => import('./Pages/DetailPage'));

function App() {
  const match = useRouteMatch();
  const { pathname } = useLocation();

  useEffect(() => {
    window.document.title = `Toan Phim Hay`;
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <Content>
        <ContainerContent>
          <SearchBox />
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route exact path={match.url}>
                <Phim />
              </Route>
              <Route exact path={`/theloai/phimle`}>
                <PhimLe />
              </Route>
              <Route exact path={`/theloai/phimbo`}>
                <PhimBo />
              </Route>
              <Route exact path={`/theloai/phimhoathinh`}>
                <PhimHoatHinh />
              </Route>
              <Route exact path={`/theloai/phimchieurap`}>
                <PhimChieuRap />
              </Route>
              <Route exact path={`/phim/search`}>
                <SearchPage />
              </Route>
              <Route exact path={`/phim/:param`}>
                <DetailPage />
              </Route>
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </ContainerContent>
      </Content>
      <Footer>
        Copyright © 2021 <a href="https://toandev.tk" target="_blank">toandev.tk</a>
      </Footer>
    </>
  );
}

const Content = styled.div`
    background-color: #081b27;
    min-height: 100vh;
`;
const ContainerContent = styled(Container)`
    padding-top: 60px;
    color: #fff;
    @media screen and (min-width: 1024px) {
        padding-top: 80px;
    }
`
const Footer = styled.div`
    background-color: #0C2738;
    padding: 20px 0;
    text-align: center;
    color: #F1B722;
`

export default App;
