const mail = {
  sender: { firstname: 'John', lastname: 'somsri' },
  subject: 'Wake up',
}
console.log(mail.sender.firstname)
console.log(mail.sender['firstname'])
console.log(mail['sender']['firstname'])
// add  a new property  name 'fullname ' and assign  firstname and lastname to fullname 
mail.sender.fullname  = mail.sender.firstname + ' ' + mail.sender.lastname
console.log(mail.sender);

