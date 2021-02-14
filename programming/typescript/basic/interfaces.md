### interface

Với Typescript, interface được kế thừa lại từ các ngôn ngữ khác tuy nhiên lại được bổ xung thêm một phần mà mình cực thích: `định nghĩa type`. Đây là một lý do khiến Typescript nổi bật hơn,

Mình sẽ ví dụ, bạn có một kiểu định nghĩa như này:

```
let a: {name: string, firstName: string} = {
  name: 'Da',
  firstName: 'Vi'
}
```

Ở ví dụ trên, bạn có thể thấy biến `a` của mình có một kiểu là object không giống với các kiểu mà mình đề cập ở bài trước, hơn nữa kiểu này còn là mình tự định nghĩa.

Kiểu viết này có vẻ cũng được nhưng nếu object type kia của mình có nhiều hơn 2 thuộc tính, thậm chí lên tới 10 thuộc tính thì sao? Lúc đấy mình sẽ cần tới cái `interface`.
Ví dụ:

```
interface User {
  name: string;
  firstName: string;
  lastName: string;
  age: number;
  address: string;
  phone: string;
}

let a: User = {
  name: 'Dang',
  firstName: 'Vu',
  lastName: 'Hai',
  age: 22,
  address: 'ha noi',
  phone: '123456',
}
```

Viết lại type gọn hơn nhiều chứ nhỉ? Và giờ mình có thể truy cập vào các thuộc tính ` console.log(a.name); // Dang.`

Ở phần còn lại thì interface cũng được sử dụng như các ngôn ngữ hướng đối tượng khác: được implemet bởi một class và implement các phương thức của interface

```
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) {}
}
```
