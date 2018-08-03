import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RoutingModule } from './routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import {StudyModule} from './study/study.module';
import {AdminModule} from './admin/admin.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {WebAudioModule} from './web-audio/web-audio.module';
import {AudioRecorderModule} from './audio-recorder/audio-recorder.module';
import {StartupService} from './startup.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgbModule.forRoot(),
    SharedModule.forRoot(),
    StudyModule.forRoot(),
    AdminModule.forRoot(),
    WebAudioModule.forRoot(),
    AudioRecorderModule.forRoot(),
    RoutingModule
  ],
  providers: [StartupService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
