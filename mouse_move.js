var wmouse;
function MouseImage() {
  // イメージオブジェクトを作成
  wmouse = new Image();
  // console.log(wmouse);

  //スタイルは別functioの方が個人的には可読性があがるのだとおもうのだが
  // イメージオブジェクトのスタイルを設定
  var style = wmouse.style;
  console.log(style);
  // fixed（画面左上を基点、スクロール無視）を設定
  style.position = "fixed";

  // // 画像をセット
  wmouse.src = "test.jpg";
  wmouse.height = 100;
  wmouse.width = 100;

  // console.log(document.body);
  // console.log(document.head);

  document.body.appendChild(wmouse);

  // // イベント追加
  // if (document.addEventListener) {
  //   document.addEventListener("mousemove", MouseMove);
  // } else if (document.attachEvent) {
  //   document.attachEvent("onmousemove", MouseMove);
  //   // onmousemove はマウスのポインタ（カーソル）を移動させている時のイベント。
  // }
}

function MouseMove(e) {
  wmouse.style.left = e.clientX + 10 + "px";
  wmouse.style.top = e.clientY + 10 + "px";
  // console.log(e);
}

MouseImage();

// MouseMove();
TestEvent();

function TestEvent() {
  // document.addEventListener("click", ClickFunction, false);
  document.addEventListener("click", MouseRelease, false);
}

// function ClickFunction() {
//   console.log("click_functionがよびだされました");
// }

function MouseRelease() {
  if (!wmouse) return;
  if (document.removeEventListener) {
    document.removeEventListener("mousemove", MouseMove);
  } else if (document.detachEvent) {
    document.detachEvent("onmousemove", MouseMove);
  }
  if (wmouse.parentNode) {
    wmouse.parentNode.removeChild(wmouse);
  }
  wmouse = null;
}


//TweenMax の使い方練習
// function TestTweenMax(){
//     document.getElementById("btn").addEventListener("click",function(){
//         TestTweenMax.from('#btn',1,{top:"40px"});
//     });
// }

// TestTweenMax();

// document.getElementById( "btn" ).addEventListener( "click", function(){
//   // バネを伸ばして離したような効果が得られる
//   console.log("そもそもこの処理走ってる？");
//   TweenMax.from( '#btn', 1, { x: 400, ease:"elastic.out(1, 0.3)"} );
// } );

// document.getElementById( "btn" ).addEventListener( "click", function(){
//   // 下に40px移動
//   console.log("そもそもこの処理走ってる？");
//   TweenMax.from( '#btn', 1, { x: 400, ease:"elastic.out(1, 0.3)"} );
//   // TweenMax.from( '#btn', 1, { top: "500px" } );    

// } );

document.getElementById("btn").addEventListener(
  "click",function(){
      var tm = new TimelineMax();

      tm.from( "#btn", 3, {
        "x" : 300,
        ease : Power4.easeOut
      } )

    .from( "#btn", 0.5, {
      scale : 1.5
  });

});