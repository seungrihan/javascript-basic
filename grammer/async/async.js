'use strict'
// async & await
// clear style of using promise :)

// 1. async
function fetchUser(){
  // do network request in 10 secs...
  return 'seungri'
}

const user = fetchUser();
console.log(user);