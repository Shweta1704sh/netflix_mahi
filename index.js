let accordian = document.getElementsByClassName("FAQ__title");

for (let i = 0; i < accordian.length; i++) {
    accordian[i].addEventListener("click", function() {
        if (this.childNodes[1].classList.contains("fa-plus")) {
            this.childNodes[1].classList.remove("fa-plus");
            this.childNodes[1].classList.add("fa-times");
        } else {
            this.childNodes[1].classList.remove("fa-times");
            this.childNodes[1].classList.add("fa-plus");
        }

        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

function changeMode() {
    let modeChange = document.body;
    modeChange.classList.toggle('mylight');
}


window.onload = loadCoupon()


function loadCoupon() {
    document.getElementById('coupon').style.visibility = 'visible';
    document.getElementById('body').style.opacity = '0.5'
}

function closeCoupon() {
    document.getElementById('coupon').style.visibility = 'hidden';
    document.getElementById('body').style.opacity = '1'
}