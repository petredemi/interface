import _, { constant } from 'lodash';
import './style.css';



const btn = document.querySelectorAll('div.dropdown > button');
const dropdownContent = document.querySelectorAll('div.dropdown > div.dropdown-content');
const dropdown = document.querySelectorAll('div.content > div.dropdown');
const alink = document.querySelectorAll('a');

      btn.forEach((button, index) => button.addEventListener('click', (e) => {
              btn[index].setAttribute('style', 'background-color: red');
              dropdownContent[index].setAttribute('style', 'display: flex');
      }));
     dropdown.forEach((div, index) => div.addEventListener('mouseleave', (e) => {
            btn[index].setAttribute('style', 'background-color: none');
            dropdownContent[index].setAttribute('style', 'display: none');
     }));
     alink.forEach((div, index) => div.addEventListener('mouseover', (e) => {
      alink[index].setAttribute('style', 'background-color: grey');
    }));
    alink.forEach((div, index) => div.addEventListener('mouseleave', (e) => {
      alink[index].setAttribute('style', 'background-color: none');
    }));

