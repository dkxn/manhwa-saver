


let mname = document.querySelector(".name"),
    chapters = document.getElementById("chapters"),
    submit = document.getElementById("submit"),
    list = document.getElementById("list");

// for every item saved in the localstorage
// for every item saved in the localstorage
for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
      list_item = document.createElement("li");
      list_item.classList.add("list-item");
      random_id = Math.floor(Math.random() * 999999);
      ch_random_id = Math.floor(Math.random() * 9999999999);
      add_chapter_random_id = Math.floor(Math.random() * 99999);
      remove_chapter_random_id = Math.floor(Math.random() * 999999)
      list_item.innerHTML = "<a>" + "<span ondblclick='checkId(this)' class='manhwa' id=" + random_id + ">" 
      + key + "</span>" + " <span class='chapters' id='" + ch_random_id  + "' onclick='checkIdd(this)'>" 
      + value + "</span>" 
      + " <div class='add-remove'><span class='add-chapter' id='" + add_chapter_random_id + "'" 
      + " onclick='addChapter(this)'> <ion-icon class='add-chapter-icon' name='caret-up-outline'></ion-icon></span> "
      + " <span class='remove-chapter' id='"+ remove_chapter_random_id + "'" 
      +" onclick='removeChapter(this)'><ion-icon class='remove-chapter-icon' name='caret-down-outline'></ion-icon></span> </div>" + "</a>";
      list.appendChild(list_item);
  }


  // add chapter
  // add chapter

  function addChapter(elem) {
    var parent = document.getElementById(elem.id).parentElement.parentElement.childNodes[0].innerText;
    var updatedkey = document.getElementById(elem.id).parentElement.parentElement.childNodes[2].innerText;
    updatedkey++;
    console.log(parent);
    console.log(updatedkey);
    localStorage.setItem(parent, updatedkey);
    location.reload();
  }

  //remove chapter
  //remove chapter

  function removeChapter(elem) {
    var parent = document.getElementById(elem.id).parentElement.parentElement.childNodes[0].innerText;
    var updatedkey = document.getElementById(elem.id).parentElement.parentElement.childNodes[2].innerText;
    updatedkey--;
    console.log(parent);
    console.log(updatedkey);
    localStorage.setItem(parent, updatedkey);
    location.reload();
  }

 // edit chapter number
 // edit chapter number
 function checkIdd(elem)
  {
    async function fire_edit() {
      const { value: url } = await Swal.fire({
        input: 'number',
        inputLabel: 'What Chapter Are You On?',
        inputPlaceholder: 'Chapter'
      })
      if (url) {
        var gg = document.getElementById(elem.id).innerText;
        elem.id.contentEditable = true;
        var parent = document.getElementById(elem.id).parentNode.childNodes[0].innerText;
          localStorage.setItem(parent, `${url}`);
          location.reload();
      }}fire_edit();}

  // delete an item from the list
  // delete an item from the list
  function checkId(elem)
  {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you really want to delete this item from your list? you wont be able to prevent this.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#D780FF',
      cancelButtonColor: '#646464',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        var gg = elem.innerText;
        localStorage.removeItem(gg);
        location.reload();
        console.log(gg);
      }})}

// events when clicking the submit button
// events when clicking the submit button
submit.onclick = ()=> {
    // if one of the inputs are empty
    if (mname.value == "" || chapters.value == "") {
      let timerInterval
      Swal.fire({
        title: 'Something is missing..',
        html: ' Manhwa Name, or Chapters input is empty.',
        timer: 3000,
        timerProgressBar: true,
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer')
        }})
    } else {
      if (localStorage.getItem(mname.value) !== null) {
        Swal.fire({
          title: 'Item already exists!',
          html: `
          The item you trying to add to your list already exists. 
          You can change the chapter value by clicking on the plus/minus
          button right next to your chapters. Or you can click on the your 
          chapters and type in the chapter your on.
          `
        })
    } else {
                //if everything checks out save the input values to the localstorage
                let b = localStorage.setItem(mname.value, chapters.value);
                location.reload();
    }}}

// delete all saved items from the local storage.
// delete all saved items from the local storage.
document.getElementById("delall").onclick =()=> {
  Swal.fire({
    title: 'Are you sure?',
    text: "Do you really want to delete all items from your list?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#D780FF',
    cancelButtonColor: '#646464',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.clear();
      Swal.fire({
        title: 'Done!', icon: 'success',
        text: 'All items are deleted from your list.',
        confirmButtonColor: '#D780FF', confirmButtonText: 'OK'
      }).then((result) => {
        if(result.isConfirmed) {location.reload();}
      })
    }
  })
}

// search / filler handler
// search / filler handler
function Filler() {
    // declare variables xd
    var clear_btn = document.querySelector('.clear-icon');
    clear_btn.style = "display:block";
    clear_btn.onclick = ()=> {
      search.value = "";
      if(search.value == "") {clear_btn.style = "display:none";}
      search.focus();
    }

    if(search.value == "") {clear_btn.style = "display:none";
    
  }

    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    ul = document.getElementById("list"); 
    li = ul.getElementsByTagName('li');
    // loop through all list items and hide those who dont match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }


  }




  




// information popup
// information popup
document.querySelector('.info').onclick = ()=> {
  Swal.fire({
    html: `
    <li style="text-align:left; font-size:15px;">
    You can edit your chapter progress by clicking on the value you already have.
    Or you can use the Add/Remove buttons right next to the chapters number.
    </li> 
    <hr> 
    <li style="text-align:left; font-size:15px;">
    Manhwa Saver uses localStorage to save your progress, 
    there is no login/register system. Therefore data cannot be transfered through other devices unless 
    you manually do so.
    </li> 
    <li style="text-align:left; font-size:12px; list-style:none">
    localStorage is a property that allows JavaScript sites and apps to save key-value pairs in a web browser
    with no expiration date. This means the data stored in the browser will persist even after the browser 
    window is closed.
    </li>
    <hr>
    <li style="text-align:left; font-size:15px;">
    If you want to delete an item from your list, double click on the item. 
    </li>
    `,
    icon: 'info'
  })
}

// Manhwa Search Placeholder Animation
// Manhwa Search Placeholder Animation
var ph = mname.placeholder;
setTimeout(() => {
  setInterval(() => {
    var phs = ["How To Fight", "A Returners Magic Should Be Special",
    "Solo Leveling","Wind Breaker","Who Made Me A Princess",
    "Tower Of God","The Breaker","The Breaker: New Waves","The Legend of the Northern Blade",
    "Omniscient Reader","Sweet Home","The Descent of the Demonic Master","King's Maker",
    "The Boxer","Noblesse","Weak Hero","Viral Hit","Get Schooled","Odd Girl Out",
    "Lost in Translation","Mom, I'm Sorry","The Remarried Empress","Castle Swimmer",
    "The Beginning After The End","Your Throne","Winter Moon","Adventures of God",
    "unOrdinary","SubZero","I Love Yoo","The Advenced Player of the Tutorial Tower","Teenage Mercenary",
    "Villain to Kill","Doom Breaker","Eleceed","The Gamer","Hardcore Leveling Warrior","Lookism",
    "My Dad Is Too Strong","Second-Life Ranker","The Horizon"];
    var ph = phs[Math.floor(Math.random() * phs.length)]
    mname.placeholder = ph + "...";
  }, 3000);  
}, 5000);
