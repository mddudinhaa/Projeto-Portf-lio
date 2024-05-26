document.addEventListener('DOMContentLoaded', function() {
    const myComponent = document.getElementById('myComponent');

    myComponent.addEventListener('mouseover', function() {
        myComponent.classList.add('component-hover');
    });

    myComponent.addEventListener('mouseout', function() {
        myComponent.classList.remove('component-hover');
    });
});
function hello(){
    alert("Obrigada por ter acessado, meu site!!!");
}
document.addEventListener('DOMContentLoaded', function() {
    const myButton = document.getElementById('myButton');

    myButton.addEventListener('click', function() {
        alert('Botão clicado!');
    });
});