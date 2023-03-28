// Nhập vào 1 số n. Hãy tìm 1 user có id bằng n
// let n = Number(prompt("Nhap so n"));
// users.find((x) => x.id == n);
// console.log(123, user);

import { users } from "./data.js";

// Nhập vào 1 chuỗi keyword. Hãy lấy ra email của các user có tên (first_name + last_name) chứa keyword.
// let n = prompt("Nhap chuoi keyword");
// let listEmail = [];
// users.forEach((x) => {
//   const name = x.first_name + " " + x.last_name;
//   if (name.search(n) >= 0) {
//     listEmail.push(x.email);
//   }
// });
// console.log(123, listEmail);
// Đếm số lượng user có age > 50.
// const count = users.filter((x) => x.age > 50).length;
// console.log(123, count);
// Đếm số lượng user đã kết hôn và chưa kết hôn.
// const married = users.filter((x) => x.is_married == true).length;
// const single = users.filter((x) => x.is_married == false).length;
// console.log(married, single);
// Đếm số lượng user theo từng ngành nghề tương ứng.

const storage = {
  name: "thanh dat",
  address: "HCM",
  owner: "Thanh Dat",
  item: [
    { id: 1, name: "Product 1", category: "Cloth", price: 20000 },
    { id: 2, name: "Product 2", category: "Cloth", price: 21000 },
    { id: 3, name: "Product 2", category: "Cloth", price: 19000 },
  ],
};

const UpdateStorage = (name, address, owner) => {
  storage.name = name;
  storage.address = address;
  storage.owner = owner;
  console.log(storage);
};

UpdateStorage("Dat", "Ho Chi Minh", "Nguyen Thanh Dat");
