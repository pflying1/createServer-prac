var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//* 매개변수를 배열로 받을 예정
//* typeof(arrayData) === string
function first(arrayData, insertValue) {
    //1. 첫번째 배열 인덱스의 변환하는 함수를 만들고 싶다.
    var result = "asd";
    var arr = data;
    //* 기존배열에 -번째를 최종적으로 바꿔주는 형태
    //* ...전개연산자
    //* reduce()
    //* map()
    //* push()
    arrayData.splice(0, 1, result);
    var newArray = [];
    newArray = __spreadArray([insertValue], arrayData, true);
    // arr.unshift(result);
    return newArray;
}
var data = ["이세민", "허진", "최대건"];
console.log(first(data, "하이"));
