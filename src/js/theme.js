const refs = {
    checkbox: document.querySelector('#theme-switch-toggle'),
    bodyDoc: document.querySelector('body')
}
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.checkbox.addEventListener('change', handleChange);
 


function handleChange() {
    if (refs.checkbox.checked) {
          
        localStorage.setItem('theme-color', Theme.DARK);
        refs.bodyDoc.classList.add(Theme.DARK);
    }
    else {
        refs.bodyDoc.classList.remove(Theme.DARK);
          refs.bodyDoc.classList.add(Theme.LIGHT);
          localStorage.setItem('theme-color', Theme.LIGHT);
              }
    
}

function setPreloadTheme(){
    const savedTheme = localStorage.getItem('theme-color')
    if (savedTheme===Theme.DARK) {
        refs.bodyDoc.classList.add(Theme.DARK);
        refs.checkbox.checked = true;
    } else { return }
}

setPreloadTheme();

