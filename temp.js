console.log("Neetesh")

function prime(n){


    for( let i = 2 ; i < n ; i++){
        if(n%2 == 0)
                return false ;
    }

    return true;

}



function fib(n){
    if(n == 0 || n== 1)
            return  1 ;

    return fib(n-1) + fib(n-2) ;

}

