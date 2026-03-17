export enum ProductType {
    Ferrous = 'Ferrous',
    Miscellaneous = 'Miscellaneous',
    NonFerrous = 'Non Ferrous',
}

export enum ProductSubType {
    Aluminum = 'Aluminum',
    Brass = 'Brass',
    Zinc = 'Zinc',
    Copper = 'Copper',
    Lead = 'Lead',
    Nickel = 'Nickel',
}

export interface Product {
    img: string
    name: string
    type: ProductType
    format?: 'jpeg' | 'jpg'
    subtype?: ProductSubType
}

export const allFerrous: Product[] = [
    {
        name: 'Fabrication',
        type: ProductType.Ferrous,
        img: '',
    },
    {
        name: 'Have melting steel rail-scrap',
        type: ProductType.Ferrous,
        img: '',
    },
    {
        name: 'Heavy melting steel chines',
        type: ProductType.Ferrous,
        format: 'jpeg',
        img: '',
    },
    {
        name: 'Heavy melting steel disc',
        type: ProductType.Ferrous,
        img: '',
    },
    {
        name: 'Machine parts',
        type: ProductType.Ferrous,
        format: 'jpeg',
        img: '',
    },
    {
        name: 'Pipe 1',
        type: ProductType.Ferrous,
        format: 'jpeg',
        img: '',
    },
    {
        name: 'Pipe 2',
        type: ProductType.Ferrous,
        format: 'jpeg',
        img: '',
    },
    {
        name: 'Pipe scrap',
        type: ProductType.Ferrous,
        img: '',
    },
    {
        name: 'Pns',
        type: ProductType.Ferrous,
        img: '',
    },
    {
        name: 'Rail scrap',
        type: ProductType.Ferrous,
        img: '',
    },
    {
        name: 'Shredded steel scrap',
        type: ProductType.Ferrous,
        img: '',
    },
    {
        name: 'Turnings',
        type: ProductType.Ferrous,
        format: 'jpeg',
        img: '',
    },
]

export const allMiscellaneous: Product[] = [
    {
        name: 'Al-starter',
        type: ProductType.Miscellaneous,
        img: '',
    },
    {
        name: 'Alternator',
        type: ProductType.Miscellaneous,
        img: '',
    },
    {
        name: 'Aluco-bond',
        type: ProductType.Miscellaneous,
        img: '',
    },
    {
        name: 'Armatures',
        type: ProductType.Miscellaneous,
        img: '',
    },
    {
        name: 'Dc-motors',
        type: ProductType.Miscellaneous,
        img: '',
    },
    {
        name: 'Electric-meter',
        type: ProductType.Miscellaneous,
        img: '',
    },
    {
        name: 'Mixed-electric-motors',
        type: ProductType.Miscellaneous,
        img: '',
    },
    {
        name: 'Rotor & Stator',
        type: ProductType.Miscellaneous,
        format: 'jpeg',
        img: '',
    },
    {
        name: 'Transformer1',
        type: ProductType.Miscellaneous,
        img: '',
    },
]

export const allNonFerrous: Product[] = [
    {
        name: 'Aluminium cables',
        type: ProductType.NonFerrous,
        format: 'jpeg',
        img: '',
    },
    {
        name: 'aluminium dross',
        type: ProductType.NonFerrous,
        format: 'jpeg',
        img: '',
    },
    {
        name: 'aluminiuom profile 1',
        format: 'jpeg',
        type: ProductType.NonFerrous,
        img: '',
    },
    {
        name: 'Aluminum packs',
        format: 'jpeg',
        type: ProductType.NonFerrous,
        img: '',
    },
    {
        name: 'aluminum profile',
        format: 'jpeg',
        type: ProductType.NonFerrous,
        img: '',
    },
    {
        name: 'Brass punching',
        format: 'jpeg',
        type: ProductType.NonFerrous,
        img: '',
    },
    {
        name: 'brass turnings',
        type: ProductType.NonFerrous,
        format: 'jpeg',
        img: '',
    },
    {
        name: 'Cables 1',
        format: 'jpeg',
        type: ProductType.NonFerrous,
        img: '',
    },
    {
        name: 'cables',
        type: ProductType.NonFerrous,
        format: 'jpeg',
        img: '',
    },
    {
        name: 'Densalloy 1',
        type: ProductType.NonFerrous,
        format: 'jpeg',
        img: '',
    },
    {
        name: 'Densalloy',
        format: 'jpeg',
        type: ProductType.NonFerrous,
        img: '',
    },
    {
        name: 'Drills',
        type: ProductType.NonFerrous,
        format: 'jpeg',
        img: '',
    },
    {
        name: 'hair wire',
        format: 'jpeg',
        type: ProductType.NonFerrous,
        img: '',
    },
    {
        name: 'Inserts',
        type: ProductType.NonFerrous,
        format: 'jpeg',
        img: '',
    },
    {
        name: 'Litho sheets',
        format: 'jpeg',
        type: ProductType.NonFerrous,
        img: '',
    },
    {
        name: 'Titanium',
        type: ProductType.NonFerrous,
        img: '',
        format: 'jpeg',
    },
    {
        name: 'titanum tarnings',
        type: ProductType.NonFerrous,
        format: 'jpeg',
        img: '',
    },
    {
        name: 'UBC',
        type: ProductType.NonFerrous,
        format: 'jpeg',
        img: '',
    },
    {
        name: 'Water Meter',
        format: 'jpeg',
        type: ProductType.NonFerrous,
        img: '',
    },
]
// TODO: not being used for now
export const allProducts: Product[] = [
    // Ferrous
    {
        name: 'Heavy Melting Steel',
        type: ProductType.Ferrous,
        img: '',
    },
    {
        name: 'Pipe Scrap',
        type: ProductType.Ferrous,
        img: '',
    },
    {
        name: 'Fabrication',
        type: ProductType.Ferrous,
        img: '',
    },
    {
        name: 'PNS',
        type: ProductType.Ferrous,
        img: '',
    },
    {
        name: 'Machine parts',
        type: ProductType.Ferrous,
        img: '',
    },
    {
        name: 'Shredded Steel Scrap',
        type: ProductType.Ferrous,
        img: '',
    },
    {
        name: 'Turnings',
        type: ProductType.Ferrous,
        img: '',
    },
    // Miscellaneous
    {
        name: 'DC Motors',
        type: ProductType.Miscellaneous,
        img: '',
    },
    {
        name: 'Armatures',
        type: ProductType.Miscellaneous,
        img: '',
    },
    {
        name: 'Mixed Electric Motors',
        type: ProductType.Miscellaneous,
        img: '',
    },
    {
        name: 'Electric Meter',
        type: ProductType.Miscellaneous,
        img: '',
    },
    {
        name: 'Transformer',
        type: ProductType.Miscellaneous,
        img: '',
    },
    {
        name: 'Rotors Stators',
        type: ProductType.Miscellaneous,
        img: '',
    },
    {
        name: 'Al Starter',
        type: ProductType.Miscellaneous,
        img: '',
    },
    {
        name: 'Aluco Bond',
        type: ProductType.Miscellaneous,
        img: '',
    },
    {
        name: 'Alternator',
        type: ProductType.Miscellaneous,
        img: '',
    },
    // NonFerrous Aluminum
    {
        name: 'Aluminium Dross',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Aluminum,
        img: '',
    },
    {
        name: 'Litho Sheets',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Aluminum,
        img: '',
    },
    {
        name: 'Talk',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Aluminum,
        img: '',
    },
    {
        name: 'Wheels',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Aluminum,
        img: '',
    },
    {
        name: 'Taint Tabor',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Aluminum,
        img: '',
    },
    {
        name: 'UBC',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Aluminum,
        img: '',
    },
    {
        name: 'Aluminium Billets',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Aluminum,
        img: '',
    },
    {
        name: 'Alu Cables',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Aluminum,
        img: '',
    },
    {
        name: 'Wire',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Aluminum,
        img: '',
    },
    {
        name: 'Foil',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Aluminum,
        img: '',
    },
    {
        name: 'Aluminium Punching',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Aluminum,
        img: '',
    },
    {
        name: 'Aluminum profile',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Aluminum,
        img: '',
    },
    {
        name: 'Extrusion',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Aluminum,
        img: '',
    },
    {
        name: 'Series 5000',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Aluminum,
        img: '',
    },
    {
        name: 'Series 6000',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Aluminum,
        img: '',
    },
    {
        name: 'Series 7000',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Aluminum,
        img: '',
    },
    // NonFerrous Brass
    {
        name: 'Brass Dross',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Brass,
        img: '',
    },
    {
        name: 'Pallu Pales',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Brass,
        img: '',
    },
    {
        name: 'Hair Wire',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Brass,
        img: '',
    },
    {
        name: 'Brass Label',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Brass,
        img: '',
    },
    {
        name: 'Brass Ebony',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Brass,
        img: '',
    },
    {
        name: 'Honey',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Brass,
        img: '',
    },
    {
        name: 'Water Meter',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Brass,
        img: '',
    },
    {
        name: 'radiator',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Brass,
        img: '',
    },
    {
        name: 'Turnings',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Brass,
        img: '',
    },
    {
        name: 'Billets',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Brass,
        img: '',
    },
    {
        name: 'Brass Valves',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Brass,
        img: '',
    },
    // NonFerrous Zinc
    {
        name: 'Dross',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Zinc,
        img: '',
    },
    {
        name: 'Zinc Saves',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Zinc,
        img: '',
    },
    {
        name: 'Zinc Die Cast',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Zinc,
        img: '',
    },
    // NonFerrous Copper
    {
        name: 'Dross',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Copper,
        img: '',
    },
    {
        name: 'Millberry',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Copper,
        img: '',
    },
    {
        name: 'Berry',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Copper,
        img: '',
    },
    {
        name: 'Birch Cliff',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Copper,
        img: '',
    },
    {
        name: 'Turnings',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Copper,
        img: '',
    },
    {
        name: 'Teli Birch',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Copper,
        img: '',
    },
    {
        name: 'Wire Rod',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Copper,
        img: '',
    },
    {
        name: 'Cable',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Copper,
        img: '',
    },
    {
        name: 'Armord Cable',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Copper,
        img: '',
    },
    // NonFerrous Lead
    {
        name: 'Lead Striping',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Lead,
        img: '',
    },
    {
        name: 'Lead Wheel Weight',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Lead,
        img: '',
    },
    {
        name: 'Lead Battery',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Lead,
        img: '',
    },
    {
        name: 'Mix Lead',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Lead,
        img: '',
    },
    // NonFerrous Nickel
    {
        name: '316',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Nickel,
        img: '',
    },
    {
        name: '304',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Nickel,
        img: '',
    },
    {
        name: '430',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Nickel,
        img: '',
    },
    {
        name: '304 Pipes',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Nickel,
        img: '',
    },
    {
        name: '316 Pipes',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Nickel,
        img: '',
    },
]
