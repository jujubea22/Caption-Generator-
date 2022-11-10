// 
var friendshipEl = [
    Friends ‘till the end.
    A true friend is one soul in two bodies.
    Your vibe attracts your tribe.
    Friends don’t let friends do silly things alone.
    I’ll even send you the photos I look bad in.
    Besides chocolate, you’re my favorite.
    Love is beautiful, friendship is better
    Every girl needs a boy best friend.
    No friendship is an accident.
    I love my crazy best friends.
]

function newCaption() {
    var randomNumber = Math.floor(Math.random() * (friendshipEl.length));
    document.getElementById('situationBtn').innerHTML = friendshipEl[randomNumber];
}

var vacationsEl = [
    Always take the scenic route.
    An adventure a day keeps the doctor away.
    Be back never.
    Calories don’t count when you’re on vacation.
    Catch flights, not feelings.
    Collect moments, not things.
    I do believe it’s time for another adventure.
    I need a six-month-long vacation twice a year.
    It’s bad manners to keep a vacation waiting.
    Let’s wander where the wi-fi is weak.

]


function newCaption() {
    var randomNumber = Math.floor(Math.random() * (vacationsEl.length));
    document.getElementById('situationBtn').innerHTML = vacationsEl[randomNumber];
}

var holidaysEl = [
    Work, travel, save, repeat.
    What’s the holiday season without a trip to Santa’s Workshop?
    I ate the turkey, and now it’s time for some vitamin sea.
    Waves for Days.
    What the shell?
    Taking a break before I break.
    Letting my body and mind wander a bit.
    Having a holly, jolly Christmas in the sand.
    Last year’s words belong to last year’s language. And next year’s words await another voice.
    Taking a short break. Be back never!
    The more you play, the more you pay.
    People don’t take trips. Trips take people.
    Life’s a beach. Enjoy the waves.
]

function newCaption() {
    var randomNumber = Math.floor(Math.random() * (holidaysEl.length));
    document.getElementById('situationBtn').innerHTML = holidaysEl[randomNumber];
}

var themeEl = [
    I learned to keep my eyes open and my mouth shut.
    The amusement park was our best invention; the museum, our worst.
    Help Me Find My Stomach
    A gala affair to remember
    The angel is known now but why not
    A Family Af”fair”
    How to enjoy a ride any suggestions?
    My writing is all wrong, it has yet to capture the crazy never ending Ferris wheel.
    All friendshipEls should find their way to a Ferris wheel.
    Certainty a strange Ferris wheel of a statement.
]

function newCaption() {
    var randomNumber = Math.floor(Math.random() * (themeEl.length));
    document.getElementById('situationBtn').innerHTML = themeEl[randomNumber];
}

var outdoorsEl = [
    Time spent on trees is never wasted time.
    Fashion is temporary, but nature never goes out of style
    Beautiful things don’t ask for attention
    Another day, another grand adventure
    Let me branch out a little
    Getting back to my roots
    I’ll always root for you
    Mother Nature doesn’t set out to be beautiful. She just is.
    Always down to take the scenic route.
    Trailblazin’ through the weekend

]

function newCaption() {
    var randomNumber = Math.floor(Math.random() * (outdoorsEl.length));
    document.getElementById('situationBtn').innerHTML = outdoorsEl[randomNumber];
}
