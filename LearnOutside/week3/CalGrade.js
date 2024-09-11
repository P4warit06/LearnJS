function CalGrade(Grades) {
  if (typeof Grades !== 'number') return undefined;
  return Grades > 90 ? 'A' :
         Grades > 70 ? 'B' :
         Grades > 50 ? 'C' :
         Grades >= 0 ? 'D' : undefined;
}



console.log(CalGrade(50))
console.log(CalGrade(70))
console.log(CalGrade(98))
console.log(CalGrade(88))
