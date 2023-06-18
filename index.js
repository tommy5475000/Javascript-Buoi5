// QUẢN LÝ TUYỂN SINH
function tinh() {
  let diemchuan = +document.getElementById("input1").value,
    uutien1 = +document.getElementById("khuvuc").value,
    uutien2 = +document.getElementById("doituong").value,
    diem1 = +document.getElementById("input2").value,
    diem2 = +document.getElementById("input3").value,
    diem3 = +document.getElementById("input4").value,
    m = !0;
  if ((m &= checkScore(diem1) && checkScore(diem2) && checkScore(diem3))) {
    let tong = diem1 + diem2 + diem3 + (uutien1 + uutien2);
    document.getElementById("txtResult").innerHTML =
      tong >= diemchuan
        ? "Bạn đã đậu. Tổng điểm: " + tong
        : "Bạn đã rớt. Tổng điểm: " + tong;
  } else
    document.getElementById("txtResult").innerHTML =
      "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
}
function checkScore(a) {
  return !(a <= 0);
}

// TÍNH TIỀN ĐIỆN
function tinhtiendien() {
  let name = document.getElementById("input5").value,
    kw = +document.getElementById("input6").value;
  let gia = 0,
    kw_1 = 500,
    kw_2 = 650,
    kw_3 = 850,
    kw_4 = 1100,
    kw_5 = 1300;
  if (kw <= 50) {
    gia = kw * kw_1;
  } else if (kw <= 100) {
    gia = 50 * kw_1 + (kw - 50) * kw_2;
  } else if (kw <= 200) {
    gia = 50 * kw_1 + 50 * kw_2 + (kw - 100) * kw_3;
  } else if (kw <= 350) {
    gia = 50 * kw_1 + 50 * kw_2 + 100 * kw_3 + (kw - 200) * kw_4;
  } else {
    gia = 50 * kw_1 + 50 * kw_2 + 100 * kw_3 + 150 * kw_4 + (kw - 350) * kw_5;
  }
  document.getElementById(
    "txtResult1"
  ).innerHTML = `Họ tên: ${name};  Thành tiền: ${gia.toLocaleString()}`;
}

// TÍNH THUẾ THU NHẬP CÁ NHÂN
function tinhvat() {
  let tName = document.getElementById("input7").value,
    tongThu =
      +document.getElementById("input8").value -
      4e6 -
      16e5 * document.getElementById("input9").value;
  let nop = 0;
  if (tongThu <= 6e7 && tongThu > 0) {
    nop = tongThu * 0.05;
  } else if (tongThu <= 12e7 && tongThu > 0) {
    nop = tongThu * 0.1;
  } else if (tongThu <= 21e7 && tongThu > 0) {
    nop = tongThu * 0.15;
  } else if (tongThu <= 384e6 && tongThu > 0) {
    nop = tongThu * 0.2;
  } else if (tongThu <= 624e6 && tongThu > 0) {
    nop = tongThu * 0.25;
  } else if (tongThu <= 96e7 && tongThu > 0) {
    nop = tongThu * 0.3;
  } else if (tongThu > 96e7 && tongThu > 0) {
    nop = tongThu * 0.35;
  } else {
    alert("Số tiền thu nhập không hợp lệ");
  }
  document.getElementById(
    "txtResult3"
  ).innerHTML = `Họ tên: ${tName};  Tiền thuế phải nộp: ${nop.toLocaleString()}`;
}

// Bài tập 4
// TÍNH TIỀN CẤP
function soketnoi() {
  let a = document.getElementById("loaikh").value;
  if (a === "dn") {
    document.getElementById("input13").style.display = "block";
  } else {
    document.getElementById("input13").style.display = "none";
  }
}

function tiencap() {
  let a = document.getElementById("loaikh").value,
    maSo = +document.getElementById("input11").value,
    soKenh = +document.getElementById("input12").value,
    ketNoi = +document.getElementById("input13").value,
    tc = 0;

  if (a==="dn") {
    tc = tinhTong(15, 75, 50, soKenh, ketNoi, 5);
  } else if (a==="nhadan") {
    tc = tinhTong(4.5, 20.5, 7.5, soKenh, 0, 0);
  } else {
    alert("Hãy chọn loại khách hàng");
  }
  document.getElementById(
    "txtResult4"
  ).innerHTML = `Mã khách hàng: ${maSo};  Tiền cáp: ${tc}`;
}

function tinhTong(a,maSo,soKenh,ketNoi,c,l){
  let m=a+maSo+soKenh*ketNoi;
  return c>10 && (m+= (c-10)*l),m
}
