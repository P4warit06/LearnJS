function getCharacterInfo(Name) {
    if (!Name) return undefined;
     const length1 = Name.length
     const TheFirstCharacter = Name.charAt(0);
     const TheLastCharacter = Name.charAt(Name.length - 1)
     const info = {length : length1 , firstCharacter : TheFirstCharacter, lastCharacter:TheLastCharacter } 
    return info
}
console.log(getCharacterInfo("JavaScript"));
console.log(getCharacterInfo("Hi Hi Kub"));
