const subMenues = document.querySelectorAll('.submenu')
const btnToggleSidebar = document.querySelector('.btn-close')
const sidebar = document.querySelector('.sidebar')

subMenues.forEach(submenu => {
    submenu.addEventListener('click', (event) => {
        event.preventDefault()
        if(submenu.classList.contains('active')) return submenu.classList.remove('active')
        
        return submenu.classList.add('active')
    })
})

btnToggleSidebar.addEventListener('click' , () => {
    if(sidebar.classList.contains('minimize')) return sidebar.classList.remove('minimize')
    
    sidebar.classList.add('minimize')
})