let total = 0;
const loadData = async () => {
  const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`)
  const data = await res.json();
  displayData(data.posts);


}
const cardContainer = document.getElementById("discuss-container");

const displayData = (cards) => {
  // console.log(cards)

  cards.forEach(card => {
    // console.log(card)
    const dataCard = document.createElement('div');
    dataCard.classList = `card card-side bg-base-100 shadow-xl`
    dataCard.innerHTML = `
      <div>  <figure><img class="w-20 px-2 py-5 rounded-2xl" src="${card.image}"/></figure>
      </div>
      
       </div>
        <div class="card-body">
         <div class="flex gap-3">
         <h2 class="card-title">#${card.category}</h2>
         <h2>author: ${card.author.name}</h2>
         </div>
          <h2>${card.title}</h2>
          <p>${card.description}</p>
          <hr>
          <div class="flex gap-5">
          <div class="flex">
          <img src="./images/view.png" alt="">
          <p>${card.comment_count}</p>
          </div>
          <div class="flex">
          <img src="./images/eye.png" alt="">
          <p>${card.view_count}</p>
          </div>
          <div class="flex">
          <img src="./images/clock.png" alt="">
          <p>${card.posted_time}</p>
          </div>
          </div>
          <div class="button card-actions justify-end" onclick="buttonData(${card.id})">
          <img src="./images/message.png" alt="">
          </div>
        </div>
        `
    cardContainer.appendChild(dataCard)

  });


}
const markRead = document.getElementById("read")

const button = document.getElementById("tbody-container")
const buttonData = async (id) => {
  // console.log(id)
  total++;
  markRead.innerText = total

  const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`)
  const data = await res.json()
  // console.log(data)
  const posts = data?.posts
  // console.log(posts)
  const singlePost = posts.find(post => post.id === id)
  console.log(singlePost)
  const postElement = document.createElement("div");

  postElement.classList = `card  bg-base-100 shadow-xl 	`
  postElement.innerHTML = `<div class="card-body">
  <div class="flex justify-between items-center gap-10">
  <h2 class="font-bold">${singlePost.title}</h2>
  <div  class="font-bold"><i class="fa-regular fa-eye"></i></div>
  <p  class="font-bold">${singlePost.view_count}</p></div>
  
</div>
  
  
  `

  button.appendChild(postElement)





}



const loadCard = async (id) => {
  const res = await fetch(` https://openapi.programming-hero.com/api/retro-forum/latest-posts`)
  const data = await res.json()
  displayCard(data)

}
const latestCard = document.getElementById("latest-post-container");
const displayCard = (allCard) => {
  // console.log(allCard)
  allCard.forEach(card => {
    // console.log(card)
    const cardDiv = document.createElement('div');
    cardDiv.classList = `card  bg-base-100 shadow-xl`
    cardDiv.innerHTML = `<figure class="px-10 pt-10">
    <img src="${card.cover_image}" alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-start">
    <div class="flex items-center gap-2">
    <i class="fa-regular fa-calendar-days"></i>
    <h2 class="card-title">${card?.author?.posted_date || "No publish Date"}</h2></div>
    <p class="font-bold">${card.title}</p>
   
    <p>${card.description}</p>
    <div class="flex items-start gap-5
     mt-5">
    <img class="w-16 rounded-full" src="${card.profile_image}" alt="">
    <div class="flex flex-col items-start">
    <p class="font-bold">${card.author.name}</p>
    <p>${card?.author?.designation || "Unknown"} </p>

    </div>

    </div>
    
  </div>`
    latestCard.appendChild(cardDiv)
  })

}


loadCard()

loadData()