function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 4;
        function Plus_two() {Starting_point += 2;}
        Plus_two();
        return Starting_point;
    }
}