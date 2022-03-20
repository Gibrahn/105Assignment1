class User {
    constructor(firstName, lastName, email, age, address, password, cardNumber, phone, color) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
        this.password = password;
        this.cardNumber = cardNumber;
        this.contactPhone = phone;
        this.color = color;
    }
}

var gibrahn = new User(`Gibrahn`, `Duarte`, `gibrahn09@gmail.com`, `asdf`, `8888-8888-8888-8888`);
console.log(userList);

function register(){
    let inputFirstName = $(`#txtFirstName`).val();
    let inputLastName = $(`#txtLastName`).val();
    let inputEmail = $(`#txtEmail`).val();
    let inputPassword = $(`#txtPassword`).val();
    let inputAge = $(`#txtAge`).val();
    let inputAddress = $(`#txtAddress`).val();
    let inputCardNumber = $(`#txtCardNumber`).val();
    let inputPhone = $(`#txtPhone`).val();
    let inputColor = $(`#txtColor`).val();

    //create the User
    let theUser = new User(inputFirstName, inputLastName, inputEmail, inputPassword, inputAge, inputAddress, inputCardNumber, inputPhone, inputColor);
    // validate the user

    console.log(theUser);

    $("input").val("");
}

function init(){
    console.log("Registration");
    //hook events
}
window.onload = init(); 
