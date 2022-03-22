module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // These CSS variables are in index.css app stylesheet
        primary: 'var(--primary)',
        primary_variant: 'var(--primary_variant)',
        secondary: 'var(--secondary)',
        secondary_variant: 'var(--secondary_variant)',
        bg: 'var(--bg)',
        text: 'var(--text)',
        dark_primary: 'var(--dark_primary)',
        dark_primary_variant: 'var(--dark_primary_variant)',
        dark_secondary: 'var(--dark_secondary)',
        dark_secondary_variant: 'var(--dark_secondary_variant)',
        dark_bg: 'var(--dark_bg)',
        dark_text: 'var(--dark_text)',
      }
    },
  },
  plugins: [],
}