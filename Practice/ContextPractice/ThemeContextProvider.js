// Todo: Create & manage context in this file
import React from 'react'; 
// import { createContext } from 'react';

export const ThemeContext = React.createContext({
    theme: 'light',
    toggleTheme: () => {},
});


export default function ThemeContextProvider({children}) {
  // Todo: Add the component code (incl. dynamic context value)
  
  const [dTheme, setDTheme] = React.useState('light');
  
  const changeTheme = () => {
      if(dTheme === 'light') {
          setDTheme('dark');
      }
      else {
          setDTheme('light');
      }
      
  }
  
  const themeCtx = {
      theme: dTheme,
      toggleTheme: changeTheme,
  };
  
  return(
      <ThemeContext.Provider value={themeCtx}>
      {children}
      </ThemeContext.Provider>
      );
  
}
