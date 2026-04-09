import { Injectable } from '@angular/core'
import {
    allFerrous,
    allMiscellaneous,
    allNonFerrous,
    Product,
} from './misc/products'

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    public allFerrous: Product[] = allFerrous
    public allMiscellaneous: Product[] = allMiscellaneous
    public allNonFerrous: Product[] = allNonFerrous

    constructor() {
        this.allFerrous.forEach((product, index) => {
            product.img = `assets/images/gallery/ferrous/${index}.${product.format || 'jpg'}`
        })

        this.allMiscellaneous.forEach((product, index) => {
            product.img = `assets/images/gallery/miscellaneous/${index}.${product.format || 'jpg'}`
        })
        this.allNonFerrous.forEach((product, index) => {
            product.img = `assets/images/gallery/non-ferrous/${index}.${product.format || 'jpg'}`
        })
    }

    get allProducts() {
        return [
            ...this.allFerrous,
            ...this.allMiscellaneous,
            ...this.allNonFerrous,
        ]
    }
}
