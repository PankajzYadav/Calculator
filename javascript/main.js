var check = false;
function Insert(num){
    var prev = resultpanel.result.value;
    var prev_num = num;
    if(isNaN(prev)){
        if(isNaN(num)){
            resultpanel.result.value = prev.substr(0,prev.length-1);
        }
    }
    if(check && num!='+' && num!='-' && num!='*' && num!='/'){
        resultpanel.result.value='';
        check=false;
    }
    resultpanel.result.value+=num;
    check=false;
}

function square(){
    resultpanel.result.value = Math.pow( resultpanel.result.value ,2);
}

function percentage(){
    resultpanel.result.value = eval( resultpanel.result.value +'/'+'100');
}

function clr(){
    resultpanel.result.value=0;
}

function del(){
    var history = resultpanel.result.value;
    resultpanel.result.value = history.substr(0, history.length-1);
}

function equalTo(){
    
    //resultpanel.result.value = eval(resultpanel.result.value.replace(/^0+/, ''));
    resultpanel.result.value = eval(resultpanel.result.value);
    
    check=true;
}

