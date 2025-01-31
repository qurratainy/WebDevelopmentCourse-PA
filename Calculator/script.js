function clr()
{    document.getElementById("result").value = " ";  }
function addtext(val)
{
    if (val == '0'|| val == '1'||
        val == '2'|| val == '3'||
        val == '4'|| val == '5'||
        val == '6'|| val == '7'||
        val == '8'|| val == '9'||
        val == '+'|| val == '-'||
        val == '*'|| val == '/')
    {
        document.getElementById("result").value += val
    }
}
function solve()
{
    let x = document.getElementById("result").value ;
    prompt(math.evaluate(x));
    let y = math.evaluate(x);
    document.getElementById("result").value = y;
}