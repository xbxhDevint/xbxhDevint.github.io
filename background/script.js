date = new Date();
hour = date.getHours().toString().padStart(2, "0");
fetch('https://www.younghoon.ms.kr/api/school_food_api.jsp').then(res => { return res.json() }).then(json => {
  const meal = json["result"];
  meal.forEach(function(meal) {
    if (meal["MLSV_YMD"] == `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, "0")}${date.getDate().toString().padStart(2, "0")}`) {
      document.getElementById("meal").innerHTML = meal["DDISH_NM"];
    }
  });
});
if (document.getElementById("meal").innerHTML == "로딩 중...") {
  document.getElementById("meal").innerHTML = "오늘 급식은 없습니다";
}
function time() {
  date = new Date();
  hour = date.getHours().toString().padStart(2, "0");
  document.getElementById('date').innerHTML = `${date.getMonth()+1}/${date.getDate()} ${date.toString().split(" ")[0]}`;
  document.getElementById('time').innerHTML = `${hour >12 ? (hour -12).toString().padStart(2,"0") :hour }:${date.getMinutes().toString().padStart(2, "0")}`;
}
time();
setInterval(time, 1000);