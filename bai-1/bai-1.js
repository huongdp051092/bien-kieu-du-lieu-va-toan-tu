a = parseInt(prompt("Nhap diem vat ly: "));
b = parseInt(prompt("Nhap diem hoa hoc: "));
c = parseInt(prompt("Nhap diem sinh hoc: "));
let diemtrungbinh = (a + b + c) / 3;
let tongdiem = a + b + c;
document.write("Diem trung binh la: " + diemtrungbinh + "</br>");
document.write("Tong diem la: " + tongdiem);