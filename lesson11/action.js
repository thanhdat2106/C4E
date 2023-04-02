function validatePhoneNumber(input_str) {
  var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

  return re.test(input_str);
}
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
function checkPhone(textbox) {
  const check = validatePhoneNumber(textbox);
  console.log(435345, check);
  if (!check) {
    return false;
  } else {
    return true;
  }
}

function SubmitForm() {
  const data = {
    Firstname: "",
    Middlename: "",
    Lastname: "",
    Course: "",
    Gender: "",
    Phone: "",
    CurrentAddress: "",
    Email: "",
    Password: "",
    RetypePassword: "",
  };
  let $ten = document.getElementById("ten").value;
  let $tenDem = document.getElementById("tendem").value;
  let $ho = document.getElementById("ho").value;
  let $khoaHoc = document.getElementById("lang-select").value;
  let $sdt = document.getElementById("sdt1").value;
  let $gioiTinh = document.getElementById("gioitinh").value;
  let $diaChi = document.getElementById("diachi").value;
  let $mail = document.getElementById("mail").value;
  let $matKhau = document.getElementById("matkhau").value;
  let $reMatKhau = document.getElementById("ghilaimk").value;
  data.Firstname = $ten;
  data.Middlename = $tenDem;
  data.Lastname = $ho;
  data.Course = $khoaHoc;
  data.Phone = $sdt;
  data.Gender = $gioiTinh;
  data.CurrentAddress = $diaChi;
  data.Email = $mail;
  data.Password = $matKhau;
  data.RetypePassword = $reMatKhau;
  let check = false;
  if (!checkPhone($sdt)) {
    console.log(checkPhone($sdt));
    alert("Số điện thoại nhập chưa đúng");
  } else if (!validateEmail($mail)) {
    alert("Email nhập chưa đúng");
  } else if ($reMatKhau != $matKhau) {
    alert("Repassword nhập chưa đúng");
  } else {
    console.log(1231331, data);
  }
}
