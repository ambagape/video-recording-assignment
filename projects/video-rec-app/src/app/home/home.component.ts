import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('recording') recording:ElementRef | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onVideoReady = (url: string): void => {
    if(this.recording)
      this.recording.nativeElement.src = url;
  }
}
