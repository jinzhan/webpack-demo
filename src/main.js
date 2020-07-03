const hello = require('./components/hello');
const world = require('./components/world');
require('./css/main.css');


var h1 = document.createElement('h1');
h1.innerHTML = 'Hello world!';
hello(h1);
world(h1);

document.body.appendChild(h1);





