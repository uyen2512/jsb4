/**
 * khối 1: nhập số liệu 3 cạnh tam giác
 * khối 2: xử lí số liệu:
 *      Ba cạnh a, b, c của một tam giác phải thỏa mãn điều kiện là tổng hai cạnh bất kỳ luôn lớn hơn cạnh còn lại. Tức là a+b>c và a+c>b và b+c>a.
        +Tam giác đều nếu 3 cạnh bằng nhau. Vd:a = 3, b=3 c=3
        +Tam giá cân nếu 2 cạnh bằng nhau. Vd: a=2, b=2, c=1
        +Tam giá vuông nếu: c^2 = a^2 + b^2. Vd: a=3, b=4, c=5
        +các trường hợp còn lại là tam giác khác
    khối 3: in kết quả

 */

function tamGiac(){
    var canh1 = Number(document.getElementById("canh1").value);
    var canh2 = Number(document.getElementById("canh2").value);
    var canh3 = Number(document.getElementById("canh3").value);

    if(canh1 + canh2 > canh3 || canh2 + canh3 > canh1 || canh1 + canh3 > canh2) {
        if(canh1 == canh2 && canh2 == canh3) {
            document.getElementById("btnTamGiac").innerHTML = "đều"
        }else if (canh1 == canh2 || canh1 == canh3 || canh2 == canh3) {
            document.getElementById("btnTamGiac").innerHTML = "cân"
        }else if( canh1 *canh1 == canh2*canh2 + canh3*canh3 || canh2 * canh2 == canh1*canh1 + canh3*canh3 || 
        canh3*canh3 == canh2*canh2 + canh1*canh1){
            document.getElementById("btnTamGiac").innerHTML = "vuông"
        }else{
            alert("Một loại tam giác khác")
        }
    }else{
        alert("Vui lòng điền")
    }
        
    }