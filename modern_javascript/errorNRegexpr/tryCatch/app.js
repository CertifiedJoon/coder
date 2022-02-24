const user = {email: 'jdoe@gmail.com'};

try {
    // yields a reference error
    // myFunction() 

    // yields a type error
    // null.myFunction();

    // yields a syntax error
    // eval('Hello World');

    // yield a URI error
    // decodeURIComponent('%');

    if (!user.name) {
        throw new SyntaxError('User has no name.')
    } 
} catch (e) {
    // Runs when error is raised
    console.log(e);
    console.log(e.message);
    console.log(e.name);
} finally {
    // Runs regardless
    console.log('finalemente');
}

// Program continues
console.log('Program continues');