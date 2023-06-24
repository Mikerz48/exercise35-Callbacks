 const callback = () => {
    return console.log("Hello")
}

function repeatHello (callback) {
    let id = setInterval(() => {
        callback();
    }, 1000);
}

repeatHello(callback);

// Because the arrow function is made to write less and more readable code.