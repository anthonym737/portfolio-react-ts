import { BrowserRouter as Router, Route, Navigate, Routes } from "react-router-dom";



import { StagePage } from "./pages/StagePage";
import { VeilleTechnoPage } from "./pages/VeilleTechnoPage";
import { NavBar } from "./components/NavBar";
import { CVPage } from "./pages/CVPage";
import { RealisationPage } from "./pages/RealisationPage";
import { getRoutes } from "./routes/routes";

function App() {
  const routes = getRoutes();
  return (
    <Router>
        <NavBar title=""/>
        <Routes>
          {/* <Route path="/" element={<CVPage/>}/>
          <Route path="/realisations-professionnelles" element={<RealisationPage />}/>
          <Route path="/stages" element={<StagePage/>}/>
          <Route path="/veille-technologique" element={<VeilleTechnoPage/>}/> */}
          {routes.map((route) => (
            <Route
              key={route.key}
              path={route.path}
              element={<route.element />}
            />
          ))}
        </Routes>
    </Router>
    // <Router>
    //   <Route path="/" element={<MainPage />} />
    //   <Route path="/realisationpage" element={<RealisationPage />} />
    //   <Route path="/stagepage" element={<StagePage />} />
    //   <Route path="/veilletechno" element={<VeilleTechnoPage />} />
    //   <Navigate to="/" replace={true} />
    // </Router>
    
  );
}

export default App;
