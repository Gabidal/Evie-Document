const Headers = [ "Objects", "Classes", "Base types", "Functions imports", "File include", "Templates", "Pointers", "Preprosessor", "VTC", "Function pointters"]

function Generate_List(){
    const List = document.getElementById("menu")
    const Main = document.getElementById("main")

    for (const Header of Headers){
        const Item = document.createElement("li")
        Item.className = "Element"
        Item.onclick = () => { 
            Main.scrollTo({behavior: "smooth", top: document.getElementById(Header).offsetTop - 10})
            for (const I of List.getElementsByTagName("li")){
                I.style.backgroundColor = "rgba(255, 255, 255, 0)"
            }
            Item.style.backgroundColor = "rgba(255, 255, 255, 0.255)"
        }
        Item.innerHTML = Header
        
        List.appendChild(Item)

    }
}