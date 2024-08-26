/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    theme: {
        container: {
            padding: {
                DEFAULT: "1rem",
                sm: "2rem",
                lg: "4rem",
                xl: "5rem",
                "2xl": "6rem",
            },
        },
        extend: {
            gridTemplateColumns: {
                "custom-2": "auto 300px",
            },
            backgroundImage: {
                "card-advertising": "url('/img/img-4.jpg')",
            },
            backgroundPosition: {
                "custom-position": "30% 0",
            },
        },
    },
    plugins: [],
};
