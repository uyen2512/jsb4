/**
 * khối 1: nhập vào 3 số
 * khối 2: xét chẵn lẻ từng số r tăng số lượng số chẵn lẻ
 * khối 3: thông báo kết quả
 */

function soChanLe() {
    var a = Number(document.getElementById("inpA").value);
    var b = Number(document.getElementById("inpB").value);
    var c = Number(document.getElementById("inpC").value);
    var i = 0;
    if (a % 2 == 0) {
        if(b % 2 == 0){            
            if(c % 2 == 0){
                document.getElementById("txtBao").innerHTML = "có 3 số chẵn"
            }
            else{
                document.getElementById("txtBao").innerHTML = "có 2 số chẵn và 1 số lẻ"
            }
        }
        else{
            if(c % 2 == 0){
                document.getElementById("txtBao").innerHTML = "có 2 số chẵn và 1 số lẻ"
            }
            else{
                document.getElementById("txtBao").innerHTML = "có 1 số chẵn và 2 số lẻ"
            }
        } 
    }
    else{
        if(b % 2 == 0){            
            if(c % 2 == 0){
                document.getElementById("txtBao").innerHTML = "có 2 số chẵn và 1 số lẻ"
            }
            else{
                document.getElementById("txtBao").innerHTML = "có 1 số chẵn và 2 số lẻ"
            }        
        }
        else{
            if(c % 2 == 0){
                document.getElementById("txtBao").innerHTML = "có 1 số chẵn và 2 số lẻ"
            }
            else{
                document.getElementById("txtBao").innerHTML = "có 0 số chẵn và 3 số lẻ"
            }
        }
    }
}