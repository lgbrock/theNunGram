// where does a video come from? E.g. Twitch
function videoOrigin (videoURL){
    let origin = new URL(videoURL).hostname
    console.log(origin)
    return origin;
}

function checkIfTwitchClip (videoURL){
  let url = new URL(videoURL)
  let origin = url.hostname
  console.log(origin)
  let isItTwitch = (origin === 'clips.twitch.tv' || origin === 'www.twitch.tv' )
  console.log(isItTwitch)
  // if not, "clip" should be in the URL path
  let isItAClip = String(url.pathname).split('/').includes('clip')
  // console.log(isItAclip)
  return origin === 'clips.twitch.tv' || (isItTwitch && isItAClip); 
}

// lets you repeat the same param with different values. urlParam is "?parent=" for example. arr of strings as values. E.g. query?parent=value
function repeatURLParams (urlParam, arr){
  let output = '';
  for (let str of arr){
    output += `${urlParam}${str}`
  }
  console.log(output)
  return output;
}

// Pass in a video URL, followed by the parent domains where that video will be embedded
function convertTwitchClip (...arguments) {
  let [videoURL, ...parents] = arguments
  let parentSiteParams = repeatURLParams('&parent=',parents)
  // console.log(parentSiteParams)
  const url = new URL(videoURL)
  let embeddableURL;
  if (url.hostname === 'clips.twitch.tv'){
    // if it's an embed link in the following format: https://clips.twitch.tv/embed?clip=CleverDependablePoultryLitFam-_dTbDHINZ38jB7eg&parent=www.example.com
     // check if url.searchParams.get("clip") is null
    if (url.searchParams.get("clip") !== null) {
      embeddableURL = `${url.origin + url.pathname + '?clip=' + url.searchParams.get("clip") + parentSiteParams}`
    } else {
      embeddableURL = `${url.origin + '/embed?clip=' + url.pathname.slice(1) + parentSiteParams}`
    }
    // embeddableURL must have an SSL certificate for twitch embeds
    return embeddableURL;
  } else if (url.hostname === 'www.twitch.tv'){
    // if it's a stadard clip link in the following format: https://www.twitch.tv/learnwithleon/clip/CleverDependablePoultryLitFam-_dTbDHINZ38jB7eg
    let pathnames = url.pathname;
    let pathnamesArr = String(pathnames).split('/') 
    let clipParam = pathnamesArr[pathnamesArr.length-1] 
    embeddableURL = `https://clips.twitch.tv/embed?clip=${clipParam + parentSiteParams}`
    return embeddableURL;
  }
}

module.exports = { videoOrigin, checkIfTwitchClip, repeatURLParams, convertTwitchClip}