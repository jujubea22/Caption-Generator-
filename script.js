// 
var Friendship = [
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
    var randomNumber = Math.floor(Math.random() * (Friendship.length));
    document.getElementById('situationBtn').innerHTML = Friendship[randomNumber];
}

var Vacation = [
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
    var randomNumber = Math.floor(Math.random() * (Vacation.length));
    document.getElementById('situationBtn').innerHTML = Vacation[randomNumber];
}

var Holidays = [
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
    var randomNumber = Math.floor(Math.random() * (Holidays.length));
    document.getElementById('situationBtn').innerHTML = Holidays[randomNumber];
}

var ThemeParks = [
    I learned to keep my eyes open and my mouth shut.
    The amusement park was our best invention; the museum, our worst.
    Help Me Find My Stomach
    A gala affair to remember
    The angel is known now but why not
    A Family Af”fair”
    How to enjoy a ride any suggestions?
    My writing is all wrong, it has yet to capture the crazy never ending Ferris wheel.
    All friendships should find their way to a Ferris wheel.
    Certainty a strange Ferris wheel of a statement.
]

function newCaption() {
    var randomNumber = Math.floor(Math.random() * (ThemeParks.length));
    document.getElementById('situationBtn').innerHTML = ThemeParks[randomNumber];
}

var Outdoors = [
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
    var randomNumber = Math.floor(Math.random() * (Outdoors.length));
    document.getElementById('situationBtn').innerHTML = Outdoors[randomNumber];
}

getElementById