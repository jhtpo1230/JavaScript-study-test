console.log("test")

let a = 3;
function add(num) {
    return num + 3;
}

function add2(num) {
    if(num > 100) return;
    else {
        console.log(num);
        add2(add(num));
    }
}

add2(a);