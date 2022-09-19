
function books(bookOne, bookTwo, bookThree) {
    let firstBook = bookOne * 100;
    let secondBook = bookTwo * 200;
    let thiredBook = bookThree * 300;
    
    let totalPage = firstBook+ secondBook+ thiredBook;
    return totalPage;
}

const finalTotal = books(6, 10, 19);
console.log(finalTotal);



