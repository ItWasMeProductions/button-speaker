window.onload = () => {
    screen.orientation.lock('portrait');

    const inputText = document.getElementById('input-text');
    const buttonText = document.getElementById('button-text');

    const button = document.getElementById('button');

    UpdateSizeInfo(document.getElementById('device-size'));

    inputText.addEventListener('input', () => UpdateButtonText(inputText, buttonText));

    button.addEventListener('click', () => Speak(inputText));
}

function UpdateButtonText(_text, _button) {
    _button.innerHTML = _text.value;
}

function Speak(_text) {
    var msg = new SpeechSynthesisUtterance();
    msg.text = _text.value;
    window.speechSynthesis.speak(msg);
}

window.onresize = () => UpdateSizeInfo(document.getElementById('device-size'));

function UpdateSizeInfo(sizeInfoText) {
    const colSize = (window.innerWidth > 1400) ? 'xxl' : (window.innerWidth > 1200) ? 'xl' : (window.innerWidth > 992) ? 'lg' : (window.innerWidth > 768) ? 'md' : (window.innerWidth > 576) ? 'sm' : 'xs';
    sizeInfoText.innerHTML = `Width: ${window.innerWidth}, Height: ${window.innerHeight}, Column Size: ${colSize}`;
}