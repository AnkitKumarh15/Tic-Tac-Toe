let currentPlayer = 'X';

let board = [['','',''],
             ['','',''],
             ['','',''],];

function move(row,col)
{
    if(board[row][col] === '')
    {
        board[row][col] = currentPlayer;
        document.getElementById('board').children[row*3 + col].innerHTML = currentPlayer;

        checkWin();
        // checkWin();
        if(checkWin() == true)
        {
            console.log(currentPlayer, "wins !");
            setTimeout(()=>
            {
                alert(currentPlayer +  " wins !");
                resetBoard();
            },100);
            return;
        }
        if(checktie() == true)
        {
            console.log(" Game is tie");
            // set timeout here 
            setTimeout(()=>{
                alert("Game is tie !");
                resetBoard();
            }, 0);
            return;
        }
        if(currentPlayer == 'X')
        {
            currentPlayer = 'O';
        }
        else
        {
            currentPlayer = 'X';
        }
        // currentPlayer = (currentPlayer == 'x') ? 'O' : 'X' ; 
        console.log(board);
    }
}

function checkWin() 
{
    // check row
    for(let i=0; i<3; i++)
    {
        if(board[i][0] == currentPlayer    &&    board[i][0] == board[i][1]    &&    board[i][0] == board[i][2])
        {
            console.log(currentPlayer,"is Winner");
            
            setTimeout(()=>{
                location.reload();
            },100)
            return true;
        }
    }

    // col check
    for(let j=0; j<3; j++)
    {
       if(board[0][j] == currentPlayer     &&      board[1][j] == currentPlayer      &&       board[2][j] == currentPlayer &&  board[0][j]!='')
       {
           console.log(currentPlayer, "is winner");
           return true;
       } 
    }

    // for diagonal 
    if(board[0][0] == currentPlayer      &&    board[1][1] == currentPlayer     &&     board[2][2] == currentPlayer    && board[0][0]!='')
    {
        console.log(currentPlayer,"is winner");
        return true;
    }
        
    // for reverse diagonal
    if(board[0][2] == currentPlayer   &&     board[1][1] == currentPlayer    &&    board[2][0] == currentPlayer    &&    board[1][1]!='')
    {
        console.log(currentPlayer,"is winner");
        return true;
    }
}



    //  0 0  0 1  0 2
    //  0 1  1 1  1 2
    //  0 2  1 2  2 2 

// Reset Board
function resetBoard() 
{
    // board empty
    //innerhtml = ""
    board = [
        ['', '', ''],
        ['','',''],
        ['','',''],
    ];
    let cells = document.getElementsByClassName('cell');
    for(let i=0; i<cells.length; i++)
    {
        cells[i].innerHTML = '';
    }
    currentPlayer = 'X';
}

// Draw case
// task to show the draw case 
function checktie()
{
    for(let i=0; i<3; i++)
    {
        for(let j=0; j<3; j++)
        {
            if(board[i][j]=='')
            {
                return false;
            }
        }
    }
    return true;
}