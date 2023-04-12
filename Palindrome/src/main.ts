// Write a palindrome algorithm in TypeScript. It should take a string as an input and return a boolean indicating whether the string is a palindrome or not. You can assume the input string will contain only lowercase letters.

function isPalindrome(str: string): boolean {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

function isPalindrome2(str: string): boolean {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return str === reversed;
}

function isPalindrome3(str: string): boolean {
    str=str.toLowerCase();
    str=str.replace(/[^a-z0-9]/g,'');
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}


let word = 'tacocat';
let notWord = 'hello';
console.log(isPalindrome(word));
console.log(isPalindrome(notWord));
console.log(isPalindrome2(word));
console.log(isPalindrome2(notWord));
console.log(isPalindrome3(word));
console.log(isPalindrome3(notWord));
