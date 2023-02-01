/* for (var i=0; i<20; i++)
{
    console.log(i);
    if(i>5){
        break;
    }
} */

var roastGiven = 0;
while (roastGiven < 7){
    console.log('roast deo babaji');
    roastGiven++;
    if(roastGiven > 4){
        break;
    }
}

var itemsTable = ['toothpaste', 'pen', 'laptop', 'notebook', 'mobile'];
for(var i =0; i < itemsTable.length; i++)
{
    var item = itemsTable[i];
    if(item =='notebook'){
        break;
    }
    console.log(item);
}

var numbers = [45,44,34,5,57,198,9,45,33];
for(var i=0; i<numbers.length; i++)
{
    var number = numbers[i];
    if(number > 50){
        continue;
    }
    console.log(number);
}