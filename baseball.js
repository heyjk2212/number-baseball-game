
console.log('컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!');


let uniqueNums = [] // 3개의 중복되지 않은 랜덤 숫자

// 3개의 중복되지 않은 값이 배열에 채워질 때까지 반복
while(uniqueNums.length < 3){

    const randomNumber = Math.floor(Math.random() * 10)

    if(!uniqueNums.includes(randomNumber)){
        uniqueNums.push(randomNumber)
    }
}


uniqueNums = uniqueNums.join('')

const prompt = require("prompt-sync")();


let strike = false;
let count = 1

console.log('[test] random number: ', uniqueNums)

while(strike !== true){

    let guess = prompt(`${count}번째 시도 :`)

    let countS = 0;
    let countB = 0;

    temp = []

    for(let i = 0; i < uniqueNums.length; i++) {
        if(guess === uniqueNums){
            strike = true
        }else if(guess[i] === uniqueNums[i]) {
            countS += 1
        }else if(uniqueNums.includes(guess[i])){ 
            countB += 1
        }
    }

    if(strike === true){
        console.log(`3S\n${count}번만에 맞히셨습니다.\n게임을 종료합니다.`)
    }else if(countB === 3) {
        console.log(`${countB}B`)
    }else{
        console.log(`${countB}B${countS}S`)
    }

    count += 1
}
