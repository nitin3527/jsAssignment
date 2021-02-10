function palindromeOrNot(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
    
    const string = prompt('Enter a string: ');
    const value = palindromeOrNot(string);

window.onload = function(){
    document.getElementById('output').innerHTML = value;
};