alert("Inputdaki dəyərin div-ə yerləşməsi üçün inputa clickləyin, təşəkkürlər :)");
const container = document.querySelector(".container");
const childofGeneral = document.querySelector(".child-of-general");


const createChildElement = ()=>{
    const childofContainer = document.querySelector(".child-of-container");

    const childofGeneral = document.createElement("div");
    childofGeneral.classList.add("child-of-general");
    childofContainer.appendChild(childofGeneral);

    const childofGeneralInput = document.createElement("input");
    childofGeneralInput.classList.add("child-of-General-Input");
    childofGeneral.appendChild(childofGeneralInput);
    childofGeneralInput.focus();

    childofGeneralInput.addEventListener("click", addName);    
}

const addName = (e)=>{
    e.preventDefault();
    const clickLocation = e.target.parentElement;
    // console.log(clickLocation);

    const childofGeneral = document.querySelector(".child-of-general");
    const childofGeneralInputValue = document.querySelector(".child-of-General-Input").value.trim();
    
    if(childofGeneralInputValue==""){
        alert("Zehmet olmasa xanani doldurun");
    }else{
        clickLocation.innerText = childofGeneralInputValue;
        const childofGeneralButtonAdd = document.createElement("button");
        childofGeneralButtonAdd.innerHTML = '<i class="fas fa-plus"></i>';
        clickLocation.appendChild(childofGeneralButtonAdd);
        childofGeneralButtonAdd.addEventListener("click", otherChildAdd);

        const childofGeneralButtonDelete = document.createElement("button");
        childofGeneralButtonDelete.innerHTML='<i class="fas fa-trash-alt"></i>';
        clickLocation.appendChild(childofGeneralButtonDelete);
        childofGeneralButtonDelete.addEventListener("click", deleteItem);

        const childofGeneralButtonUpdateName = document.createElement("button");
        childofGeneralButtonUpdateName.innerHTML = '<i class="fas fa-pencil-alt"></i>';
        clickLocation.appendChild(childofGeneralButtonUpdateName);
        childofGeneralButtonUpdateName.addEventListener("click", updateName);
        // console.log(childofGeneralInputValue);
    } 
}

const deleteItem =(e)=>{
    e.preventDefault();    
    e.target.parentElement.parentElement.remove();
    return confirm("Silmek istediyinizden eminsiz");
}

const updateName =(e)=>{
    e.preventDefault();
    const updatingText = e.target.parentElement.innerText.slice(0, e.target.parentElement.innerText.length-3);
    // console.log(e.target.parentElement.innerText.slice(0, e.target.parentElement.innerText.length-3));
    const childofGeneral = document.querySelector(".child-of-general");
    const childofGeneralInput = document.createElement("input");
    childofGeneralInput.value = updatingText;
    childofGeneralInput.classList.add("child-of-General-Input");
    e.target.parentElement.parentElement.appendChild(childofGeneralInput);
    childofGeneralInput.focus();
    childofGeneralInput.addEventListener("click", addName);    
}


const otherChildAdd = ()=>{
    // alert("derer");
    const childofContainerTwo = document.querySelector(".child-of-container-two");

    const grandchildofGeneral = document.createElement("div");
    grandchildofGeneral.classList.add("grandchild-of-general");
    childofContainerTwo.appendChild(grandchildofGeneral);

    const childofGeneralInput = document.createElement("input");
    childofGeneralInput.classList.add("child-of-General-Input");
    grandchildofGeneral.appendChild(childofGeneralInput);
    childofGeneralInput.focus();

    childofGeneralInput.addEventListener("click", addNameTwo);
}
const otherChildAddTwo = ()=>{
    // alert("derer");
    const childofContainerThree = document.querySelector(".child-of-container-three");

    const grandchildofGeneral1 = document.createElement("div");
    grandchildofGeneral1.classList.add("grandchild-of-general");
    childofContainerThree.appendChild(grandchildofGeneral1);

    const childofGeneralInput = document.createElement("input");
    childofGeneralInput.classList.add("child-of-General-Input");
    grandchildofGeneral1.appendChild(childofGeneralInput);
    childofGeneralInput.focus();

    childofGeneralInput.addEventListener("click", addNameTwo);
}


const addNameTwo = (e)=>{
    e.preventDefault();
    const clickLocation = e.target.parentElement;
    // console.log(clickLocation);

    const childofGeneral = document.querySelector(".child-of-general");
    const childofGeneralInputValue = document.querySelector(".child-of-General-Input").value.trim();
    
    if(childofGeneralInputValue==""){
        alert("Zehmet olmasa xanani doldurun");
    }else{
        clickLocation.innerText = childofGeneralInputValue;
        const childofGeneralButtonAdd = document.createElement("button");
        childofGeneralButtonAdd.innerHTML = '<i class="fas fa-plus"></i>';
        clickLocation.appendChild(childofGeneralButtonAdd);
        childofGeneralButtonAdd.addEventListener("click", otherChildAddTwo);

        const childofGeneralButtonDelete = document.createElement("button");
        childofGeneralButtonDelete.innerHTML='<i class="fas fa-trash-alt"></i>';
        clickLocation.appendChild(childofGeneralButtonDelete);
        childofGeneralButtonDelete.addEventListener("click", deleteItem);

        const childofGeneralButtonUpdateName = document.createElement("button");
        childofGeneralButtonUpdateName.innerHTML = '<i class="fas fa-pencil-alt"></i>';
        clickLocation.appendChild(childofGeneralButtonUpdateName);
        childofGeneralButtonUpdateName.addEventListener("click", updateName);
        // console.log(childofGeneralInputValue);
    } 
}
const otherChildAddThree = ()=>{
    const childofContainerTwo = document.querySelector(".child-of-container-three");

    const grandchildofGeneral = document.createElement("div");
    grandchildofGeneral.classList.add("grandchild-of-general");
    childofContainerTwo.appendChild(grandchildofGeneral);

    const childofGeneralInput = document.createElement("input");
    childofGeneralInput.classList.add("child-of-General-Input");
    grandchildofGeneral.appendChild(childofGeneralInput);
    childofGeneralInput.focus();

    childofGeneralInput.addEventListener("click", addName);
}