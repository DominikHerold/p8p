var pass;

pass=prompt ("Gib bitte das Passwort ein","");

if (pass == unescape("%50%75%32%33%34%36%66%7A%55%2B"))
{

window.location.href="http://www.projekt-8-plus.de/geocaching/"+pass+".htm"; 

}
else
{
window.location.href="denied.htm";
}