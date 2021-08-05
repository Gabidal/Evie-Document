const Headers = ["Classes", "Base types", "Functions", "If statements", "Loops", "File include", "Templates", "Preprosessor", "VTC", "Arrays", "Member functions", "Static functions", "Namespaces", "Function pointters"]

function Generate_List(){
    const List = document.getElementById("menu")

    for (const Header of Headers){
        const Item = document.createElement("li")
        Item.className = "Element"
        Item.onclick = () => { 
            document.getElementById(Header).scrollIntoView({behavior: "smooth"})
            for (const I of List.getElementsByTagName("li")){
                I.style.backgroundColor = "rgba(255, 255, 255, 0)"
            }
            Item.style.backgroundColor = "rgba(255, 255, 255, 0.255)"
        }
        Item.innerHTML = Header
        
        List.appendChild(Item)

    }
}