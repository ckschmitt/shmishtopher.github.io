// @author    Shmish  "shmish90@gmail.com"
// @version   1.0.0   "5/27/2019"
// @legal     MIT     "(c) Shmish"


fetch('https://api.github.com/users/shmishtopher/repos?sort=created&type=owner')
  .then(response => response.json())
  .then(repos => repos.slice(0, 6))
  .then(repos => {
    for (const repo of repos) {
      const teplate = document.querySelector('template')
      const clone = document.importNode(teplate.content, true)

      clone.querySelector('a').setAttribute('href', repo.html_url)
      clone.querySelector('span').setAttribute('language', repo.language)

      clone.querySelector('a').childNodes[0].nodeValue = repo.name
      clone.querySelector('span').innerText = repo.language
      clone.querySelector('p').innerText = repo.description

      document.querySelector('#repos').appendChild(clone)
    }
  })


fetch('https://gh-pinned-repos-5l2i19um3.vercel.app/?username=shmishtopher')
  .then(response => response.json())
  .then(repos => {
    for (const repo of repos) {
      const teplate = document.querySelector('template')
      const clone = document.importNode(teplate.content, true)

      clone.querySelector('a').setAttribute('href', repo.link)
      clone.querySelector('span').setAttribute('language', repo.language)

      clone.querySelector('a').childNodes[0].nodeValue = repo.repo
      clone.querySelector('span').innerText = repo.language
      clone.querySelector('p').innerText = repo.description

      document.querySelector('#pinned').appendChild(clone)
    }
  })


const homework = Promise.all([
  fetch('https://api.github.com/repos/shmishtopher/CS-253').then(x => x.json()),
  fetch('https://api.github.com/repos/shmishtopher/CS-355').then(x => x.json()),
  fetch('https://api.github.com/repos/shmishtopher/CS-354').then(x => x.json()),
  fetch('https://api.github.com/repos/shmishtopher/CS-254').then(x => x.json()),
  fetch('https://api.github.com/repos/shmishtopher/CS-153').then(x => x.json()),
  fetch('https://api.github.com/repos/shmishtopher/CS-385').then(x => x.json()),
  fetch('https://api.github.com/repos/shmishtopher/CS-483').then(x => x.json()),
  fetch('https://api.github.com/repos/shmishtopher/CS-492').then(x => x.json()),
  fetch('https://api.github.com/repos/shmishtopher/CS-463').then(x => x.json()),
  fetch('https://api.github.com/repos/shmishtopher/Semantic-Web').then(x => x.json()),
])

homework.then(repos => {
  for (const repo of repos) {
    const teplate = document.querySelector('template')
    const clone = document.importNode(teplate.content, true)

    clone.querySelector('a').setAttribute('href', repo.html_url)
    clone.querySelector('span').setAttribute('language', repo.language)

    clone.querySelector('a').childNodes[0].nodeValue = repo.name
    clone.querySelector('span').innerText = repo.language
    clone.querySelector('p').innerText = repo.description

    document.querySelector('#homework').appendChild(clone)
  }
})
