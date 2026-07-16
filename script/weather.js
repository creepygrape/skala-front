// html에서 타겟 찾기
const selectedCountry = document.querySelector('#select-country');
const weatherBox = document.querySelector('#weather-box');

// 이벤트 리스터 추가
selectedCountry.addEventListener('change', async function(event) {
    const selectedValue = event.target.value; // 위도, 경도(N.N,N.N)

    if (selectedValue === "none") { // 선택된 국가 없음
        weatherBox.innerHTML = "<p>도시를 선택하면 좌표가 표시됩니다.</p>";
        return;
    }

    const info = selectedValue.split(',');
    const lat = info[0];
    const lon = info[1];
    const countryName = selectedCountry.options[selectedCountry.selectedIndex].text;

    weatherBox.innerHTML = "<h4>실시간 날씨 로딩 중... </h4>"; // async-await 대기 시간 중 출력

    try {
        // Open-Meteo API에 비동기 요청 날리기
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m`;

        const response = await fetch(url); // 정보가 올 때까지 대기
        const data = await response.json(); //
        
        // 날씨 정보 필터
        const currentTemp = data.current.temperature_2m;
        const currentHumidity = data.current.relative_humidity_2m;

        // 최종 결과 HTML에 반영
        weatherBox.innerHTML = `
            <h4>${countryName}의 실시간 날씨</4>
            <p>-현재 기온 : ${currentTemp}°C</p>
            <p>-현재 습도 : ${currentHumidity}%</p>
        `;
    } catch (error) {
        weatherBox.innerHTML = "<p>날씨 정보를 가져올 수 없습니다.</p>";
        console.log(error);
    }
});