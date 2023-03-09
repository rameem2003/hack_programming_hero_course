const fetch = JSON.parse(data).data;
console.log(fetch);

const mileStonesSection = document.getElementById("milestons");


mileStonesSection.innerHTML = `${fetch.map(mileston => {
    return `<div class="mileston" id="${mileston._id}">
                <div class="mileston_name" onclick="openMilestone(this, ${mileston._id})">
                    <input type="checkbox" name="" id="" onclick="markMilestone(this, ${mileston._id})">
                    <p>${mileston.name} <span><i class="fa-solid fa-caret-down"></i></span></p>
                </div>
                <div class="hidden">
                    ${mileston.modules.map(modole => {
                        return `<div class="module">
                                    <p>${modole.name}</p>
                                </div>`
                    }).join("")}
                </div>
            </div>`
}).join("")}`


function openMilestone (milestonElement, id) {
    const currentPanel = milestonElement.nextElementSibling;
    const shown_milesstone = document.querySelector(".active");
    const bold_milestone = document.querySelector(".bold")

    if(!milestonElement.classList.contains("bold") && bold_milestone){
        bold_milestone.classList.remove("bold")
    }

    milestonElement.classList.toggle("bold")


    if(!currentPanel.classList.contains("active") && shown_milesstone){
        shown_milesstone.classList.remove("active");
    }

    currentPanel.classList.toggle("active");

    showMilesstone(id);
}


function showMilesstone(id) {
    const mileStoneImg = document.querySelector(".mileStoneImg");
    const mileStoneName = document.querySelector(".mileStoneName");
    const mileStoneDetails = document.querySelector(".mileStoneDetails");

    mileStoneImg.style.opacity = '0';

    mileStoneImg.src = fetch[id].image;
    mileStoneName.innerHTML = fetch[id].name;
    mileStoneDetails.innerText = fetch[id].description;
}

const mileStoneImg = document.querySelector(".mileStoneImg");
mileStoneImg.onload = function () {
    this.style.opacity = '1';
}


function markMilestone (checkbox, id) {
    const mileStonesSection = document.querySelector(".milestons");
    const doneList = document.querySelector(".doneList");

    const item = document.getElementById(id);

    if(checkbox.checked){
        mileStonesSection.removeChild(item);
        doneList.appendChild(item);
        console.log(item);
    }else{
        mileStonesSection.appendChild(item);
        doneList.removeChild(item);
    }    
}
