import { Component } from '@angular/core'
import { Product } from '../misc/products'
import { ProductsService } from '../products.service'

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
    products: Product[] = []
    singleProduct: Product[] = []
    multiProduct2: Product[] = []
    multiProduct2b: Product[] = []
    multiProduct3: Product[] = []
    multiProduct4: Product[] = []

    constructor(private productsService: ProductsService) {}

    ngOnInit() {
        for (let i = 0; i < 2; i++) {
            this.multiProduct2.push(this.productsService.allFerrous[i])
        }
        for (let i = 0; i < 4; i++) {
            this.multiProduct4.push(this.productsService.allMiscellaneous[i])
        }
        for (let i = 5; i < 6; i++) {
            this.singleProduct.push(this.productsService.allMiscellaneous[i])
        }
        for (let i = 0; i < 3; i++) {
            this.multiProduct3.push(this.productsService.allNonFerrous[i])
        }
        for (let i = 2; i < 4; i++) {
            this.multiProduct2b.push(this.productsService.allFerrous[i])
        }
        for (let i = 3; i < 4; i++) {
            this.singleProduct.push(this.productsService.allNonFerrous[i])
        }
    }
}
