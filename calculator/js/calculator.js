var btn = document.querySelectorAll('input');
        var result = document.querySelector('#result');
        var output = document.querySelector('#output');
        var allc = document.querySelector('#allc');
        var clear = document.querySelector('#clear');
        var per = document.querySelector('#per');
        var demo = document.querySelector('#demo');

        for(var i = 0;i<btn.length;i++){
            btn[i].addEventListener('click',function(){
                var lastchar = result.value.slice(-1);
                if(lastchar == '+' || lastchar == '-' || lastchar == '*' || lastchar == '/' || lastchar == '%'){
                    if(this.value == '+' || this.value == '-' || this.value == '*' || this.value == '/' || this.value == '%'){
                        result.value = result.value;
                    }
                    else{
                        result.value += this.value;
                    }
                }
                else{
                    result.value += this.value; 
                }
            });
        }   

        output.addEventListener('click',function(){
            result.value = eval(result.value);
        });

        allc.addEventListener('click',function(){
            result.value = '';
        });

        clear.addEventListener('click',function(){
            var demo = result.value;
            result.value = demo.slice(0,demo.length-1);
            demo = result.value;
        });

        per.addEventListener('click',function(){
            var abc = result.value;
            result.value = parseInt(result.value)/100;
            abc= result.value;
        });

        demo.addEventListener('click',function(){
            result.value = -(parseInt(result.value));
        });