import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import { Modal } from '../modal/modal.interface';

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.css'],
})
export class ImageItemComponent implements OnInit {
  @Input() info: Modal;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  open() {
    const modalRef = this.modalService.open(ModalComponent, {
      centered: true,
      size: 'lg',
    });
    modalRef.componentInstance.info = this.info;
  }
}
