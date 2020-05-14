function dayOfYear(year, month, day){
    let  m = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let zbroj=0;
for(var i=0; i<month-1; i++){
    zbroj+=m[i]
}
let x= (year%400===0) || ((year%4===0) && (year%100!==0))
if(month>2 && x){
    zbroj+=1;
}

return (zbroj + day);
}
module.exports = dayOfYear;