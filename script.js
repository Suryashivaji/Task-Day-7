var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all","true");
request.send();
request.onload = function(){
  var data = request.response;
  var result = JSON.parse(data);

  var currency = result.filter((y)=>y.continent=== "Asia")

currency.map((dollar)=>console.log(`Asia region : ${dollar.region}`))

  var res = result.filter((x)=>x.population<200000)
res.map((countries)=>console.log(countries.name.common))
 
var detiles = result.forEach(element =>console.log( `${element.name.common},${element.capital}, ${element.flag}`));

var total =result.reduce((acc,cv)=>acc+cv.population,0)
console.log(total);

// var currency = result.filter((y)=>y.currencies=== "USD")

// currency.map((dollar)=>console.log(`dollar contreis : ${dollar.common}`))
}