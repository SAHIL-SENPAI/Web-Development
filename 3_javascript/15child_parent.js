const element = document.querySelector('li');
console.log(element.parentElement)
console.log(element.parentNode)


const root = document.querySelector('ul');
console.log(root.children)
// returns a HTMLCollection
console.log(root.childNodes)
// returns a NodeList

console.log(root.firstChild)
console.log(root.firstElementChild)
console.log(root.lastChild)
console.log(root.lastElementChild)

console.log(root.nextSibling)
console.log(root.nextElementSibling)

console.log(root.previousSibling)
console.log(root.previousElementSibling)


// innerText, textContent, innerHTML
// innerHTML - returns everyting inside the tag evens the other html tags
// textContent - return all text inside the code
// innerText - returns only the text that is visible on the page

