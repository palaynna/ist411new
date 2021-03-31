function check(){
  var newWord = document.forms["form"]["word"].value;
  var newNum = document.forms["form"]["number"].value;
  if(newWord == ""){
    alert("Please enter a word");
    return false;
  } else if((newNum != 1) && (newNum != 2)){
    alert("Please enter 1 or 2");
    document.forms["form"]["number"].value="";
    return false;
  } else{
    if(newNum == 1){
      var tableRef=document.getElementById("alg1");
      (tableRef.insertRow(tableRef.rows.length)).innerHTML = newWord + ":" +palindrome1(newWord);
    }else{
      var tableRef=document.getElementById("alg2");
      (tableRef.insertRow(tableRef.rows.length)).innerHTML = newWord + ":" +palindrome2(newNum);
    }
    document.forms["form"]["word"].value="";
    document.forms["form"]["number"].value="";
  }
}

function palindrome1(str){
  var len = str.length;
  for(var i=0; i<len/2; i++){
    if(str[i] !== str[len - 1 - i]){
      return false;
    }
  }
  return true;
}

function palindrome2(str){
  str = str.toLowerCase().replace(" "," ");
  var len = str.length;
  for (var i=0; i<len/2; i++){
    if(str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

function clear1(){
  var tableRef=document.getElementById("alg1");
  tableRef.innerHTML = "";
}

function clear2(){
  var tableRef=document.getElementById("alg2");
  tableRef.innerHTML = "";
}