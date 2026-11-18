/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Mulish', 'sans-serif'],
        heading: ['Marcellus', 'serif'],
        serif: ['Marcellus', 'serif'],
      },
      colors: {
        medical: {
          petroleo: '#034146',
          teal: '#3D7A7A',
          salvia: '#91A49C',
          salviaDark: '#9FB6AC',
          espresso: '#392C23',
          blackText: '#23201C',
          osso: '#E8E6DF',
          cremeClaro: '#F5F2EB',
          nevoaLight: '#E6EBE7',
          nevoaDark: '#EAEEE9',
          slate: '#64748B',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          dark: '#128C7E',
        },
      },
      backgroundImage: {
        'hero-overlay': 'linear-gradient(to right, rgba(3, 65, 70, 0.95) 35%, rgba(3, 65, 70, 0.45) 100%)',
        'final-overlay': 'linear-gradient(to bottom, rgba(3, 65, 70, 0.8) 0%, rgba(3, 65, 70, 0.96) 100%)',
      },
    },
  },
  plugins: [],
};
