.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const cookieConsent = document.getElementById('cookieConsent');
    const acceptCookies = document.getElementById('acceptCookies');
    const rejectCookies = document.getElementById('rejectCookies');

    // Verificar si el usuario ya aceptó o rechazó las cookies
    if (!localStorage.getItem('cookiesAccepted') && !localStorage.getItem('cookiesRejected')) {
        // Mostrar la ventana emergente
        cookieConsent.style.display = 'block';
    }
document
    // Aceptar cookies
    acceptCookies.addEventListener('click', function () {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieConsent.style.display = 'none'; // Ocultar ventana
    });

    // Rechazar cookies
    rejectCookies.addEventListener('click', function () {
        localStorage.setItem('cookiesRejected', 'true');
        cookieConsent.style.display = 'none'; // Ocultar ventana
    });
});

document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch('capture_ip.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch('capture_ip.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-next');
    const prevButton = document.querySelector('.carousel-prev');
    
    const slideWidth = slides[0].getBoundingClientRect().width;
    let currentSlide = 0;

    function openLightbox() {
        document.getElementById('lightbox').style.display = "block";
    }
    
    function closeLightbox() {
        document.getElementById('lightbox').style.display = "none";
    }
    
    let slideIndex = 1;
    
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
        let slides = document.getElementsByClassName('lightbox-slide');
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }
    
<script>
document.addEventListener('DOMContentLoaded', function () {
    const calendario = document.getElementById('calendario');
    const colors = { full: 'red', limited: 'yellow', available: 'green' };
    const availabilityClasses = ['full', 'limited', 'available'];

    function generateCalendar(year) {
        calendario.innerHTML = ''; // Limpiar contenido previo
        const startDate = new Date(year, 0, 1); // 1 de enero del año seleccionado
        const endDate = new Date(year, 11, 31); // 31 de diciembre del año seleccionado
        let currentDate = startDate;
        
        // Crear encabezado del calendario
        const daysOfWeek = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
        daysOfWeek.forEach(day => {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day';
            dayElement.style.fontWeight = 'bold';
            dayElement.innerText = day;
            calendario.appendChild(dayElement);
        });

        // Rellenar los días del calendario
        while (currentDate <= endDate) {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day';

            // Asignar clase de disponibilidad aleatoria
            const availability = availabilityClasses[Math.floor(Math.random() * availabilityClasses.length)];
            dayElement.classList.add(availability);

            // Asignar precio basado en la disponibilidad
            let price = 100; // Precio base
            if (availability === 'full') {
                price = 250;
            } else if (availability === 'limited') {
                price = 180;
            } else if (availability === 'available') {
                price = 120;
            }

            dayElement.innerHTML = `${currentDate.getDate()}<br>€${price}`;
            calendario.appendChild(dayElement);

            // Pasar al siguiente día
            currentDate.setDate(currentDate.getDate() + 1);
        }
    }

    // Generar el calendario para 2024 por defecto
    generateCalendar(2024);

    // Puedes añadir botones o un selector para cambiar entre los años 2024 y 2025
});
</script>
document.addEventListener('DOMContentLoaded', function () {
    const calendario = document.getElementById('calendario');
    const colors = { full: 'red', limited: 'yellow', available: 'green' };
    const availabilityClasses = ['full', 'limited', 'available'];

    function generateCalendar(year) {
        calendario.innerHTML = ''; // Limpiar contenido previo
        const startDate = new Date(year, 0, 1); // 1 de enero del año seleccionado
        const endDate = new Date(year, 11, 31); // 31 de diciembre del año seleccionado
        let currentDate = startDate;
        
        // Crear encabezado del calendario
        const daysOfWeek = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
        daysOfWeek.forEach(day => {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day';
            dayElement.style.fontWeight = 'bold';
            dayElement.innerText = day;
            calendario.appendChild(dayElement);
        });

        // Rellenar los días del calendario
        while (currentDate <= endDate) {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day';

            // Asignar clase de disponibilidad aleatoria
            const availability = availabilityClasses[Math.floor(Math.random() * availabilityClasses.length)];
            dayElement.classList.add(availability);

            // Asignar precio basado en la disponibilidad
            let price = 100; // Precio base
            if (availability === 'full') {
                price = 250;
            } else if (availability === 'limited') {
                price = 180;
            } else if (availability === 'available') {
                price = 120;
            }

            dayElement.innerHTML = `${currentDate.getDate()}<br>€${price}`;
            calendario.appendChild(dayElement);

            // Pasar al siguiente día
            currentDate.setDate(currentDate.getDate() + 1);
        }
    }

    // Función para mostrar el calendario al hacer clic
    window.mostrarCalendario = function() {
        calendario.style.display = 'grid'; // Mostrar el calendario
        generateCalendar(new Date().getFullYear()); // Generar calendario para el año actual (2024)
    };
});

function renderCalendar() {
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
    currentMonthElement.textContent = new Date(currentYear, currentMonth).toLocaleDateString('default', { month: 'long', year: 'numeric' });

    let days = '';

    // Rellenar días vacíos antes del primer día del mes
    for (let i = 0; i < firstDayIndex; i++) {
        days += `<div class="calendar-day"></div>`;
    }

    // Rellenar los días del mes con el precio y la clase de color
    for (let i = 1; i <= daysInMonth; i++) {
        const price = getRandomPrice();
        const priceClass = getPriceClass(price);
        days += `<div class="calendar-day ${priceClass}" onclick="selectDate(${i})">${i}<br>€${price}</div>`;
    }

    calendarBody.innerHTML = days;
}