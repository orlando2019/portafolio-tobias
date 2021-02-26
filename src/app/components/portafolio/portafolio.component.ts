import { Component, OnInit } from '@angular/core';
import { Modal } from '../../widgets/modal/modal.interface';

const description ='Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Phasellus condimentum sagittis tortor, in tincidunt ligula.'

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css'],
})
export class PortafolioComponent implements OnInit {
  items: Array<Modal> = [];
  ngOnInit() {
    this.items.push({
      title: 'La Casa',
      image: 'assets/img/portfolio/cabin.png',
      description,
    });

    this.items.push({
      title: 'Galletas',
      image: 'assets/img/portfolio/cake.png',
      description
    });

    this.items.push({
      title: 'Circo',
      image: 'assets/img/portfolio/circus.png',
      description
    });

    this.items.push({
      title: 'Juegos',
      image: 'assets/img/portfolio/game.png',
      description
    });

    this.items.push({
      title: 'Safe',
      image: 'assets/img/portfolio/safe.png',
      description
    });

    this.items.push({
      title: 'Submarino Amarillo',
      image: 'assets/img/portfolio/submarine.png',
      description
    });
  }
}
