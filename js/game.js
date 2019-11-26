const numDivs = 36;
const maxHits = 10;

let hits = 0;
let miss = 0;
let firstHitTime = 0;

function round() {
  $(".target").text(" "); //убирать текст со старых таргетов
  $(".game-field").removeClass("target"); //удаляем класс target у предыдущих элементов
  $(".miss").text(" "); //убирать текст со старых промахов
  $(".game-field").removeClass("miss"); //удаляем класс miss у промахов
  let divSelector = randomDivId();

  $(divSelector).addClass("target"); 
  $(".target").text(hits+1); //помечать target текущим номером
  if (hits === 0) {
    firstHitTime = getTimestamp();//определяем стартовое время при первом клике без let чтобы передать в глобальную
  };
  if (hits === maxHits) {
    endGame();
  }
}

function endGame() {
  $(".game-wrapper").prop("hidden",true); //спрятать игровое поле
  $(".mission").prop("hidden",true); //спрятать задачу
  
  let totalPlayedMillis = getTimestamp() - firstHitTime;
  let totalPlayedSeconds = Number(totalPlayedMillis / 1000).toPrecision(3);
  $("#total-time-played").text(totalPlayedSeconds);
  $("#total-miss").text(miss); //сколько промахов
  $("#win-message").removeClass("d-none");
}

function handleClick(event) {
  if ($(event.target).hasClass("target")) {
    hits = hits + 1;
    $(".target").text(hits); //пишем номер выбранного элемента
    round();
  }
  else {
    $(event.target).addClass("miss"); 
    miss = miss + 1;
    $(".miss").text("Мимо!"); //пишем номер выбранного элемента
  }
  // TODO: как-то отмечать если мы промахнулись? См CSS класс .miss
}

function startGame() {
  round();
  $(".game-field").click(handleClick);
  $("#button-start").click(function() {
    $("#button-start").prop("hidden",true);
    $(".game-wrapper").prop("hidden",false);
    $("#button-reload").prop("hidden",false);
    $(".footer-separator").prop("hidden",false);
  });
};

$("#button-reload").click(function() {
    location.reload();
});

$(document).ready(startGame);

/*

function startGame() {
  //заказчик просил отдельную кнопку, запускающую игру а не просто по загрузке
  $("#button-load").click(function() {
      $(".game-wrapper").prop("hidden",false);
      $("#button-load").prop("hidden",true);
      $("#button-reload").prop("hidden",false);
      round();
      $(".game-field").click(handleClick);
    });
  $("#button-reload").click(function() {
    location.reload();
  });
};

$(document).ready(startGame);
*/