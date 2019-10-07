const url = 'http://localhost:3000/segmentation/edit/11#';
console.log(url.lastIndexOf('/')+1);

let id = url.slice(url.lastIndexOf('/') + 1);
console.log(id.includes('#'));
id = id.replace('#', '');

console.log(id);
