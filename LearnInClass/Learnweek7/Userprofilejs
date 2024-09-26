const room = {
  building: {
    id: 'LX1001',
    name: 'Active Learning',
    location: {
      id: 'North1',
      street: 'PrachaUthid',
    },
  },
}
const {
  building: {
    location: { id },
  },
} = room
//console.log(id)

//2.extract notifications
const userProfile = {
  name: 'John Doe',
  contact: {
    email: 'johndoe@example.com',
    phone: {
      home: {
        main :'123-456'
      } ,
      work: {
        main :'987-654'
      }
    }
  },
  preferences: {
    theme: 'dark',
    notifications: {
      email: true,
      sms: false
    }
  }
}
const {contact:{phone:{home : {main : mainHome} , work:{main  :mainWork}} }} = userProfile // assign key name 123 -456 as mainHome and assign key 987-654 as mainWork


console.log("Main From Home : "+mainHome," AND  ","Main From Work : "+mainWork);

