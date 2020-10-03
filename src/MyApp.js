import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import routes from "./routes";

export default function MyApp() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "10px",
            width: "120px",
            background: "#d0d0d0"
          }}
        >
          <h2>My App</h2>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {routes.map((route, index) => (
              <li key={index}>
                <Link to={route.path}>{route.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            {routes.map((route, index) => (
              // Using children instead of component so that route.component can be set to HomeView or <HomeView/>
              // Using children does not work with hooks, useRouteMatch. Reverting back to component
              <Route
                key={index}
                path={route.path}
                component={route.component}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}
