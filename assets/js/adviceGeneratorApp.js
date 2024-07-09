let advices = {};

function renderAdvices() {
  header.innerHTML = `<p>ADVICE #${advices.slip.id}</p>`
  content.innerHTML = `<p>"${advices.slip.advice}"</p>`

  document.querySelectorAll('#generateBtn').forEach(x => x.addEventListener('click', handleAdviceClick));
}

function handleAdviceClick(e) {
  e.preventDefault();
  init();
}

function init() {
  fetch('https://api.adviceslip.com/advice')
  .then((res) => res.json())
  .then((data) => {
    advices = data;
    renderAdvices();
  })
}

init();