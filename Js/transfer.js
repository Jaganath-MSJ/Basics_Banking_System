let bankBalance = 500000;
let bank = [
    ['Kalidas', 'Kalidas@gmail.com', 300000],
    ['Murali', 'Murali@gmail.com', 250000],
    ['Barath', 'Barath@gmail.com', 350000],
    ['Pragadees', 'Pragadees@gmail.com', 400000],
    ['Sanjith', 'Sanjith@gmail.com', 450000],
    ['Saran', 'Saran@gmail.com', 200000],
    ['Keseven', 'Keseven@gmail.com', 400000],
    ['Anban', 'Anban@gmail.com', 550000],
    ['Sudhakar', 'Sudhakar@gmail.com', 500000],
    ['Mathan', 'Mathan@gmail.com', 350000]
];
let table = "<tr>"+
                "<th>Sr. No.</th>"+
                "<th>Name</th>"+
                "<th>Email Id</th>"+
                "<th>Bank Balance</th>"+
            "</tr>";
for(var i=0; i<bank.length; i++) {
    table += "<tr>"+
                "<td>"+(i+1)+"</td>"+
                "<td>"+bank[i][0]+"</td>"+
                "<td>"+bank[i][1]+"</td>"+
                "<td id='"+bank[i][0]+"'>"+bank[i][2]+"</td>"+
            "</tr>";
}
document.getElementById("bankBalance").innerHTML = table;
document.getElementById("accountBalance").innerHTML = bankBalance;

function sendMoney(){
    var enterName = document.getElementById("enterName").value;
    var enterAmount = parseInt(document.getElementById("enterAmount").value);
    var enterSAmount = parseInt(document.getElementById("accountBalance").innerHTML);
    if (enterAmount > enterSAmount)
        alert("Insufficient Balance.");
    else {
        var finalAmount = parseInt(document.getElementById(enterName).innerHTML) + enterAmount;
        var myAccountBalance = enterSAmount - enterAmount;
        document.getElementById("accountBalance").innerHTML = myAccountBalance;
        document.getElementById(enterName).innerHTML = finalAmount;
        alert(`Transaction Sucessfull !!
Rs${enterAmount} is sent to ${enterName}@email.com.
Thanks for your patience!`);

        // transaction history 
        var createPTag = document.createElement("li");
        var textNode = document.createTextNode(
            `Rs ${enterAmount} is sented to recepient with 
            Email-id ${enterName}@email.com on ${Date()}.`
        );
        createPTag.appendChild(textNode);
        var element = document.getElementById("transaction-history-body");
        element.insertBefore(createPTag, element.firstChild);
    }
}