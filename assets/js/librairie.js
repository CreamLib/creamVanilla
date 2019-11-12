function inputRequired() {
    var allInput = document.querySelectorAll('.ui-input');
    allInput.forEach(function(element) {
        var input = element.querySelector('input');
        if(input.required) {
            input.parentNode.classList.add('required');
        }
        if (input.disabled) {
            input.parentNode.classList.add('disabled');
        }
    })
}

document.addEventListener('DOMContentLoaded', function () {
    inputRequired();
});