'use strict';

const allTitle = document.querySelectorAll('.title');
const allHours = document.querySelectorAll('.hours');
const allDuration = document.querySelectorAll('.allDurations');
const allGetBtns = document.querySelectorAll('.getBtns');
allGetBtns.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.classList.contains('daily-subheading')) {
            e.target.classList.add('active');
            document.querySelector('.weekly-subheading').classList.remove('active');
            document.querySelector('.monthly-subheading').classList.remove('active');
            getDaily();
        } else if (e.target.classList.contains('weekly-subheading')) {
            e.target.classList.add('active');
            document.querySelector('.daily-subheading').classList.remove('active');
            document.querySelector('.monthly-subheading').classList.remove('active');
            getWeek();
        } else if (e.target.classList.contains('monthly-subheading')) {
            e.target.classList.add('active');
            document.querySelector('.weekly-subheading').classList.remove('active');
            document.querySelector('.daily-subheading').classList.remove('active');
            getMonthly();
        }
    })
})



const allEl = document.querySelectorAll('.content-box');
allEl.forEach(box => {
    box.addEventListener('mouseover', () => {
        box.style.background = 'hsl(235, 45%, 61%)';
        box.style.cursor = 'pointer';
    })
    box.addEventListener('mouseout', () => {
        box.style.background = '';
    })
})
getDaily();
async function getDaily() {
    const request = await fetch('./data.json');
    const res = await request.json();
    if (!res) {
        throw new Error("Something went wrong!");
    } else {
        allTitle.forEach(myTitles => {
            if (myTitles.classList.contains('title1')) {
                myTitles.textContent = `${res[0].title}`;
            } else if (myTitles.classList.contains('title2')) {
                myTitles.textContent = `${res[1].title}`;
            } else if (myTitles.classList.contains('title3')) {
                myTitles.textContent = `${res[2].title}`;
            } else if (myTitles.classList.contains('title4')) {
                myTitles.textContent = `${res[3].title}`;
            } else if (myTitles.classList.contains('title5')) {
                myTitles.textContent = `${res[4].title}`;
            } else if (myTitles.classList.contains('title6')) {
                myTitles.textContent = `${res[5].title}`;
            }
        })
        allHours.forEach(hour => {
            if (hour.classList.contains('work-hours')) {
                hour.textContent = `${res[0].timeframes.daily.current}hrs`;
            } else if (hour.classList.contains('play-hours')) {
                hour.textContent = `${res[1].timeframes.daily.current}hrs`;
            } else if (hour.classList.contains('study-hours')) {
                hour.textContent = `${res[2].timeframes.daily.current}hrs`;
            } else if (hour.classList.contains('exercise-hours')) {
                hour.textContent = `${res[3].timeframes.daily.current}hrs`;
            } else if (hour.classList.contains('social-hours')) {
                hour.textContent = `${res[4].timeframes.daily.current}hrs`;
            } else if (hour.classList.contains('selfcare-hours')) {
                hour.textContent = `${res[5].timeframes.daily.current}hrs`;
            }

            allDuration.forEach(duration => {
                duration.classList.contains('work-duration') ? duration.textContent = `Last Week - ${res[0].timeframes.daily.previous}hrs` :
                 duration.classList.contains('play-duration') ? duration.textContent = `Last Week - ${res[1].timeframes.daily.previous}hrs` :
                duration.classList.contains('study-duration') ? duration.textContent = `Last Week - ${res[2].timeframes.daily.previous}hrs` : 
                duration.classList.contains('exercise-duration') ? duration.textContent = `Last Week - ${res[3].timeframes.daily.previous}hrs` : 
                duration.classList.contains('social-duration') ? duration.textContent = `Last Week - ${res[4].timeframes.daily.previous}hrs` : 
                duration.classList.contains('selfcare-duration') ? duration.textContent = `Last Week - ${res[5].timeframes.daily.previous}hrs` : '';
            })
        })
    }
}


async function getWeek() {
    const request = await fetch('./data.json');
    const res = await request.json();
    if (!res) {
        throw new Error("Something went wrong!");
    } else {
        allHours.forEach(hour => {
            if (hour.classList.contains('work-hours')) {
                hour.textContent = `${res[0].timeframes.weekly.current}hrs`;
            } else if (hour.classList.contains('play-hours')) {
                hour.textContent = `${res[1].timeframes.weekly.current}hrs`;
            } else if (hour.classList.contains('study-hours')) {
                hour.textContent = `${res[2].timeframes.weekly.current}hrs`;
            } else if (hour.classList.contains('exercise-hours')) {
                hour.textContent = `${res[3].timeframes.weekly.current}hrs`;
            } else if (hour.classList.contains('social-hours')) {
                hour.textContent = `${res[4].timeframes.weekly.current}hrs`;
            } else if (hour.classList.contains('selfcare-hours')) {
                hour.textContent = `${res[5].timeframes.weekly.current}hrs`;
            }

            allDuration.forEach(duration => {
                duration.classList.contains('work-duration') ? duration.textContent = `Last Week - ${res[0].timeframes.weekly.previous}hrs` :
                 duration.classList.contains('play-duration') ? duration.textContent = `Last Week - ${res[1].timeframes.weekly.previous}hrs` :
                duration.classList.contains('study-duration') ? duration.textContent = `Last Week - ${res[2].timeframes.weekly.previous}hrs` : 
                duration.classList.contains('exercise-duration') ? duration.textContent = `Last Week - ${res[3].timeframes.weekly.previous}hrs` : 
                duration.classList.contains('social-duration') ? duration.textContent = `Last Week - ${res[4].timeframes.weekly.previous}hrs` : 
                duration.classList.contains('selfcare-duration') ? duration.textContent = `Last Week - ${res[5].timeframes.weekly.previous}hrs` : '';
            })
        })
    }
}

async function getMonthly() {
    const request = await fetch('./data.json');
    const res = await request.json();
    if (!res) {
        throw new Error("Something went wrong!");
    } else {
        allHours.forEach(hour => {
            if (hour.classList.contains('work-hours')) {
                hour.textContent = `${res[0].timeframes.monthly.current}hrs`;
            } else if (hour.classList.contains('play-hours')) {
                hour.textContent = `${res[1].timeframes.monthly.current}hrs`;
            } else if (hour.classList.contains('study-hours')) {
                hour.textContent = `${res[2].timeframes.monthly.current}hrs`;
            } else if (hour.classList.contains('exercise-hours')) {
                hour.textContent = `${res[3].timeframes.monthly.current}hrs`;
            } else if (hour.classList.contains('social-hours')) {
                hour.textContent = `${res[4].timeframes.monthly.current}hrs`;
            } else if (hour.classList.contains('selfcare-hours')) {
                hour.textContent = `${res[5].timeframes.monthly.current}hrs`;
            }

            allDuration.forEach(duration => {
                duration.classList.contains('work-duration') ? duration.textContent = `Last Week - ${res[0].timeframes.monthly.previous}hrs` :
                 duration.classList.contains('play-duration') ? duration.textContent = `Last Week - ${res[1].timeframes.monthly.previous}hrs` :
                duration.classList.contains('study-duration') ? duration.textContent = `Last Week - ${res[2].timeframes.monthly.previous}hrs` : 
                duration.classList.contains('exercise-duration') ? duration.textContent = `Last Week - ${res[3].timeframes.monthly.previous}hrs` : 
                duration.classList.contains('social-duration') ? duration.textContent = `Last Week - ${res[4].timeframes.monthly.previous}hrs` : 
                duration.classList.contains('selfcare-duration') ? duration.textContent = `Last Week - ${res[5].timeframes.monthly.previous}hrs` : '';
            })
        })
    }
}