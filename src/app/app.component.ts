import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhotoService } from './photos/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos: Response[] = [];

  constructor(photoService: PhotoService) {
      photoService
        .listByUser('flavio')
        .subscribe(
          photos => this.photos = photos,
          err => {throw new Error(err.message);
        });
  }

}
