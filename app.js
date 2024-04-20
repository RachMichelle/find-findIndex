function findUserByUsername(arr, username){
    return arr.find(function(name){
        return name.username === username;
    })
}

function removeUser(arr, username){
    let deleted = arr.findIndex(function(name){
        return name.username === username;
    })
    if (deleted === -1) return;
    return arr.splice(deleted, 1);
}