import { Component, OnInit, Input } from '@angular/core';
import { IImageLinkWithDetailsLink } from './dp-image-grid.data-structures';


@Component({
  selector: 'lib-dp-image-grid',
  templateUrl: 'dp-image-grid.component.html',
  styleUrls: ['dp-image-grid.component.css']
})

export class DpImageGridComponent implements OnInit {
  @Input() imagesWithLinks: IImageLinkWithDetailsLink[];

  constructor() { }

  ngOnInit() {
  }

}
