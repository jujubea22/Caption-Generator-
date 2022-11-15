var containerEl = document.getElementsByClassName('situationBtn')
var friendshipEl = document.getElementById('ssBtn1')
var vacationEl = document.getElementById('ssBtn2')
var holidaysEl = document.getElementById('ssBtn3')
var themeEl = document.getElementById('ssBtn4')
var outdoorsEl = document.getElementById('ssBtn5')
var captionEl = document.getElementsByClassName('captionEl')[0]
var textContainer = document.getElementById('textContainer')
var refreshBtn = document.getElementById('refresh')

function start() {
    captionEl.innerHTML = 'Choose Caption Category'
    captionEl.style.fontFamily = 'Air Travelers'
    captionEl.style.color = 'rgba(62, 182, 237, 0.582)'
    captionEl.style.textShadow = '1px 1px 1px , 1px 5px 2px #363945'
}

start()

function hideContainer() {
    captionEl.setAttribute('style', 'display:none')
}



function hideBtn() {
    friendshipEl.setAttribute('style', 'display:none');
    vacationEl.setAttribute('style', 'display:none');
    holidaysEl.setAttribute('style', 'display:none');
    themeEl.setAttribute('style', 'display:none');
    outdoorsEl.setAttribute('style', 'display:none');

    refreshBtn.remove('class')
}

var friendshipCaption = [ "Friends ‘till the end.", 
        "A true friend is one soul in two bodies.",
        "Your vibe attracts your tribe.",
        "Friends don’t let friends do silly things alone.",
        "I’ll even send you the photos I look bad in.",
        "Besides chocolate, you’re my favorite.",
        "Love is beautiful, friendship is better",
        "Every girl needs a boy best friend.",
        "No friendship is an accident.",
        "I love my crazy best friends."
    ]


var vacationCaption = [
    "Always take the scenic route.",
    "An adventure a day keeps the doctor away.",
    "Be back never.",
    "Calories don’t count when you’re on vacation.",
    "Catch flights, not feelings.",
    "Collect moments, not things.",
    "I do believe it’s time for another adventure.",
    "I need a six-month-long vacation twice a year.",
    "It’s bad manners to keep a vacation waiting.",
    "Let’s wander where the wi-fi is weak.",
  ]
  
  var holidaysCaption = [
    "Work, travel, save, repeat.",
    "What’s the holiday season without a trip to Santa’s Workshop?",
    "I ate the turkey, and now it’s time for some vitamin sea.",
    "Waves for Days.",
    "What the shell?",
    "Taking a break before I break.",
    "Letting my body and mind wander a bit.",
    "Having a holly, jolly Christmas in the sand.",
    "Last year’s words belong to last year’s language. And next year’s words await another voice.",
    "Taking a short break. Be back never!",
    "The more you play, the more you pay.",
    "People don’t take trips. Trips take people.",
    "Life’s a beach. Enjoy the waves."
  ]
 
  var themeCaption = [
   " I learned to keep my eyes open and my mouth shut.",
    "The amusement park was our best invention; the museum, our worst.",
   " Help Me Find My Stomach",
    "A gala affair to remember",
    "The angel is known now but why not",
    "A Family Af”fair”",
    "How to enjoy a ride any suggestions?",
    "My writing is all wrong, it has yet to capture the crazy never ending Ferris wheel.",
    "All friendship should find their way to a Ferris wheel.",
    "Certainty a strange Ferris wheel of a statement.",
  ]
  
  var outdoorsCaption = [
    "Time spent on trees is never wasted time.",
    "Fashion is temporary, but nature never goes out of style",
    "Beautiful things don’t ask for attention",
    "Another day, another grand adventure",
    "Let me branch out a little",
    "Getting back to my roots",
    "I’ll always root for you",
    "Mother Nature doesn’t set out to be beautiful. She just is.",
    "Always down to take the scenic route.",
    "Trailblazin’ through the weekend",
  ]



  function showCaption(captionArr) {
    var newDisplay = newCaption(captionArr)

    var pEl =  document. createElement('p')
    pEl.textContent = newDisplay


    var refreshBtn = document.createElement('button');
    refreshBtn.textContent = 'Refresh'
    refreshBtn.setAttribute('class', 'ssBtn')
    refreshBtn.style.margin = '0 auto'
    refreshBtn.style.display = 'block'

    captionEl.innerHTML = "Thinking of the right caption is hard, heres one on us  :"
    console.log(captionEl)

    refreshBtn.addEventListener('click', function(){
      window.location.href = 'index.html'
    }) 

    textContainer.append(pEl, refreshBtn)
}

document.querySelectorAll('.ssBtn').forEach(x=>x.addEventListener('click', hideBtn))
  

friendshipEl.addEventListener('click', ()=>showCaption(friendshipCaption))
vacationEl.addEventListener('click', ()=>showCaption(vacationCaption))
holidaysEl.addEventListener('click', ()=>showCaption(holidaysCaption))
themeEl.addEventListener('click', ()=>showCaption(themeCaption))
outdoorsEl.addEventListener('click', ()=>showCaption(outdoorsCaption))


function newCaption(captionArr) {
    
    var randomNumber = Math.floor(Math.random() * (captionArr.length));
    var randomCaption = captionArr[randomNumber]
    return randomCaption
}
<FontAwesomeIcon icon="fa-brands fa-square-facebook" />