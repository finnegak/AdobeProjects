var timer_on;
var current = 4;

    function changeImage () {
        if (current > 1) {
            current-=1
        } else {
            current = 7
        }
        var one = document.getElementById('img1').src;
        var two = document.getElementById('img2').src;
        var three = document.getElementById('img3').src;
        var four = document.getElementById('img4').src;
        var five = document.getElementById('img5').src;
        var six = document.getElementById('img6').src;
        var seven = document.getElementById('img7').src;

        document.getElementById('img1').src = seven;
        document.getElementById('img2').src = one;
        document.getElementById('img3').src = two;
        document.getElementById('img4').src = three;
        document.getElementById('img5').src = four;
        document.getElementById('img6').src = five;
        document.getElementById('img7').src = six;

    }
    function slideShow() {
        if (timer_on == false) {
            return;
        }
        changeImage();
        setTimeout("slideShow()",2000);

    }