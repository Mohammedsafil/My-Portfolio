window.onload = () => {
    const element = document.getElementById('skills-sk')
    if(element){
        element.style.color = "aliceblue";
        element.style.borderBottomColor = "brown";
    } else {
        console.warn(`Element with ID "${para}" not found.`);
    }
}