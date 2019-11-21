
var mybtn = document.getElementsByClassName('cbutton');
var myOutput = document.getElementById('output');
var myCal = '';
var myCom = false;
var mySwitch = false;

// console.log(mybtn);
for(var i=0; i < mybtn.length; i++) {
    
    mybtn[i].addEventListener('click', function() {
        var myValue = this.innerHTML; 
        if(myCom || myCal =='0') {
            myCom = false;
            myCal = '';
        }


        if(myValue == '=') {
            myCal = eval(myCal);
            myCom = true;
         }else if(myValue == 'C') {
            myCal = 0;
            myCom = true;
        }else{
            myCal += myValue;
        }

        if(mySwitch) {
            mySwitch = false;
            myCal = eval(myCal);

        }

        if(myValue == '+' || myValue == '-' || myValue =='*' || myValue == '/') {
            mySwitch = true;
        }
        myOutput.innerHTML = myCal;
    });
} 