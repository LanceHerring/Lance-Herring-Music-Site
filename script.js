
const button = document.querySelector('button');
    function greet() {
    const name = prompt('What is your name?');
    alert(`${name}, can't you read??`);
    }
         
    button.addEventListener('click', greet);
         