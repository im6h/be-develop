### function

Với Typescript, function cũng được định nghĩa giống như trong các ngôn ngữ lập trình khác vậy

Chỉ khác là, Typescript cũng như Javascript, có mấy kiểu viết function: 
- function cơ bản: 
```
function add(x: number, y: number): number{
	return x + y;
}
```
- anonymous function: 
```
let add = (x: number, y: number) : number {
	return x + y;
}
```
- full type function (wtf, khó hiểu :smile:)
```
let add: (x: number, y: number) => number = function (x, y) {
  return x + y;
}
```
Function của mình luôn có parameter được truyền vào là x và y, (x có kiểu number, y có kiểu number) 
nên là type của function mình cũng để number.

