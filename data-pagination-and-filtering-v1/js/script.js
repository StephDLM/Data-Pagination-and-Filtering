/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/


console.log(data);
// let itemsPerPage = 9
/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
   const studentList = document.querySelector(".student-list")
   console.log(studentList);

   studentList.innerHTML = '';

   for (let i=0; i < list.length; i++ ){
      const startIndex = page * 9 - 9;
      const endIndex = page * 9;
   
   
   
      // loop over the length of the `list` parameter
    
      if (i >= startIndex && i < endIndex) {
         let studentItem = 
         `
         <li class=student-item cf}>
         <div class="student-details">
           <img class="avatar" src=${list[i].picture.medium} alt="Profile Picture">
           <h3>${list[i].name.first} ${list[i].name.last}</h3>
           <span class = 'email'>${list[i].email}</span>
         </div>
         <div "joined-details">
           <span class="date">Joined ${list[i].registered.date}</span>
         </div>
       </li> 
        `;
        studentList.insertAdjacentHTML('beforeend', studentItem);

      
   };
};
};
showPage(data, 1);

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination (list){
   const numOfPages = Math.ceil(list.length / 9);
   const linkList = document.querySelector('.link-list');
   linkList.innerHTML = '';
   for (let i=1; i <= numOfPages; i++){
      let button = `
         <li>
         <button type="button">${i}</button>
         </li>
        `;
        linkList.insertAdjacentHTML('beforeend', button);
   }
   let firstButton = linkList.querySelector('button','active');
   linkList.addEventListener('click', (e) =>{
      if (e.target.tagName === 'BUTTON'){
         let buttonClicked = document.querySelector('.active') 
         e.target.classList.add ('active');
         e.target.classList.remove ('active');
         showPage (list, e.target.textContent);

      }
   
})
}

// Call functions

showPage(data, 1);
addPagination(data);