import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import general from '../pages/general/general';
import SevenPage from '../pages/sevenPage/sevenPage';
import FourPage from '../pages/fourPage/fourPage';
import FirstPage from '../pages/firstPage/firstPage';
import SecondPage from '../pages/secondPage/secondPage';
import ThreePage from '../pages/threePage/threePage';
import FivePage from '../pages/fivePage/fivePage';
import SixPage from '../pages/sixPage/sixPage';
import EightPage from '../pages/eightPage/eightPage';
import Calculation from '../pages/calculation/calculation';
import NinePage from '../pages/ninePage/ninePage';
import TenPage from '../pages/tenPage/tenPage';
import Test from '../pages/Test/Test';
import TestInMarch from '../pages/testInMarch/testInMarch';
import TestInApril from '../pages/testInApril/testinApril';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={general} exact />
        <Route path="/sevenPage" component={SevenPage} />
        <Route path="/fourPage" component={FourPage} />
        <Route path="/firstPage" component={FirstPage} />
        <Route path="/secondPage" component={SecondPage} />
        <Route path="/threePage" component={ThreePage} />
        <Route path="/fivePage" component={FivePage} />
        <Route path="/sixPage" component={SixPage} />
        <Route path="/eightPage" component={EightPage} />
        <Route path="/ninePage" component={NinePage} />
        <Route path="/tenPage" component={TenPage} />
        <Route path="/test" component={Test} />
        <Route path="/testInMarch" component={TestInMarch} />
        <Route path="/testInApril" component={TestInApril} />
        <Route path="/calculation" component={Calculation} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
