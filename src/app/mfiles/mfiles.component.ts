import { Component, OnInit, Input } from '@angular/core';
import { MediaService } from '../media.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mfiles',
  templateUrl: './mfiles.component.html',
  styleUrls: ['./mfiles.component.scss']
})
export class MfilesComponent implements OnInit {

  @Input() mfiles: any;

  constructor(private mediaService: MediaService,
    private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
  }

}
