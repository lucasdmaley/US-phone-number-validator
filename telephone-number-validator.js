function telephoneCheck(str) {
  if ((/[^\d\-\)\(" "]/).test(str)) return false; //checks if valid characters have been entered
  str = str.match(/[\d\)\(\-]/g);

  //country code
  if (str[0] == 1) str.splice(0, 1);

  //area code
  let areaCode;
  if (str[0] == "(" && str[4] == ")") { 
    areaCode = str.splice(1, 3).join("");
    str = str.splice(2,);
  } else areaCode = str.splice(0, 3).join(""); //assigns areaCode relevant characters
  if (!/[\d]{3,}/.test(areaCode) || /\)/.test(str)) return false; 
  // ^area code made up of non digit characters or user entered final ")" but not initial "("

  if (/-?[\d]{3,3}-?[\d]{4,4}/.test(str.join(""))) //checks if valid end is entered
      return str.join("").match(/-?[\d]{3,3}-?[\d]{4,4}/)[0].length == str.join("").length; 
      ^//and if the length of match is equal to the length of numbers left to check
  
  return false;
}

console.log(telephoneCheck("1 789-4444"));
