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
        const BrassPunching = this.productsService.allNonFerrous[5]
        const cables1 = this.productsService.allNonFerrous[7]
        const Pipe1 = this.productsService.allFerrous[5]
        const Pipe2 = this.productsService.allFerrous[6]
        const Pipe3 = this.productsService.allFerrous[7]

        for (let i = 0; i < 1; i++) {
            this.multiProduct2.push(this.productsService.allFerrous[i])
        }
        this.multiProduct2.push(cables1)

        this.multiProduct4.push(Pipe1)
        this.multiProduct4.push(Pipe2)
        for (let i = 2; i < 3; i++) {
            this.multiProduct4.push(this.productsService.allMiscellaneous[i])
        }
        this.multiProduct4.push(Pipe3)

        this.singleProduct.push(BrassPunching)

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
