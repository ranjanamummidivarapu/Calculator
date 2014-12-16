/**
 * Created by ranjanam on 16-Dec-14.
 */
function Calculator(type)
{
    var that=this;
    this.append=function(value){
        if(input!='0')
            input = input + value;
        else                                //if initially 0 is pressed
            input=value;
        create_calculator.value=input;
    }
    this.backspace=function(){
        length=input.length;
        input = input.substring(0, length - 1);
        if(input=="")
            input="0";
        create_calculator.value=input;
    }
    this.clear=function(){
        input = "0";
        res = 0;
        create_calculator.value=input;
    }
    this.compute=function(value)		//function to create the input
    {
        var index, operator, operand;
        length = input.length;
        if ((input[length - 1]<'0'||input[length - 1]>'9')&&value=="=")		//for value operator and equalTo Eg:40-= and 40= should give 40
        {
            input = input.substring(0, length - 1);
        }
        else			//for normal processing
        {
            if (input != "0" && input[length - 1] >= '0' && input[length - 1] <= '9') {
                index = 0, operand = 0, res = 0;
                while (input[index] >= '0' && input[index] <= '9' && (index++) < length) ;
                res = parseInt(input.substring(0, index), 10);
                if (index != length) {
                    operator = input[index++];
                    operand = parseInt(input.substring(index, input.length), 10);
                }
                if (operand != 0) {
                    switch (operator) {
                        case '+':
                            res += operand;
                            break;
                        case '-':
                            res -= operand;
                            break;
                        case '*':
                            res *= operand;
                            break;
                        case '/':
                            res /= operand;
                            break;
                        case '%':
                            res %= operand;
                            break;
                    }
                    input = res.toString();

                    if (value != "=") {

                        input += value;
                    }
                }
                else if (value != '=') {					//for 40= should result in 40
                    input = input + value;
                }
            }
        }
        create_calculator.value=input;
    }
	var name=type,res= 0,input="0",length,number_btns,operator_btns,number_div,operator_div,textbox,textbox_div,btn;
    number_btns=[0,1,2,3,4,5,6,7,8,9];
    operator_btns=["+","-","*","/","%","B","C","="];
    this.create_buttons=function(id,value,event,div_append){
        var btn;
        btn=document.createElement("button");
        btn.id=id;
        btn.value=value;
        btn.onclick=function(){
            event(this.value);
        }
        btn.appendChild(document.createTextNode(value));
        div_append.appendChild(btn);
    }
	var create_calculator=function() {
        var index = 0;
        textbox_div = document.createElement("div");
        textbox_div.id = name + "textbox_div";
        textbox = document.createElement("input");
        textbox.type = "text";
        textbox.disabled = "disabled";
        textbox.id = name + "textbox";
        textbox.value = "0";
        textbox_div.appendChild(textbox);
        document.getElementById(name).appendChild(textbox_div);
        number_div = document.createElement('div');
        number_div.id = "numbers_div";
        while (index < number_btns.length) {
            btn = that.create_buttons("b"+number_btns[index], index,that.append,number_div);
            index++;
        }
        document.getElementById(name).appendChild(number_div);
        operator_div = document.createElement('div');
        operator_div.id = "operators_div";
        index = 0;
        while (index < 5) {
            btn =that.create_buttons("operator" + operator_btns[index], operator_btns[index],that.compute,operator_div);
            index++;
        }
        btn = that.create_buttons("backspace", operator_btns[index], that.backspace,operator_div);
        index++;
        btn = that.create_buttons("clear", operator_btns[index],that.clear,operator_div);
        index++;
        btn = that.create_buttons("equalTo", operator_btns[index],that.compute,operator_div);
        document.getElementById(name).appendChild(operator_div);
        return textbox;
    }();

	var res= 0,input="0",length;
}