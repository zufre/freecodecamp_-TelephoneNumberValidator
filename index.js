function telephoneCheck(str) {
 if (str.charAt(0)==="-"){
   return false;
 }
 str = str.replace( /\-/g , '');
 str = str.replace(/\s+/g,'');
 if (str.charAt(0) === "1") {
   if(str.charAt(1) === "(" && str.charAt(5) !==")"){
     return false;
   }else if (str.charAt(1)==="(") {
     str = str.replace(/\(/g, "");
     str = str.replace(/\)/g, "");
     if (str.replace(/[0-9]/g,"") !== "") {
       return false;
     }else if(str.length !== 11){
       return false
     }
   } else if (str.replace(/[0-9]/g,"") !== ""){
     return false;
   }
   return true;

   }else if (str.charAt(0)==="(" && str.charAt(4) !==")") {
     return false;
   }else if (str.charAt(0)==="("){
      str = str.replace(/\(/g, "");
     str = str.replace(/\)/g, "");
     if (str.replace(/[0-9]/g,"") !== "") {
       return false;
     }else if (str.length !== 10){
       return false;
     }
   }else if (str.replace(/[0-9]/g,"") !== ""){
     return false;
   }else if (str.length != 10) {
     return false;
   }
   return true;
 }
  

telephoneCheck("555-555-5555");
  