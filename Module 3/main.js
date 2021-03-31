function add(){
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
      var tableRef=document.getElementById("list1");
      (tableRef.insertRow(tableRef.rows.length)).innerHTML = newWord;
    }else{
      var tableRef=document.getElementById("list2");
      (tableRef.insertRow(tableRef.rows.length)).innerHTML = newWord;
    }
    document.forms["form"]["word"].value="";
    document.forms["form"]["number"].value="";
  }
}

function clear1(){
  var tableRef=document.getElementById("list1");
  tableRef.innerHTML = "";
}

function clear2(){
  var tableRef=document.getElementById("list2");
  tableRef.innerHTML = "";
}