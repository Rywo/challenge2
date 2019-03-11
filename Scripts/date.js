function startDate() {
  var day =  date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  var date = day + "-" + month + "-" + year;
  document.getElementById("dateDisplay").innertext = date;
  document.getElementById("dateDisplay").textContent = date;
}
startDate();
