import { ILayout } from '@/typing/layout';

export async function fakeFetchLayout(): Promise<ILayout> {
    const res: any = {
        id: 1,
        createdAt: '2024-01-03T05:23:18.949Z',
        updatedAt: '2024-07-23T02:59:52.889Z',
        locale: 'en',
        footer: {
            id: 1,
            copyright: {
                id: 1,
                textLang: 'footer-copyright',
                informations: [
                    { id: 16, href: '/terms', labelLang: 'footer-copyright-info-terms', target: null },
                    { id: 17, href: '/privacy', labelLang: 'footer-copyright-info-privacy', target: null },
                ],
            },
        },
        header: {
            id: 1,
            menu: [
                { id: 4, titleLang: 'login', link: '/login' },

                { id: 5, titleLang: 'login', link: '/test' },
            ],
            languageMenu: [
                { id: 1, nameLang: 'language-menu-de', value: 'de' },
                { id: 2, nameLang: 'language-menu-en', value: 'en' },
            ],
            accountDropdown: {
                id: 1,
                orderStatusTextLang: 'account-dropdown-order-status-text',
                signOutGuestTextLang: 'account-dropdown-logout-text',
            },
        },
        contacts: [
            { id: 1, textLang: 'contacts-customer-service', contactNumber: null },
            { id: 2, textLang: 'contacts-technical-support', contactNumber: null },
        ],
        localizations: [],
    };

    return await res;
}

export async function fakeFetchLayout2(): Promise<ILayout> {
    const res: any = {
        id: 1,
        createdAt: '2024-01-03T05:23:18.949Z',
        updatedAt: '2024-07-23T02:59:52.889Z',
        locale: 'en',
        footer: {
            id: 1,
            copyright: {
                id: 1,
                textLang: 'footer-copyright',
                informations: [
                    { id: 16, href: '/terms', labelLang: 'footer-copyright-info-terms', target: null },
                    { id: 17, href: '/privacy', labelLang: 'footer-copyright-info-privacy', target: null },
                ],
            },
        },
        header: {
            id: 1,
            menu: [
                {
                    id: 1,
                    link: '/',
                    titleLang: 'menu-demos',
                    subMenu: [
                        {
                            id: 1,
                            link: '/',
                            titleLang: 'menu-modern',
                        },
                        {
                            id: 2,
                            link: '/standard',
                            titleLang: 'menu-standard',
                        },
                        {
                            id: 3,
                            link: '/minimal',
                            titleLang: 'menu-minimal',
                        },
                        {
                            id: 4,
                            link: '/vintage',
                            titleLang: 'menu-vintage',
                        },
                        {
                            id: 5,
                            link: '/classic',
                            titleLang: 'menu-classic',
                        },
                        {
                            id: 6,
                            link: '/trendy',
                            titleLang: 'menu-trendy',
                        },
                        {
                            id: 7,
                            link: '/elegant',
                            titleLang: 'menu-elegant',
                        },
                        {
                            id: 8,
                            link: '/refined',
                            titleLang: 'menu-refined',
                        },
                        {
                            id: 9,
                            link: '/contemporary',
                            titleLang: 'menu-contemporary',
                        },
                        {
                            id: 10,
                            link: '/ancient',
                            titleLang: 'menu-ancient',
                        },
                    ],
                },
                {
                    id: 2,
                    link: '/search?q=men-wear',
                    titleLang: 'menu-men-wear',
                    columns: [
                        {
                            id: 1,
                            columnItems: [
                                {
                                    id: 1,
                                    link: '/search?q=top-wear',
                                    titleLang: 'menu-top-wear',
                                    columnItemItems: [
                                        {
                                            id: 1,
                                            link: '/search?q=t-shit-shirtrt',
                                            titleLang: 'menu-t-shirt',
                                        },
                                        {
                                            id: 2,
                                            link: '/search?q=casual-shirts',
                                            titleLang: 'menu-casual-shirts',
                                        },
                                        {
                                            id: 3,
                                            link: '/search?q=formal-shirts',
                                            titleLang: 'menu-formal-shirts',
                                        },
                                        {
                                            id: 4,
                                            link: '/search?q=blazwers-coats',
                                            titleLang: 'menu-blazwers-coats',
                                        },
                                        {
                                            id: 5,
                                            link: '/search?q=suits',
                                            titleLang: 'menu-suits',
                                        },
                                        {
                                            id: 6,
                                            link: '/search?q=jackets',
                                            titleLang: 'menu-jackets',
                                        },
                                    ],
                                },
                                {
                                    id: 2,
                                    link: '/search?q=belt-scarves',
                                    titleLang: 'menu-belt-scarves',
                                },
                                {
                                    id: 3,
                                    link: '/search?q=watches-wearables',
                                    titleLang: 'menu-watches-wearables',
                                },
                            ],
                        },
                        {
                            id: 2,
                            columnItems: [
                                {
                                    id: 1,
                                    link: '/search?q=western-wear',
                                    titleLang: 'menu-western-wear',
                                    columnItemItems: [
                                        {
                                            id: 1,
                                            link: '/search?q=dresses',
                                            titleLang: 'menu-dresses',
                                        },
                                        {
                                            id: 2,
                                            link: '/search?q=jumpsuits',
                                            titleLang: 'menu-jumpsuits',
                                        },
                                        {
                                            id: 3,
                                            link: '/search?q=tops-t-shirt',
                                            titleLang: 'menu-tops-shirts',
                                        },
                                        {
                                            id: 4,
                                            link: '/search?q=shorts-skirts',
                                            titleLang: 'menu-shorts-skirts',
                                        },
                                        {
                                            id: 5,
                                            link: '/search?q=shurgs',
                                            titleLang: 'menu-shurgs',
                                        },
                                        {
                                            id: 6,
                                            link: '/search?q=blazers',
                                            titleLang: 'menu-blazers',
                                        },
                                    ],
                                },
                                {
                                    id: 2,
                                    link: '/search?q=plus-size',
                                    titleLang: 'menu-plus-size',
                                },
                                {
                                    id: 3,
                                    link: '/search?q=sunglasses-frames',
                                    titleLang: 'menu-sunglasses-frames',
                                },
                            ],
                        },
                        {
                            id: 3,
                            columnItems: [
                                {
                                    id: 1,
                                    link: '/search?q=footwear',
                                    titleLang: 'menu-footwear',
                                    columnItemItems: [
                                        {
                                            id: 1,
                                            link: '/search?q=flats',
                                            titleLang: 'menu-flats',
                                        },
                                        {
                                            id: 2,
                                            link: '/search?q=casual-shoes',
                                            titleLang: 'menu-casual-shoes',
                                        },
                                        {
                                            id: 3,
                                            link: '/search?q=heels',
                                            titleLang: 'menu-heels',
                                        },
                                        {
                                            id: 4,
                                            link: '/search?q=boots',
                                            titleLang: 'menu-boots',
                                        },
                                    ],
                                },
                                {
                                    id: 2,
                                    link: '/search?q=sports-active-wear',
                                    titleLang: 'menu-sports-active-wear',
                                    columnItemItems: [
                                        {
                                            id: 1,
                                            link: '/search?q=clothing',
                                            titleLang: 'menu-clothing',
                                        },
                                        {
                                            id: 2,
                                            link: '/search?q=footwear',
                                            titleLang: 'menu-footwear',
                                        },
                                        {
                                            id: 3,
                                            link: '/search?q=sports-accessories',
                                            titleLang: 'menu-sports-accessories',
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            id: 4,
                            columnItems: [
                                {
                                    id: 1,
                                    link: '/search?q=lingerie-sleepwear',
                                    titleLang: 'menu-lingerie-sleepwear',
                                    columnItemItems: [
                                        {
                                            id: 1,
                                            link: '/search?q=bra',
                                            titleLang: 'menu-bra',
                                        },
                                        {
                                            id: 2,
                                            link: '/search?q=briefs',
                                            titleLang: 'menu-briefs',
                                        },
                                        {
                                            id: 3,
                                            link: '/search?q=sleepwear',
                                            titleLang: 'menu-sleepwear',
                                        },
                                    ],
                                },
                                {
                                    id: 2,
                                    link: '/search?q=belt-scarves',
                                    titleLang: 'menu-belt-scarves',
                                    columnItemItems: [
                                        {
                                            id: 1,
                                            link: '/search?q=makeup',
                                            titleLang: 'menu-makeup',
                                        },
                                        {
                                            id: 2,
                                            link: '/search?q=skincare',
                                            titleLang: 'menu-skincare',
                                        },
                                        {
                                            id: 3,
                                            link: '/search?q=premium-beauty',
                                            titleLang: 'menu-premium-beauty',
                                        },
                                        {
                                            id: 4,
                                            link: '/search?q=lipsticks',
                                            titleLang: 'menu-lipsticks',
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            id: 5,
                            columnItems: [
                                {
                                    id: 1,
                                    link: '/search?q=gadgets',
                                    titleLang: 'menu-gadgets',
                                    columnItemItems: [
                                        {
                                            id: 1,
                                            link: '/search?q=smart-wearables',
                                            titleLang: 'menu-smart-wearables',
                                        },
                                        {
                                            id: 2,
                                            link: '/search?q=headphones',
                                            titleLang: 'menu-headphones',
                                        },
                                    ],
                                },
                                {
                                    id: 2,
                                    link: '/search?q=jewellers',
                                    titleLang: 'menu-jewellers',
                                    columnItemItems: [
                                        {
                                            id: 1,
                                            link: '/search?q=fashion-jewellers',
                                            titleLang: 'menu-fashion-jewellers',
                                        },
                                        {
                                            id: 2,
                                            link: '/search?q=fine-jewellers',
                                            titleLang: 'menu-fine-jewellers',
                                        },
                                    ],
                                },
                                {
                                    id: 3,
                                    link: '/search?q=backpacks',
                                    titleLang: 'menu-backpacks',
                                },
                                {
                                    id: 4,
                                    link: '/search?q=handbags-wallets',
                                    titleLang: 'menu-handbags-wallets',
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 3,
                    link: '/search?q=women-wear',
                    titleLang: 'menu-women-wear',
                    columns: [
                        {
                            id: 1,
                            columnItems: [
                                {
                                    id: 1,
                                    link: '/search?q=gadgets',
                                    titleLang: 'menu-gadgets',
                                    columnItemItems: [
                                        {
                                            id: 1,
                                            link: '/search?q=smart-wearables',
                                            titleLang: 'menu-smart-wearables',
                                        },
                                        {
                                            id: 2,
                                            link: '/search?q=headphones',
                                            titleLang: 'menu-headphones',
                                        },
                                    ],
                                },
                                {
                                    id: 2,
                                    link: '/search?q=jewellers',
                                    titleLang: 'menu-jewellers',
                                    columnItemItems: [
                                        {
                                            id: 1,
                                            link: '/search?q=fashion-jewellers',
                                            titleLang: 'menu-fashion-jewellers',
                                        },
                                        {
                                            id: 2,
                                            link: '/search?q=fine-jewellers',
                                            titleLang: 'menu-fine-jewellers',
                                        },
                                    ],
                                },
                                {
                                    id: 3,
                                    link: '/search?q=backpacks',
                                    titleLang: 'menu-backpacks',
                                },
                                {
                                    id: 4,
                                    link: '/search?q=handbags-wallets',
                                    titleLang: 'menu-handbags-wallets',
                                },
                            ],
                        },
                        {
                            id: 2,
                            columnItems: [
                                {
                                    id: 1,
                                    link: '/search?q=top-wear',
                                    titleLang: 'menu-top-wear',
                                    columnItemItems: [
                                        {
                                            id: 1,
                                            link: '/search?q=t-shit-shirtrt',
                                            titleLang: 'menu-t-shirt',
                                        },
                                        {
                                            id: 2,
                                            link: '/search?q=casual-shirts',
                                            titleLang: 'menu-casual-shirts',
                                        },
                                        {
                                            id: 3,
                                            link: '/search?q=formal-shirts',
                                            titleLang: 'menu-formal-shirts',
                                        },
                                        {
                                            id: 4,
                                            link: '/search?q=blazwers-coats',
                                            titleLang: 'menu-blazwers-coats',
                                        },
                                        {
                                            id: 5,
                                            link: '/search?q=suits',
                                            titleLang: 'menu-suits',
                                        },
                                        {
                                            id: 6,
                                            link: '/search?q=jackets',
                                            titleLang: 'menu-jackets',
                                        },
                                    ],
                                },
                                {
                                    id: 2,
                                    link: '/search?q=belt-scarves',
                                    titleLang: 'menu-belt-scarves',
                                },
                                {
                                    id: 3,
                                    link: '/search?q=watches-wearables',
                                    titleLang: 'menu-watches-wearables',
                                },
                            ],
                        },
                        {
                            id: 3,
                            columnItems: [
                                {
                                    id: 1,
                                    link: '/search?q=footwear',
                                    titleLang: 'menu-footwear',
                                    columnItemItems: [
                                        {
                                            id: 1,
                                            link: '/search?q=flats',
                                            titleLang: 'menu-flats',
                                        },
                                        {
                                            id: 2,
                                            link: '/search?q=casual-shoes',
                                            titleLang: 'menu-casual-shoes',
                                        },
                                        {
                                            id: 3,
                                            link: '/search?q=heels',
                                            titleLang: 'menu-heels',
                                        },
                                        {
                                            id: 4,
                                            link: '/search?q=boots',
                                            titleLang: 'menu-boots',
                                        },
                                    ],
                                },
                                {
                                    id: 2,
                                    link: '/search?q=sports-active-wear',
                                    titleLang: 'menu-sports-active-wear',
                                    columnItemItems: [
                                        {
                                            id: 1,
                                            link: '/search?q=clothing',
                                            titleLang: 'menu-clothing',
                                        },
                                        {
                                            id: 2,
                                            link: '/search?q=footwear',
                                            titleLang: 'menu-footwear',
                                        },
                                        {
                                            id: 3,
                                            link: '/search?q=sports-accessories',
                                            titleLang: 'menu-sports-accessories',
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            id: 4,
                            columnItems: [
                                {
                                    id: 1,
                                    link: '/search?q=western-wear',
                                    titleLang: 'menu-western-wear',
                                    columnItemItems: [
                                        {
                                            id: 1,
                                            link: '/search?q=dresses',
                                            titleLang: 'menu-dresses',
                                        },
                                        {
                                            id: 2,
                                            link: '/search?q=jumpsuits',
                                            titleLang: 'menu-jumpsuits',
                                        },
                                        {
                                            id: 3,
                                            link: '/search?q=tops-t-shirt',
                                            titleLang: 'menu-tops-shirts',
                                        },
                                        {
                                            id: 4,
                                            link: '/search?q=shorts-skirts',
                                            titleLang: 'menu-shorts-skirts',
                                        },
                                        {
                                            id: 5,
                                            link: '/search?q=shurgs',
                                            titleLang: 'menu-shurgs',
                                        },
                                        {
                                            id: 6,
                                            link: '/search?q=blazers',
                                            titleLang: 'menu-blazers',
                                        },
                                    ],
                                },
                                {
                                    id: 2,
                                    link: '/search?q=plus-size',
                                    titleLang: 'menu-plus-size',
                                },
                                {
                                    id: 3,
                                    link: '/search?q=sunglasses-frames',
                                    titleLang: 'menu-sunglasses-frames',
                                },
                            ],
                        },
                        {
                            id: 5,
                            columnItems: [
                                {
                                    id: 1,
                                    link: '/search?q=lingerie-sleepwear',
                                    titleLang: 'menu-lingerie-sleepwear',
                                    columnItemItems: [
                                        {
                                            id: 1,
                                            link: '/search?q=bra',
                                            titleLang: 'menu-bra',
                                        },
                                        {
                                            id: 2,
                                            link: '/search?q=briefs',
                                            titleLang: 'menu-briefs',
                                        },
                                        {
                                            id: 3,
                                            link: '/search?q=sleepwear',
                                            titleLang: 'menu-sleepwear',
                                        },
                                    ],
                                },
                                {
                                    id: 2,
                                    link: '/search?q=belt-scarves',
                                    titleLang: 'menu-belt-scarves',
                                    columnItemItems: [
                                        {
                                            id: 1,
                                            link: '/search?q=makeup',
                                            titleLang: 'menu-makeup',
                                        },
                                        {
                                            id: 2,
                                            link: '/search?q=skincare',
                                            titleLang: 'menu-skincare',
                                        },
                                        {
                                            id: 3,
                                            link: '/search?q=premium-beauty',
                                            titleLang: 'menu-premium-beauty',
                                        },
                                        {
                                            id: 4,
                                            link: '/search?q=lipsticks',
                                            titleLang: 'menu-lipsticks',
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 4,
                    link: '/search',
                    titleLang: 'menu-search',
                },
                {
                    id: 5,
                    link: '/shops',
                    titleLang: 'menu-shops',
                },
                {
                    id: 6,
                    link: '/',
                    titleLang: 'menu-pages',
                    subMenu: [
                        {
                            id: 1,
                            link: '/',
                            titleLang: 'menu-users',
                            subMenu: [
                                {
                                    id: 1,
                                    link: '/my-account',
                                    titleLang: 'menu-my-account',
                                },
                                {
                                    id: 2,
                                    link: '/signin',
                                    titleLang: 'menu-sign-in',
                                },
                                {
                                    id: 3,
                                    link: '/signup',
                                    titleLang: 'menu-sign-up',
                                },
                                {
                                    id: 4,
                                    link: '/forget-password',
                                    titleLang: 'menu-forget-password',
                                },
                            ],
                        },
                        {
                            id: 2,
                            link: '/faq',
                            titleLang: 'menu-faq',
                        },
                        {
                            id: 3,
                            link: '/privacy',
                            titleLang: 'menu-privacy-policy',
                        },
                        {
                            id: 4,
                            link: '/terms',
                            titleLang: 'menu-terms-condition',
                        },
                        {
                            id: 5,
                            link: '/contact-us',
                            titleLang: 'menu-contact-us',
                        },
                        {
                            id: 6,
                            link: '/checkout',
                            titleLang: 'menu-checkout',
                        },
                        {
                            id: 7,
                            link: '/collections/mens-collection',
                            titleLang: 'menu-collection',
                        },
                        {
                            id: 8,
                            link: '/category/man',
                            titleLang: 'menu-category',
                        },
                        {
                            id: 9,
                            link: '/order',
                            titleLang: 'menu-order',
                        },
                        {
                            id: 10,
                            link: '/404',
                            titleLang: 'menu-404',
                        },
                    ],
                },
            ],
            languageMenu: [
                { id: 1, nameLang: 'language-menu-de', value: 'de' },
                { id: 2, nameLang: 'language-menu-en', value: 'en' },
            ],
            accountDropdown: {
                id: 1,
                orderStatusTextLang: 'account-dropdown-order-status-text',
                signOutGuestTextLang: 'account-dropdown-logout-text',
            },
        },
        contacts: [
            { id: 1, textLang: 'contacts-customer-service', contactNumber: null },
            { id: 2, textLang: 'contacts-technical-support', contactNumber: null },
        ],
        localizations: [],
    };

    return await res;
}
