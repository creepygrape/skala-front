function upDown() {
    // 1. 1 ~ 50 사이의 무작위 숫자 생성
    var computerNum = Math.floor(Math.random() * 50) + 1;
    var count = 0;

    // 치트
    console.log("이번 판 정답 : " + computerNum);



    // 3. 정답보다 큰 값은 "Down", 작은 값은 "Up" alert
    // 4. 사용자가 맞출 때 까지 반복(while)
    while (input != computerNum) {
        // 2. prompt()로 사용자 입력 받기 - 입력 형싱 주의(1 이상 50 이하, 숫자만)
        var input = Number(prompt("1부터 50 사이의 숫자 중 컴퓨터가 고른 숫자는 무엇일까요?!"));

        if (input === 0) {
            alert("게임 종료");
            break;
        }

        if (input === computerNum) {
            alert("정답입니다 ~ " + count + "번 만에 맞췄네용 ㅇㅅㅇ");
            break;
        }
        else if (input < 0 || input > 50) alert ("1 이상 50 이하만 가능합니다 ;(");
        else if (input < computerNum) alert("Up!!!");
        else if (input > computerNum) alert("Down...");
        else alert ("숫자만 가능합니다만 ?");
    
        count++;
    }
}

