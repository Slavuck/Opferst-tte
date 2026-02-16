const flashlight = document.getElementById('flashlight');
let lastMouseX = 0;
let lastMouseY = 0;
let flickerTimeout;

document.addEventListener('mousemove', e => {
    // Обновляем позицию фонарика
    flashlight.style.setProperty('--x', e.clientX + 'px');
    flashlight.style.setProperty('--y', e.clientY + 'px');

    // Вычисляем скорость движения (расстояние между точками)
    const deltaX = Math.abs(e.clientX - lastMouseX);
    const deltaY = Math.abs(e.clientY - lastMouseY);
    const speed = deltaX + deltaY;

    // Если скорость выше порога (например, 150 единиц)
    if (speed > 150) {
        startFlicker();
    }

    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
});

function startFlicker() {
    // Добавляем классы анимации
    flashlight.classList.add('flicker');
    flashlight.classList.add('glitch-red');

    // Убираем эффект через 500мс затишья
    clearTimeout(flickerTimeout);
    flickerTimeout = setTimeout(() => {
        flashlight.classList.remove('flicker');
        flashlight.classList.remove('glitch-red');
    }, 500);
}

// Интерактивные данные
const data = {
    altar: "Монолит выполнен из базальта. На нем видны следы воска и органических остатков. Радиоуглеродный анализ указывает на 1740-е годы.",
    inscription: "Надпись на смеси латыни и древнегерманского: 'Тот, кто кормит тени, никогда не будет одинок в темноте'."
};

function showDetail(id) {
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    modalText.innerText = data[id];
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Эффект печатающейся машинки для дневника
const textElement = document.getElementById('typing-text');
const text = textElement.innerText;
textElement.innerText = '';
let i = 0;

function typeWriter() {
    if (i < text.length) {
        textElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

// Запуск при загрузке
window.onload = typeWriter;