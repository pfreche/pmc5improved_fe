import { Component, OnInit } from '@angular/core';
import { MediaService } from '../media.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.scss']
})
export class FoldersComponent implements OnInit {

  folders: any;
  storage: any;
  storages: any;

  constructor(private mediaService: MediaService, 
    private route: ActivatedRoute, private router: Router) { 
    }

    ngOnInit() {

      this.mediaService.loadStorages()
      .subscribe((response:Storage[]) => {this.storages = response;} );
     
 
      
    this.route.params.subscribe( params => {
      let id = +params['id'];
       if ( this.router.url.startsWith("/folders/storage"))  {
        if (id) {

          this.mediaService.loadFoldersByStorage(id)
            .subscribe((r) => {this.folders = r; });
             this.mediaService.loadStorage(id)
             .subscribe( (r: Storage) => {this.storage = r; });
          }
         } else {
              this.mediaService.loadFolders()
              .subscribe((r) => {this.folders = r; });
            }
    });

  }

  findStorage(storage_id){
    return this.storages.find(storage => storage.id === storage_id)
  }

}
