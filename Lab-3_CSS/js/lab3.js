// Adding active class to the first tab panel
const tabPanels = document.querySelectorAll('.tabs div[role="tabpanel"]');
tabPanels[0].classList.add('active');

// Adding click event listeners to tab links
const tabs = document.querySelectorAll('.tabs ul li a');
tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        removeActive(tabPanels); 
        const tabId = this.getAttribute('href').substring(1);
        const tabPanel = document.getElementById(tabId);
        tabPanel.classList.add('active');
    });
});

// Function to remove active class from tab panels
function removeActive(tabPanels) {
    tabPanels.forEach(panel => {
        panel.classList.remove('active');
    });
}
