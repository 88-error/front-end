window.onload = function() {
    var number = document.querySelectorAll(".b");
    var screen = document.querySelector(".showAns");
    
    number.forEach(function(button) {
        button.addEventListener("click", function() {
             if(this.value=="AC"){
                screen.value="";
            }
            else if(this.value=="DEL"){
                screen.value = screen.value.slice(0, -1);
            }
            else if(this.value=="."){
                //数字部分的第一个输入为.，转化为0.
                if(screen.value==""){
                    screen.value="0.";
                }
                else{
                    screen.value=screen.value+".";
                }
            }
            else if(this.value=="("){
                screen.value=screen.value+"(";
            }
            else if(this.value==")"){
                screen.value=screen.value+")";
            }
            else if(this.value=="+"){
                if(screen.value==""){
                    screen.value="";
                }
                else if(screen.value=="-"){
                    screen.value="Error"
                }
                else{
                    screen.value=screen.value+"+";
                }
            }
            else if(this.value=="-"){
                if(screen.value==""){
                    screen.value="-";
                }
                else if(screen.value=="-"){
                    screen.value="Error"
                }
                else{
                    screen.value=screen.value+"-";
                }
            }
            else if(this.value=="*"){
                if(screen.value==""){
                    screen.value="";
                }
                else if(screen.value=="-"){
                    screen.value="Error"
                }
                else{
                    screen.value=screen.value+"*";
                }
            }
            else if(this.value=="/"){
                if(screen.value==""){
                    screen.value="";
                }
                else if(screen.value=="-"){
                    screen.value="Error"
                }
                else{
                    screen.value=screen.value+"/";
                }
            }
            else if(this.value=="="){
                screen.value=eval(screen.value);
            }
            else{
                screen.value+=this.value;
            }
        });
    });
}
