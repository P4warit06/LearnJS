function isValidPassword(password) {
  if (password === undefined || password === null) {
    return undefined;
  }
  let checkUppercase = false;
  let checkLowercase = false;
  let checkNumber = false;

  for (let i = 0; i < password.length; i++) {
    let char = password[i];
    if (password.length < 8) {
      return false;
    }

    if (char >= "a" && char <= "z") {
      checkLowercase = true;
    }
    if (char >= "A" && char <= "Z") {
      checkUppercase = true;
    }
    if (char >= "0" && char <= "9") {
      checkNumber = true;
    }
    if (checkUppercase && checkLowercase && checkNumber) {
      return true;
    }
  }
  return false;
}

console.log(isValidPassword("Password123"));
console.log(isValidPassword("pass123"));
console.log(isValidPassword("PASSWORD123"));
console.log(isValidPassword("Pass12"));

// function isValidPassword(password) {
//     if (password.length < 8) {
//         return false;
//     }
//     if (!/[A-Z]/.test(password)) {
//         return false;
//     }
//     if (!/[a-z]/.test(password)) {
//         return false;
//     }
//     if (!/[0-9]/.test(password)) {
//         return false;
//     }
//     return true;
// }

// console.log(isValidPassword('Password123'));
// console.log(isValidPassword('pass123'));
// console.log(isValidPassword('PASSWORD123'));
// console.log(isValidPassword('Pass12'));
