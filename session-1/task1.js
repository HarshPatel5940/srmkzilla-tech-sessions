function hello1(name) {
    console.log("Hello " + name + ", this is invoked from normal function");
}

const hello2 = (name) => {
    console.log("Hello " + name + ", this is invoked from arrow function");
};

hello1("Harsh Patel");
hello2("Harsh Patel");
