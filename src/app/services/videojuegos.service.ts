import { Injectable } from "@angular/core";


@Injectable()
export class VideojuegosService{

private videojuegos: Videojuego[] = [
    {
        nombre: 'Fortnite',
        descripcion: 'Fortnite es un videojuego del año 2017 desarrollado por la empresa Epic games, lanzado como diferentes paquetes de software que presentaban diferentes modos de juego, pero que comparten el mismo motor general de juego, pero wue comparten el mismo motor general de juego y las mecanicas. Fue anunciado en los Spike Video Games Awards en 2011',
        img: 'assets/img/ps4/fortnite.jpg',
        lanzamiento: '2017',
        consola: 'PS4'
    },
    {
        nombre: 'God of War',
        descripcion: 'God of War es una serie de videojuegos hack and slash creada por SCE Santa Monica Studio y distribuida por Sony Computer Entertainment.',
        img: 'assets/img/ps4/godofwar.jpg',
        lanzamiento: '2018',
        consola: 'PS4'
    },
    {
        nombre: 'devil may cry 5',
        descripcion: 'Devil May Cry 5 es el nuevo capítulo de la historia de los hijos de Sparda. Tras más de diez años, la icónica saga de Capcom regresa a la línea temporal que la vio nacer, trayendo de vuelta a viejos conocidos como Dante y Nero, nuevas caras como el enigmático V y una jugabilidad con sabor a declaración de intenciones. ',
        img: 'assets/img/ps4/divilmaycry5.jpg',
        lanzamiento: '6 de marzo de 2019',
        consola: 'PS4'
    },
    {
        nombre: 'DEATH STRANDING',
        descripcion: 'Hideo Kojima, creador de la saga Metal Gear, nos propone una aventura atípica que trata sobre conectar en diferentes sentidos: conectar con otras personas en un mundo al borde de la extinción, conectar con otros jugadores en el modo online asíncrono y conectar con nuestro pasado.',
        img: 'assets/img/ps4/DEATHSTRANDING.jpg',
        lanzamiento: '8 de noviembre de 2019',
        consola: 'PS4'
    },
    {
        nombre: 'halo',
        descripcion: 'Halo es una franquicia de videojuegos de ciencia ficción creada y desarrollada por Bungie Studios hasta Halo: Reach, y gestionada ahora por 343 Industries, propiedad de Xbox Game Studios. La serie se centra en una guerra interestelar entre la humanidad y una alianza teocrática de alienígenas conocidos como Covenant.',
        img: 'assets/img/ps4/halo.webp',
        lanzamiento: '15 de noviembre de 2001',
        consola: 'Xbox'
    },
    {
        nombre: 'fifa',
        descripcion: 'FIFA 22 es un videojuego de futbol desarrollado por EA Vancouver y EA Romania, siendo publicado por EA Sports. Está disponible para PlayStation 4, PlayStation 5, Xbox Series X/S, Xbox One, Microsoft Windows, Google Stadia y Nintendo Switch.',
        img: 'assets/img/ps4/fifa.jpg',
        lanzamiento: '26 de septiembre de 2021',
        consola: 'PS4'
    },
    {
        nombre: 'Horizon Forbidden West',
        descripcion: 'Horizon Forbidden West es un videojuego de rol de acción, aventura y mundo abierto desarrollado por Guerrilla Games y distribuido por Sony Interactive Entertainment, exclusivamente para PlayStation 4 y PlayStation 5. Es la secuela de Horizon Zero Dawn.',
        img: 'assets/img/ps4/horizon.jpg',
        lanzamiento: '18 de febrero de 2022',
        consola: 'PS4'
    },
    {
        nombre: 'RED DEAD REDEMPTION 2',
        descripcion: 'Red Dead Redemption 2, estilizado Red Dead Redemption II, es un videojuego de acción-aventura western, en un mundo abierto y en perspectiva de primera y tercera persona, ​ con componentes para un jugador y multijugador.​ Fue desarrollado por Rockstar Games.',
        img: 'assets/img/ps4/reddeadredemption2.jpg',
        lanzamiento: '24 de octubre de 2018 7:00 p. m.',
        consola: 'PS4'
    },
    {
        nombre: 'RESIDENT EVIL 2 REMAKE',
        descripcion: 'Resident Evil 2  - cuyo título original en Japón es Biohazard 2 — es un videojuego de disparos en tercera persona perteneciente al género de videojuego de terror, desarrollado y publicado por Capcom, se trata de una nueva versión del videojuego homónimo de 1998.',
        img: 'assets/img/ps4/residentevil2.jpg',
        lanzamiento: '25 de enero de 2019',
        consola: 'PS4'
    },
    {
        nombre: 'ASSASSINS CREED: VALHALLA',
        descripcion: 'Tras el lanzamiento de Assassins Creed Unity y Syndicate, en Ubisoft se dieron cuenta de que su emblemática saga de asesinos en mundo abierto necesitaba tomarse un pequeño descanso para replantear unos cuantos aspectos (combates, exploración, etc.). El resultado fue una nueva corriente que comenzó con el lanzamiento de Assassins Creed Origins, fue seguido por Assassins Creed Odyssey y culminó en 2020 con el lanzamiento de Assassins Creed Valhalla.Esta última entrega refina todos esos cambios y finaliza el proceso de conversión al género action RPG, y lo hace todo aún más interesante gracias a una ambientación vikinga que le sienta como una hoja oculta al brazo del asesino. En definitiva: Assassins Creed Valhalla es una de las mejores entregas de la saga AC, y uno de los mejores juegos de PS4 (y PS5, puesto que es intergeneracional).',
        img: 'assets/img/ps4/assasinscreed.jpg',
        lanzamiento: '13 de noviembre de 2007',
        consola: 'PS4'
    }
];

constructor(){
    console.log('Servicio listo para usarse. ')
}

getVideojuegos():Videojuego[]{
    return this.videojuegos;
}

getVideojuego(idx:number){
    return this.videojuegos[idx];
}

buscarVideojuegos(termino: string): Videojuego[]{
    let videojuegosArr: Videojuego[] = []

    termino = termino.toLowerCase();

    for(let videojuego of this.videojuegos)
    {
        let nombre = videojuego.nombre.toLocaleLowerCase();
        if(nombre.indexOf(termino)>= 0){
            videojuegosArr.push(videojuego)
        }
    }
    return videojuegosArr;
}

}

export interface Videojuego{
    nombre: string;
    descripcion: string;
    img:string;
    lanzamiento: string;
    consola: string;
}