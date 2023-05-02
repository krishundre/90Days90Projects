function toggleElement() {
    var text = document.getElementById('lucky');
    var code = document.getElementById('coupon');
    if (code.value == 'kris') {
        text.style.display = 'block';
    } else {
        text.style.display = 'none';
    }
}