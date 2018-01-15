const html = require('bel')
const got = require('got')

function attach (selection, hash) {
  var position = getposition(selection)
  console.log('position', position)
  var el = getel(hash, position, selection)
}

function getposition (sel) {
  // extract the last range in the selection
  // so we can get a bounding rect
  var rangeIdx = sel.rangeCount - 1
  if (rangeIdx < 0) return null

  var range = sel.getRangeAt(rangeIdx)
  var rect = range.getBoundingClientRect()

  // calculate the menu position
  // the top of the menu is the bottom of the selection
  // the left of the menu is the middle of the selection
  var top = window.pageYOffset + rect.bottom
  var left = window.pageXOffset + rect.left
  return { top, left }
}

function getel (hash, position, selection) {
  // grab the existing element, or create it
  // if it doesn't exist
  var el = document.getElementById('direct-linker')
  if (!el) {
    el = html`
      <div id="direct-linker">
        <p>Create direct link</p>
      </div>
    `
    hideeventually(el)
    document.body.appendChild(el)
  }
  el.style.top = `${position.top}px`
  el.style.left = `${position.left}px`
  el.style.display = 'block'
  el.onclick = submitLink(hash, selection)
  return el
}

function submitLink (hash, selection) {
  var url = window.location.href.split('#')

  var linkdata = {
    url: url,
    title: window.document.title,
    selector: hash,
    quote: selection.toString()
  }

  got.post('https://memex.link', {
    body: linkdata
  }).then(
    res => {
      console.log('Successfully submitted link', res)
    }
  ).catch(
    err => {
      console.error('Error submitting link:', err)
    }
  )
}

function hideeventually (el) {
  document.addEventListener('selectionchange', destroy);
  function destroy () {
    el.style.display = 'none'
    el.onclick = null
    document.removeEventListener('selectionchange', destroy)
  }
}

module.exports = { attach }
