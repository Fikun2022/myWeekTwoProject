
/* All event dataset */

const eventDataSet = [

     { id: 127, eventName: '14th centery African Exhibition', 
     eDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text. Lorem Ipsum has been the industry standard dummy. Lorem Ipsum has been the industry standard dummy. Lorem Ipsum has been the industry standard dummy',
     eDate: '21st Dec 2022', ePrice: '£40' },

     { id: 113, eventName: '14th centery china Exhibition', 
     eDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text. Lorem Ipsum has been the industry standard dummy. Lorem Ipsum has been the industry standard dummy. Lorem Ipsum has been the industry standard dummy',
      eDate: '21st Dec. 2022', ePrice: '£90' },


      { id: 123, eventName: '14th centery African Exhibition', 
      eDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text. Lorem Ipsum has been the industry standard dummy. Lorem Ipsum has been the industry standard dummy. Lorem Ipsum has been the industry standard dummy',
       eDate: '21st Dec 2022', ePrice: '£40' },
  
       { id: 122, eventName: '14th centery china Exhibition', 

       eDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text. Lorem Ipsum has been the industry standard dummy. Lorem Ipsum has been the industry standard dummy. Lorem Ipsum has been the industry standard dummy',
        eDate: '21st Dec. 2022', ePrice: '£90' },
  
        { id: 124, eventName: '14th centery African Exhibition', 

        eDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text. Lorem Ipsum has been the industry standard dummy. Lorem Ipsum has been the industry standard dummy. Lorem Ipsum has been the industry standard dummy',
        eDate: '21st Dec 2022', ePrice: '£40' },

        { id: 123, eventName: '14th centery china Exhibition', 

       eDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text. Lorem Ipsum has been the industry standard dummy. Lorem Ipsum has been the industry standard dummy. Lorem Ipsum has been the industry standard dummy',
       eDate: '21st Dec. 2022', ePrice: '£90' }

]


/* function to dd event */

function addEvent (id, eventName, eDescription, eDate, ePrice, size) {

    const eventPhoto = document.createElement('area')
    eventPhoto.classList.add('areaCardPhoto')
    const eventEl = document.createElement('img')
    eventEl.setAttribute('src', 'https://picsum.photos/id/' + id + '/' + size)
    eventEl.setAttribute('alt', eventName + 'image')
    eventEl.classList.add('photo')
    eventPhoto.appendChild(eventEl)

    
    // create a wrapper for other event details 

    const otherDetails = document.createElement("area");
    otherDetails.classList.add('areaCardDetails')

   
    // a wrapper for event name and date

    const nameAndDateWrapper = document.createElement("area");
    nameAndDateWrapper.classList.add('nameAndDateWrapperClass')

   const labelName = document.createElement("label");
   labelName.innerText = "Event name: " + eventName + " | "
   labelName.classList.add('label')
   nameAndDateWrapper.append(labelName)

   const spanDate = document.createElement("span");
   spanDate.innerText = "Date: " + eDate
   nameAndDateWrapper.append(spanDate)

  
   
// a wrapper for price and edit and delete botton

const priceandBookButtonWrapper = document.createElement("area");
priceandBookButtonWrapper.classList.add('priceandBookButtonClass')

   const spanPrice = document.createElement("span");
   spanPrice.innerText = "Price: " + ePrice
   priceandBookButtonWrapper.append(spanPrice)


   const bookButton = document.createElement("button")
   bookButton.id = Math.floor(Math.random() * 100)
   bookButton.innerText = "Book event";
   priceandBookButtonWrapper.append(bookButton); 

    // bookButton.append(bookButtonId)
   //const bookButtonId = 


// bind eventNameAndDate + princeandBookButtonWrapper + description to Other detials wrappper 

 
   otherDetails.append(nameAndDateWrapper)

  const pDescription = document.createElement("label")

  pDescription.classList.add('eventDescription')

  pDescription.innerText= "Description: "+ eDescription

  otherDetails.append(pDescription)

  otherDetails.append(priceandBookButtonWrapper)
 

   function newEventCard () {

    const divSection = document.querySelector("#divSection")

   
    const contentWrapper = document.createElement('area')
    contentWrapper.classList.add('contentWrapperClass')


    contentWrapper.appendChild(eventPhoto)
    contentWrapper.appendChild(otherDetails)

   // const wrapperId = Math.floor(Math.random() * 100)
   // contentWrapper.appendChild(wrapperId)

    divSection.appendChild(contentWrapper)
    
}

newEventCard ()


}


for (let callEvent of eventDataSet) {
    addEvent(callEvent.id, callEvent.eventName, callEvent.eDescription, callEvent.eDate, callEvent.ePrice, 400)

}


//Show new event function


const getClickID = document.querySelector("#createNewEventNav");

getClickID.addEventListener("click", function () {


    function myNewEventFunction() {

        const asideElement = document.querySelector(".asideClass") 
    
            asideElement.style.display = "block"
           
        }

    myNewEventFunction()
});


//Refresh event function


const getClickRefreahNav = document.querySelector("#refreahNav");

getClickRefreahNav.addEventListener("click", function () {

    location.reload()
    

});



// Book event function


document.addEventListener('click', function (event) {

	// If the clicked element doesn't have the right selector, bail
	if (!event.target.matches('button')) return;

    const id = this.event.id
    id.bookButton.innerText = "Event booked";

})


