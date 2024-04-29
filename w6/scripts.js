var trayButton = document.querySelector(`aside button:first-child`)

trayButton.addEventListener(`click`,toggle)
function toggle(e)
{
    document.querySelector(`#tray`).classList.toggle(`hide`)
}
var buttons = document.querySelectorAll(`nav button`)
for(let i=0; i<buttons.length; i++)
{
    buttons[i].addEventListener(`click`,butts)
}
function butts(e)
{
    for(let i=0; i<buttons.length; i++)
    {
        buttons[i].style.backgroundColor=`#161616`
    }
    e.target.style.backgroundColor=`#c2c2c2`;
    document.querySelector(`#breadcrumbs`).innerHTML=`<a href="#">${e.target.innerText}</a>`
}