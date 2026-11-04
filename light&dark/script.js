const theme = document.getElementById('theme-toggle');
const themeTitle = document.querySelector('.theme-title');
const text = document.querySelectorAll('.text');

theme.addEventListener('change', () => {
    if(theme.checked) {
        document.body.classList.add('dark');
        text.forEach(t => t.classList.add('light'));
        themeTitle.textContent = 'escuro';
    }else {
        document.body.classList.remove('dark');
        text.forEach(t => t.classList.remove('light'));
        themeTitle.textContent = 'claro';
    }
});