/**
 * Created by ranjanam on 16-Dec-14.
 */
/*function Calculator(type)
{
    var that = this,
    erase=function()   //function to clear the textbox
    {
        input = "";
        res = 0;
        document.getElementById(name+"textbox").value = 0;
    }
    append=function(value,name,input)		//function to create the input
    {
        var index, operator, operand, length = input.length;
        if (value >= '0' && value <= '9')					//for a value
        {
            if(input!='0')
                input = input + value;
            else
                input=value;
        }
        else if (value == "B")					//for backspace
        {
            input = input.substring(0, length - 1);
            if(input=="")
                input="0";
        }
        else if ((input[length - 1] < '0' || input[length - 1] > '9') && value == "=")		//for value operator and equalTo Eg:40-= and 40= should give 40
        {
            input = input.substring(0, length - 1);
        }
        else			//for normal processing
        {
            if (input != "" && input[length - 1] >= '0' && input[length - 1] <= '9') {
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
                    input = "";
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
        document.getElementById(name+"textbox").value = input;
    }
    var name=type;
    generate_numbers = function () {
            var index = 0, btn,btn_div;
            btn_div=document.createElement('div');
            btn_div.id="buttons_div";
            while (index <= 9) {
                btn = document.createElement("button");
                btn.value = index;
                btn.id = "b" + index.toString();
                btn.onclick = function () {
                    append(this.value,name,input);
                };
                btn.appendChild(document.createTextNode(index));
                btn_div.appendChild(btn);
                index++;
            }			
        document.getElementById(name).appendChild(btn_div);
    }();
    generate_operators=function()
    {
        var index=0,btn,operators_div;
        operators_div=document.createElement('div');
        operators_div.id="operators_div";
        while(index<6)
        {
            btn = document.createElement("button");
            switch(index)
            {
                case 0:btn.value = '+';
                    break;
                case 1:btn.value='-';
                    break;
                case 2:btn.value='*';
                    break;
                case 3:btn.value='/';
                    break;
                case 4:btn.value='%';
                    break;
                case 5:btn.value='B';
                    break;
            }
            btn.id = "operator"+btn.value;
            btn.onclick = function () {
                append(this.value);
            };
            btn.appendChild(document.createTextNode(btn.value));
            operators_div.appendChild(btn);
            index++;
        }
        btn=document.createElement("button");
        btn.id=name+"clear";
        btn.value="C";
        btn.appendChild(document.createTextNode(btn.value));
        btn.onclick=function(){
            erase(input,erase);
        }
        operators_div.appendChild(btn);
        btn=document.createElement("button");
        btn.id=name+"equalTo";
        btn.value="=";
        btn.appendChild(document.createTextNode(btn.value));
        btn.onclick=function(){
            append(this.value,name);
        }
        operators_div.appendChild(btn);
        document.getElementById(name).appendChild(operators_div);
    }();
	//var name=type;
    create_textbox=function()
    {
        //var name=type;
		//alert(name);
        var textbox_div,textbox;
        textbox_div=document.createElement("div");
        textbox_div.id=name+"textbox_div";
        textbox=document.createElement("input");
        textbox.type="text";
        textbox.disabled="disabled";
        textbox.id=name+"textbox";
        textbox.value="0";
        textbox_div.appendChild(textbox);
        document.getElementById(name).appendChild(textbox_div);
    }();
    var input="";
    var res=0;
}*/
function Calculator(type)
{
    var that=this,
    append=function(value)		//function to create the input
    {
        var index, operator, operand, length = input.length;
		if(value=="C")
		{
			input = "0";
			res = 0;
			//document.getElementById(name+"textbox").value =0;
		}
        else if (value >= '0' && value <= '9')					//for a value
        {
            if(input!='0')
                input = input + value;
            else                                //if initially 0 is pressed
                input=value;
        }
        else if (value == "B")					//for backspace
        {
            input = input.substring(0, length - 1);
            if(input=="")
                input="0";
        }
        else if ((input[length - 1] < '0' || input[length - 1] > '9') && value == "=")		//for value operator and equalTo Eg:40-= and 40= should give 40
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
                    input = "";
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
        //document.getElementById(name+"textbox").value = input;	-->right
		create_textbox.value=input;
    }
	var name=type;
	var create_textbox=function()
    {
		var textbox_div,textbox;
        textbox_div=document.createElement("div");
        textbox_div.id=name+"textbox_div";
        textbox=document.createElement("input");
        textbox.type="text";
        textbox.disabled="disabled";
        //textbox.id=name+"textbox"; ----- right
		textbox.id="textbox";
        textbox.value="0";
        textbox_div.appendChild(textbox);
        document.getElementById(name).appendChild(textbox_div);
		return textbox;
    }();
    generate_numbers = function () {
            var index = 0, btn,btn_div;
            btn_div=document.createElement('div');
            btn_div.id="buttons_div";
            while (index <= 9) {
                btn = document.createElement("button");
                btn.value = index;
                btn.id = "b" + index.toString();
                btn.onclick = function () {
                    append(this.value);
                };
                btn.appendChild(document.createTextNode(index));
                btn_div.appendChild(btn);
                index++;
            }			
        document.getElementById(name).appendChild(btn_div);
    }();
	generate_operators=function()
    {
        var index=0,btn,operators_div;
        operators_div=document.createElement('div');
        operators_div.id="operators_div";
        while(index<6)
        {
            btn = document.createElement("button");
            switch(index)
            {
                case 0:btn.value = '+';
                    break;
                case 1:btn.value='-';
                    break;
                case 2:btn.value='*';
                    break;
                case 3:btn.value='/';
                    break;
                case 4:btn.value='%';
                    break;
                case 5:btn.value='B';
                    break;
            }
            btn.id = "operator"+btn.value;
            btn.onclick = function () {
                append(this.value);
            };
            btn.appendChild(document.createTextNode(btn.value));
            operators_div.appendChild(btn);
            index++;
        }
        btn=document.createElement("button");
        btn.id="clear";
        btn.value="C";
        btn.appendChild(document.createTextNode(btn.value));
        btn.onclick=function(){
            append(this.value);
        }
        operators_div.appendChild(btn);
        btn=document.createElement("button");
        btn.id="equalTo";
        btn.value="=";
        btn.appendChild(document.createTextNode(btn.value));
        btn.onclick=function(){
            append(this.value);
        }
        operators_div.appendChild(btn);
        document.getElementById(name).appendChild(operators_div);
    }();    
	var res= 0,input="0";
}