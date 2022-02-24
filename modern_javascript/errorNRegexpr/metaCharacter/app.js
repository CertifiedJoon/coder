// Literal characters
let re = /hello/;
re = /hello/i;

// Metacharacters
re = /^hello/i; // must start with word after ^
re = /world$/i; // must end with the word before $
re = /h.llo/i; // . can match any ONE character
re = /h*llo/i; // * can match any word/character 0 or more times

// Optional character
re = /gra?e?y/;

// Escape character
re = /gra?e?y\?/;


// [] brackets
re = /[GF]ray/; // matches any character in brackets
re = /[^ZE]ray/; // matches any character not in brackets
re = /[A-Z]ray/; // matches any character in range
re = /[A-Z][a-z]ay/; // matches each character in range
re = /[A-Za-z]ay/; // matches any ONE character in range
re = /[0-9]ray/; // works for number ranges;

// {} quantifiers
re = /hel{2}o/; // matches previous character {m} times
re = /hel{2,4}0/; // matches previous character {m ~ n} times
re = /hel{2,}o/; // matches previous character at least {m} times

// () grouping
re = /([0-9]x){3}/; // treat what is inside () as one character


// shorthand characters
re = /\w/; // match any word character : alphanumeric or _
re = /\w+/; // match any word character one or more time;
re = /\W/; // match any non-word character;

re = /\d/; // match any digit
re = /\d+/; // match any digit one or more time;
re = /\D/; // match any non-digit;

re = /\s/; // match any white space including new line
re = /\s+/;
re = /\S/;

re = /Hell\b/i; // Word boundary match strictly prevous word

// Assertions
re = /x(?=y)/; // match x iff x is followed by y;
re = /x(?!y)/; // match x iff x is not followed by y;
const str = 'hello x';
console.log(re.exec(str));

function testRe(re, str) {
    if (re.test(str)){
        console.log(`${re.source} is in ${str}`);
    } else {
        console.log(`${re.source} is not in ${str}`);
    }
}

testRe(re, str);