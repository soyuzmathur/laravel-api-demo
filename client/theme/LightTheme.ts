import type { ThemeTypes } from '@/types/themeTypes/ThemeType';

// --color-primary: 30 64 175;
// --color-secondary: 226 232 240;
// --color-success: 132 204 22;
// --color-info: 6 182 212;
// --color-warning: 250 204 21;
// --color-pending: 249 115 22;
// --color-danger: 220 38 38;
// --color-light: 241 245 249;
// --color-dark: 30 41 59;

const IndigoTheme: ThemeTypes = {
    name: 'Indigo',
    dark: true,
    variables: {
        'border-color': '#000000',
        'carousel-control-size': 10,
    },
    colors: {
        background: '#1e40af',
        primary: '#1A237E',
        secondary: '#49BEFF',
        info: '#539BFF',
        success: '#13DEB9',
        accent: '#FFAB91',
        warning: '#FFAE1F',
        error: '#FA896B',
        muted:'#5a6a85',
        lightprimary: '#ECF2FF',
        lightsecondary: '#E8F7FF',
        lightsuccess: '#E6FFFA',
        lighterror: '#FDEDE8',
        lightwarning: '#FEF5E5',
        textPrimary: '#2A3547',
        textSecondary: '#2A3547',
        borderColor: '#e5eaef',
        inputBorder: '#000',
        containerBg: '#ffffff',
        hoverColor: '#f6f9fc',
        surface: '#fff',
        'on-background': '#000',
        'on-surface-variant': '#fff',
        grey100: '#F2F6FA',
        grey200: '#EAEFF4'
    }
};
export { IndigoTheme};
