
var friends = ['sahed', 'ridika', 'tawhid', 'saidul'];
function bestFrieds(friends) {
    let friend = friends[0];
    let fnd = friends[0]
    for (let i = 0; i < friends.length; i++){
        const element = friends[i];
        if (element > friend) {
            friend = element;
            fnd = friends[i];
        }
    }
    return fnd;
}
const finalDecitions = bestFrieds(friends);
console.log(finalDecitions);
