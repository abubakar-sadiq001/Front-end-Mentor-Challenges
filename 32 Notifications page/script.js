'use strict';

const markAllEl = document.querySelector(".readAll");
let notfShow = document.querySelector(".notfShow");
const notfBulletPointEl1 = document.querySelector(".one");
const notfBulletPointEl2 = document.querySelector(".two");
const notfBulletPointEl3 = document.querySelector(".three");
// notification users
const user1 = document.querySelector(".user1");
const user2 = document.querySelector(".user2");
const user3 = document.querySelector(".user3");

user1.addEventListener("click", user1F);
user2.addEventListener("click", user2F);
user3.addEventListener("click", user3F);


function user1F() {
    user1.style.backgroundColor = "hsl(0, 0%, 100%)";
    notfBulletPointEl1.style.display = "none";
    if (notfShow.textContent > 0) {
        notfShow.textContent--;
        user1.removeEventListener("click", user1F);
        user1.style.cursor = "default";
    } else {
        return
    }
}
function user2F() {
    user2.style.backgroundColor = "hsl(0, 0%, 100%)";
    notfBulletPointEl2.style.display = "none";
    if (notfShow.textContent > 0) {
        notfShow.textContent--;
        user2.removeEventListener("click", user2F);
        user2.style.cursor = "default";
    } else {
        return
    }
}
function user3F() {
    user3.style.backgroundColor = "hsl(0, 0%, 100%)";
    notfBulletPointEl3.style.display = "none";
    if (notfShow.textContent > 0) {
        notfShow.textContent--;
        user3.removeEventListener("click", user3F);
        user3.style.cursor = "default";
    } else {
        return
    }
}

notfShow.textContent = 3;
markAllEl.addEventListener("click", () => {
    const allUsers = [user1, user2, user3];
    const allPoints = [notfBulletPointEl1, notfBulletPointEl2, notfBulletPointEl3];
    allUsers.forEach((user) => {
        user.style.backgroundColor = "hsl(0, 0%, 100%)";
        allPoints.forEach(point => {
            point.style.display = "none";
            user.style.cursor = "default";
            notfShow.textContent = 0;
        })
    })
})