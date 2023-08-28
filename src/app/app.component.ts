import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  mySecondSnap!: FaceSnap;
  myLastSnap!: FaceSnap;
  ngOnInit() {
    this.mySnap = {
      title: 'Archibald',
      description:
        'Trop mignon, trop gentil et surtout très utile dans notre vie',
      imgUrl:
        'https://cdn.pixabay.com/photo/2023/05/19/13/28/bird-8004544_1280.jpg',
      createdDate: new Date(),
      snaps: 0,
    };
    this.mySecondSnap = {
      title: 'Star Wars',
      description: 'Oh oui je suis un grand fan, autant le montrer',
      imgUrl:
        'https://pixabay.com/get/ga158241ca4afa364a46790a2bb7f00b822d5d6591ac2dc0bd139450c931c0a87bde30cc5f92969faeb89b3447400a494c297b79a177500793c0aef6dfe0d3937_1280.jpg',
      createdDate: new Date(),
      snaps: 0,
    };
    this.myLastSnap = {
      title: 'Escalade',
      description: 'Voici une de mes passions aussi',
      imgUrl:
        'https://pixabay.com/get/gb179f6a146e8762ecda888105ba26880608fcca72bc5e08b2837c073b3cb390b2e10386c01327351bc805cfd8238f0a8bacbbf2d8f3d3d228bfdc23857f18654_1280.jpg',
      createdDate: new Date(),
      snaps: 0,
      location: 'Lyon',
    };
  }
}
