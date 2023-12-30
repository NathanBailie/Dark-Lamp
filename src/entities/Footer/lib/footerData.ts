import location from 'shared/assets/icons/footer/location.png';
import phone from 'shared/assets/icons/footer/phone.png';
import facebook from 'shared/assets/icons/footer/socials/facebook.png';
import twitter from 'shared/assets/icons/footer/socials/twitter.png';
import instagram from 'shared/assets/icons/footer/socials/instagram.png';
import linkedin from 'shared/assets/icons/footer/socials/linkedin.png';

interface FooterLink {
    name: string
    href: string
    img?: string
    alt?: string
}

interface FooterLinks {
    title: string
    links: FooterLink[]
}

interface FooterSocials {
    title: string
    links: Social[]

}

interface Social {
    img: string
    alt: string
    href: string
}

export const footerLinks: FooterLinks[] = [
    {
        title: 'Contact Us',
        links: [
            { name: '4834 Lilac Lane Vidalia, GA 30474', href: '#', img: location, alt: 'location' },
            { name: '229-498-9277', href: '#', img: phone, alt: 'phone' }
        ]
    },
    {
        title: 'Quick Links',
        links: [
            { name: 'Home', href: '#' },
            { name: 'Product', href: '#' },
            { name: 'Blog', href: '#' },
            { name: 'Pricing', href: '#' }
        ]
    },
    {
        title: 'About',
        links: [
            { name: 'Delivery Information', href: '#' },
            { name: 'Privacy Policy', href: '#' },
            { name: 'Terms & Condition', href: '#' },
            { name: 'Order & Return', href: '#' }
        ]
    }
];

export const footerSocials: FooterSocials = {
    title: 'Follow Us',
    links: [
        {
            img: facebook, alt: 'facebook', href: '#'
        },
        {
            img: twitter, alt: 'twitter', href: '#'
        },
        {
            img: instagram, alt: 'instagram', href: '#'
        },
        {
            img: linkedin, alt: 'linkedin', href: '#'
        }
    ]
};
