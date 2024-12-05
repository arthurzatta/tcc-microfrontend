import { createBrowserHistory } from "history";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home/page";
import Router from "./routes/router";
import Template from "./template/template";

enum Basenames {
  ROOT = "/",
}

const Auth = React.lazy(() =>
  import("./page/Auth/page").catch(() => ({
    default: () => <div>Failed to load</div>,
  }))
);

function App() {
  const browserHistory = createBrowserHistory();

  return (
    <Suspense fallback="Loading Auth...">
      <Router history={browserHistory}>
        <Routes>
          <Route element={<Template />}>
            <Route path="/" element={<Home />} />
            <Route
              path={Basenames.ROOT + "*"}
              element={
                <Auth history={browserHistory} basename={Basenames.ROOT} />
              }
            />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
