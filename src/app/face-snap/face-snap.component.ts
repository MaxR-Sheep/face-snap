import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  buttonText!: string;

  ngOnInit() {
    this.buttonText = 'Oh yes Snap!';
  }

  onSnap() {
    if (this.buttonText === 'Oh yes Snap!') {
      this.faceSnap.snaps++;
      this.buttonText = 'Hum! unSnap!';
    } else {
      this.faceSnap.snaps--;
      this.buttonText = 'Oh yes Snap!';
    }
  }
}
