let indicator = document.querySelector('.indicator').children;
console.log(indicator) // 5
let main = document.querySelector('.items').children
console.log(main) // 9


for (let i = 0; i < indicator.length; i++) {
    // all , red , yellow , pink , aqua
    console.log(indicator[i])

    indicator[i].onclick = function () {
        for (let x = 0; x < indicator.length; x++) {
            // all , ->red (active), yellow , pink , aqua
            console.log(indicator[x]) // doubt
            // it remove active class from all
            indicator[x].classList.remove('active');
            console.log(indicator[x])
        } // end of for loop

        console.log(this)  // red -> class (active)
        this.classList.add('active');

        //red ------ data-filter
        const displayitems = this.getAttribute('data-filter');
        console.log(displayitems) // red 

        // 0 -> 8 ( loop inside function )
        for (let z = 0; z < main.length; z++) {
            // except red , all have scale(0) , display-> none
            console.log(main[z])
            main[z].style.transform = 'scale(0)';
            setTimeout(() => {
                main[z].style.display = 'none';
            }, 500);
   
            //if inside function
            if ((main[z].getAttribute('data-category') == displayitems) || displayitems == 'all') {
                //show -> only clicked one !
                console.log(main[z])
                main[z].style.transform = 'scale(1)';
                
                setTimeout(() => {
                    main[z].style.display = 'block';
                }, 500);
            } // end of if

        } // end of loop having z variable

    } // end of function

} // end of loop having i variable