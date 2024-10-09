const studentScores = [
 {name :'Alice' ,score : 85} , 
 {name :'Bob' ,score : 92} , 
 {name :'Charlie' ,score : 68} , 
 {name :'David' ,score : 55} , 
 {name :'Eve' ,score : 78} , 
] ; 
const getPassingNames = (StudentNewArray) => {
  return StudentNewArray
    .filter(studentScores => studentScores.score >= 70)
    .map (studentScores => studentScores.name.toUpperCase()) 
}

const passingNames = getPassingNames (studentScores)
console.log(passingNames);



