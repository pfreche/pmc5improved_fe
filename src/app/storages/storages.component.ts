import { Component, OnInit } from '@angular/core';
import { MediaService } from '../media.service';
import { MediaType } from '../media-type.enum';

@Component({
  selector: 'app-storages',
  templateUrl: './storages.component.html',
  styleUrls: ['./storages.component.scss']
})

export class StoragesComponent implements OnInit {

  myMediaType: any;
  m: String;

  constructor(private mediaService: MediaService) { }
  storages: Storage[];

  ngOnInit() {
    this.load();
    this.myMediaType = this.mediaService.mediaTypes;
  }

  load() {
    this.mediaService.loadStorages()
     .subscribe((response:Storage[]) => {this.storages = response;} );
    }

}
