const dropDown = document.querySelectorAll('.dropdown')

function activateDropdown(event){
    const droplist = event.currentTarget
    const controls = droplist.getAttribute('aria-controls')
    const dropDownList = document.getElementById(controls)
    
    droplist.classList.toggle('ativo')
    dropDownList.classList.toggle('ativo')

}


function eventosDropdown(dropdown){
    dropdown.addEventListener('click', activateDropdown)
}

dropDown.forEach(eventosDropdown)



