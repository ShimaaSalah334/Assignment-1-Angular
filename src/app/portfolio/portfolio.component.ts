import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { StarComponent } from "../star/star.component";

@Component({
  selector: 'app-portfolio',
  imports: [StarComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  @ViewChild('modal') modal!: ElementRef;
  @ViewChild('modalImage') modalImage!: ElementRef;

  images: Iimage[] = [
    { src: 'images/poert1.png' },
    { src: 'images/port2.png' },
    { src: 'images/port3.png' },
     { src: 'images/poert1.png' },
    { src: 'images/port2.png' },
    { src: 'images/port3.png' },
  ];

//Show Modal
  showModal(imageSrc: string) {
    this.modal.nativeElement.classList.remove('d-none');
    this.modal.nativeElement.classList.add('d-block');
    this.modalImage.nativeElement.setAttribute('src',imageSrc)
  }

  //Close Modal
  closeModal(event:MouseEvent){
if(event.target == this.modal.nativeElement){
  this.modal.nativeElement.classList.add('d-none');
  this.modal.nativeElement.classList.remove('d-block');
}

  }
}
interface Iimage {
  src: string;
}
