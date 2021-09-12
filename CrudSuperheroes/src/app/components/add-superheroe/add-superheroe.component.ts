import { Component, OnInit } from '@angular/core';
import { Superheroe } from 'src/app/models/superheroe.model';
import { SuperheroeService } from 'src/app/services/superheroe.service';

@Component({
  selector: 'app-add-superheroe',
  templateUrl: './add-superheroe.component.html',
  styleUrls: ['./add-superheroe.component.css'],
})
export class AddSuperheroeComponent implements OnInit {
  Superheroe: Superheroe = {
    name: '',
    short_name: '',
    alt_name: '',
    role: '',
    new_role: '',
    type: '',
    release_date: '',
    rework_date: '',
    attribute_id: 0,
    translations: [''],
  };

  submitted = false;

  constructor(private superheroeService: SuperheroeService) {}

  ngOnInit(): void {

  }

  saveSuperheroe(): void {
    const data = {
      name: this.Superheroe.name,
      short_name: this.Superheroe.short_name,
      alt_name: this.Superheroe.alt_name,
      role: this.Superheroe.role,
      new_role: this.Superheroe.new_role,
      type: this.Superheroe.type,
      release_date: this.Superheroe.release_date,
      rework_date: this.Superheroe.rework_date,
      attribute_id: this.Superheroe.attribute_id,
      translations: this.Superheroe.translations,
    };

    this.superheroeService.create(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  newSuperheroe(): void {
    this.submitted = false;
    this.Superheroe = {
      name: '',
      short_name: '',
      alt_name: '',
      role: '',
      new_role: '',
      type: '',
      release_date: '',
      rework_date: '',
      attribute_id: 0,
      translations: [''],
    };
  }
}
