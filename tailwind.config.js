/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    fontFamily:{
      'my-text':['Bree Serif', 'serif'],
      'body':['Noticia Text', 'serif'],
      'logo':['Pacifico', 'cursive'],
      'about':['Tektur', 'cursive']
    },
    extend: {
      margin:{
        'xxl':'3.4rem'
      },
      height:{
        'custom':'44rem',
        'about':'300px'
      }
    },
  },
  plugins: [],
}

