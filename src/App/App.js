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
import TestInMay from '../pages/testInMay/testInMay';
import TestInJune from '../pages/testInJune/testInJune';
import StarWarsPlanet from '../pages/starWarsPlanets/starWarsPlanets';
import StarWarsStarships from '../pages/starWarsStarships/starWarsStarships';
import StarWarsSpecie from '../pages/starWarsSpecie/starWarsSpecie';
import StarWarsVehicles from '../pages/starWarsVehicles/starWarsVehicles';
import StarWarsPeople from '../pages/starWarsPeople/starWarsPeople';
import ToDoList from '../pages/toDoList/toDoList';
import PriceList from '../pages/priceList/priceList';
import SignUp from '../registration/signUp';
import SignIn from '../registration/signIn';
import ChangePassword from '../registration/changePassword';
import ChangeEmail from '../registration/changeEmail';
import ResetPassword from '../registration/resetPassword';

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
        <Route path="/testInMay" component={TestInMay} />
        <Route path="/testInJune" component={TestInJune} />
        <Route path="/starWarsPlanet" component={StarWarsPlanet} />
        <Route path="/starWarsStarships" component={StarWarsStarships} />
        <Route path="/starWarsSpecie" component={StarWarsSpecie} />
        <Route path="/starWarsVehicles" component={StarWarsVehicles} />
        <Route path="/starWarsPeople" component={StarWarsPeople} />
        <Route path="/calculation" component={Calculation} />
        <Route path="/toDoList" component={ToDoList} />
        <Route path="/priceList" component={PriceList} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/signIn" component={SignIn} />
        <Route path="/changePassword" component={ChangePassword} />
        <Route path="/changeEmail" component={ChangeEmail} />
        <Route path="/resetPassword" component={ResetPassword} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
