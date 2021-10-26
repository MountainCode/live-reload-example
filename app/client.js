function renderDynamic() {
  return `<div>
<p>Edit me!</p>
  </div>`;
}

document.addEventListener(
  'DOMContentLoaded',
  () => {
    document.body.innerHTML = document.body.innerHTML + renderDynamic();
  }
);;
