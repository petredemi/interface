import _ from 'lodash';
import './style.css';



const dropbtn = document.querySelector('div.dropdown > button');
const myDropDown = document.querySelector('#myDropdown');
const dropdownContent = document.querySelector('div.dropdown > div.dropdown-content');

      dropbtn.addEventListener('click', (e) => {
                dropbtn.style.backgroundColor = 'red';
                dropdownContent.setAttribute('style', 'display: block');
      });
      dropbtn.addEventListener('mouseleave', (e) => {
        dropbtn.style.backgroundColor = 'darkcyan';
        dropdownContent.setAttribute('style', 'display: none');
      });
