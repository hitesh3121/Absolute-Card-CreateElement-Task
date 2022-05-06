let div = document.createElement('div');

div.id = 'headerid';
div.className = 'headerclass';

let label = document.createElement('label');
label.textContent = "Header";
div.appendChild(label);


let label = document.createElement('label');
label.textContent = 'Description';
div.appendChild(label);

let script = document.createElement('script');
script.src = './asset/img.jpg';
div.appendChild(script);