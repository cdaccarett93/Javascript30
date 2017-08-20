var elem = document.getElementById('myimg');
function setimg() {
    var imgurl = document.getElementById("imgurl").value;
    elem.src = imgurl;
}

document.getElementById('imgup').addEventListener('click', setimg);

var inputs = document.querySelectorAll('.controls input');
function handleUpdate() {
    var suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty('--' + this.name, this.value + suffix);
}

inputs.forEach(function (input) {
    return input.addEventListener('change', handleUpdate);
});
inputs.forEach(function (input) {
    return input.addEventListener('mousemove', handleUpdate);
});