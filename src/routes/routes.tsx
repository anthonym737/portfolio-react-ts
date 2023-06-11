
import { CVPage } from "../pages/CVPage";
import { RealisationPage } from "../pages/RealisationPage";
import { StagePage } from "../pages/StagePage";
import { VeilleTechnoPage } from "../pages/VeilleTechnoPage";

export const routes = {
    CVPage: {
        path: "/",
        key: "cv",
        label: "CV",
        element : CVPage,
        exact : true,
    },
    RealisationPage: {
        path: "/realisations-professionnelles",
        key: "realisation",
        label: "Réalisations technologiques",
        element: RealisationPage,
        exact: true,
    },
    StagePage : {
        path: "/stages",
        key: "stage",
        label: "Stages",
        element: StagePage,
        exact : true
    },
    VeilleTechnoPage: {
        path: "/veilletechno",
        key: "veille-technologique",
        label: "Veille technologique",
        element : VeilleTechnoPage,
        exact: true
    }
}

export const getRoutes = () => Object.values(routes);