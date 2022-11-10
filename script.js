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
    var randomNumber = Math.floor(Math.random() * (friendship.length));
    document.getElementById('situationBtn').innerHTML = friendship[randomNumber];
}
