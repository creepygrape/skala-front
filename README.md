# 💻 skala-front
> HTML5 · CSS3 · Vanilla JavaScript 프론트엔드 핵심 기술 실습 가이드와 종합 과제 결과물을 기록하는 저장소

---

## 📌 목차 (Table of Contents)

- [🛠️ 기술 스택 (Tech Stack)](#️-기술-스택-tech-stack)
- [📅 일차별 단원 실습 (Day 1 & Day 2)](#-일차별-단원-실습-day-1--day-2)
- [🏆 종합 실습 과제 (Synthesis Projects)](#-종합-실습-과제-synthesis-projects)
  - [11. 회원가입 & 결과 페이지](#11-회원가입--결과-페이지)
  - [12. 시맨틱 여행지 소개 페이지](#12-시맨틱-여행지-소개-페이지)
  - [13. 반응형 상품 카드 갤러리](#13-반응형-상품-카드-갤러리)
  - [14. 인터랙티브 할 일 관리 앱 (Todo)](#14-인터랙티브-할-일-관리-앱-todo)

---

## 🛠️ 기술 스택 (Tech Stack)

| 분류 | 기술 기술 및 환경 |
| :--- | :--- |
| **Markup & Styling** | HTML5, CSS3 `(Responsive Design, Grid, Flexbox)` |
| **Scripting** | JavaScript `(ES6+ Modules, DOM Manipulation, Event Delegation, Async/Await)` |
| **Environment** | VS Code, Live Server Extention |

---

## 📅 일차별 단원 실습 (Day 1 & Day 2)

<details>
<summary>🔍 기초 실습 내용 펼쳐보기</summary>

### 1. Web Workflow
* **내용**: `index.html` 기초 환경 설정
* **결과 스크린샷**:
  <p align="left">
    <img src="exec/img/0001.jpg" width="49%" alt="Web Workflow 1">
    <img src="exec/img/0002.jpg" width="49%" alt="Web Workflow 2">
  </p>

### 2. 나의 소개 페이지 & 3. 바로가기 
* **내용**: 제목 태그(`h1~h4`), 내부 섹션 이동을 위한 앵커 고정 및 `target="_blank"` 속성을 활용한 새 탭 외부 링크 연결
* **결과 스크린샷**:
  <p align="left">
    <img src="exec/img/0003.jpg" width="49%" alt="My Profile">
    <img src="exec/img/0004.jpg" width="49%" alt="Anchor">
  </p>

### 4. 회원가입 Form & 5. 여행지 Hub
* **내용**: 다양한 `input` 타입 학습, 시맨틱 구조(`section`, `article`)와 이미지 임베딩
* **결과 스크린샷**:
  <p align="left">
    <img src="exec/img/0005.jpg" width="49%" alt="SignUp">
    <img src="exec/img/0007.jpg" width="49%" alt="TripHub">
  </p>

### 6. CSS 스타일링 & 7. JavaScript 기초
* **내용**: 기본 스타일시트 연동, CSS 가시성 및 미디어 쿼리 테스터, 기초 스크립트 실행 제어
* **결과 스크린샷**:
  <p align="left">
    <img src="exec/img/0008.jpg" width="49%" alt="CSS1">
    <img src="exec/img/0009.jpg" width="49%" alt="CSS2">
  </p>

### 8. DOM / Event & 9. Async/Module & 10. Wrap-up Quiz
* **내용**: DOM 선택자를 이용한 목차 자동 생성기 구현, `fetch` 기반 비동기 HTML/데이터 컴포넌트 동적 로드, 숫자 맞추기 조건문 인터랙티브 퀴즈 구현
* **결과 스크린샷**:
  <p align="left">
    <img src="exec/img/0010.jpg" width="32%" alt="DOM Event">
    <img src="exec/img/0011.jpg" width="32%" alt="Async Module">
    <img src="exec/img/0012.jpg" width="32%" alt="Quiz 1">
  </p>
</details>

---

## 🏆 종합 실습 과제 (Synthesis Projects)

### 11. 회원가입 & 결과 페이지
> 정규표현식 유효성 검증 브라우저 폼 빌딩 및 QueryString 기반 결과 처리 데이터 테이블 구현

<p align="left">
  <img src="exec/img/0015.jpg" width="24%" alt="Required 검증">
  <img src="exec/img/0016.jpg" width="24%" alt="Pattern 검증">
  <img src="exec/img/0018.jpg" width="24%" alt="체크박스 검증">
  <img src="exec/img/0019.jpg" width="24%" alt="결과 페이지">
</p>

#### ⚡ 구현 요구사항 명세
- [x] **필수 검증**: 이름·아이디·비밀번호·이메일·약관동의 항목 필수(`required`) 설정
- [x] **입력 패턴**: 아이디 정규식(`pattern="[A-Za-z0-9]{4,12}"`), 비밀번호 제한(`minlength="8"`), 전화번호 정식 포맷 패턴 강제
- [x] **UI/UX 구조**: `radio`(단일), `checkbox`(다중), `select`(드롭다운)의 고른 활용 및 상단 헤더 고정 정렬 (`position: fixed`, `z-index`)
- [x] **데이터 라우팅**: 제출 시 `result.html`로 폼 데이터를 이송하여 동적 `table` 구조로 파싱 출력

<br>

### 12. 시맨틱 여행지 소개 페이지
> 시맨틱 태그 규칙을 엄격히 준수한 고정 내비게이션 앵커 서핑 및 미디어 갤러리 허브 페이지

<p align="left">
  <img src="exec/img/0026.jpg" width="32%" alt="부드러운 스크롤">
  <img src="exec/img/0021.jpg" width="32%" alt="시맨틱 구조">
  <img src="exec/img/0022.jpg" width="32%" alt="3열 그리드">
</p>
<p align="left">
  <img src="exec/img/0023.jpg" width="24%" alt="2단 레이아웃">
  <img src="exec/img/0024.jpg" width="24%" alt="비디오 요소">
  <img src="exec/img/0025.jpg" width="24%" alt="Hover 스케일">
  <img src="exec/img/0027.jpg" width="24%" alt="Top 버튼">
</p>

#### ⚡ 구현 요구사항 명세
- [x] **시맨틱 웹**: `header`, `nav`, `main`, `section`, `article`, `aside`, `footer` 마크업 표준 엄수
- [x] **스크롤 인터랙션**: 고정형 내비게이션바 링크 타겟팅 및 CSS `scroll-behavior: smooth` 처리를 통한 웹 접근성 개선
- [x] **그리드 및 미디어**: 명소 갤러리 `figure`/`figcaption` 3열 배치, 비디오 미디어 컨텍스트 제어(`controls`, `poster`)
- [x] **비주얼 효과**: 히어로 배경 그라데이션 오버레이 필터 및 카드 호버 애니메이션(`transform: scale()`) 구현

<br>

### 13. 반응형 상품 카드 갤러리
> CSS 변수 세팅 및 다크 테마 토글, 뷰포트에 유연하게 대응하는 미디어 쿼리 기반 반응형 그리드 갤러리

<p align="left">
  <img src="exec/img/0038.jpg" width="32%" alt="CSS 변수 선언">
  <img src="exec/img/0030.jpg" width="32%" alt="반응형 PC 대화면">
  <img src="exec/img/0033.jpg" width="32%" alt="반응형 태블릿">
</p>
<p align="left">
  <img src="exec/img/0032.jpg" width="32%" alt="반응형 모바일">
  <img src="exec/img/0034.jpg" width="32%" alt="다크 테마">
  <img src="exec/img/0035.jpg" width="32%" alt="카드 인터랙션">
</p>

#### ⚡ 구현 요구사항 명세
- [x] **디자인 시스템**: `:root` 가상 선택자에 5개 이상의 통합 색상 테마 변수(`var()`) 시스템 구축
- [x] **그리드 익스프레션**: `display: grid; grid-template-columns: repeat(3, 1fr);` 기본 배치 (최소 카드 6개 이상 노출)
- [x] **반응형 웹 브레이크포인트**: 
  * 데스크톱 `(~1200px)`: 3열 레이아웃
  * 태블릿 `(~900px)`: 2열 레이아웃 다운그레이드
  * 모바일 `(~600px)`: 1열 직렬 배치 및 모바일 전용 메뉴 스위칭 처리
- [x] **마이크로 애니메이션**: `@keyframes` 인트로 모션 및 카드 호버 시 부드러운 위치 제어(`translateY`), 다크모드 동적 테마 스위치 변환

<br>

### 14. 인터랙티브 할 일 관리 앱 (Todo)
> Separation of Concerns 아키텍처 패턴을 따른 모듈형 로컬 영속화 스케줄 매니저

<p align="left">
  <img src="exec/img/0036.jpg" width="49%" alt="애플리케이션 인터페이스">
  <img src="exec/img/0037.jpg" width="49%" alt="로컬스토리지 영속화">
</p>

#### ⚡ 구현 요구사항 명세
- [x] **예외 처리 입력**: 빈 값 제출 차단 필터 및 키보드 `Enter` / 추가 버튼 등록 바인딩 다중화
- [x] **비동기 명언 연동**: 오픈 API(`korean-advice-open-api`) 기반 명언 `fetch` 결합 및 네트워크 유실 대응용 Fallback 기본 텍스트 핸들링
- [x] **이벤트 위임 최적화**: 고정 상위 컨테이너 `ul` 요소에 이벤트 리스너를 단 1회만 등록하여 내부 동적 동형 노드(`li`, `checkbox`, `button`) 버블링 제어
- [x] **데이터 및 아키텍처**:
  * `storage.js`: 데이터 처리 순수 로직 분리 및 `localStorage` 직렬화 동기화
  * `app.js`: 데이터 수신 기반 리액티브 DOM 갱신 및 UI 가시화 흐름 제어 (`type="module"` 스코프 격리 적용)
- [x] **스마트 필터**: 전체 / 진행 중 / 완료 필터 분류 탭 구성 및 실시간 요약 통계 집계, 일괄 삭제 및 완료 항목 타겟 삭제 트래커 완비
