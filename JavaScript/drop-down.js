const dropDownButton = document.querySelector('.dropdown-button')
const dropDownList = document.querySelector('.dropdown-list')

function activateDropdownButton(){
    dropDownList.classList.toggle('ativo')
    dropDownButton.classList.toggle('ativo')
}

dropDownButton.addEventListener('click', activateDropdownButton)



