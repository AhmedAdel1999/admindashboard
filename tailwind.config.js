/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        "loader":{
              "0%":{ 
                transform: "scale(1,0.4)"
            }, 
            "20%": { 
              transform: "scale(1,0.1)"
          },
            "40%":{ 
              transform: "scale(1,0.4)"
            }, 
            "100%" :{ 
              transform: "scale(1,0.4)"
            }, 
        }
      },
      animation:{
        "loader":"loader 1.2s infinite ease-out"
      }
    },
  },
  plugins: [],
}
