import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IAlbum } from "../shared/music.service";

@Component({
  selector: 'album-preview',
  templateUrl: './album-preview.component.html',
  styleUrls: ['./album-preview.component.scss']
})
export class AlbumPreviewComponent implements OnInit {

  @Input()album: IAlbum;
  @Output()onclick = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  selectAlbum(){
    this.onclick.emit(this.album.id);
  }

}
