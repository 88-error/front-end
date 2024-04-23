    window.onload=function(){
    // 用getElementsByClassName()方法获得所有指定类名的元素
    var var_number=document.getElementsByClassName("but");
    var var_screen=document.getElementsByClassName("show")[0];
    // 循环 i<=var_number.length-1
    for(var i=0;i<var_number.length;i++){
        var_number[i].onclick=function()
        {
            // 按下清空按钮
            if(this.value=="AC"){
                var_screen.value="";
            }
            // 按下删除键按钮
            else if(this.value=="DEL"){
                if(var_screen.value==""){
                    var_screen.value="";
                }
                else{
                // substr() 方法可在字符串中抽取从 start 下标开始的指定数目的字符。
                    var_screen.value=var_screen.value.substr(0,var_screen.value.length-1);
                }
            }
            // 按下等于
            else if(this.value=="="){
                var_screen.value=eval(var_screen.value);
            }
            // 按下小数点按钮
            else if(this.value=="."){
                if(var_screen.value==""){
                    var_screen.value="0.";//数字部分的第一个输入为‘.’，转化为‘0.’
                }
                else{
                    var_screen.value=var_screen.value+".";
                }
            }
            // 按下左括号
            else if(this.value=="("){
                var_screen.value=var_screen.value+"(";
            }
            // 按下右括号
            else if(this.value==")"){
                var_screen.value=var_screen.value+")";
            }
            // 按下加号按钮
            else if(this.value=="+"){
                // 如果此时屏幕为空
                if(var_screen.value==""){
                    var_screen.value="";
                }
                else if(var_screen.value=="-"){
                    var_screen.value="Error"
                }
                else{
                    var_screen.value=var_screen.value+"+";
                }
            }
            // 按下减号按钮
            else if(this.value=="-"){
                // 如果此时屏幕为空
                if(var_screen.value==""){
                    var_screen.value="-";
                }
                else if(var_screen.value=="-"){
                    var_screen.value="Error"
                }
                else{
                    var_screen.value=var_screen.value+"-";
                }
            }
            // 按下乘号按钮
            else if(this.value=="*"){
                // 如果此时屏幕为空
                if(var_screen.value==""){
                    var_screen.value="";
                }
                else if(var_screen.value=="-"){
                    var_screen.value="Error"
                }
                else{
                    var_screen.value=var_screen.value+"*";
                }
            }
            // 按下除号按钮
            else if(this.value=="/"){
                // 如果此时屏幕为空
                if(var_screen.value==""){
                    var_screen.value="";
                }
                else if(var_screen.value=="-"){
                    var_screen.value="Error"
                }
                else{
                    var_screen.value=var_screen.value+"/";
                }
            }
            //输入数字
            else{
                var_screen.value+=this.value;
            }
        }
    }
}
