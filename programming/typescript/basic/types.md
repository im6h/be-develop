### Các kiểu giá trị.

Ở phần này, mình sẽ giới thiệu với các bạn các kiểu giá trị trong TypeScript. Như đã giới thiệu ở phân trước, TypeScript là một ngôn ngữ Optional Static Type (hiểu nôm na, bạn thích thì khai báo kiểu dữ liêu không thì thôi), và vì thế nên ngôn ngữ này đã có sẵn một vài kiểu dữ liệu rồi.

Mình sẽ nói đến các kiểu dữ liệu cơ bản (nguyên thủy) trước nhé.
Liệt kê trước đi:
- boolean: đây là kiểu dữ liệu đầu tiên mình giới thiệu, nó sẽ có hai giá trị là true và false.
```
let a: boolean = true;
let b: boolean = false;
```
- number: không giống như mấy ngôn ngữ khác chia cụ tỉ ra: double, integer, float, TypeScript lại gọi hết đống hỗn độn kia lại bằng cụm từ number.Thêm vào đó, hexadecimal và decimal literals, binary và octal literals cũng chơi tuốt bằng number khi được ra mắt bằng ở ECMAScript 2015.
```
let decimal: number = 6;
let hex: number = 0xf00d;  // hexadecimal
let binary: number = 0b1010;  // binary luôn nè
let octal: number = 0o744;   // octal ở dây
let big: bigint = 100n;
```
- string: kiểu dữ liệu văn bản. Dùng 1 nháy hoặc 2 nháy đều được nhé.
```
let a: string = "Hello World";
let b: string = 'Hello World';
```
Đó xong 3 kiểu dữ liệu đơn giản trong TypeScript rồi nhé. 
Giờ đến các kiểu nâng cao hơn chút. 