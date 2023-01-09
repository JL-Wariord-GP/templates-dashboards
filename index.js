//! VAR
const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

//! SHOW SIDEBAR
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block'
})

//! CLOSE SIDEBAR

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none'
})

//! CHANGE THEME

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-var');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

//! FILL DATA

data.forEach(data => {
    const tr = document.createElement('tr');
    const trContent =
        `
        <tr>
            <td>${data.productName}</td>
            <td>${data.productNumber}</td>
            <td>${data.paymenStatus}</td>
            <td class="${data.shipping === 'Declined' ? 'danger' : data.shipping === 'pending' ? 'warning' : 'primary'}">${data.shipping}</td>
            <td class="primary">Details</td>
        </tr>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr)
})


