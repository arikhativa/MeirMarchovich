import { Component, OnInit } from '@angular/core'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'

interface ContactInfo {
    label: string
    value: string
    link: string
}

interface ContactCard {
    title: string
    subtitle: string
    icon: string
    highlight: boolean
    details: ContactInfo[]
}

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
    public readonly pageTitle = 'Contact Us'
    public readonly pageSubtitle =
        'Get in touch with our sales team or management'

    // Raw URL for the map
    private readonly rawMapUrl =
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.961917540149!2d35.0863773!3d32.9123497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151db06f9762141d%3A0xc3f5a25055b88234!2z15TXp9eo16ksINeo16vXmSDXp9eV!5e0!3m2!1siw!2sil!4v1700000000000'

    // This will hold the sanitized version
    public safeMapUrl!: SafeResourceUrl

    public readonly contactCards: ContactCard[] = [
        {
            title: 'Main Sales Office',
            subtitle: '2 Haresh Street, Akko, Israel',
            icon: '🏢',
            highlight: false,
            details: [
                {
                    label: 'Email',
                    value: 'office@mrk-metals.com',
                    link: 'mailto:office@mrk-metals.com',
                },
                {
                    label: 'Phone',
                    value: '972-49811010',
                    link: 'tel:+97249811010',
                },
            ],
        },
        {
            title: 'Owner and CEO',
            subtitle: 'Meir Marcovich',
            icon: '👤',
            highlight: true,
            details: [
                {
                    label: 'Email',
                    value: 'meir@mrk-metals.com',
                    link: 'mailto:meir@mrk-metals.com',
                },
                {
                    label: 'Mobile',
                    value: '972-505345605',
                    link: 'tel:+972505345605',
                },
            ],
        },
    ]

    constructor(private sanitizer: DomSanitizer) {}

    ngOnInit(): void {
        // Sanitize the map URL immediately on load
        this.safeMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
            this.rawMapUrl
        )
    }
}
