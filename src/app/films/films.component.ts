import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  filmTitle: string;
  info: Info;
  stars: string[];
  platforms: string[];
  edit = false;

  constructor() {
  }

  ngOnInit(): void {
    this.filmTitle = 'Pulp Fiction';
    this.info = {
      genre: 'Crime, Drama',
      director: 'Quentin Tarantino'
    };
    this.stars = ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson'];
    this.platforms = ['Django Unchained', 'The Hateful Eight', 'Once Upon a Time... in Hollywood', 'Four Rooms', 'From Dusk Till Dawn'];
  }

  addPlatform(platform): void {
    this.platforms.push(platform);
  }

  deletePlatform(platform): void {
    for (let i = 0; i < this.platforms.length; i++) {
      if (this.platforms[i] === platform) {
        this.platforms.splice(i, 1);
      }
    }
  }

  addMode(mode): void {
    this.stars.push(mode);
  }

  deleteMode(mode): void {
    for (let i = 0; i < this.stars.length; i++) {
      if (this.stars[i] === mode) {
        this.stars.splice(i, 1);
      }
    }
  }

  changeEditMode(): void {
    this.edit = !this.edit;
  }
}

interface Info {
  genre: string;
  director: string;
}
