import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import DesktopApp from "./pages/DesktopApp";
import DesktopArchive from "./pages/DesktopArchive";
import DesktopProfile from "./pages/DesktopProfile";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-archive":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-profile":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<DesktopApp />} />
      <Route path="/desktop-archive" element={<DesktopArchive />} />
      <Route path="/desktop-profile" element={<DesktopProfile />} />
    </Routes>
  );
}
export default App;
