import { Component } from '@angular/core';

@Component({
selector: 'app-home',
templateUrl: 'home.page.html',
styleUrls: ['home.page.scss'],
})
export class HomePage {

slides = [
{

img: 'assets/img/slide_01.svg',
titulo: 'INGENIERÍA Y CIENCIAS',
cursos: '8 cursos habilitados'
},
{

img: 'assets/img/slide_02.svg',
titulo: 'ABASTECIMIENTO Y FINANZAS',
cursos: '3 cursos habilitados'
},
{

img: 'assets/img/slide_03.svg',
titulo: 'SANIDAD',
cursos: '10 cursos habilitados'
},
{

img: 'assets/img/slide_01.svg',
titulo: 'INTERÉSES MARÍTIMOS',
cursos: '10 cursos habilitados'
},
{

img: 'assets/img/slide_02.svg',
titulo: 'INFANTERÍA',
cursos: '10 cursos habilitados'
},
{

img: 'assets/img/slide_03.svg',
titulo: 'TRANSVERSALES',
cursos: '10 cursos habilitados'
}
]

}
