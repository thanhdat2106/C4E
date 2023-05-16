// let arr = ["Nguyen Van A", "Nguyen Thanh Danh", "Tran Thanh San"];
// let text = prompt("Nhap chuoi");

// Tìm 1 chuỗi đầu tiên có độ dài nhỏ nhất trong mảng.
// let min = "";
// arr.forEach((item, index) => {
//   if (index == 0) {
//     min = item;
//   } else {
//     if (item.length < min.length) {
//       min = item;
//     }
//   }
// });
// console.log(min);

// Tìm những chuỗi trong mảng có chứa giá trị text.
// let listText = [];
// arr.forEach((item, index) => {
//   if (item.search(text)) {
//     listText.push(item);
//   }
// });
// console.log(listText);
// Tạo mảng mới newS gồm các phần tử có giá trị là 3 ký tự đầu tiên của từng phần tử trong s.

// let newS = [];
// arr.forEach((item, index) => {
//   newS.push(item.slice(0, 3));
// });
// console.log(newS);

// Tạo ra 1 chuỗi là sự kết hợp của các phần tử trong s. Mỗi phần tử cách nhau bởi dấu ‘-’.
// let newS = "";
// arr.forEach((item, index) => {
//   newS = newS + "-" + item;
// });
// console.log(newS);

// Bài 2
// Nhập vào 2 dãy số d1, d2. Mỗi số trong mỗi dãy cách nhau bởi dấu ‘,’.
// Kiểm tra xem tất cả các giá trị số trong d1 có nằm trong d2 không.
// Kiểm tra xem có phần tử nào trong d2 chia hết cho tổng của d1 không.
// Tạo mảng mới gồm các số có giá trị là các số chia hết cho 2 lần lượt trong d2 và d1.
// Giả sử d1, d2 là các dãy số xếp theo thứ tự tăng dần. Hãy tạo ra 1 dãy số theo thứ tự tăng dần bao gồm các số của d1 và d2 (Sử dụng core của thuật toán Merge Sort).
// https://www.geeksforgeeks.org/merge-sort/?ref=lbp

// let arr1 = [3, 2];
// let arr2 = [3, 2, 7, 4, 12, 35, 10];
// // // Kiểm tra xem tất cả các giá trị số trong d1 có nằm trong d2 không.
// let check = true;
// arr1.forEach((x) => {
//   const result = arr2.some((y) => y == x);
//   if (!result) {
//     check = false;
//     return;
//   }
// });
// check
//   ? console.log("Tat ca cac gia tri so trong d1  nam trong d2")
//   : console.log("Tat ca cac gia tri so trong d1 khong nam trong d2");
// // console.log(check == false && "tat ca gia trij so trong d1 khong nam trong d2");
// let check = arr1.some((x) => {
//   arr2.includes(x);
// });
// console.log(123, check);

// Kiểm tra xem có phần tử nào trong d2 chia hết cho tổng của d1 không.

// let tongd1 = 0;
// arr1.forEach((x) => {
//   tongd1 += x;
// });
// arr2.forEach((x) => {
//   if (x % tongd1 == 0) {
//     console.log(x, tongd1);
//     return;
//   }
// });

// Tạo mảng mới gồm các số có giá trị là các số chia hết cho 2 lần lượt trong d2 và d1.

// let arr = arr1.concat(arr2);
// let newArr = [];
// arr.forEach((x) => {
//   if (x % 2 == 0) {
//     newArr.push(x);
//   }
// });
// console.log(newArr);

// Giả sử d1, d2 là các dãy số xếp theo thứ tự tăng dần. Hãy tạo ra 1 dãy số theo thứ tự tăng dần bao gồm các số của d1 và d2 (Sử dụng core của thuật toán Merge Sort).
// const mergeSort = (arr) => {
//   // *** Chúng ta sẽ không chia arr ra thành các mảng con nữa nếu arr chỉ có 1 phần tử
//   if (arr.length <= 1) return arr;

//   // *** vì splice sẽ thay đổi giá trị của arr nên mình copy arr để giữ nguyên giá trị ban đầu của nó
//   const right = [...arr];

//   // *** chia đôi mảng ra thành 2 mảng con
//   const middlePoint = arr.length / 2;
//   const left = right.splice(0, middlePoint);

//   // *** tiếp tục chia các mảng con ra thành các mảng con
//   console.log(222, left, right);
//   return mergeUnsortedArrs(mergeSort(left), mergeSort(right));
// };
// const mergeUnsortedArrs = (left, right) => {
//   // *** các phần tử cần được sắp xếp lại sẽ được chứa ở đây
//   const sortedItems = [];

//   /*
//        *** Chúng ta sẽ dùng method shift của Array để loại bỏ các phần tử của 2 mảng left và right
//            trong từng vòng lặp. Nên, nếu 1 trong 2 mảng left và right là mảng trống => ta khg thể
//            và cũng khg cần phải so sánh thêm nữa,
//     */
//   console.log(2222222, left, right);
//   while (left.length && right.length) {
//     console.log(left, right);
//     console.log(1233, sortedItems);
//     if (left[0] <= right[0]) {
//       sortedItems.push(left.shift());
//     } else {
//       sortedItems.push(right.shift());
//     }
//   }

//   // *** kết hợp (merge) các cặp mảng con đã được sắp xếp lại với nhau thành một mảng mới,
//   return [...sortedItems, ...left, ...right];
// };
// console.log(mergeSort(arr2));

// data = [
//   {
// id:"dadasdd"
//     tenSanPham: "a123",
//     gia: 21331303,
//     mota: "sadasdd",
//   },
//   {
//     tenSanPham: "a123",
//     gia: 21331303,
//     mota: "sadasdd",
//   },
//   {
//     tenSanPham: "a123",
//     gia: 21331303,
//     mota: "sadasdd",
//   },
//   {
//     tenSanPham: "a123",
//     gia: 21331303,
//     mota: "sadasdd",
//   },
// ];

// function TimNghiem(a, b, c) {}

// const TimNghiem = (a, b, c) => {
//   if (a == 0) return;
//   else {
//     let arrNghiem = [];
//     // thuc thi tim nghiem
//   }
//   // log nghiem
// };

// //Trước tiên phải đảm bảo ba cạnh a, b, c đều dương, sau đó mới tiến hành kiểm tra tiếp. Nếu xảy ra đồng thời ba điều kiện (a + b > c) && (a + c > b) && (b + c > a) thì kết luận ba cạnh lập thành một tam giác.

// const KiemTraTamGiac = (a, b, c) => {
//   if (a > 0 && b > 0 && c > 0) {
//   } else {
//     return;
//   }
// };

// bai

// const d = new Date("2022-04-32");
// console.log(123, d);

var iDiv = document.createElement("div");
document.getElementById("v1").appendChild(iDiv);
