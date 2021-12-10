const baseIncome = 300;
const tableEL = document.getElementById('table');

const calcIncome = (baseIncome) => {
  let income;
  for (let year = 1; year <= 5; year++) {
    if (year === 1) {
      income = baseIncome;
    } else {
      income = Math.floor(income * 1.2);
    }

    let monthly = Math.floor(income / 12);
    let bonus = income - monthly * 12;

    tableEL.innerHTML += `
    <div>${year}年目</div>
    <div>${income}万円</div>
    <div>${monthly}万円</div>
    <div>${bonus}万円</div>
    `;
  }
};

calcIncome(baseIncome);
