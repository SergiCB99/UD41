import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Superheroe } from 'src/app/models/superheroe.model';
import { SuperheroeService } from 'src/app/services/superheroe.service';

@Component({
  selector: 'app-superheroe-details',
  templateUrl: './superheroe-details.component.html',
  styleUrls: ['./superheroe-details.component.css']
})
export class SuperheroeDetailsComponent implements OnInit {

  currentHeroe: Superheroe = {

    name: '',
    short_name: '',
    alt_name: '',
    role: '',
    new_role: '',
    type: '',
    release_date: '',
    rework_date: '',
    attribute_id: 0,
    translations: ['']
  };

  message = '';

  constructor(
    private heroeService: SuperheroeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getHeroe(this.route.snapshot.params.id);
  }

  getHeroe(id: string): void {
    this.heroeService.get(id)
      .subscribe(
        data => {
          this.currentHeroe = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

  updateHeroe(): void {
    this.message = '';

    this.heroeService.update(this.currentHeroe.id, this.currentHeroe)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ?
            response.message : "This superheroe was updated successfully!";
        },
        error => {
          console.log(error);
        }
      );
  }

  deleteHeroe(): void {
    this.heroeService.delete(this.currentHeroe.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/books']);
        },
        error => {
          console.log(error);
        }
      )
  }

}
