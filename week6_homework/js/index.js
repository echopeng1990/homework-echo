/*
Goal: get this shopping cart working!
- load the correct products into the <select>
- when the "Add to Cart" button is clicked it should add the item to the shopping cart
- the receipt should show the correct price for each item in the shopping cart
- the receipt should have the correct total for all the items in the shopping cart
Bonus:
- Create your own products
- Add a description of each item in the shopping cart
- List the product next to the price in the receipt
- Have the shopping cart list each product once with the number of that item in the cart
For example:
apple 3
instead of:
apple
apple
apple
Hint: you'll need array like var arrCount = [0, 0, 0]
*/

$(function(){
    //Declare and assign global variables
    var total = 0;
    var arrProducts = ['apple', 'oranges', 'bananas', 'peach'];
    var arrPrices = ['1.25', '2.15', '.75', '.50'];

    //Functions to call
    addProducts(arrProducts);


    //Event Handler
    $("#products").submit(function(submitEvent){

        //Prevent the form from submitting
        submitEvent.preventDefault();

        //Declare and assign local variables
        var product = "";
        var price = 0;
        var formattedCost = "";
        var formattedTotal = "";
        var selectedIndex = -1; //Use this variable to store the value of the selected product

        //Show what is selected
        console.log("The value of the selected product:" + $('#selectProduct').val());

        //Assign new values
        
        var selectedIndex = arrProducts.indexOf($('#selectProduct').val());
        var product = arrProducts[selectedIndex]; //You might wanna try arrProducts[selectedIndex]... but only after you assign selectedIndex to the right value
        console.log("Current Product: " + product);

        price = getPrice(0, arrPrices);
        formattedCost = currencyFormat(price);
        total = total + price;
        formattedTotal = currencyFormat(total);

     
        //Update the DOM
      
        $('#cart').append('<div class="col-xs-12">' + product + '</div>');
        $("#itemRow").append('<div class="col-xs-12">' + product + " " + formattedCost + "</div>");
        $("#entry").val("");
        $("#total").html(formattedTotal);
    });


});

function currencyFormat(number){ 
    currency = "$" + number.toFixed(2);
    return currency;
}

function getPrice(index, arrPrices)
{
    var itemCost = 0;
    if(!arrPrices[index])
    {
        console.log('you gotta give me an valid index!')
    } else {
        //Won't return the price unless you assign the value to itemCost
        for(var i = 0; i < arrPrices.length; i++)
        {   
          
            var itemCost = arrPrices [arrProducts.indexOf($('#selectProduct').val())]; 
            console.log('The price of index ' + i + ' = ' + arrPrices[i]);
        }
    }
    return parseFloat(itemCost);
}

function addProducts(arrProducts)
{
    console.log("I'm inside 'addProducts' right now");
    
    //If you uncomment the code below, then your <select> will be empty
    
    $('#selectProduct').html('');
    $.each(arrProducts,function(index, value){
        //This won't add them to the DOM, but at least it will show you the values
        console.log(index, value);
    });
    
    
     for (var i = 0; i < arrProducts.length; i ++)
    {
        var product = arrProducts[i];   
        $('#selectProduct').append('<option>' + product + '</option>');

    }  

}