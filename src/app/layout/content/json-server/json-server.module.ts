import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonServerComponent }  from './json-server.component';
import { ArticleService } from '../../resources/services/json.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    JsonServerComponent
  ],
  providers: [
    ArticleService
  ],
})
export class JsonServerModule { }
