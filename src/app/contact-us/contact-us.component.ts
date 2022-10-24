import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imgCollection: Array<object> = [
    {
      image: 'assets/Images/Development Team/dev_team_1.jpg',
      thumbImage: 'assets/Images/Development Team/dev_team_1.jpg',
      alt: 'Team 1',
      title: 'Team 1'
    },
    {
      image: 'assets/Images/Development Team/dev_team_2.jpg',
      thumbImage: 'assets/Images/Development Team/dev_team_2.jpg',
      title: 'Team 2',
      alt: 'Team 2'
    },
    {
      image: 'assets/Images/Development Team/dev_team_3.jpg',
      thumbImage: 'assets/Images/Development Team/dev_team_3.jpg',
      title: 'Team 3',
      alt: 'Team 3'
    },
    {
      image: 'assets/Images/Development Team/dev_team_4.jpg',
      thumbImage: 'assets/Images/Development Team/dev_team_4.jpg',
      title: 'Team 4',
      alt: 'Team 4'
    },
    {
      image: 'assets/Images/Development Team/dev_team_5.jpg',
      thumbImage: 'assets/Images/Development Team/dev_team_5.jpg',
      title: 'Team 5',
      alt: 'Team 5'
    },
    {
      image: 'assets/Images/Development Team/dev_team_6.jpg',
      thumbImage: 'assets/Images/Development Team/dev_team_6.jpg',
      title: 'Team 6',
      alt: 'Team 6'
    },
    {
      image: 'assets/Images/Development Team/dev_team_7.jpg',
      thumbImage: 'assets/Images/Development Team/dev_team_7.jpg',
      title: 'Team 7',
      alt: 'Team 7'
    },
    {
      image: 'assets/Images/Development Team/dev_team_8.jpg',
      thumbImage: 'assets/Images/Development Team/dev_team_8.jpg',
      title: 'Team 8',
      alt: 'Team 8'
    },
    {
      image: 'assets/Images/Development Team/dev_team_9.jpg',
      thumbImage: 'assets/Images/Development Team/dev_team_9.jpg',
      title: 'Team 9',
      alt: 'Team 9'
    },
    {
      image: 'assets/Images/Development Team/dev_team_10.jpg',
      thumbImage: 'assets/Images/Development Team/dev_team_10.jpg',
      title: 'Team 10',
      alt: 'Team 10'
    },
];

}
