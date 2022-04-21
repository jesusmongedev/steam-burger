import { Route, Routes } from "react-router-dom";
import StyleGuide from "./pages/StyleGuide";
import Home from "./pages/Home";
import AppContent from "./content/app-content";

const ROUTES = {
  home: "/",
  styleguide: "/styleguide",
};

const App = () => {
  const APP_CONTENT = AppContent;

  return (
    <div>
      <h1>Hello World</h1>
      <Routes>
        <Route
          path={ROUTES.styleguide}
          element={<StyleGuide content={APP_CONTENT} />}
        />
        <Route path={ROUTES.home} element={<Home content={APP_CONTENT} />} />
      </Routes>
    </div>
  );
};

export default App;
