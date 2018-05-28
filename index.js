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
    lis[i].innerHTML = calc + n
  }
}

function deepestChild() {
  var e = document.getElementById('grand-node').querySelectorAll('div')
  for (let i = 0; i < e.length; i++) {
    var d = e[i]
  }
  return d
}
