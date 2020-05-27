const arabicToRomanMap = {
    IX:9,
    VI:6,
    V:5,
    IV:4,
    III:3,
    II:2,
    I:1,
};
 
const konverter=(a)=>{
    var r= ''
    for (i in arabicToRomanMap){
        while (a >=arabicToRomanMap[i] && a>0 && a<4000){
            r =r +i
            a = a-arabicToRomanMap[i]
        }
    }
    return r
}



module.exports = konverter;