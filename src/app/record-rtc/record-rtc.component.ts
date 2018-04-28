import { Component, OnInit, ViewChild } from '@angular/core';
import * as RecordRTC from 'recordrtc';

@Component({
  selector: 'app-record-rtc',
  templateUrl: './record-rtc.component.html',
  styleUrls: ['./record-rtc.component.scss']
})
export class RecordRtcComponent implements OnInit {
  @ViewChild('video') video: any;
  recordRTC: any;
  stream: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let video: HTMLVideoElement = this.video.nativeElement;
    video.muted = false;
    video.controls = true;
    video.autoplay = false;
  }

  startRecording() {
    navigator.mediaDevices
      .getUserMedia({
        video: {
          width: { min: 400, ideal: 400 },
          height: { min: 180, ideal: 180 },
          aspectRatio: { ideal: 1.7777777778 }
        }
      })
      .then(this.successCallback.bind(this), this.errorCallback.bind(this));
  }

  successCallback(stream: MediaStream) {
    var options = {
      mimeType: 'video/webm', // or video/webm\;codecs=h264 or video/webm\;codecs=vp9
      audioBitsPerSecond: 128000,
      videoBitsPerSecond: 128000,
      bitsPerSecond: 128000 // if this line is provided, skip above two
    };
    this.stream = stream;
    this.recordRTC = RecordRTC(stream, options);
    this.recordRTC.startRecording();
    let video: HTMLVideoElement = this.video.nativeElement;
    video.src = window.URL.createObjectURL(stream);
    this.toggleControls();
  }

  errorCallback(stream: MediaStream) {

  }

  toggleControls() {
    let video: HTMLVideoElement = this.video.nativeElement;
    video.muted = !video.muted;
    video.controls = !video.controls;
    video.autoplay = !video.autoplay;
  }

  stopRecording() {
    this.recordRTC.stopRecording(this.processVideo.bind(this));
    let stream = this.stream;
    stream.getAudioTracks().forEach(track => track.stop());
    stream.getVideoTracks().forEach(track => track.stop());
  }

  processVideo(audioVideoWebMURL) {
    this.video.nativeElement.src = audioVideoWebMURL;
    this.toggleControls();
    var recordedBlob = this.recordRTC.getBlob();
    this.recordRTC.getDataURL(function (dataURL) { });
  }

  download() {
    this.recordRTC.save('video.webm');
  }

}
