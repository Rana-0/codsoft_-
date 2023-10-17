
        function AddToDisplay(value){
            document.getElementById("display").value+= value;
        }
        function clearDisplay(){
            document.getElementById("display").value = "";
        } 
        function deleteInput(){
            display.value=display.value.slice(0,-1);   
        }
        function calculatePercentage(value){
            document.getElementById("display").value;
        }
        function calculate(){
            var expression= document.getElementById("display").value;
            var result= eval(expression);
            document.getElementById("display").value = result;
        }                    
        
