import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { BuscadorComponent } from "./components/buscador/buscador.component";
import { HomeComponent } from "./components/home/home.component";
import { VideojuegoComponent } from "./components/videojuego/videojuego.component";
import { VideojuegosComponent } from "./components/videojuegos/videojuegos.component";


const APP_ROUTES:Routes = [
    {path:'home', component: HomeComponent},
    {path:'about', component: AboutComponent},
    {path:'videojuegos', component: VideojuegosComponent},
    {path:'videojuego/:id', component: VideojuegoComponent},
    {path:'buscar/:termino', component: BuscadorComponent},
    {path:'home', component: HomeComponent}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);