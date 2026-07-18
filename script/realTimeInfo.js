// 1. 방금 만든 weatherAPI.js 모듈에서 핵심 비동기 함수를 쏙 훔쳐옵니다.
import { getLiveWeather } from "./weatherAPI.js";

const citySelect = document.querySelector("#select-country");
const weatherBox = document.querySelector("#weather-box");

citySelect.addEventListener("change", async function (event) {
  console.log("선택된 옵션의 값:", event.target.value); // 디버깅용 로그

  const selectedValue = event.target.value;
  if (selectedValue === "none") {
    weatherBox.innerHTML = "<h4>도시를 선택하세요.</h4>";
    return;
  }

  const coords = selectedValue.split(",");
  const cityName = citySelect.options[citySelect.selectedIndex].text;

  weatherBox.innerHTML = "<h4>모듈을 통해 실시간 수신 중... 📡</h4>";

  // 2. 수입해온 비동기 모듈 함수를 실행해 결과만 딱 받아옵니다. (코드가 훨씬 간결해집니다!)
  const weatherInfo = await getLiveWeather(coords[0], coords[1]);

  if (weatherInfo) {
    weatherBox.innerHTML = `
                <h4>${cityName}</h4>
                <p>🌡️ 기온: ${weatherInfo.temp}°C</p>
                <p>💧 습도: ${weatherInfo.humidity}%</p>
        `;
  } else {
    weatherBox.innerHTML = "<h4>데이터를 불러오지 못했습니다.</h4>";
  }
});
