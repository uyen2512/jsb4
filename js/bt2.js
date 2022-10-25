/**
 * khối 1: chọn thành viên (bố, mẹ, em gái,k chọn)
 * khối 2: gởi lời chào đến thành viên đc chọn
 * khối 3: kết quả
 */
function goiLoiChao() {
    var loiChao = document.getElementById("thanhVien").value;
    switch (loiChao) {
        case "B":
            document.getElementById("txtChao").innerHTML = ("Chào bố");
            break;
        case "M":
            document.getElementById("txtChao").innerHTML = ("Chào mẹ");
            break;
        case "E":
            document.getElementById("txtChao").innerHTML = ("Chào em gái");
            break;

        default:
            document.getElementById("txtChao").innerHTML = ("Chào người lạ");
            break;
    }
}

document.getElementById("btnChao").onclick = goiLoiChao;