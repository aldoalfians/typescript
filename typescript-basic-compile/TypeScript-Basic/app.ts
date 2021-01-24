// Unknown type
let userInput: unknown;
userInput = 5;
userInput = "Aldo";
console.log(userInput); // Output Aldo and not Error

// deficiency unknown
let usersInput: unknown;
let userName: string;

usersInput = 5;
usersInput = "Aldo";
// userName = usersInput; //ERROR type Unknown is not assignable to type String // But using type any not ERROR
// if using unknown is correct
if (typeof userInput === "string") {
	userName = userInput;
}
// Unknown type

// Never Type
function generateError(message: string, code: number): never {
	throw { message: message, generateCode: code };
}

generateError("Something went wrong", 404);
