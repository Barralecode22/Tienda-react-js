function hideLoader() {
    document.getElementById("loader").style.display = "none";
}

function seleccionarSeccion(element) {
    document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('seleccionada');
    });
    element.classList.add('seleccionada');
}

document.addEventListener('DOMContentLoaded', async () => {
    const container = document.querySelector('.proyectosHorizontal');
    const response = await fetch('./data.json');
    const projects = await response.json();

    projects.forEach(project => {
        const section = document.createElement('div');
        section.classList.add('seccionProyectos');
        section.innerHTML = `
            <div>
                <div class="proYectos">
                    <div><img src="${project.icons[0]}" alt=""></div>
                    <div>
                        <h3>Proyectos</h3>
                        <p>${project.title}</p>
                    </div>
                </div>
                <div class="imgProyecto">
                    <img class="imProyectos" src="${project.src}" 
                        data-title="${project.title}" 
                        data-text="${project.text}" 
                        alt="${project.title}">
                    <div>
                        ${project.icons.map(icon => `<img src="${icon}" alt="">`).join('')}
                    </div>
                </div>
            </div>`;
        container.appendChild(section);
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.imProyectos');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.querySelector('.titleImage');
    const modalText = document.querySelector('.textImage');
    const closeBtn = document.querySelector('.close');

    images.forEach(img => {
        img.addEventListener('click', function () {
            modalImage.src = this.src;
            modalTitle.textContent = this.getAttribute('data-title');
            modalText.textContent = this.getAttribute('data-text');
            
            modalIcon.src = this.getAttribute('data-icon') || './assets/icon-default.png';
            modalIcon2.src = this.getAttribute('data-icon2') || './assets/icon-default2.png';
            modalIcon3.src = this.getAttribute('data-icon3') || './assets/icon-default3.png';
            
            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});