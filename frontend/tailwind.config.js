module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        screens: {
            'spLG': '440px',
            'tb': '768px',
            'tn': '1025px',
            'sm': '1200px',
            'rg': '1360px',
            'md': '1600px',
        },
        extend: {
            fontFamily: {
                sans: ['Roboto', 'sans-serif'],
            },
            colors: {
                'blackInk': 'rgb(48, 48, 48)',
            },
        },
    },
    plugins: [],
}
