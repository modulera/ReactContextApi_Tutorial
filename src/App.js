import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProtectedRoute from "./pages/ProtectedRoute";

import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";
import Profile from "./pages/Profile";

// import Admin from "./pages/Admin";
// import Error404 from "./pages/Error404";

import { Header } from './components';
import { HomePage } from './pages/HomePage';

import Employees from './pages/Employees';

function App() {
  return (
    <div className="App">
      <div className="container-xl">

        <Router>
          <>
            <Header />

            <Switch>
              <Route path="/" exact component={HomePage} />

              <Route path="/signin" component={Signin} />
              <Route path="/signup" component={Signup} />

              <ProtectedRoute path="/profile" component={Profile} />
              <ProtectedRoute path="/employees" component={Employees} />
              
              {/* <ProtectedRoute path="/admin" component={Admin} admin={true} /> */}
              {/* <Route path="*" component={Error404} /> */}
            </Switch>

          </>
        </Router>

      </div>
    </div>
  );
}

export default App;
