import React, { Suspense } from 'react'
import './App.scss'
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Home from './Pages/Home'
import Footer from 'components/Footer'
import NotFound from './Pages/NotFound'
import Loading from 'components/Loading'
import CasePool from 'Pages/CasePool'
import CaseAguacate from 'Pages/CaseAguacate'

const CaseSolskenWeb = React.lazy(() => import("Pages/CaseSolskenWeb"))
const CaseSolsken = React.lazy(() => import("Pages/CaseSolsken"))
const CaseQuantum = React.lazy(() => import("Pages/CaseQuantum"))

function App() {
  return (
    <>
      <div id="content">
          <Router>
            <Suspense fallback={Loading}>
              <Switch>
                <Route exact path="/">
                  <Home/>
                </Route>
                <Route exact path="/solsken">
                  <CaseSolsken/>
                </Route>
                <Route exact path="/solskenweb">
                  <CaseSolskenWeb/>
                </Route>
                <Route exact path="/avocado">
                  <CaseAguacate/>
                </Route>
                <Route exact path="/quantumsnake">
                  <CaseQuantum/>
                </Route>
                <Route exact path="/pool">
                  <CasePool/>
                </Route>
                <Route>
                  <NotFound/>
                </Route>
              </Switch> 
            </Suspense>
          </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
