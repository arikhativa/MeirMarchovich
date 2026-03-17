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
    private _allFerrous: Product[] = allFerrous
    private _allMiscellaneous: Product[] = allMiscellaneous
    private _allNonFerrous: Product[] = allNonFerrous

    constructor() {
        this._allFerrous.forEach((product, index) => {
            product.img = `assets/images/gallery/ferrous/${index}.${product.format || 'jpg'}`
        })

        this._allMiscellaneous.forEach((product, index) => {
            product.img = `assets/images/gallery/miscellaneous/${index}.${product.format || 'jpg'}`
        })
        this._allNonFerrous.forEach((product, index) => {
            product.img = `assets/images/gallery/non-ferrous/${index}.${product.format || 'jpg'}`
        })
    }

    get allProducts() {
        return [
            ...this._allFerrous,
            ...this._allMiscellaneous,
            ...this._allNonFerrous,
        ]
    }
}
