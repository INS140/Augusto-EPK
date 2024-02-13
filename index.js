
// Global Variables
const outlet = document.querySelector('#outlet')

const about = document.querySelector('#about')

const photos = document.querySelector('#photos')

const videos = document.querySelector('#videos')

// HTML Templates

const aboutPage = `
  <p>Augusto is a very talented acoustic soul artist coming from the Island of Guam. Exposed to a wide variety of music, Augusto has learned how to play many different styles ranging from Island, Reggae, R&B, Soul, Rock, and Country. Spreading good vibes and smiles. When he’s not performing on stage, you can find Augusto on the Gondola ride at the Venetian Hotel in Las Vegas.</p>
  <h2>Notable Performances:</h2>
  <div class="lists">
    <ul class="places">
      <li>Bellagio Big Money Slow tournaments</li>
      <li>The Lounge at the Palms</li>
      <li>Spencer Couture Art Gallery</li>
      <li>Mandalay Bay</li>
      <li>Chateau Night club at the Paris Hotel</li>
    </ul>
    <ul class="places">
      <li>Country Saloon Down Town</li>
      <li>The Orleans</li>
      <li>The Cellar</li>
      <li>Money Plays</li>
      <li>Blue Martini</li>
    </ul>
  </div>
`

const photosPage = `
  <img src="./images/portrait_1.png" alt="1" class="photo1" />
  <img src="./images/band_2.jpg" alt="2" class="photo2" />
  <img src="./images/band_3_crop.jpg" alt="3" class="photo3" />
  <img src="./images/band_4_crop.jpg" alt="4" class="photo4" />
  <img src="./images/band_1.jpg" alt="5" class="photo5" />
`

const videosPage = `
  <div id="video">
    <video width="200" height="200" controls><source src="./videos/Be_Mine.mp4" type="video/mp4" /></video>
  </div>
  <div class="video-select">
    <button><img src="./images/Be_Mine_Cover_Img.jpg" alt="Be Mine" /></button>
    <button><img src="./images/Spencer_Couture_Cover_Img.jpg" alt="Jam Session at Spencer Couture 1" /></button>
    <button><img src="./images/Hey_by_If_Anything_Cover_Img.jpg" alt="Hey by If Anything" /></button>
    <button><img src="./images/Fun_On_Stage_Cover_Img.jpg" alt="Jam Session at Spencer Couture 2" /></button>
    <button><img src="./images/Sublime_Cover_Santeria_Cover_Img.jpg" alt="Sublime Cover Santeria" /></button>
  </div>
`

// Initial Setup

outlet.innerHTML = aboutPage
outlet.classList = 'outlet about'

// Outlet Link Event Handlers

about.addEventListener("click", () => {
  outlet.innerHTML = aboutPage
  outlet.classList = 'outlet about'
})

photos.addEventListener("click", () => {
  outlet.innerHTML = photosPage
  outlet.classList = 'outlet photos'
})

videos.addEventListener("click", () => {
  outlet.innerHTML = videosPage
  outlet.classList = 'outlet videos'

  const video = document.getElementById("video")
  const buttons = document.querySelectorAll(".videos button")

  const videoArray = ["Be_Mine.mp4", "Spencer_Couture.MP4", "Hey_by_If_Anything.mp4", "Fun_On_Stage.MP4", "Sublime_Cover_Santeria.MP4"]
  
  buttons.forEach((b, i) => {
    b.addEventListener("click", () => {
      video.innerHTML = `<video width="200" height="200" controls><source src="./videos/${videoArray[i]}" type="video/mp4" /></video>`
    })
  })
})