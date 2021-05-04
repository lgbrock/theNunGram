
function videoOrigin (videoURL){
    let origin = new URL(videoURL).hostname
    return origin;
}
function repeatURLParams (urlParam, arr){
  let output = '';
  for (let str of arr){
    output += `${urlParam}${str}`
  }
  return output;
}
function convertTwitchClip (...arguments) {
  let [videoURL, ...parents] = arguments
  let parentSiteParams = repeatURLParams('&parent=',parents)
  console.log(parentSiteParams)
  const url = new URL(videoURL)
  let embeddableURL;
  if (url.hostname === 'clips.twitch.tv'){
    // if it's an embed link in the following format: https://clips.twitch.tv/embed?clip=CleverDependablePoultryLitFam-_dTbDHINZ38jB7eg&parent=localhost:3000
    embeddableURL = `${url.origin + url.pathname + '?clip=' + url.searchParams.get("clip") + parentSiteParams}`
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

module.exports = { videoOrigin, repeatURLParams, convertTwitchClip}