fetch('https://www.younghoon.ms.kr/api/school_food_api.jsp').then(res=>{return res.json()}).then(json=>{
  const meal = json["result"]
  const date = new Date()
  meal.forEach(function(meal) {
    if (meal["MLSV_YMD"]==`${date.getFullYear()}${(date.getMonth()+1).toString().padStart(2,"0")}${date.getDate().toString().padStart(2,"0")}`) {
      document.getElementById("b").innerHTML = meal["DDISH_NM"];
    }
  });
  if (document.getElementById("b").innerHTML == "") {
    document.getElementById("b").innerHTML = "오늘 급식없다 멍충아";
  }
});