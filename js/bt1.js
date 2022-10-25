/**
 * khối 1: nhập vào 3 số x,y,z
 * 
 * khối 2: các bước xử lí:
 *      + nếu x > y và x > z => so sánh y và z => sắp xếp kết quả
 *      + nếu y > x và y > z => so sánh x và z => sắp xếp kết quả
 *      + nếu z > x và z > y => so sánh x và y => sắp xếp kết quả
 * 
 * khối 3: xuất kết quả 3 số
 */








function sapxepTang() {
    var x = Number(document.getElementById("inpX").value);
    var y = Number(document.getElementById("inpY").value);
    var z = Number(document.getElementById("inpZ").value);
    if (x < y && x < z) {
        if (y < z) {
            document.getElementById("txtThongBao").innerHTML = x + " "+y+ " "+ z; 
        }
        else {
            document.getElementById("txtThongBao").innerHTML = x + " "+z+ " "+ y; 
        }
    }
    else if (y < x && y < z) {
        if (x < z) {
            document.getElementById("txtThongBao").innerHTML = y + " "+x+ " "+ z; 
        }
        else {
            document.getElementById("txtThongBao").innerHTML = y + " "+z+ " "+ x; 
        }
    }
    else if (z < x && z < y) {
        if (x < y) {
            document.getElementById("txtThongBao").innerHTML = z + " "+x+ " "+ y; 
        }
        else {
            document.getElementById("txtThongBao").innerHTML = z + " "+y+ " "+ z; 
        }
    }
}

