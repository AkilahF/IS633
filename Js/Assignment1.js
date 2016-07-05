function MenuChoice()
{
    if (document.getElementById("menu").value == "Show Area 1")
    {
    document.getElementById("section1").style.display = "block";
    document.getElementById("section2").style.display = "none";
    }
    else if (document.getElementById("menu").value == "Show Area 2")
    {
    document.getElementById("section1").style.display = "none";
    document.getElementById("section2").style.display = "block";
    }
    else
    {
    document.getElementById("section1").style.display = "none";
    document.getElementById("section2").style.display = "none";
    }
}


function RefreshMenu()
{
    document.getElementById("menu").selectedIndex = "0";
    MenuChoice("None");
}
   