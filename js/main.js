function init() {
    getVideos('the beatles')
        .then(res => {
            renderVideos(res)
        })
    getWiki('the beatles')
        .then(res => {
            renderWiki(res)
        })
    const el = document.querySelector('.search')
    el.addEventListener("keydown", (e) => {
        if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
            onSearch()
        }
    })

}

function onSearch() {
    var val = document.querySelector('.search').value
    getVideos(val)
        .then(res => {
            renderVideos(res)
        })
    getWiki(val)
        .then(res => {
            renderWiki(res)
        })
}

function renderVideos(res) {
    renderVideo(res[0].id.videoId)
    var strHtml = res.map(item => {
        let videoId = item.id.videoId
        return `<iframe width="400" height="145" src="https://www.youtube.com/embed/${videoId}">
                </iframe>`
    })
    document.querySelector('.movies-container').innerHTML = strHtml.join('')
}

function renderVideo(videoId) {
    let strHtml = `<iframe width="500" height="345" src="https://www.youtube.com/embed/${videoId}">
                   </iframe>`
    document.querySelector('.video-container').innerHTML = strHtml
}

function renderWiki(res) {
    console.log('res', res)
    let strHtml = ''
    for (key in res) {
        strHtml += `<h2>${key}</h2>
                    <p>${res[key]}</p>`
    }
    document.querySelector('.wiki-container').innerHTML = strHtml
}