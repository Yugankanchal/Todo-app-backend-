var dateDisplay = document.querySelectorAll('.deadline');
var task = document.querySelectorAll('.list li input');
var todocategory = document.querySelectorAll('.todoCategory');
var desciption = document.querySelectorAll('.Decription')

function taskDone(i) {
    for (let i in task) {

        if (task[i].checked) {
            desciption[i].style.textDecoration = 'line-through'
            return;
        } else {
            desciption[i].style.textDecoration = 'none';
        }
    }
}

function dueDate() {
    var month = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun', 'july', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    for (let i of dateDisplay) {
        let date = i.textContent.trim();
        if (date == '') {
            i.textContent = 'No Deadline';
        }
        else {
            let Year = date.slice(0, 4);
            let Mon = month[parseInt(date.slice(5, 7)) - 1];
            let day = date.slice(8);
            i.textContent = Mon + ' ' + day + ',' + Year;
        }
    }
}

function categorybackground() {
    for (let i of todocategory) {
        let category = i.textContent.trim();
        if (category == 'personal') {
            i.style.backgroundColor = '#2a2ab5';
        } else if (category == 'School') {
            i.style.backgroundColor = '#ffa000'
        } else if (category == 'cleaning') {
            i.style.backgroundColor = '#00695c';
        } else if (category == 'others') {
            i.style.backgroundColor = '#0277bd';
        }
    }
}

categorybackground();
dueDate();
document.addEventListener('click', taskDone);