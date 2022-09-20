
var friends = ['sahed', 'ridika tasnim jessy', 'tawhid','mainul','aidi','saidul-hossain'];

function bestFrieds(friends) {
    let bigFriend = friends[0];
    for (let i = 0; i < friends.length; i++){
        const element = friends[i];
        if (element.length > bigFriend.length) {
            bigFriend = element;
        }
    }
    return bigFriend;
}
const finalDecitions = bestFrieds(friends);
console.log(finalDecitions);





