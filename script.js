const flashlight = document.getElementById('flashlight');
let lastMouseX = 0;
let lastMouseY = 0;
let flickerTimeout;

// Отслеживание мыши
document.addEventListener('mousemove', e => {
    flashlight.style.setProperty('--x', e.clientX + 'px');
    flashlight.style.setProperty('--y', e.clientY + 'px');

    const deltaX = Math.abs(e.clientX - lastMouseX);
    const deltaY = Math.abs(e.clientY - lastMouseY);
    const speed = deltaX + deltaY;

    // Реакция на резкое движение
    if (speed > 160) {
        startFlicker(400); // Мигаем 400мс при дерганье
    }

    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
});

// Функция мигания с настраиваемым временем
function startFlicker(duration) {
    flashlight.classList.add('flicker');
    flashlight.classList.add('glitch-red');

    clearTimeout(flickerTimeout);
    flickerTimeout = setTimeout(() => {
        flashlight.classList.remove('flicker');
        flashlight.classList.remove('glitch-red');
    }, duration);
}

// Модальные окна
const data = {
    altar: "Алтарь осквернен. Под слоем пыли найдены гравировки, изображающие 'Ткача Кукол' — местную легенду Кобурга, которой пугали детей.",
    inscription: "Текст гласит: 'То, что отдано камню, вернется плотью. Когда в Нойштадте замолкнут колокола, он проснется'."
};

function showDetail(id) {
    const modal = document.getElementById('modal');
    document.getElementById('modal-text').innerText = data[id];
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Печатная машинка
function typeWriter() {
    const textElement = document.getElementById('typing-text');
    const text = textElement.innerText;
    textElement.innerText = '';
    let i = 0;
    
    function type() {
        if (i < text.length) {
            textElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 40);
        }
    }
    type();
}

// Инициализация при заходе
window.onload = () => {
    typeWriter();
    // Эффект нестабильности: мигаем 1 секунду сразу при входе
    startFlicker(1000); 
};
