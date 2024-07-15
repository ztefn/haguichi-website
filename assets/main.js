var elements = document.getElementsByClassName("clipboard");
var i;
for (i = 0; i < elements.length; i++) {
  var button = document.createElement("a");
  button.innerHTML = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
<path d="M20.25 2.625h-2.625v1.5h2.25v17.625h-15.75v-17.625h2.25v-1.5h-2.625c-0.621 0.001-1.124 0.504-1.125 1.125v18.375c0.001 0.621 0.504 1.124 1.125 1.125h16.5c0.621-0.001 1.124-0.504 1.125-1.125v-18.375c-0.001-0.621-0.504-1.124-1.125-1.125h-0z"></path>
<path d="M9 6.563h6c0.621-0.001 1.124-0.504 1.125-1.125v-4.688h-8.25v4.688c0.001 0.621 0.504 1.124 1.125 1.125h0zM9.375 2.25h5.25v2.813h-5.25z"></path>
</svg>`;
  button.className = "copy-to-clipboard";
  button.title = "Copy to clipboard";
  button.onclick = function() {
    copyPrevElement(this);
  };
  elements[i].parentNode.insertBefore(button, elements[i].nextSibling);
}

function copyPrevElement(item) {
  var prevElement = item.previousSibling;
  var textArea = document.createElement("textarea");
  textArea.textContent = prevElement.textContent;
  document.body.append(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
}


const container = document.querySelector('.image-slider');
const slider = document.querySelector('.slider');

slider.addEventListener('input', function(e) {
  container.style.setProperty('--position', e.target.value + '%');
});

