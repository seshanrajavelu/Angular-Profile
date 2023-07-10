import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';

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
  
  certifications = [
    {
      imageSrc: '../../assets/certificates/hackerrank basic.png',
      title: 'Angular (Basic) Certification',
      provider: 'HackerRank',
    },
    {
      imageSrc: '../../assets/certificates/hackerrank intermediate.jpg',
      title: 'Angular (Intermediate) Certification',
      provider: 'HackerRank',
    },
    {
      imageSrc: '../../assets/certificates/BMC.jpg',
      title:
        'Business Model Canvas Essentials Professional Certification (BMCEPC™)',
      provider: 'CertiProf',
    },
    {
      imageSrc: '../../assets/certificates/BI.jpg',
      title:
        'Business Intelligence Foundation Professional Certification (BIFPC™)',
      provider: 'CertiProf',
    },
    {
      imageSrc: '../../assets/certificates/agile cognizant.png',
      title: 'Agile Methodology Virtual Experience Program',
      provider: 'Cognizant',
    },
    {
      imageSrc: '../../assets/certificates/Mendix.jpg',
      title: 'Mendix Rapid Developer Certification',
      provider: 'Mendix',
    },
    {
      imageSrc: '../../assets/certificates/data privacy.jpg',
      title: 'Data Privacy & Information Security Netlink V3.2 Certification',
      provider: 'Traliant',
    },
  ];

  isMobileMenuOpen = true;

  constructor(private router: Router) {}

  ngOnInit(): void {}


  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToSections(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }
  }

  todo() {
    this.router.navigateByUrl('/main/todo');
  }

  activeSlide = 0;

  navigateToSlide(index: number) {
    this.activeSlide = index;
  }


  shouldReduceSideNavHeight = false;

  onMainContentScroll(event: Event) {
    const target = event.target as HTMLElement;
    const scrollTop = target.scrollTop;
    const mainContent = document.querySelector('.main-content') as HTMLElement;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    if (isMobile && scrollTop > mainContent.offsetTop) {
      this.shouldReduceSideNavHeight = true;
    } else {
      this.shouldReduceSideNavHeight = false;
    }
  }

}
