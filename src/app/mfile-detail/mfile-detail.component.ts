import { Component, OnInit } from '@angular/core';
import { MediaService } from '../media.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mfile-detail',
  templateUrl: './mfile-detail.component.html',
  styleUrls: ['./mfile-detail.component.scss']
})
export class MfileDetailComponent implements OnInit {

  mfile: any;
  attrisSelected: any[];
  thumbnailUrl: string;
  mediumUrl: string;

  constructor(private mediaService: MediaService,
    private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = +params['id'];
      if (id) {
        this.mediaService.loadMfile(id)
          .subscribe((response) => {
            this.mfile = response;
            this.setUrls();
            this.attrisSelected = this.mfile.attris;
          });
      }
    }
    );
  }

  setUrls() {
    var res = /\.JPG|\.png|\.PNG|\.pdf|\.PDF/;
    this.thumbnailUrl = this.pathLocation(this.mfile.folder.storage_id, 3)
      + this.mfile.folder.mpath + this.mfile.folder.lfolder + this.mfile.filename.replace(res, ".jpg");
     this.mediumUrl = this.pathLocation(this.mfile.folder.storage_id, 1)
      + this.mfile.folder.mpath + this.mfile.folder.lfolder + this.mfile.filename;
      
    }

  pathLocation(storage_id, typ) {
    return this.mediaService.pathLocation(storage_id, typ)
  }


}
