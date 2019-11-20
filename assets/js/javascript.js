
var mybtn = document.getElementsByClassName('cbutton');
var myOutput = document.getElementById('output');
var myCal = '';
console.log(mybtn);
for(var i=0; i < mybtn.length; i++) {
    
    mybtn[i].addEventListener('click', function() {
        var myValue = this.innerHTML; 
        myCal = myCal + myValue;
        myOutput.innerHTML = myCal;
        console.log('clicked');
    });
} 