/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
    safelist: [
        "from-blue-400",
        "to-blue-500",
        "from-green-400",
        "to-green-500",
        "from-gray-400",
        "to-gray-500",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
