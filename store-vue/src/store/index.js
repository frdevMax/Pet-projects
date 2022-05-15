import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [
      {
        id: 1,
        name: 'Lenovo Ideapad 5',
        description: 'IdeaPad 5 — легкий и портативный ноутбук, поэтому его можно легко носить с собой на работу и брать в поездки. Многофункциональная модель идет в ногу с вашим днем благодаря мощному процессору Intel 10-го поколения, памяти 8 ГБ и твердотельному накопителю 512 ГБ. Защитите свою конфиденциальность с помощью удобной шторки, которая позволяет вам физически закрывать веб-камеру вашего ПК, когда вы ее не используете.',
        img: 'https://static.eldorado.ru/photos/71/715/597/38/new_71559738_l_1596639657.jpeg/resize/380x240/',
        img1: 'https://static.eldorado.ru/photos/71/715/597/38/new_71559738_l_1596639677.jpeg/resize/380x240/',
        img2: 'https://static.eldorado.ru/photos/71/715/597/38/new_71559738_l_1596639700.jpeg/resize/380x240/',
        img3: 'https://static.eldorado.ru/photos/71/715/597/38/new_71559738_l_1596639913.jpeg/resize/380x240/',
        price: 56990,
        category: 'computer',
      },
      {
        id: 2,
        name: 'HP 14',
        description: 'Модель оснащена датчиком акселерометра, который защитит жесткий диск от поломки при случайном падении ноутбука. Емкости аккумулятора хватает для обеспечения автономной работы устройства в течение 8,5 часа. Для защиты ноутбука от кражи производителем предусмотрен разъем Kensington Lock. Для подключения к беспроводной сети устройство поддерживает несколько стандартов сети Wi-Fi и Bluetooth версии 4.2.',
        img: 'https://static.eldorado.ru/photos/71/715/590/34/new_71559034_l_1596188452.jpeg/resize/380x240/',
        img1: 'https://static.eldorado.ru/photos/71/715/590/34/new_71559034_l_1596188472.jpeg/resize/380x240/',
        img2: 'https://static.eldorado.ru/photos/71/715/590/34/new_71559034_l_1596188492.jpeg/resize/380x240/',
        img3: 'https://static.eldorado.ru/photos/71/715/590/34/new_71559034_l_1596188513.jpeg/resize/380x240/',
        price: 31900,
        category: 'computer',
      },
      {
        id: 3,
        name: 'Acer Aspire 7',
        description: 'Игровой ноутбук Acer Aspire 7 выполнен в строгом дизайне, однако совмещает в себе большой потенциал и возможности инструмента для решения обширного круга задач. Мощный процессор Core i5-9300H Intel частотой 2,4 ГГц, оперативная память DDR4 объемом 8 ГБ и графический адаптер NVIDIA GeForce GTX1650Ti позволят погрузиться в виртуальный мир современных видеоигр.',
        img: 'https://static.eldorado.ru/photos/71/715/833/06/new_71583306_l_1611548213.jpeg/resize/380x240/',
        img1: 'https://static.eldorado.ru/photos/71/715/833/06/new_71583306_l_1611548238.jpeg/resize/380x240/',
        img2: 'https://static.eldorado.ru/photos/71/715/833/06/new_71583306_l_1611548260.jpeg/resize/380x240/',
        img3: 'https://static.eldorado.ru/photos/71/715/833/06/new_71583306_l_1611548286.jpeg/resize/380x240/',
        price: 67990,
        category: 'computer',
      },
      {
        id: 4,
        name: 'Logitech M190',
        description: 'Устройство хорошо подходит для работы как правой, так и левой рукой; эргономичный дизайн повторяет естественные изгибы ладоней большого размера. Специальные округлые кнопки предназначены для оптимального расположения пальцев, а дополнительная поддержка для кисти обеспечивает комфорт в течение всего дня.',
        img: 'https://static.eldorado.ru/photos/71/715/654/97/new_71565497_l_1600937913.jpeg/resize/380x240/',
        img1: 'https://static.eldorado.ru/photos/71/715/654/97/new_71565497_l_1600937925.jpeg/resize/380x240/',
        img2: 'https://static.eldorado.ru/photos/71/715/654/97/new_71565497_l_1600937953.jpeg/resize/380x240/',
        price: 950,
        category: 'mouse',
      },
      {
        id: 5,
        name: 'HP Wireless 250',
        description: 'Универсальная мышь HP Wireless 250 имеет симметричную конструкцию и оптимальна как левшам, так и правшам. Эргономичная форма модели препятствует скольжению в ладони, обеспечивая удобный и надежный хват. Чтобы подключить манипулятор к ноутбуку или компьютеру, необходимо подсоединить приемный блок к USB-разъему выбранного устройства. Синхронизация осуществляется беспроводным способом в радиусе действия до 10 м.',
        img: 'https://static.eldorado.ru/photos/71/715/379/02/new_71537902_l_1580400816.jpeg/resize/380x240/',
        img1: 'https://static.eldorado.ru/photos/71/715/379/02/new_71537902_l_1580400825.jpeg/resize/380x240/',
        img2: 'https://static.eldorado.ru/photos/71/715/379/02/new_71537902_l_1580400836.jpeg/resize/380x240/',
        price: 1290,
        category: 'mouse',
      },
      {
        id: 6,
        name: 'Razer Viper Mini',
        description: 'Razer Viper Mini — одна из самых компактных игровых мышей. Она идеально подойдет для мобильных геймеров, которые погружаются в любимые виртуальные миры даже во время путешествий. Гаджет весит всего 61 грамм, поэтому он буквально «летает» над поверхностью коврика, позволяя совершать молниеносные движения.',
        img: 'https://static.eldorado.ru/photos/71/715/438/07/new_71543807_l_1587716448.jpeg/resize/380x240/',
        img1: 'https://static.eldorado.ru/photos/71/715/438/07/new_71543807_l_1608191490.jpeg/resize/380x240/',
        img2: 'https://static.eldorado.ru/photos/71/715/438/07/new_71543807_l_1587716459.jpeg/resize/380x240/',
        img3: 'https://static.eldorado.ru/photos/71/715/438/07/new_71543807_l_1587716468.jpeg/resize/380x240/',
        price: 2900,
        category: 'mouse',
      },
      {
        id: 7,
        name: 'Genius Smart KB-100',
        description: 'Клавиатура GENIUS Smart KB-100 мембранного типа имеет полноразмерную конструкцию. Раскладка с дополнительным цифровым блоком включает 104 кнопки с плавным тихим ходом и оптимальным откликом. Корпус модели устойчив к случайному попаданию влаги, что обеспечивает надежную защиту внутренних деталей от коррозии и увеличивает срок службы.',
        img: 'https://static.eldorado.ru/photos/71/713/796/53/new_71379653_l_1549542275.jpeg/resize/380x240/',
        img1: 'https://static.eldorado.ru/photos/71/713/796/53/new_71379653_l_1535097693.jpeg/resize/380x240/',
        img2: 'https://static.eldorado.ru/photos/71/713/796/53/new_71379653_l_1549542295.jpeg/resize/380x240/',
        img3: 'https://static.eldorado.ru/photos/71/713/796/53/new_71379653_l_1549542301.jpeg/resize/380x240/',
        price: 700,
        category: 'keyboard',
      },
      {
        id: 8,
        name: 'Razer Cynosa Lite',
        description: 'Игровая клавиатура Razer Cynosa Lite прослужит максимально долго даже при постоянном использовании. Мембранный тип устройства гораздо прочнее обычного механического, а высокая защита от попадания влаги помогает не бояться случайно пролитых напитков. За счет подсветки клавиш изделие удобно использовать даже в темноте: мягкий свет не раздражает глаза, но при этом позволяет видеть каждую деталь клавиатуры. Провод длиной 1,8 м с прочной, устойчивой к повреждениям оплеткой дополнили USB-разъемом.',
        img: 'https://static.eldorado.ru/photos/71/715/493/87/new_71549387_l_1594809000.jpeg/resize/380x240/',
        img1: 'https://static.eldorado.ru/photos/71/715/493/87/new_71549387_l_1594809497.jpeg/resize/380x240/',
        img2: 'https://static.eldorado.ru/photos/71/715/493/87/new_71549387_l_1594809027.jpeg/resize/380x240/',
        img3: 'https://static.eldorado.ru/photos/71/715/493/87/new_71549387_l_1594809039.jpeg/resize/380x240/',
        price: 2990,
        category: 'keyboard',
      },
      {
        id: 9,
        name: 'Defender Goser GK-772L',
        description: 'Игровая клавиатура Defender Goser GK-772L (45772) подсоединяется к персональному компьютеру или ноутбуку посредством USB-интерфейса. Оптимальная длина провода, составляющая 1,5 м, позволяет располагать модель в любом удобном месте стола. Устройство характеризуется высокой производительностью и быстрым откликом. Для изготовления клавиатуры использованы качественные и прочные материалы, устойчивые к износу.',
        img: 'https://static.eldorado.ru/photos/71/715/384/75/new_71538475_l_1620726651.jpeg/resize/380x240/',
        img1: 'https://static.eldorado.ru/photos/71/715/384/75/new_71538475_l_1620726695.jpeg/resize/380x240/',
        img2: 'https://static.eldorado.ru/photos/71/715/384/75/new_71538475_l_1620726705.jpeg/resize/380x240/',
        img3: 'https://static.eldorado.ru/photos/71/715/384/75/new_71538475_l_1620726718.jpeg/resize/380x240/',
        price: 1200,
        category: 'keyboard',
      }
    ],

    users: [
      {name: 'admin@gmail.com', password: '123456'},
      {name: 'guest1@gmail.com', password: '111111'},
      {name: 'guest2@gmail.com', password: '222222'}
    ],

    cart: [],
    totalSum: 0,
    count: 0,
    numberRow: [],

  },

  getters: {
    computers(state){
      return state.products.filter(product => product.category == 'computer');
    },

    mouse(state){
      return state.products.filter(product => product.category == 'mouse');
    },

    keyboards(state){
      return state.products.filter(product => product.category == 'keyboard');
    },

    productById: state => (id) => {
      return state.products.filter(product => product.id == id)[0];
    },

    getUsers(state){
      return state.users;
    },

  },

  mutations: {
    addToCart(state, {product}){
      if(state.cart.find(item => item.id === product.id)){
        product.quantity ++;
        product.totalprice = product.price * product.quantity;
      }else{
        state.cart.push(product);
        product.quantity = 1;
        product.totalprice = product.price;
      }
      state.count ++;
      state.totalSum = state.totalSum + product.price;
    },

    getLess(state, {product}){
      let index = state.cart.indexOf(product);
      if(index > -1){
        if(state.cart[index].quantity == 0){
          state.cart.splice(index, 1);
          state.count -= 1;
        } else {
          state.cart[index].quantity -= 1;
          state.cart[index].totalprice = state.cart[index].price * state.cart[index].quantity;
          state.totalSum -= state.cart[index].price;
          state.count -= 1;
        }
      }
    },
    
    getMore(state, {product}){
      let index = state.cart.indexOf(product);
      if(index > -1){
        state.cart[index].quantity += 1;
        state.totalSum -= state.cart[index].totalprice;
        state.cart[index].totalprice = state.cart[index].price * state.cart[index].quantity;
        state.totalSum += state.cart[index].totalprice;
        state.count += 1;
      }
    },

    removeFromCart(state, {product}){
      let index = state.cart.indexOf(product);
      if(index > -1) {
        state.count -= state.cart[index].quantity;
        state.totalSum -= state.cart[index].totalprice;
        state.cart.splice(index, 1);
      }
    },

    clearCart(state){
      state.count = 0;
      state.totalSum = 0;
      while(state.cart.length){
        state.cart.pop();
      }
    },

    getTotalSum(state){
      for(let item of state.cart){
        state.totalSum += item.totalprice;
      }
      return state.totalSum;
    },

  },

  actions: {
  },

  modules: {
  }
})
