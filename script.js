const bestItems = [
  {
    name: "블루베리라떼",
    icon: "🫐",
    note: "달콤하고 부드럽게 마시기 좋은 오늘의 추천 메뉴",
  },
  {
    name: "모히또",
    icon: "🍹",
    note: "상큼하게 한 잔 마시기 좋은 집들이 시그니처 칵테일",
  },
];

const drinkItems = [
  {
    name: "아메리카노",
    meta: "디카페인 변경 가능",
    tag: "+300원",
  },
  {
    name: "제로콜라",
    meta: "",
    tag: "",
  },
  {
    name: "제로사이다",
    meta: "",
    tag: "",
  },
  {
    name: "드립커피",
    meta: "",
    tag: "",
  },
  {
    name: "블루베리라떼",
    meta: "",
    tag: "",
  },
  {
    name: "딸기라떼",
    meta: "",
    tag: "",
  },
  {
    name: "오미자",
    meta: "",
    tag: "",
  },
  {
    name: "매실차",
    meta: "",
    tag: "",
  },
  {
    name: "라떼",
    meta: "아이스만 가능",
    tag: "",
  },
  {
    name: "일본녹차",
    meta: "",
    tag: "",
  },
];

const alcoholItems = [
  {
    name: "모히또",
    meta: "",
    tag: "",
  },
  {
    name: "하이볼",
    meta: "",
    tag: "",
  },
  {
    name: "맥주",
    meta: "",
    tag: "",
  },
  {
    name: "레드와인",
    meta: "",
    tag: "",
  },
  {
    name: "화이트와인",
    meta: "",
    tag: "",
  },
  {
    name: "로제와인",
    meta: "",
    tag: "",
  },
];

const bestGrid = document.querySelector("#best-grid");
const drinkList = document.querySelector("#drink-list");
const alcoholList = document.querySelector("#alcohol-list");

function createBestCard(item) {
  const article = document.createElement("article");
  article.className = "best-card";
  article.innerHTML = `
    <span class="pick-badge">Pick</span>
    <div class="best-icon" aria-hidden="true">${item.icon}</div>
    <h3>${item.name}</h3>
    <p class="best-note">${item.note}</p>
  `;
  return article;
}

function createMenuItem(item) {
  const listItem = document.createElement("li");
  listItem.className = "menu-item";
  listItem.innerHTML = `
    <div>
      <p class="menu-name">${item.name}</p>
      ${item.meta ? `<p class="menu-meta">${item.meta}</p>` : ""}
    </div>
    ${item.tag ? `<span class="menu-tag">${item.tag}</span>` : ""}
  `;
  return listItem;
}

function renderList(target, items) {
  target.replaceChildren(...items.map(createMenuItem));
}

bestGrid.replaceChildren(...bestItems.map(createBestCard));
renderList(drinkList, drinkItems);
renderList(alcoholList, alcoholItems);
