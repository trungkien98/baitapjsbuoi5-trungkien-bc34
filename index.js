console.log("hello world! ");

//bai1
document.getElementById("btnResult").onclick = function () {
  var basisScore = document.getElementById("basisScore").value;
  var area = document.getElementById("area").value;
  var score1 = Number(document.getElementById("score1").value);
  var score2 = Number(document.getElementById("score2").value);
  var score3 = Number(document.getElementById("score3").value);
  var scope = document.getElementById("scope").value;
  var scopeScore = 0;
  var areaScore = 0;
  var testScore = score1 + score2 + score3;
  var totalScore;
  var textResult = "";
  if (area == 1) {
    areaScore = 2;
  } else if (area == 2) {
    areaScore = 1;
  } else if (area == 3) {
    areaScore = 0.5;
  } else {
    areaScore = 0;
  }
  if (scope == 1) {
    scopeScore = 2.5;
  } else if (scope == 2) {
    scopeScore = 1.5;
  } else if (scope == 3) {
    scopeScore = 1;
  } else {
    scopeScore = 0;
  }
  totalScore = scopeScore + areaScore + testScore;
  if (totalScore >= basisScore && score1 > 0 && score2 > 0 && score3 > 0) {
    textResult += "<p>Chúc mừng bạn đã trúng tuyển</p>";
    textResult += "<p>Tổng điểm của bạn là: " + totalScore + "</p>";
  } else if (score1 > 10 || score2 > 10 || score3 > 10) {
    textResult += "vui long nhap dung so diem";
  } else {
    textResult += "<p>Tạch r</p>";
    textResult += "<p>Tổng điểm của bạn là: " + totalScore + "</p>";
  }
  document.getElementById("showResult").innerHTML = textResult;
};

//bai2
const kwCost1 = 500;
const kwCost2 = 650;
const kwCost3 = 850;
const kwCost4 = 1100;
const kwCostLeft = 1300;
var moneyCost1 = 0;
var moneyCost2 = 0;
var moneyCost3 = 0;
var moneyCost4 = 0;
var moneyCostLeft = 0;
var totalCost = 0;
function tinhTienKw1(kW1, cost1) {
  var product = kW1 * cost1;
  return product;
}
function tinhTienKw2(kW2, cost2) {
  var product = (kW2 - 50) * cost2;
  return product;
}
function tinhTienKw3(kW3, cost3) {
  var product = (kW3 - 100) * cost3;
  return product;
}
function tinhTienKw4(kW4, cost4) {
  var product = (kW4 - 200) * cost4;
  return product;
}
function tinhTienKwLeft(kWLeft, costLeft) {
  var product = (kWLeft - 350) * costLeft;
  return product;
}
function tinhTienChiTiet(soKw, cost1, cost2, cost3, cost4, costLeft) {
  var totalCost = 0;
  if (soKw > 0 && soKw <= 50) {
    // moneyCost1 = soKw * kwCost1;
    moneyCost1 = tinhTienKw1(soKw, cost1);
    totalCost = moneyCost1;
  } else if (soKw > 50 && soKw <= 100) {
    moneyCost1 = tinhTienKw1(50, cost1);
    moneyCost2 = tinhTienKw2(soKw, cost2);
    totalCost = moneyCost1 + moneyCost2;
  } else if (soKw > 100 && soKw <= 200) {
    moneyCost1 = tinhTienKw1(50, cost1);
    moneyCost2 = tinhTienKw2(100, cost2);
    moneyCost3 = tinhTienKw3(soKw, cost3);
    totalCost = moneyCost1 + moneyCost2 + moneyCost3;
  } else if (soKw > 200 && soKw <= 350) {
    moneyCost1 = tinhTienKw1(50, cost1);
    moneyCost2 = tinhTienKw2(100, cost2);
    moneyCost3 = tinhTienKw3(200, cost3);
    moneyCost4 = tinhTienKw4(soKw, cost4);
    totalCost = moneyCost1 + moneyCost2 + moneyCost3 + moneyCost4;
  } else if (soKw > 350) {
    moneyCost1 = tinhTienKw1(50, cost1);
    moneyCost2 = tinhTienKw2(100, cost2);
    moneyCost3 = tinhTienKw3(200, cost3);
    moneyCost4 = tinhTienKw4(350, cost4);
    moneyCostLeft = tinhTienKwLeft(soKw, costLeft);
    totalCost =
      moneyCost1 + moneyCost2 + moneyCost3 + moneyCost4 + moneyCostLeft;
  } else {
    alert("vui long nhap so dien su dung");
  }
  return totalCost;
}

document.getElementById("btnMoney").onclick = function () {
  var soKw = Number(document.getElementById("kW").value);
  var customer = document.getElementById("customer").value;

  totalCost = tinhTienChiTiet(
    soKw,
    kwCost1,
    kwCost2,
    kwCost3,
    kwCost4,
    kwCostLeft
  );

  document.getElementById("showMoney").innerHTML =
    "Số tiền phải trả của anh(chị) " +
    customer +
    " phải trả là: " +
    totalCost +
    " vnd.";
};
