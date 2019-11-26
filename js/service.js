
const apiKey = 'AIzaSyAom9MxzKI0lwQ98pW1xzKeaMzlg2pySCU'

function getVideos(value) {
    // console.log('value',value)
    return axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${apiKey}&q=${value}`)
        .then(res => res.data.items)
}

function getWiki(value) {
    return axios.get(`https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=${value}&limit=5`)
        .then(res => {
            let data = {}
            data[res.data[1][0]] = res.data[2][0]
            data[res.data[1][1]] = res.data[2][1]
            return data
        })
}
