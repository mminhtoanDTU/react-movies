import React, { Suspense } from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import styled from 'styled-components';

import {
  Navbar,
  MovieDetail,
  SearchBox,
  ShowList,
  ShowListHome,
  Loading,
  NotFound,
  ScrollToTop
} from './components';
import { Container } from './globalStyles';

const Phim = React.lazy(() => import('./Pages/Phim'));
const PhimLe = React.lazy(() => import('./Pages/PhimLe'));
const PhimBo = React.lazy(() => import('./Pages/PhimBo'));
const PhimHoatHinh = React.lazy(() => import('./Pages/PhimHoatHinh'));
const PhimChieuRap = React.lazy(() => import('./Pages/PhimChieuRap'));
const SearchPage = React.lazy(() => import('./Pages/SearchPage/SearchPage'));

function App() {

  const match = useRouteMatch();
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
              <Route exact path={`${match.url}/search`}>
                <SearchPage />
              </Route>
              <Route exact path={`${match.url}/:param`}>
                <MovieDetail />
              </Route>
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </ContainerContent>
      </Content>
      <Footer>
        Copyright © 2021 toandev.tk
      </Footer>
    </>
  );
}

const Content = styled.div`
    background-color: #081b27;
    min-height: calc(100vh - 60px);
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
