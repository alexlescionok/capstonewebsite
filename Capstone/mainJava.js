function initMap () {
    //Where we are
    const LongLat = { lat: 53.474397456832016, lng: -2.2504850999999997 };

    //initilises map 
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15, 
        center: LongLat});

    //Places the marker
    const marker = new google.maps.Marker({
        position: LongLat,
        map: map,
      });
};

function initNewPost() {
    document.getElementById('closeForm').style.display = 'block';
    document.getElementById('addtextid').value = '';
    document.getElementById('uname').value = '';
    document.getElementById('addtextid').focus();  
};

//Stops the form from refreshing on submit! 
function handleForm(event) { event.preventDefault(); };

document.getElementsByClassName('PopUpForms')[0].addEventListener('submit', submitpost(document.getElementsByName('addtext')[0].value));


function submitpost(texty) {
    //string that allows company to make an announcement
    var adminaccess = 'SUPERCAPSTONEDO';

    //Closes form
    document.getElementById("closeForm").style.display = 'none';

    //Creates paragraph element and adds the text
    var para = document.createElement("p");
    var ContentNode = document.createTextNode(texty);
    para.appendChild(ContentNode);

    //Gets username, due to the frankenstein nature I can't pass two arguments, this sneaks around that.
    var uname = document.getElementsByName('uname')[0].value;

    //If an imposter, ignore them, bad vibes
    if (!(uname.toLowerCase().includes("capstone")) || uname == adminaccess) {

        //Keep the admin tag for later logic
        unamechk = uname;

        //If accouncement then don't show them the password, show them the name
        if (uname==adminaccess) {uname = 'CAPSTONETEAM'};

        //creates username element and adds the name and formats
        var boldtag =  document.createElement("b");
        var prefix = ' - '
        var formateduname = prefix.concat(uname);
        var unameNode = document.createTextNode(formateduname);
        boldtag.appendChild(unameNode);

        //Add name to the end
        para.appendChild(boldtag)
        
        //inserts text at top of feed
        var appendto = document.getElementById('comments');
        var child = document.getElementsByTagName('p')[0];
        appendto.insertBefore(para, child);

        //If an admin annoucement, make it red!
        if (unamechk==adminaccess){
            document.getElementsByTagName('p')[0].childNodes[1].style.color = 'red';
        };
    };


};