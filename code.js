$(document).ready(function () {
    $("#quantity1").change(textboxHeardChange1);
    $("#quantity2").change(textboxHeardChange2);

    function textboxHeardChange1() {
        var price1 = 39.99;
        var quantity1 = $("input#quantity1").val();
        var total1 = price1 * quantity1;

        var price2 = 14.99;
        var quantity2 = $("input#quantity2").val();
        var total2 = price2 * quantity2;
        var total3 = (total1 + total2).toFixed(2);

        $("#bookTotal1").text(total1);
        $("#bookTotal2").text(total2);
        $("#bookTotal3").text(total3);
    }

    function textboxHeardChange2() {
        var price1 = 39.99;
        var quantity1 = $("input#quantity1").val();
        var total1 = price1 * quantity1;

        var price2 = 14.99;
        var quantity2 = $("input#quantity2").val();
        var total2 = price2 * quantity2;
        var total3 = (total1 + total2).toFixed(2);

        $("#bookTotal1").text(total1);
        $("#bookTotal2").text(total2);
        $("#bookTotal3").text(total3);
    }
});