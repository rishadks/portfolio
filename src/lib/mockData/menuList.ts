export type MenuItem = {
    label: string;
    href: string;
    subMenu?: MenuItem[];
};

export const menuList: MenuItem[] = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "About Me",
        href: "/#about",
    },
    {
        label: "Portfolio",
        href: "/#portfolio",
    },
    {
        label: "Services",
        href: "/#services",
    },
    {
        label: "Contact Us",
        href: "/#contact",
    },
];

export const menuListDark: MenuItem[] = [
    {
        label: "Home",
        href: "/home-2",
    },
    {
        label: "About Me",
        href: "/home-2#about",
    },
    {
        label: "Portfolio",
        href: "/home-2#portfolio",
    },
    {
        label: "Services",
        href: "/home-2#services",
    },
    {
        label: "Contact",
        href: "/home-2#contact",
    },
];
