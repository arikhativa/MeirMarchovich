import { Injectable } from '@angular/core'
import { allFerrous, allProducts, Product } from './misc/products'

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    private _allProducts = allProducts
    private _allFerrous: Product[] = allFerrous

    constructor() {
        this._allFerrous.forEach((product, index) => {
            product.img = `assets/images/gallery/ferrous/${index}.${product.format || 'jpg'}`
        })

        this._allProducts.forEach((product, index) => {
            product.img = `assets/images/gallery/${index}.jpg`
        })
    }

    get allProducts() {
        return this._allFerrous
    }
}
