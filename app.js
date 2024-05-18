

function applyStyle(style) {
    var userText = document.getElementById('userText').value;
    var textElement = document.getElementById('text');

    textElement.innerText = userText;
    textElement.style.fontStyle = (style === 'italic') ? 'italic' : 'normal';
    textElement.style.textDecoration = (style === 'underline') ? 'underline' : 'none';
    textElement.style.fontWeight = (style === 'bold') ? 'bold' : 'normal';
  }

  function applyColor() {
    var colorValue = document.getElementById('colorPicker').value;
    var textElement = document.getElementById('text');
    textElement.style.color = colorValue;
  }

  function changeFontSize(action) {
    var textElement = document.getElementById('text');
    var currentFontSize = parseFloat(window.getComputedStyle(textElement, null).getPropertyValue('font-size'));
    
    if (action === 'increase') {
      textElement.style.fontSize = (currentFontSize + 2) + 'px';
    } else if (action === 'decrease') {
      textElement.style.fontSize = (currentFontSize - 2) + 'px';
    }
  }