function getFirstSelector(selector) {
  var s = document.querySelector(selector)
  return s
}

function nestedTarget() {
  var a = document.querySelector('#nested').querySelector('.target')
  return a
}

function increaseRankBy(n) {
  var lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < lis.length; i++) {
    var calc = parseInt(lis[i].innerHTML)
    calc + n
  }
}
