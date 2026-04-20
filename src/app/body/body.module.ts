import { NavbarComponent } from './../navbar/navbar.component'
import { NgModule } from '@angular/core'
import { IntroComponent } from '../intro/intro.component'
import { RouterModule } from '@angular/router'
import { CommonModule, NgOptimizedImage } from '@angular/common'
import { LogoComponent } from '../logo/logo.component'
import { VidComponent } from '../vid/vid.component'
import { GalleryComponent } from '../gallery/gallery.component'
import { GalleriaModule } from 'primeng/galleria'
import { ButtonModule } from 'primeng/button'
import { CardModule } from 'primeng/card'
import { FormsModule } from '@angular/forms'
import { MultiImageComponent } from '../multi-image/multi-image.component'
import { MultiImage4Component } from '../multi-image-4/multi-image-4.component'
import { MultiImage2Component } from '../multi-image-2/multi-image-2.component'
import { MultiImage3Component } from '../multi-image-3/multi-image-3.component'
import { SingleImageComponent } from '../single-image/single-image.component'
import { ProductsComponent } from '../products/products.component'
import { ProductsHeroComponent } from '../products-hero/products-hero.component'
import { ProductsStoreComponent } from '../products-store/products-store.component'
import { DataViewModule } from 'primeng/dataview'
import { ImageModule } from 'primeng/image'
import { TagModule } from 'primeng/tag'
import { ProductsService } from '../products.service'
import { InputTextModule } from 'primeng/inputtext'
import { MultiSelectModule } from 'primeng/multiselect'
import { GalleryImageComponent } from '../gallery-image/gallery-image.component'
import { AboutComponent } from '../about/about.component'
import { TextWithImageComponent } from '../text-with-image/text-with-image.component'
import { LicensesComponent } from '../licenses/licenses.component'
import { ContactComponent } from '../contact/contact.component'
@NgModule({
    declarations: [
        NavbarComponent,
        IntroComponent,
        ContactComponent,
        LogoComponent,
        VidComponent,
        GalleryComponent,
        MultiImageComponent,
        MultiImage4Component,
        MultiImage2Component,
        MultiImage3Component,
        SingleImageComponent,
        ProductsComponent,
        ProductsHeroComponent,
        ProductsStoreComponent,
        GalleryImageComponent,
        AboutComponent,
        TextWithImageComponent,
        LicensesComponent,
    ],
    providers: [ProductsService],
    imports: [
        MultiSelectModule,
        FormsModule,
        TagModule,
        InputTextModule,
        ImageModule,
        DataViewModule,
        CardModule,
        ButtonModule,
        RouterModule,
        NgOptimizedImage,
        CommonModule,
        GalleriaModule,
    ],
    exports: [IntroComponent, NavbarComponent, ContactComponent],
})
export class BodyModule {}
