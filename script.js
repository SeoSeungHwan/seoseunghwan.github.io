const menuItems = [
  {
    name: "콜라",
    category: "soft",
    label: "음료",
    price: "무료",
    description: "차갑게 준비된 기본 탄산. 얼음이랑 같이 가능.",
  },
  {
    name: "제로 콜라",
    category: "soft",
    label: "음료",
    price: "무료",
    description: "가볍게 마시기 좋은 무설탕 탄산.",
  },
  {
    name: "오렌지 주스",
    category: "soft",
    label: "음료",
    price: "무료",
    description: "술이랑 같이 마시기 좋은 상큼한 선택.",
  },
  {
    name: "라거 맥주",
    category: "beer",
    label: "맥주",
    price: "차갑게",
    description: "가볍고 시원하게 넘어가는 기본 맥주.",
  },
  {
    name: "IPA 맥주",
    category: "beer",
    label: "맥주",
    price: "차갑게",
    description: "향이 진하고 쌉쌀한 맛 좋아하면 추천.",
  },
  {
    name: "하이볼",
    category: "liquor",
    label: "주류",
    price: "추천",
    description: "위스키와 탄산수로 산뜻하게 만들어드려요.",
  },
  {
    name: "와인",
    category: "liquor",
    label: "주류",
    price: "한 잔",
    description: "레드 또는 화이트 중 있는 걸로 한 잔 가능.",
  },
  {
    name: "소주",
    category: "liquor",
    label: "주류",
    price: "기본",
    description: "깔끔하게 마시기 좋은 클래식 선택.",
  },
];

const menuGrid = document.querySelector("#menu-grid");
const filterButtons = document.querySelectorAll(".filter-pill");

function createMenuCard(item) {
  const article = document.createElement("article");
  article.className = "menu-card";
  article.dataset.category = item.category;

  article.innerHTML = `
    <div class="menu-card-header">
      <span class="menu-badge ${item.category}">${item.label}</span>
      <p class="menu-price">${item.price}</p>
    </div>
    <h3 class="menu-name">${item.name}</h3>
    <p class="menu-description">${item.description}</p>
  `;

  return article;
}

function renderMenu() {
  const cards = menuItems.map(createMenuCard);
  menuGrid.replaceChildren(...cards);
}

function setFilter(filter) {
  const cards = document.querySelectorAll(".menu-card");

  cards.forEach((card) => {
    const matches = filter === "all" || card.dataset.category === filter;
    card.classList.toggle("is-hidden", !matches);
  });

  filterButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.filter === filter);
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => setFilter(button.dataset.filter));
});

renderMenu();
setFilter("all");
