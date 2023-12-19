// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

function isAdmin(obj){
    if(obj['userRole'] === "ADMIN"){
     return true
 }else{
     return false
 }
 }
function getEmail(obj){
    return obj.firstName[0].toLowerCase() + obj.lastName.toLowerCase() + ".prsvr@gmail.com"
}

function getPlaylistLength(obj){
    return obj['songs'].length
}

function getHardestHomework(obj){
    if(obj.length === 0){
        return ""
    }
    let homework = obj[0].name;
    let scoreAvg = obj[0].averageScore
    for(let i = 0; i < obj.length; i++){
        let complete = obj[i]
        complete.averageScore
        if(complete.averageScore < scoreAvg){
            homework = complete.name
            scoreAvg = complete.averageScore
        }
    }return homework
}
// function getHardestHomework(arr){
//     let lowScore = 1000
//     let name1 = ""
//     for(let i = 0;i< arr.length;i++){
//       if(arr[i].averageScore < lowScore && arr.length >= 1){
//           lowScore = arr[i].averageScore
//           name1 = arr[i].name
//       }
//     } return name1
//   }  

function createPhonebook(arr1, arr2){

    const phonebook = {}
    for(let i = 0; i < arr1.length; i++){
       phonebook[arr1[i]] = arr2[i]
    }
    return phonebook
}


// function getHardestHomework(arrOfHomework){
//     let easiest = arrOfHomework[0].level
//     let easiestName = arrOfHomework[0].Name
//     for(let i = 1; i < arrOfHomework.length; i++){
//         let homework = arrOfHomework[i]
//         if(homework.level < easiest){
//             easiest = 
//         }

//     }
// }

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