import { NgModule } from '@angular/core';


import { AppRoutingModule } from '../app.routing.module';
import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';


@NgModule({
    declarations : [],
    exports : [
        AppRoutingModule
    ],
    imports: [
        PhotoModule,
        PhotoFormModule,
        PhotoListModule
    ]
})
export class PhotosModule {

}
