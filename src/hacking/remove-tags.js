const removeTags = (str) => str.replace( /(<([^>]+)>)/ig, '');

console.log(removeTags("test"))
console.log(removeTags("<html>test aosijd aoaos ijd</html>"))
console.log(removeTags("<html><p>test aosijd <b>aoaos</b> ijd</p></html>"))
console.log(removeTags("<html><p>test aosijd <b>aoaos</b> ijd</html>")) //without ending p (broken html)