const keyElements = document.querySelectorAll('.key');
        const keyPressed = document.getElementById('keyPressed');
        const keyCode = document.getElementById('keyCode');
        const textInput = document.getElementById('textInput');
        let hideTimeout; 
        const keyMap = new Map();
        keyElements.forEach(key => {
            if (key.dataset.key) {
                keyMap.set(key.dataset.key.toLowerCase(), key);
            }
        });
        function updateEventInfo(event) {
            keyPressed.textContent = event.key;
            keyPressed.style.visibility = 'visible'; 
            keyPressed.classList.remove('hidden');
            if (hideTimeout) {
                clearTimeout(hideTimeout);
            }
            hideTimeout = setTimeout(() => {
                keyPressed.classList.add('hidden');
            }, 500);
        }
        document.addEventListener('keydown', (event) => {
            updateEventInfo(event);
            const key = keyMap.get(event.key.toLowerCase()) || 
                       keyMap.get(event.code.toLowerCase());
            
                       console.log({key});
            if (key) {
                key.classList.add('pressed');
            }
            if (['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'].includes(event.key)) {
                event.preventDefault();
                keyPressed.classList.add('prevented');
            } else {
                keyPressed.classList.remove('prevented');
            }
        });
        document.addEventListener('keyup', (event) => {
            const key = keyMap.get(event.key.toLowerCase()) || 
                       keyMap.get(event.code.toLowerCase());
            if (key) {
                key.classList.remove('pressed');
        
            }
        });
        window.addEventListener('load', () => {
            textInput.focus();
        });