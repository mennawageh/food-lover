window.onload = function() {  
    const fadeIns = document.querySelectorAll('.fadein');  

    // Trigger fade-in for each element
    fadeIns.forEach((el, index) => {  
        setTimeout(() => {  
            el.style.opacity = 1;  
            el.style.transform = 'translatex(0)'; // Move into place  
        }, index * 300); // Delay for each element  
    });  
};

