import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter = '';
  hasMore = true;
  currentPage = 1;
  userName = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: PhotoService
  ) { }

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.photos = this.activatedRoute.snapshot.data.photos;
  }

  loadPhotos() {
    this.service
      .listByUserPaginator(this.userName, ++this.currentPage)
      .subscribe( photos => {
        this.filter = '';
        this.photos = this.photos.concat(...photos);
        if (!photos.length) {
          this.hasMore = false;
        }
      });
  }
}
