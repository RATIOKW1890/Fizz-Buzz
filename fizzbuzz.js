let fizz = 3;
let buzz = 5;
let mainnum = 1;

while (mainnum <= 50) {
    if (mainnum % fizz === 0 && mainnum % buzz === 0) {
        console.log("FizzBuzz")
    }
    else if (mainnum % fizz === 0) {
        console.log("Fizz")
    }
    else if (mainnum % buzz === 0) {
        console.log("Buzz")
    }
    else {
        console.log(mainnum)
    }

    mainnum++;
}
