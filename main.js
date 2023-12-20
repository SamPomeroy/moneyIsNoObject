// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

function isAdmin(obj){
    if(obj.userRole === "ADMIN"){
     return true
 }else{
     return false
 }
 }
 //return obj.userRole === 'ADMIN'
function getEmail(obj){
    return obj.firstName[0].toLowerCase() + obj.lastName.toLowerCase() + ".prsvr@gmail.com"
}

function getPlaylistLength(obj){
    return obj.songs.length
}

function getHardestHomework(arr){
    //lowest score tracker
    if(arr.length === 0){
        return ""
    }
    let homework = arr[0].name;
    let scoreAvg = arr[0].averageScore
    for(let i = 0; i < arr.length; i++){
        let complete = arr[i]
        complete.averageScore
        if(complete.averageScore < scoreAvg){
            homework = complete.name
            scoreAvg = complete.averageScore
        }
    }return homework
}


function createPhonebook(name, num){

    const phonebook = {}
    for(let i = 0; i < name.length; i++){
       phonebook[name[i]] = num[i]
    }
    return phonebook
}


// 
// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};