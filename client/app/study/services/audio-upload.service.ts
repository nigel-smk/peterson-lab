import {Injectable, OnDestroy} from '@angular/core';
import {ISubscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/switchMap';
import {Mp3EncoderService} from './mp3-encoder.service';

@Injectable()
export class AudioUploadService implements OnDestroy {

  private socket: WebSocket;
  private pcmData$: Observable<Int16Array>;
  private subscription: ISubscription;

  constructor(private mp3Encoder: Mp3EncoderService) { }

  get $() {
    if (!this.subscription) {
      this.init();
    }

    return this.pcmData$;
  }

  init() {
    this.socket = new WebSocket('ws://localhost:3000');
    this.socket.onopen = this.onSocketReady.bind(this);
  }

  onSocketReady(event: Event) {
    // TODO close socket on complete
    this.subscription = this.mp3Encoder.$.subscribe((mp3Data: Int8Array) => {
      this.socket.send(mp3Data);
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      // TODO include reason
      this.socket.close();
    }
  }

}
