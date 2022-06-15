// 1)

function printNumbers(from, to) {
    let number = from;

    setTimeout(function showNumber() {
        console.log(number);
        if (number < to) {
            setTimeout(showNumber, 1000);
        }
        number++;
    }, 1000);
}

printNumbers(5, 10);


function printNumbers(from, to) {
    let number = from;

    let timerId = setInterval(() => {
        console.log(number)
        if (number === to) {
            clearInterval(timerId);
        };
        number++;
    }, 1000);
}

printNumbers(5, 10);


//2)

let timerId2 = setInterval(() => console.log("Some message"), 3000);
setTimeout(() => {
    clearInterval(timerId2)
    console.log("Finished messages");
}, 30000);


// 3)

function firstCall() {
    console.log(1);
    secondCall();
    setTimeout(function() {
        console.log(3)
    }, 3000);
    console.log(4);
}

function secondCall() {
    setTimeout(function() {
        console.log(5)
    }, 0);
    console.log(6);
}

firstCall();

// 1,6,4,5,3

// 4)

let jordan = {
    name: "Michael",
    age: 59,
    showName: function() {
        console.log(this.name);
    },
};

let messi = {
    name: "Lionel",
    age: 34,
};

console.log(jordan.showName());

console.log(jordan.showName.call(messi));