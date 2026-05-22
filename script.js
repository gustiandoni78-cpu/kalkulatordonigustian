let current = '';
let history = '';

function formatDisplay(str) {
  return str.replace(/\*\*/g, '^').replace(/\*/g, '×').replace(/\//g, '÷');
}

function updateDisplay() {
  document.getElementById('result').textContent = formatDisplay(current) || '0';

  let screen = document.getElementById('screen');
  screen.scrollTop = screen.scrollHeight;
}

function append(value) {
  current += value;
  updateDisplay();
}

function clearAll() {
  current = '';
  history = '';
  document.getElementById('history').textContent = '';
  updateDisplay();
}

function backspace() {
  current = current.slice(0, -1);
  updateDisplay();
}

function calculate() {
  try {
    let expression = current.replace(/(\d+)%/g, '($1/100)');
    let result = eval(expression);

    history = formatDisplay(current) + ' =';
    document.getElementById('history').textContent = history;

    current = result.toString();
    updateDisplay();
  } catch (e) {
    current = 'Error';
    updateDisplay();

    setTimeout(() => {
      current = '';
      updateDisplay();
    }, 800);
  }
}
