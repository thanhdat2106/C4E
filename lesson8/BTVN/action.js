// Thực hiện xử lý,nhập vào một ngày, hiển thị thông báo tên thứ trong tuần

// let date = new Date();

// let x = date.getDay();

// switch (x) {
//   case 0:
//     console.log("Hôm nay là chủ nhật");
//     break;
//   case 1:
//     console.log("Hôm nay là thứ hai");
//     break;
//   case 2:
//     console.log("Hôm nay là thứ ba");
//     break;
//   case 3:
//     console.log("Hôm nay là thứ tư");
//     break;
//   case 4:
//     console.log("Hôm nay là thứ năm");
//     break;
//   case 5:
//     console.log("Hôm nay là thứ sáu");
//     break;
//   case 6:
//     console.log("Hôm nay là thứ bảy");
//     break;
// }
// Dùng vong lặp for để xuất ra các số chẵn từ 2 đến 10

// Viết hàm nhập vào một số nguyen duong, in ra thông báo số đó là chẵn hay lẽ

// let a = prompt("Nhập một số nguyên dương") - 0;
// if (Number.isInteger(a)) {
//   if (a > 0) {
//     if (a % 2 == 0) {
//       alert("Đây là một số chẵn!");
//     } else {
//       alert("Đây là một số lẽ!");
//     }
//   } else {
//     alert("Đây là không phải là số nguyên dương!");
//   }
// } else {
//   alert("Đây là không phải là số nguyên dương!");
// }

// Nhập vào 2 tham số a, b, in ra thông báo so sánh giữa 2 số
// let a = prompt("Nhập một số a") - 0;
// let b = prompt("Nhập một số b") - 0;
// if (a > b) {
//   alert("a là số lơn hơn b");
// } else if (a == b) {
//   alert("a bằng b");
// } else {
//   alert("a là số bé hơn b");
// }
// Tính tổng các số nguyên dương từ 0 đến 100, xuất ra màn hình kết quả

// let count = 0;
// for (var i = -10; i <= 50; i++) {
//   if (i % 2 == 0) {
//     count = count + i;
//   }
// }
// console.log(12, count);
// in ra day so tu 1 den 500
// for (let i = 1; i <= 500; i++) {
//   console.log("Day la so: " + i);
// }
// // 2. In ra các số chia hết cho 2 và 3 từ 1 đến 300.
// for (let i = 1; i <= 300; i++) {
//   if (i % 2 == 0 && i % 3 == 0) {
//     console.log("Day la so: " + i);
//   }
// }
// // 3. Tính tổng các số chẵn trong đoạn [-30, 50].
// let tong = 0;
// for (let i = -30; i <= 50; i++) {
//   if (i % 2 == 0) {
//     tong = tong + i;
//   }
// }
// console.log(tong);

// let giaithua = Number(prompt("Nhap vao so n"));
// let tich = 1;
// for (let i = 1; i <= giaithua; i++) {
//   tich = tich * i;
// }
// alert(tich);

// 5. Nhập vào 3 số a, b, x (a < b). Tìm trong khoảng a, b số nhỏ nhất mà chia hết cho x.

// let a = Number(prompt("Nhap so a"));
// let b = Number(prompt("Nhap so b"));
// let x = Number(prompt("Nhap so x"));

// if (a >= b) {
//   alert("So a phai be hon b");
// } else {
//   for (let i = a; i <= b; i++) {
//     if (i % x == 0) {
//       alert("So nho nhat chia het cho x la" + i);
//       break;
//     }
//   }
// }

// 7. Nhập vào số n. Hãy in ra số ước của n.

// let a = Number(prompt("Nhap a"));

// for (let i = 1; i <= a; i++) {
//   if (a % i == 0) {
//     alert(i);
//     break;
//   }
// }

// 8. Nhập vào số n. Viết chương trình kiểm tra xem n có phải số nguyên tố không.

// let n = Number(prompt("Nhap n"));
// let a = 0;
// for (let i = 2; i < n; i++) {
//   if (n % i == 0) {
//     alert("Khong phai la so nguyen to");
//     break;
//   }
// }
// if (a == 0) {
//   alert("La so nguyen to");
// }
// if (a == 2) {
//   alert("La so nguyen to");
// } else {
//   alert("Khong phai la so nguyen to");
// }

// 13. Nhập vào số n (2 <= n <= 10). Hãy in ra bảng cửu chương của số n.
// let n = Number(prompt("nhap so n"));

// for (let i = 1; i <= 10; i++) {
//   console.log(n + "x" + i);
// }
// Bài 7: Nhập vào số n (n >= 2). Hãy in ra màn hình hình vuông có độ dài cạnh = n.

// let n = Number(prompt("Nhap n"));
// let cd = "";
// if (n < 2) {
//   alert("N phai lon hoac bang 2");
// } else {
//   for (let i = 0; i < n; i++) {
//     for (let u = 0; u < n; u++) {
//       cd = cd + "* ";
//     }
//     cd = cd + "\n";
//   }
//   console.log(cd);
// }
// Bài 8: Nhập vào 2 số m, n (m >= 2, n > =2). Hãy in ra màn hình hình chữ nhật có độ chiều rộng là m và chiều cao là n.// let n = Number(prompt("Nhap n"));
// let m = Number(prompt("Nhap m"));
// let n = Number(prompt("Nhap n"));
// let cd = "";
// if (n < 2 ) {
//   alert("N phai lon hoac bang 2");
// } else {
//   for (let i = 0; i < n; i++) {
//     for (let u = 0; u < m; u++) {
//       cd = cd + "* ";
//     }
//     cd = cd + "\n";
//   }
//   console.log(cd);
// }
// Bài 9: Nhập vào số n (n >= 3). Hãy in ra màn hình hình tam giác vuông cân có độ dài cạnh góc vuông = n.
// let n = Number(prompt("Nhap n"));
// let cd = "";
// if (n < 3) {
//   alert("N phai lon hoac bang 3");
// } else {
//   for (let i = 0; i < n; i++) {
//     for (let u = 0; u <= i; u++) {
//       cd = cd + "* ";
//     }
//     cd = cd + "\n";
//   }
//   console.log(cd);
// }
