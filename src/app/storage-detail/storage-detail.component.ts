import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MediaService } from '../media.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-storage-detail',
  templateUrl: './storage-detail.component.html',
  styleUrls: ['./storage-detail.component.scss']
})
export class StorageDetailComponent implements OnInit {

  storage: Storage;
  id: number;
  mediaTypes: any;

  constructor(private http: HttpClient, private mediaService: MediaService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {

    this.mediaTypes = this.mediaService.mediaTypes;
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      if (this.id) {
        this.mediaService.loadStorage(this.id)
          .subscribe((response: Storage) => { this.storage = response; });
      }
    }
    );  
  
  }


   save() {
     this.mediaService.saveStorage(this.storage).subscribe(response => {
    }, error => alert("Error: "+ error.status + error.error))

   }
}
