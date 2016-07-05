function RefreshMenu()
{
    document.getElementById("menu").selectedIndex = "0";
    MenuChoice("None");
}
 

function MenuChoice(selection)
{
    document.getElementById("section1").style.visibility = "hidden";
    document.getElementById("section2").style.visibility = "hidden";
    
 switch (selection)

{
    case "Section 1":
    document.getElementById("section1").style.visibility = "visible";
    break;

    case "Section 2":
    document.getElementById("section2").style.visibility = "visible";
    break;

    case "None":
    break;

    default:
    alert("Please select a different menu option");
    
}
}

