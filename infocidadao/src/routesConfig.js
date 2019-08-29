import App from './App'
import Infocidadao from "./pages/Infocidadao.js";
import Objetivos from "./pages/Objetivos.js";

const routesConfig = [
    {
        path:"/",
        component:App,
        exact:true
    },
    {
        path:"/info",
        component:Infocidadao,
        exact:true
    },
    {
        path:"/objetivos",
        component:Objetivos,
        exact:true
    },

]

export default routesConfig;