import { Component, ElementRef, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent {
  skills = [
    { name: 'HTML5 & CSS3', level: 5, expertise: 'Intermediate' },
    { name: 'JavaScript', level: 5, expertise: 'Intermediate' },
    { name: 'TypeScript', level: 5, expertise: 'Intermediate' },
    { name: 'Angular', level: 5, expertise: 'Intermediate' },
    { name: 'Java', level: 4, expertise: 'Basic' },
    { name: 'SpringBoot', level: 4, expertise: 'Basic' },
    { name: 'Git', level: 5, expertise: 'Intermediate' },
    { name: 'PostgresSQL', level: 4, expertise: 'Basic' },
  ];

  modalRef!: BsModalRef;
  enlargedImageUrl!: string;
  modalCertificateView: boolean = false;
  certificateTitle: string = '';
  activeSection: string = 'about';

  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {}
  isActive(section: string): boolean {
    return this.activeSection === section;
  }
  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  openCertificateModal(imageUrl: string, title: string): void {
    this.enlargedImageUrl = imageUrl;
    this.certificateTitle = title;
    this.modalCertificateView = true;
  }
  close() {
    this.modalCertificateView = false;
  }
}