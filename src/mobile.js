const dropbtn = document.querySelectorAll('div.dropdown > button');
const myDropDown = document.querySelector('#myDropdown');
const dropdownContent = document.querySelector('div.dropdown > div.dropdown-content');
dropbtn.addEventListener('click', (e) => {
          dropbtn.style.backgroundColor = 'red';
          dropdownContent.setAttribute('style', 'display: block');
});