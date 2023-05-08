export interface menu {
    header?: string;
    title?: string;
    to?: string;
}

const sidebarItem: menu[] = [
    { header: 'Products' },
    {
        title: 'Products',
        to: '/'
    }
];

export default sidebarItem;
