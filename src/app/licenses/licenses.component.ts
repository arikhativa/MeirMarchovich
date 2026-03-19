import { Component } from '@angular/core'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'

interface LicensePdf {
    title: string
    subtitle: string
    fileName: string
    safeUrl?: SafeResourceUrl
}

@Component({
    selector: 'app-licenses',
    templateUrl: './licenses.component.html',
    styleUrl: './licenses.component.scss',
})
export class LicensesComponent {
    licenses: LicensePdf[] = [
        {
            title: 'ISO 9001:2015',
            subtitle: 'Quality Management System',
            fileName: 'iso-9001.pdf',
        },
        {
            title: 'ISO 14001:2015',
            subtitle: 'Environmental Management System',
            fileName: 'iso-14001.pdf',
        },
        {
            title: 'Business License - Metal',
            subtitle: 'Trading, Sorting & Storage',
            fileName: 'business-license2.pdf',
        },
        {
            title: 'Business License - Waste',
            subtitle: 'Treatment & Recycling',
            fileName: 'business-license.pdf',
        },
        {
            title: 'Business License - Processing',
            subtitle: 'Production & Metal Processing',
            fileName: 'business-license1.pdf',
        },
    ]

    constructor(private sanitizer: DomSanitizer) {
        this.licenses.forEach((license) => {
            license.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
                `assets/pdf/${license.fileName}`
            )
        })
    }

    getRawPath(fileName: string): string {
        return `assets/pdf/${fileName}`
    }
}
