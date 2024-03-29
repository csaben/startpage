/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/**
 * Search function
 */

const searchInput = document.querySelector("#searchbar > input")
const searchButton = document.querySelector("#searchbar > button")

const lookup = {}
const engine = "google"
const engineUrls = {
  deepl: "https://www.deepl.com/translator#-/-/",
  duckduckgo: "https://duckduckgo.com/?q=",
  ecosia: "https://www.ecosia.org/search?q=",
  google: "https://www.google.com/search?q=",
  startpage: "https://www.startpage.com/search?q=",
  youtube: "https://www.youtube.com/results?q=",
}

const isWebUrl = value => {
  try {
    const url = new URL(value)
    return url.protocol === "http:" || url.protocol === "https:"
  } catch {
    return false
  }
}

const getTargetUrl = value => {
  if (isWebUrl(value)) return value
  if (lookup[value]) return lookup[value]
  return engineUrls[engine] + value
}

const search = () => {
  const value = searchInput.value
  const targetUrl = getTargetUrl(value)
  window.open(targetUrl, "_self")
}

searchInput.onkeyup = event => event.key === "Enter" && search()
searchButton.onclick = search

/**
 * inject bookmarks into html
 */
const bookmarks = [
	{"id":"n7q8ZkMhAtSwJ3iz","label":"school","bookmarks":[{"id":"65M6I5FsVDDE5KUV","label":"email","url":"https://outlook.office365.com/mail/"},{"id":"OWuNEMT4AJ7Gq3VK","label":"trello","url":"https://trello.com/b/GnGneSsS/spring-2023"},{"id":"0gmwzVqPYmd6ucHM","label":"canvas","url":"https://canvas.umw.edu/"},{"id":"KBjfpsEjsDSiYjFc","label":"banner","url":"https://technology.umw.edu/hss/banner/banner-logins/"}]},
	{"id":"KTi3aBF3nHQuGiXH","label":"research","bookmarks":[{"id":"7A1KbBxF7uhM3zxQ","label":"github","url":"https://github.com/csaben?tab=repositories"},{"id":"0UFay3hZ67ZsDWtM","label":"kaggle","url":"https://www.kaggle.com/competitions"},{"id":"udlwySnNavVRXjVm","label":"google drive","url":"https://drive.google.com/drive/folders/1xcuqWsBZZBkbjSEqGX6SL2d6FuxC7V4B"},{"id":"n7q8Zkmamamama","label":"the web","url":"https://twitter.com/i/lists/1571135399690485760"},{"id":"n7q8Zkbabababa","label":"cpsc 240","url":"https://ianfinlayson.net/class/cpsc240/"},{"id":"n7q8Zklalalala","label":"leetcode","url":"https://leetcode.com/problemset/all/?sorting=W3sic29ydE9yZGVyIjoiREVTQ0VORElORyIsIm9yZGVyQnkiOiJGUkVRVUVOQ1kifV0%3D"}]},
	{"id":"ZXHosIW1I0H8BG18","label":"misc.","bookmarks":[{"id":"a2rxSnr73absdFZt","label":"discord","url":"https://discord.com/channels/@me/515368103773995008"},{"id":"oECmS0JWA29h1XNH","label":"youtube","url":"https://www.youtube.com/channel/UCgUO1XZjISdBxAXnqnmPoRw"},{"id":"wtkSSTdxUWben2X4","label":"twitch","url":"https://www.twitch.tv/arel1us"},
	{"id":"n7q8Zkgagagaga","label":"argrave","url":"https://www.patreon.com/home"},{"id":"wn7q8Zkkkgagaga","label":"chatgpt","url":"https://chat.openai.com/chat"}]},
	{"id":"n7q8Zkjajajaja","label":"season","bookmarks":[{"id":"a2rxSnr73absafdt","label":"leetcode progress","url":"https://docs.google.com/spreadsheets/d/1oCR8pBxAGto4URG4vUf6ylorks7tyrLTKtSGwztK3XE/edit#gid=0"}]}
]

const createGroupContainer = () => {
  const container = document.createElement("div")
  container.className = "bookmark-group"
  return container
}

const createGroupTitle = title => {
  const h2 = document.createElement("h2")
  h2.innerHTML = title
  return h2
}

const createBookmark = ({ label, url }) => {
  const li = document.createElement("li")
  const a = document.createElement("a")
  a.href = url
  a.innerHTML = label
  li.append(a)
  return li
}

const createBookmarkList = bookmarks => {
  const ul = document.createElement("ul")
  bookmarks.map(createBookmark).forEach(li => ul.append(li))
  return ul
}

const createGroup = ({ label, bookmarks }) => {
  const container = createGroupContainer()
  const title = createGroupTitle(label)
  const bookmarkList = createBookmarkList(bookmarks)
  container.append(title)
  container.append(bookmarkList)
  return container
}

const injectBookmarks = () => {
  const bookmarksContainer = document.getElementById("bookmarks")
  bookmarksContainer.append()
  bookmarks.map(createGroup).forEach(group => bookmarksContainer.append(group))
}

injectBookmarks()
