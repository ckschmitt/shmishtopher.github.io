// @author    Shmish  "shmish90@gmail.com"
// @version   1.0.0   "5/27/2019"
// @legal     MIT     "(c) Shmish"


function* strings() {
  while (true) {
    yield 'JavaScript Junkie'
    yield 'Haskell Hacker'
    yield 'Elixir Enthusiast'
    yield 'C/C++ Connoisseur'
    yield 'Rust Radical'
  }
}


function sleep(ms) {
  return new Promise(res => setTimeout(res, ms))
}


async function typewriter(el) {
  for (const string of strings()) {
    await sleep(1200)
    el.style.opacity = '0.0'
    await sleep(300)
    el.innerHTML = ''
    el.style.opacity = '1.0'
    await sleep(700)
    
    for (const char of string) {
      el.innerHTML += char
      await sleep(110)
    }
  }
}


typewriter(document.querySelector('#type'))