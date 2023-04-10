import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const DealsOne = React.lazy(() => import("pages/DealsOne"));
const WebApplicationEleven = React.lazy(
  () => import("pages/WebApplicationEleven")
);
const WebApplicationTen = React.lazy(() => import("pages/WebApplicationTen"));
const WebApplicationNine = React.lazy(() => import("pages/WebApplicationNine"));
const WebApplicationEight = React.lazy(
  () => import("pages/WebApplicationEight")
);
const WebApplicationSeven = React.lazy(
  () => import("pages/WebApplicationSeven")
);
const WebApplicationSix = React.lazy(() => import("pages/WebApplicationSix"));
const WebApplicationFive = React.lazy(() => import("pages/WebApplicationFive"));
const WebApplicationFour = React.lazy(() => import("pages/WebApplicationFour"));
const WebApplicationThree = React.lazy(
  () => import("pages/WebApplicationThree")
);
const WebApplicationTwo = React.lazy(() => import("pages/WebApplicationTwo"));
const WebApplicationOne = React.lazy(() => import("pages/WebApplicationOne"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<WebApplicationOne />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/webapplicationtwo" element={<WebApplicationTwo />} />
          <Route
            path="/webapplicationthree"
            element={<WebApplicationThree />}
          />
          <Route path="/webapplicationfour" element={<WebApplicationFour />} />
          <Route path="/webapplicationfive" element={<WebApplicationFive />} />
          <Route path="/webapplicationsix" element={<WebApplicationSix />} />
          <Route
            path="/webapplicationseven"
            element={<WebApplicationSeven />}
          />
          <Route
            path="/webapplicationeight"
            element={<WebApplicationEight />}
          />
          <Route path="/webapplicationnine" element={<WebApplicationNine />} />
          <Route path="/webapplicationten" element={<WebApplicationTen />} />
          <Route
            path="/webapplicationeleven"
            element={<WebApplicationEleven />}
          />
          <Route path="/dealsone" element={<DealsOne />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
