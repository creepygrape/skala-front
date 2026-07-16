function grade() {
    console.log("???");
    // 1. 과목 배열 만들기
    var subject = ['HTML', 'CSS', 'JavaScript', 'Java', 'Python', 'C++', 'SQL'];

    // 2. 변수 총점
    var total = 0;

    // 3. 배열 for문으로 각 과목의 점수 합산
    let len = subject.length;
    for (let i = 0; i < len; i++) {
        var score = Number(prompt(subject[i] + " 과목 점수를 입력하세요 :)\n0 이상 100 이하만 가능한 거 아시죠?"));

        if (score >= 0 || score <= 100) {
            total += score;
        } else {
            alert("잘못된 입력은 계산이 취소됩니다^^");
            return;
        }
    }

    // 4. 평균 점수 구하기 -> 60점 이상이면 합격
    var average = total / len;

    // 5. 결과 alert
    var result = "";
    if (average >= 60) result = "🥳 합격이용 ^ㅅ^";
    else result = "🥺 불합격이용 ㅠㅅㅠ";

    alert (
        "====== 📊 성적 결과표 ======\n" +
        "• 총점: " + total + "점\n" +
        "• 평균: " + average.toFixed(1) + "점\n" + // toFixed(1)은 소수점 첫째 자리까지만
        "---------------------------\n" +
        "• 결과: " + result
    );
}