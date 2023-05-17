/**
 * @ params {array} arrayData
 * @ params {string} insertData
 * @ return {array} 문자열로 된 배열입니다.
 *
 * 안녕하세요
 *
 */
//* 매개변수를 배열로 받을 예정
//* typeof(arrayData) === string
function first(arrayData: string[], insertValue: string): string[] {
  //1. 첫번째 배열 인덱스의 변환하는 함수를 만들고 싶다.
  let result: string = "asd";
  let arr: string[] = data;
  //* 기존배열에 -번째를 최종적으로 바꿔주는 형태
  //* ...전개연산자
  //* reduce()
  //* map()
  //* push()
  arrayData.splice(0, 1, result);
  let newArray: string[] = [];
  newArray = [insertValue, ...arrayData];
  let ne = newArray.map((value) => value[0]);
  // arr.unshift(result);
  return ne;
}

let data = ["이세민", "허진", "최대건"];
console.log(first(data, "하이"));
console.log();
