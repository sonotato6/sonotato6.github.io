// Set Marked.js options: https://github.com/chjj/marked
marked.setOptions({
	gfm: true,
	tables: true,
	breaks: true,	//<br>有効
//	pedantic: false,
        sanitize: false,
//	smartLists: true,
//	smartypants: false
});

// Get markdown text
var mdtxt = document.getElementById('md_src').innerHTML;
//var mdtxt = document.getElementById('md_src').textContent;
document.getElementById('md_src').style.display='none';
document.getElementById('md_out').innerHTML = marked(mdtxt);
// console.log(mdtxt);

// 子画面の要素を取得
var elm = document.getElementById("parentframe");
// 子画面のコンテンツサイズに合わせてサイズを変更する関数
function changeParentHeight(){
  elm.style.height = elm.contentWindow.document.body.scrollHeight + "px";
}
// 親画面 iframe の高さを変更するイベント
// 1. 子画面の読み込み完了時点で処理を行う
elm.contentWindow.onload = function(){ changeParentHeight(); };
// 2. 子画面のウィンドウサイズ変更が完了した時点で処理を行う
var timer = 0;
elm.contentWindow.onresize = function () {
  if (timer > 0) {
    clearTimeout(timer);
  }
  timer = setTimeout(function () {
    changeParentHeight();
  }, 100);
};


