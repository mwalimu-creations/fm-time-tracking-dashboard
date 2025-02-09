const reportCard = document.querySelectorAll('.text-section')
console.log()
const toggleDurationSelectors = document.querySelectorAll('#selector'); 
let cardContent = [];
const cardTitles = document.querySelectorAll('.card-title')
let selectedToggle = document.querySelector('.selected')
const currentDurations = document.querySelectorAll('.current');
const previousDurations = document.querySelectorAll('.previous');




fetch('./data.json').then((response) => response.json()).then((data) => {
    cardContent = data;
  
    toggleDurationSelectors.forEach( selector => {
        selector.addEventListener('click', (e) => {
            toggleDurationSelectors.forEach(li => li.classList.remove('selected'));
            e.currentTarget.classList.add('selected');
            selectedToggle = document.querySelector('.selected');
            
            populateDom()
        })
    });

    function populateDom() {
        for (let i=0;i<reportCard.length;i++) {
            for (content in cardContent) {
                cardTitles[i].textContent = cardContent[i].title
                currentDurations[i].textContent = `${cardContent[i]['timeframes'][`${selectedToggle.textContent.toLowerCase()}`]['current']}hr(s)`;

                previousDurations[i].textContent = `Last Week-${cardContent[i]['timeframes'][`${selectedToggle.textContent.toLowerCase()}`]['previous']}hr(s)`;
            }
        }
    }

    populateDom()



    
    
    
}).catch(error => console.error("Error fetching data", error));






