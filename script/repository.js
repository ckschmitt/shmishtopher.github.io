// @author    Shmish  "shmish90@gmail.com"
// @version   1.0.0   "5/27/2019"
// @legal     MIT     "(c) Shmish"


fetch('https://api.github.com/users/shmishtopher/repos?sort=pushed&type=owner')
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
