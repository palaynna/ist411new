async function getBaconipsum(){
  var apiString = "https://baconipusm.com/api/";
  var newParagraph = document.getElementById("newParagraps").nodeValue;
  apiSting = apiStrong + "?type=meat-and-filler&paras" + newParagraph;
  alert(apiSting);

  var response = await fetch(apiSting);

  document.getElementById("myRawData").innerHTML = "";
  document.getElementById("myFormattedData").innerHTML = "";

  var jsonData = await response.json();

  document.getElementById("myRawData").innerHTML = JSON.stringify(jsonData);

  for (var para in jsonSata){
    document.getElementById("myFormattedData").innerHTML += "<p>" + jsonData[para] + "<p>";
  }
  return true;
}