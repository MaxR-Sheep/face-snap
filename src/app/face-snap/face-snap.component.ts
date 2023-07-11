import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  imgUrl!: string;
  title!: string;
  description!: string;
  creationDate!: Date;
  snaps!: number;

  ngOnInit() {
    this.title = 'Archibald';
    this.description = 'Super personne, trop gentil';
    this.creationDate = new Date();
    this.snaps = 7;
    this.imgUrl =
      'https://cdn.pixabay.com/photo/2023/05/19/13/28/bird-8004544_1280.jpg';
  }

  onAddSnap() {
    this.snaps++;
  }
}
