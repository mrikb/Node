var square = (x) => x*x

console.log(square(9));
//when you dont need this keyboard

var user = {
    name: "Mrik",
    sayHi: () => {
        console.log(`Hi ${user.name}`);
    },
    sayHiAlt() {
        console.log(`Hi ${this.name}`);
    }
};

user.sayHi();
user.sayHiAlt();