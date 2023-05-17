function first(arrayData) {
  //1. 첫번째 배열 인덱스의 변환하는 함수를 만들고 싶다.
  let result = arrayData[0];
  result = "asd";
  let arr = arrayData.unshift(result);
  return result;
}

let data = ["이세민", "허진", "최대건"];
first(data);
