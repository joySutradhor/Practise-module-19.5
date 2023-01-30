//  80 = A+ ;
// 70 = A ;
// 60 = B :
// 50 = C ;
// 40 = D ;
// 30 = F ;

// 1. solution grading ta ber korte hobe .

let marks = [85, 70, 60, 50, 40, 30] ;

for(i = 0 ; i< marks.length; i++) {
    let result = marks[i];
    if (marks[i] >= 80) {
        console.log("A+") ;
    }
    else if (marks[i] >= 70) {
        console.log("A") ;
    }
    else if (marks[i] >= 60) {
        console.log("B") ;
    }
    else if (marks[i] >= 50) {
        console.log("C") ;
    }
    else if (marks[i] >= 40) {
        console.log("D") ;
    }
    else{
        console.log("you will fail") ;
    }
    console.log(result);
}

// 2. solution number ta odd nki even seta chesta korte hobe ;

let checkNumber = 5 ;

if (checkNumber % 2 == 0 ) {
    console.log("This is even Number") ;
}
else{
    console.log("This is odd number") ;
}

// 3. solution  array ta sort korte hobe chuto theke boro .

let unsortArray = [ 40, 30, 11, 5, 75, 22, 13, 18, 35]

let sorted = unsortArray.sort(function(a, b){return a-b});
console.log(sorted);

//  4. solution  kuno year leep year nki seta check korte hobe ;

let year = 1900  ;

if (year % 4 == 0 && year % 400 == 0 ) {
    console.log("This year is leep year");
}
else {
    console.log("This year is not leep year");
}

// 5. qu = 1-50 ar moodde 3 abong 5 diye vag kora jay amon number gula ber koro .

for (let i = 0; i <= 50; i++) {

    if (i % 3 == 0 || i % 5 == 0) {
        let storeNumber = i ;
        console.log(storeNumber);
    }
}

// 6. qu = akta array theke sob theke boro nam ta output hisabe dekate hobe;

var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
let init = 0 ;
let large = " "
for (i = 0; i < friends.length; i++) {
    if (friends[i].length > init) {
        init = friends[i].length;
        large = friends[i];
        
    }
}
console.log(large) ;

// 7. find the duplicate and remove them 

var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
var Newarray = [];
for( var i = 0; i < numbers.length; i++) {
    if (Newarray.indexOf(numbers[i]) == -1) {
        Newarray.push(numbers[i]);
    }
}
console.log(Newarray);






// 8. uporer sob theke boro number ber koro 
var numbers = [1, 2, 3, 3, 4, 4, 44, 5, 6, 7, 8, 9, 10];
let largeNumber = 0 ;
for ( i = 0; i< numbers.length; i++) {
    if(numbers[i]> largeNumber){
        largeNumber = numbers[i];

    }
}
console.log(largeNumber);