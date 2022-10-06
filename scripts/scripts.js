//
// function test(test){
//     return ++test;
// }
// let a = test(1021) ;
// console.log(a);
// let test2=function (){
//     console.log("aboba");
// }
// test2();
// const test3 = () => {
//   console.log("agaga");
// }
// test3()
// console.log(`hello ${a}`)
// console.log('hello', a)
//
// let summ = (operand1, operand2) => {
//     return(operand1 + operand2);
// }
//
// console.log(summ(2,4))
// let answer;
// let rainbow = prompt('название цвета?','неизвестно');
// switch (rainbow) {
//     case 'красный':
//         answer = '1';
//         break;
//     case 'оранжевый':
//         answer =  '2';
//         break;
//     case 'желтый':
//         answer =  '3';
//         break;
//     case 'зеленый':
//         answer =  '4';
//         break;
//     case 'голубой':
//         answer =  '5';
//         break;
//     case 'синий':
//         answer =  '6';
//         break;
//     case 'фиолетовый':
//         answer =  '7';
//         break;
//     case'разный':
//     case'разный2':
//     case'разный1':
//         answer =  '8800';
//         break;
//     default:
//         answer = 'неизвестно';
//         break;
// }
// // console.log(answer);
// //  alert('тормози!')
// //  console.log(confirm(`точно ${rainbow} ?`));
// // const colorchoice = function (choosecolor){
// //     return(choosecolor == 'красный')? 'вы выбрали красный':'выбран другой цвет';
// // }
// // console.log(colorchoice(rainbow));
// console.log(2 === 2);
// console.log('1'+'1')
//
//     if(a>10 && a<20){
//         console.log('SJFJAKSF')
//     }
//     let productsCard = document.querySelectorAll(".product") ;
//     productsCard.forEach(i =>{
//         i.addEventListener("mouseover", () =>{
//             i.classList.add("active");
//         });
//         i.addEventListener("mouseout", () =>{
//             i.classList.remove("active");
//         });
//     });
//     let counter = 0,
//      searchButton = document.querySelector(".search-button");
//     console.log(searchButton)
//     searchButton.addEventListener("click", () =>{
//         console.log("Поиск запущен")
//         counter++;
//         if (counter >= 5){
//             console.log("Нажато 5 раз");
//             searchButton.style.backgroundColor = "red";
//         }
//     });
//     productsCard.addEventListener("mouseover", () =>{
//         productsCard.classList.add("active");
//     });
// productsCard.addEventListener("mouseout", () =>{
//     productsCard.classList.remove("active");
// });

// let productCards = document.querySelectorAll(".product");
// productCards.forEach( (card) =>{
//     let counter = 0;
//     card.addEventListener("click", () =>{
//         counter++;
//         if (counter === 5){
//             console.log("Работает");
//             card.style.backgroundColor = "blue";
//         }
//     });
// });

// let vkLogo = document.querySelector(".vkLogo");
//     vkLogo.addEventListener("mouseover", () =>{
//     vkLogo.classList.add("logoActive");
//         productsCard.addEventListener("mouseout", () =>{
//             productsCard.classList.remove("logoActive");
//          });
//
//
//
// let tgLogo = document.querySelector(".tgLogo");
// tgLogo.addEventListener("mouseover", () =>{
//     tgLogo.classList.add("logoActive");
//     productsCard.addEventListener("mouseout", () =>{
//         productsCard.classList.remove("logoActive");
//     });
//
//
//
//
// let ytLogo = document.querySelector(".ytLogo");
// ytLogo .addEventListener("mouseover", () =>{
//     ytLogo .classList.add("logoActive");
//     productsCard.addEventListener("mouseout", () =>{
//         productsCard.classList.remove("logoActive");
//     });










let productsParent = document.querySelector(".products");
let dataBase = [
    {
        id: 0,
        img: "images/milk.webp",
        name: "Молоко",
        price: 3500
    },
    {
        id: 1,
        img: "images/cheese.jpg",
        name: "Сыр",
        price: 3600
    },
    {
        id: 2,
        img: "images/butter.webp",
        name: "Масло",
        price: 3700
    },
    {
        id: 5,
        img: "images/butter.webp",
        name: "Масло",
        price: 3700
    },
    {
        id: 3,
        img: "images/milk.webp",
        name: "Молоко",
        price: 3500
    },
    {
        id: 4,
        img: "images/cheese.jpg",
        name: "Сыр",
        price: 3600
    },
    {
        id: 6,
        img: "images/milk.webp",
        name: "Молоко",
        price: 3500
    },
    {
        id: 8,
        img: "images/butter.webp",
        name: "Масло",
        price: 3700
    },
    {
        id: 7,
        img: "images/cheese.jpg",
        name: "Сыр",
        price: 3600
    }
];
dataBase.forEach( element =>{
    productsParent.insertAdjacentHTML("beforeend",`<div class="product">
                <img  alt="${element["name"]}" src="${element["img"]}" height="200" >
                <h3>
                    ${element["name"]}
                </h3>
                <p>${element["price"]}</p>
            </div>`);
});









