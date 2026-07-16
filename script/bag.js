function showMeTheBag() {
    var myBag = [
        { name: "스마트폰", count: 1},
        { name: "립밤", count: 1},
        { name: "휴지", count: 2},
        { name: "지갑", count: 1}
    ]

    var result = "🎒 [내 가방 속 물품 목록]\n-----------------------\n";
    for (let item of myBag) {
        result += item.name + " : " + item.count + "개\n";
    }

    result = result + "-----------------------\n";
    result = result + "총 물품 종류: " + myBag.length + "가지";

    alert(result);
}