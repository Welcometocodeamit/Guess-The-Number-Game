        


        
        const a =Math.floor((Math.random()*100)+1);
        // document.getElementById("rdm").innerHTML = "random number is" + a
        let c = 100

        function myfunc(){
             let d = document.getElementById("name").value      
            let b = document.getElementById("num").value;
            document.getElementById("msg").innerHTML = b
            console.log(a!=b);
            //document.getElementById("rdm").innerHTML = "random number is" + a
            
            console.log(c)
             while (a != parseInt(b)) {
                c=c-10;
                 //document.getElementById("msg").innerHTML = "Your Guess is not correct"
                 if (b > a) {
                    
                     document.getElementById("msg").innerHTML = "Your number is greater than my number"
                     //b = document.getElementById("num").value;
                     
                     return;

                 }
                 else{
                    
                     document.getElementById("msg").innerHTML = "Your number is Smaller than my number"
                     //b = document.getElementById("num").value;
                    
                     return;
                 }
                 

            }
            console.log(c)
            
            if (a == b) {
                document.getElementById("msg").innerHTML = "Your Guess is correct"
                document.getElementById("rdm").innerHTML = "Hello! " + d + " Your Score is " + c
                document.getElementById("again").innerHTML = "Refresh to play AGAIN!"

            }
            /*else{
                document.getElementById("msg").innerHTML = "Your Guess is not correct"
            }*/

            
        }