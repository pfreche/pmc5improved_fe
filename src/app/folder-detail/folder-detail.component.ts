import { Component, OnInit } from '@angular/core';
import { MediaService } from '../media.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder-detail',
  templateUrl: './folder-detail.component.html',
  styleUrls: ['./folder-detail.component.scss']
})
export class FolderDetailComponent implements OnInit {

//  @Input() folder: Folder;
  folder: any;
  mfiles: any;

  constructor(private mediaService: MediaService,
    private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = +params['id'];

      if (id) {
        this.mediaService.loadFolder(id)
          .subscribe((response) => {
            this.folder = response;
            this.loadMfiles();
          })
      }
    }
    );
  }

  loadMfiles() {
    this.mediaService.loadMfilesByFolder(this.folder.id)
      .subscribe((response) => { this.mfiles = response;});
  }

}
