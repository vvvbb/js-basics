export default function randomuser() {

    console.log("randomuser");

    //create a <div> with id randomuser in the body
    var body = document.body;
    let elment = document.createElement('div');
    elment.setAttribute("id", "randomuser");
    body.appendChild(elment);


    //add a class
    function addCss(fileName) {

        var head = document.head;
        var link = document.createElement("link");

        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = fileName;

        head.appendChild(link);
    }

    addCss('./component/randomuser/randomuser.css');

    var script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
    script.defer = true;
    document.getElementsByTagName('head')[0].appendChild(script);

    function defer(method) {
        if (window.jQuery) {
            pickuser();
        } else {
            setTimeout(function () { defer(method) }, 50);
        }
    }

    defer();

    const pickuser = () => {

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
    }

}
