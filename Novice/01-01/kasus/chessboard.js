let chessboard=""
for (let chess = 1; chess <= 8; chess++){
    if (chess%2!=0){
        for (let board = 1; board <= 8; board++){
            if(board%2==0){
                chessboard+="#"
            }
            else{
                chessboard+=" "
            }
        }
    }
    else{
        for (let board = 1; board <= 8; board++){
            if(board%2==0){
                chessboard+=" "
            }
            else{
                chessboard+="#"
            }
        }
    }
    console.log(chessboard)
    chessboard=""
}