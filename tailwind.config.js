export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Brand Palette
                primary: {
                    DEFAULT: '#125777', // Dark blue
                    light: '#207d92',   // Teal blue
                    accent: '#3bbec7',  // Bright blue-cyan
                    dark: '#0e435b'
                },
                // Dark Mode Specifics
                dark: {
                    bg: '#121212', // oklch(0.15 0 0) approx
                    card: '#1a1a1a', // oklch(0.20 0 0) approx
                    muted: '#2a2a2a' // oklch(0.25 0 0) approx
                }
            },
            borderRadius: {
                'xl': '12px',
                '2xl': '16px',
                '3xl': '24px',
            }
        },
    },
    plugins: [],
}
