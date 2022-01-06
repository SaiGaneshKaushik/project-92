player1_name = localStorage.getItem("player1");
player2_name = localStorage.getItem("player2");

player1_score =  0;
player2_score =  0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("qut").innerHTML = "Question Turn: "+ player1_name;
document.getElementById("ans").innerHTML = "Answer Turn: "+ player2_name;

function send()
{
    number_1 = document.getElementById("number1").value;
    number_2 = document.getElementById("number2").value;
    actual_number = parseInt(number_1) * parseInt(number_2);
    question_number = "<h4>"+ number_1  +  "x"  +  number_2  + "</h4>";
    input_box = "<br>Answer : <input type = 'text' id = 'input_check_box'> ";
    check_button = "<br><br><button class='btn btn-info' onclick = 'check()'>check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

Question_turn = "player1";
Answer_turn = "player2";

function check()
{
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_number)
    {
        if(Answer_turn == "player1")
        {
            update_player1_score = player1_score +1
            document.getElementById("player1_score").innerHTML = update_player1_score;
        }
        else
        {
            update_player2_score = player2_score +1
            document.getElementById("player2_score").innerHTML = update_player2_score;
        }
    }
 
        if(Question_turn == "player1")
        {
            queastion_turn = "player2"
            document.getElementById("qut").innerHTML = "Question Turn - " + player2_name ;
        }
        else
        {
            queastion_turn = "player1"
            document.getElementById("qut").innerHTML = "Question Turn - " + player1_name ;
        }


}