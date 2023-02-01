var bottle = 'water';
var bottleColor = 'yellow';
var tableItems = ['watch', 'books', 'mobile', 'laptop'];
var item3 = tableItems[2];
tableItems[3] = 'notebook';
var bookIndex = tableItems.indexOf('books');
if (tableItems.length > 4)
{
    console.log (tableItems);

}
else if( tableItems[3] == 'notebook')
{
    console.log('amar new notebook.')
}
else{
    console.log('amar pocket faka.')
}