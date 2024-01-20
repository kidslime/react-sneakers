function App() {
  return (
    <div className="wrapper clear">
      <header className="p-40 d-flex justify-between align-center">
        <div className="header__left d-flex align-center">
          <img width={40} height={40} src="/images/logo.png" alt="" />
          <div className="header__info">
            <h3 className="text-uppercase">REACT SNEAKERS</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/images/cart.svg" alt="" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="images/user-account.svg" alt="" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">Все кроссовки</h1>
        <div className="d-flex">
          <div className="card">
            <img width={133} height={112} src="images/sneackers/1.jpg" alt="" />
            <h4 className="card__title">Мужские Кроссовки Nike Blazer Mid Suede</h4>
            <div className="d-flex justify-between align-center">
              <div>
                <p className="card__price">Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={32} height={32} src="/images/add-button.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="images/sneackers/1.jpg" alt="" />
            <h4 className="card__title">Мужские Кроссовки Nike Blazer Mid Suede</h4>
            <div className="d-flex justify-between align-center">
              <div>
                <p className="card__price">Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={32} height={32} src="/images/add-button.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="images/sneackers/1.jpg" alt="" />
            <h4 className="card__title">
              Мужские Кроссовки Nike Blazer Mid Suede Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Fugiat consequuntur itaque praesentium aliquid porro quidem. Dolorem
              culpa, ut ad magni temporibus enim sint suscipit magnam ipsum sed nam praesentium
              iure.
            </h4>
            <div className="d-flex justify-between align-center">
              <div>
                <p className="card__price">Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={32} height={32} src="/images/add-button.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
