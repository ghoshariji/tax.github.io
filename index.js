let tcars = 0;
let tcash = 0;
let count=0;



function calculateTax()
{
    document.getElementById('result1').textContent=tcars;
    document.getElementById('result2').textContent=tcash;

}

function calculateTax1()
{
alert("paying");
count++;
document.getElementById('count').textContent=count;
++tcars;
tcash+=100;
}

function calculateTax2()
{
    alert("Non paying");
    count++;
    document.getElementById('count1').textContent=count;
    ++tcars;
}



 document.getElementById('ab').addEventListener('click',calculateTax1);
 document.getElementById('abcd').addEventListener('click',calculateTax2);
document.getElementById('display').addEventListener('click',calculateTax);
