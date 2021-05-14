import menuEl from './menu.json';
import '../src/styles.css';
import menuCardTpl from './templates/menu-card.hbs';

window.onload = () => {
    const menu = document.querySelector('.js-menu');
    menu.innerHTML = menuCardTpl(menuEl);
};


const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const existingTheme = localStorage.getItem('Theme');
const parsedExistingTheme = JSON.parse(existingTheme);
console.log(parsedExistingTheme);

if (existingTheme) {
    document.body.classList.add(parsedExistingTheme);
  }

  const themeSwitchEl = document.querySelector('#theme-switch-toggle');

  if(existingTheme === JSON.stringify(Theme.DARK)){
    themeSwitchEl.checked = true;
};

  themeSwitchEl.addEventListener('change', changeTheme);

// function classListChange(){};

  function changeTheme(e){
    if(e.target.checked)
   {
      document.body.classList.toggle('dark-theme');
      // document.body.classList.toggle('light-theme');
      localStorage.setItem('Theme', JSON.stringify(Theme.DARK));
    }
    else
    {
      document.body.classList.toggle('light-theme');
      document.body.classList.toggle('dark-theme');
      localStorage.setItem('Theme', JSON.stringify(Theme.LIGHT));
    }
};








//   function changeTheme(e){
//     if(e.target.checked){
//       document.body.classList.remove(existingTheme);
//       document.body.classList.add('dark-theme');
//       localStorage.setItem('Theme', JSON.stringify(Theme.DARK));
//     }else{
//       document.body.classList.remove(existingTheme);
//       document.body.classList.remove('dark-theme');
//       localStorage.setItem('Theme', JSON.stringify(Theme.LIGHT));
//     }
// };
