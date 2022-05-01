/*
var s = document.createElement("script");
s.type = "text/javascript";
s.src = "https://code.jquery.com/jquery-3.6.0.slim.min.js";
// s.integrity = "sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI=";
s.crossorigin = "anonymous";
document.getElementsByTagName('head')[0].appendChild(s);

 */

/* 
$(document).ready(function () {
    console.log("Hello Jquery loaded in js file");
});
*/

$.ajax({
    url: 'https://randomuser.me/api/?results=10',
    dataType: 'json',
    success: function (data) {
        console.log(data.results[0]);
        // logResult(data)
        // optionalChaining(data)
        displayUser(data);
    }
});


const logResult = (data) => {
    console.log(data.results.map(item => console.log(item.name.first)));
}

const optionalChaining = (data) => {
    data.results.map(item => item?.id?.name.length ? console.log(item?.id?.name) : '');
}

const displayUser = (data) => {

    data.results.filter(user => user.gender == "female").map(
        user => {
            var html = '<div href="#" id="user__people">';
            // html += '<a href="javascript: void(0)" id="muteUnmute">Mute</a>';
            html += `<img src="${user.picture.large}" alt="" />`;
            html += `<div id="user__name">${user.name.first} ${user.name.last}</div>`;
            html += `<div id="user__info">${user.gender} | ${user.nat}</div>`;
            html += `<div id="user__contact">${user.phone} | ${user.email}</div>`;
            html += '</div>';

            var d1 = document.getElementById("randomuser")
            d1.insertAdjacentHTML('beforeend', html);

        }
    )

}

