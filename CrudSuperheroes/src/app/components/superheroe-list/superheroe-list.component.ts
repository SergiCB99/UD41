import { Component, OnInit } from '@angular/core';
import { Superheroe } from 'src/app/models/superheroe.model';
import { SuperheroeService } from 'src/app/services/superheroe.service';

@Component({
  selector: 'app-superheroe-list',
  templateUrl: './superheroe-list.component.html',
  styleUrls: ['./superheroe-list.component.css']
})
export class SuperheroeListComponent implements OnInit {

  superheroe?: Superheroe[];
  currentHeroe: Superheroe = {};
  currentIndex = -1;
  name = '';

  constructor(private superheroeService: SuperheroeService) { }

  ngOnInit(): void {
    this.retrieveHeroes();
  }

  retrieveHeroes(): void {
    this.superheroeService.getAll()
      .subscribe(
        data => {
          this.superheroe = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

  refreshList(): void {
    this.retrieveHeroes();
    this.currentHeroe = {};
    this.currentIndex = -1;
  }

  setActiveHeroe(heroe: Superheroe, index: number): void {
    this.currentHeroe = heroe;
    this.currentIndex = index;
  }

  removeAllHeroes(): void {
    this.superheroeService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        }
      );
  }

  searchName(): void {
    this.currentHeroe = {};
    this.currentIndex = -1;

    this.superheroeService.findByName(this.name)
      .subscribe(
        data => {
          this.superheroe = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

}
