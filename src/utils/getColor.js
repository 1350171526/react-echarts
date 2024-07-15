function getColorByTemperature(value) {
  // 定义颜色过渡范围的起始和结束值
  var startValue1 = -30;
  var endValue1 = 0;
  var startValue2 = 0;
  var endValue2 = 20;
  var startValue3 = 20;
  var endValue3 = 40;
  var startValue4 = 40;
  var endValue4 = 50;

  // 定义颜色过渡范围的起始和结束颜色
  var startColor1 = '#37A1DA';
  var endColor1 = '#37A2DA';
  var startColor2 = '#37A2DA';
  var endColor2 = '#FFDB5C';
  var startColor3 = '#FFDB5C';
  var endColor3 = '#DD5145';
  var startColor4 = '#DD5145';
  var endColor4 = '#DD5145';

  // 根据当前值在相应的过渡范围内进行颜色插值
  var color;
  if (value >= startValue1 && value <= endValue1) {
    let ratio = (value - startValue1) / (endValue1 - startValue1);
    color = interpolateColor(startColor1, endColor1, ratio);
  } else if (value > startValue1 && value < startValue2) {
    color = startColor2;
  } else if (value >= startValue2 && value <= endValue2) {
    let ratio = (value - startValue2) / (endValue2 - startValue2);
    color = interpolateColor(startColor2, endColor2, ratio);
  } else if (value > startValue2 && value < startValue3) {
    color = startColor3;
  } else if (value >= startValue3 && value <= endValue3) {
    let ratio = (value - startValue3) / (endValue3 - startValue3);
    color = interpolateColor(startColor3, endColor3, ratio);
  } else if (value > startValue3 && value < startValue4) {
    color = startColor4;
  } else if (value >= startValue4 && value <= endValue4) {
    let ratio = (value - startValue4) / (endValue4 - startValue4);
    color = interpolateColor(startColor4, endColor4, ratio);
  } else {
    // 如果超出范围，则返回默认颜色
    color = '#000000';
  }

  return color;
}

function getColorByHumidity(value) {
  // 定义颜色过渡范围的起始和结束值
  var startValue1 = 0;
  var endValue1 = 20;
  var startValue2 = 20;
  var endValue2 = 40;
  var startValue3 = 40;
  var endValue3 = 60;
  var startValue4 = 60;
  var endValue4 = 80;
  var startValue5 = 80;
  var endValue5 = 100;

  // 定义颜色过渡范围的起始和结束颜色
  var startColor1 = '#DD5145';
  var endColor1 = '#FFDB5C';
  var startColor2 = '#FFDB5C';
  var endColor2 = '#fcffcc';
  var startColor3 = '#fcffcc';
  var endColor3 = '#8ac8ff';
  var startColor4 = '#8ac8ff';
  var endColor4 = '#37A2DA';
  var startColor5 = '#37A2DA';
  var endColor5 = '#37A1DA';

  // 根据当前值在相应的过渡范围内进行颜色插值
  var color;
  if (value >= startValue1 && value <= endValue1) {
    let ratio = (value - startValue1) / (endValue1 - startValue1);
    color = interpolateColor(startColor1, endColor1, ratio);
  } else if (value > startValue1 && value < startValue2) {
    color = startColor2;
  } else if (value >= startValue2 && value <= endValue2) {
    let ratio = (value - startValue2) / (endValue2 - startValue2);
    color = interpolateColor(startColor2, endColor2, ratio);
  } else if (value > startValue2 && value < startValue3) {
    color = startColor3;
  } else if (value >= startValue3 && value <= endValue3) {
    let ratio = (value - startValue3) / (endValue3 - startValue3);
    color = interpolateColor(startColor3, endColor3, ratio);
  } else if (value > startValue3 && value < startValue4) {
    color = startColor4;
  } else if (value >= startValue4 && value <= endValue4) {
    let ratio = (value - startValue4) / (endValue4 - startValue4);
    color = interpolateColor(startColor4, endColor4, ratio);
  } else if (value > startValue4 && value < startValue5) {
    color = startColor5;
  } else if (value >= startValue5 && value <= endValue5) {
    let ratio = (value - startValue5) / (endValue5 - startValue5);
    color = interpolateColor(startColor5, endColor5, ratio);
  } else {
    // 如果超出范围，则返回默认颜色
    color = '#000000';
  }

  return color;
}

// 辅助函数：颜色插值
function interpolateColor(startColor, endColor, ratio) {
  var startR = parseInt(startColor.slice(1, 3), 16);
  var startG = parseInt(startColor.slice(3, 5), 16);
  var startB = parseInt(startColor.slice(5, 7), 16);

  var endR = parseInt(endColor.slice(1, 3), 16);
  var endG = parseInt(endColor.slice(3, 5), 16);
  var endB = parseInt(endColor.slice(5, 7), 16);

  var r = Math.round(startR * (1 - ratio) + endR * ratio);
  var g = Math.round(startG * (1 - ratio) + endG * ratio);
  var b = Math.round(startB * (1 - ratio) + endB * ratio);

  var color = '#' + r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0');

  return color;
}

export  {getColorByTemperature,getColorByHumidity}