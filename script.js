const flashlight = document.getElementById('flashlight');

// Просто следим за движением мыши
document.addEventListener('mousemove', e => {
    flashlight.style.setProperty('--x', e.clientX + 'px');
    flashlight.style.setProperty('--y', e.clientY + 'px');
});

// Данные для модальных окон
const data = {
    altar: "Алтарь осквернен. Под слоем пыли найдены гравировки, изображающие 'Ткача Кукол' — местную легенду Кобурга, которой пугали детей.",
    inscription: "Текст гласит: 'То, что отдано камню, вернется плотью. Когда в Нойштадте замолкнут колокола, он проснется'."
};

function showDetail(id) {
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    
    // Проверка, чтобы не было ошибки, если элемент не найден
    if (modalText) {
        modalText.innerText = data[id];
        modal.style.display = 'flex';
    }
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Эффект печатной машинки
function typeWriter() {
    const textElement = document.getElementById('typing-text');
    if (!textElement) return;
    
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

// При загрузке только запускаем текст, без мигания
window.onload = typeWriter;
