document.addEventListener(
  "mousemove",
  function (event) {
    if (window.event) {
      // IE fix
      event = window.event;
    }

    // Grab the mouse's X-position.
    let mousex = event.clientX;
    let mousey = event.clientY;
    let shape_one = document.getElementById("shape1");
    shape1.style.left = 10 + mousex / -150 + "%";
    shape1.style.top = 10 + mousey / 200 + "%";
    let shape_two = document.getElementById("shape2");
    shape2.style.left = 35 + mousex / -170 + "%";
    shape2.style.top = 35 + mousey / 150 + "%";

    let shape_three = document.getElementById("shape3");
    shape3.style.left = 80 + mousex / 260 + "%";
    shape3.style.top = 15 + mousey / 190 + "%";

    let shape_four = document.getElementById("shape4");
    shape4.style.left = 40 + mousex / -190 + "%";
    shape4.style.top = 70 + mousey / 170 + "%";

    let shape_five = document.getElementById("shape5");
    shape5.style.left = 10 + mousex / 150 + "%";
    shape5.style.top = 80 + mousey / -100 + "%";

    let shape_six = document.getElementById("shape6");
    shape6.style.left = 70 + mousex / -120 + "%";
    shape6.style.top = 95 + mousey / 110 + "%";

    let shape_seven = document.getElementById("shape7");
    shape7.style.left = 80 + mousex / -175 + "%";
    shape7.style.top = 90 + mousey / 140 + "%";

    let shape_8 = document.getElementById("shape8");
    shape8.style.left = 5 + mousex / -150 + "%";
    shape8.style.top = 50 + mousey / 200 + "%";
    let shape_9 = document.getElementById("shape9");
    shape9.style.left = 50 + mousex / -170 + "%";
    shape9.style.top = 40 + mousey / 150 + "%";

    let shape_10 = document.getElementById("shape10");
    shape10.style.left = 60 + mousex / 260 + "%";
    shape10.style.top = 80 + mousey / 190 + "%";

    let shape_11 = document.getElementById("shape11");
    shape11.style.left = 90 + mousex / -190 + "%";
    shape11.style.top = 30 + mousey / 170 + "%";

    let shape_12 = document.getElementById("shape12");
    shape12.style.left = 10 + mousex / 150 + "%";
    shape12.style.top = 95 + mousey / -100 + "%";

    let shape_13 = document.getElementById("shape13");
    shape13.style.left = 95 + mousex / -120 + "%";
    shape13.style.top = 65 + mousey / 110 + "%";

    let shape_14 = document.getElementById("shape14");
    shape14.style.left = 40 + mousex / -175 + "%";
    shape14.style.top = 55 + mousey / 140 + "%";

    let shape_15 = document.getElementById("shape15");
    shape15.style.left = 90 + mousex / -150 + "%";
    shape15.style.top = 50 + mousey / 200 + "%";

    let shape_16 = document.getElementById("shape16");
    shape16.style.left = 10 + mousex / -150 + "%";
    shape16.style.top = 10 + mousey / 200 + "%";
    let shape_17 = document.getElementById("shape17");
    shape17.style.left = 35 + mousex / -170 + "%";
    shape17.style.top = 35 + mousey / 150 + "%";

    let shape_18 = document.getElementById("shape18");
    shape18.style.left = 80 + mousex / 260 + "%";
    shape18.style.top = 15 + mousey / 190 + "%";

    let shape_19 = document.getElementById("shape19");
    shape19.style.left = 40 + mousex / -190 + "%";
    shape19.style.top = 70 + mousey / 170 + "%";

    let shape_20 = document.getElementById("shape20");
    shape20.style.left = 10 + mousex / 150 + "%";
    shape20.style.top = 80 + mousey / -100 + "%";

    let shape_21 = document.getElementById("shape21");
    shape21.style.left = 70 + mousex / -120 + "%";
    shape21.style.top = 95 + mousey / 110 + "%";

    let shape_22 = document.getElementById("shape22");
    shape22.style.left = 80 + mousex / -175 + "%";
    shape22.style.top = 90 + mousey / 140 + "%";

    let img_one = document.getElementById("img1");
    img1.style.left = 70 + mousex / 150 + "%";
    img1.style.top = 70 + mousey / -100 + "%";

    let img_two = document.getElementById("img2");
    img2.style.left = 70 + mousex / -130 + "%";
    img2.style.top = 20 + mousey / -120 + "%";

    let img_three = document.getElementById("img3");
    img3.style.left = 20 + mousex / -170 + "%";
    img3.style.top = 50 + mousey / 130 + "%";
  },
  false
);
