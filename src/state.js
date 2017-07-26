const tickets = {
  hotels:{
    hyatt:{
      key:'hyatt',
      title:'HYATT',
      address:'XXXXX',
      image: 'http://lorempixel.com/output/nightlife-q-c-250-220-7.jpg',
      items:{
        '271180':{
          image: 'http://lorempixel.com/output/nightlife-q-c-250-220-1.jpg',
          type:'Sencilla',
          price:'340',
          key: '271180'
        },
        '271181':{
          image: 'http://lorempixel.com/output/nightlife-q-c-250-220-2.jpg',
          type:'Doble',
          price:'340',
          key: '271181'
        },
        '271182':{
          image: 'http://lorempixel.com/output/nightlife-q-c-250-220-3.jpg',
          type:'Doble',
          price:'340',
          key: '271182'
        },
      }
    },
    marriot:{
      title: 'MARRIOT',
      key: 'marriot',
      address:'XXXXX',
      image: 'http://lorempixel.com/output/city-q-c-250-220-8.jpg',
      items:{
        '271180':{
          image: 'http://lorempixel.com/output/nightlife-q-c-250-220-1.jpg',
          type:'Sencilla',
          price:'340',
          key: '271180'
        },
        '271181':{
          image: 'http://lorempixel.com/output/nightlife-q-c-250-220-2.jpg',
          type:'Doble',
          price:'340',
          key: '271181'
        },
        '271182':{
          image: 'http://lorempixel.com/output/nightlife-q-c-250-220-3.jpg',
          type:'Doble',
          price:'340',
          key: '271182'
        },
      }
    }
  },
  transport:{
    "hertz":{
      title:"HERTZ",
      key: 'hertz',
      address:'XXXXX',
      image:'http://lorempixel.com/output/transport-q-c-640-480-9.jpg',
      items: {
        '271184':{
          image: 'http://lorempixel.com/output/nightlife-q-c-250-220-5.jpg',
          price:'340',
          type:'sencilla',
          key:'271184'
        },
        '271185':{
          image: 'http://lorempixel.com/output/nightlife-q-c-250-220-6.jpg',
          price:'340',
          type:'sencilla',
          key:'271185'
      }
      }
    },
    "dollar":{
      title:"DOLLAR",
      key: 'dollar',
      address:'XXXXX',
      price:213,
      image:'http://lorempixel.com/output/transport-q-c-640-480-1.jpg',
      items: {
        '271184':{
          image: 'http://lorempixel.com/output/nightlife-q-c-250-220-5.jpg',
          type:'Sencilla',
          price:'340',
          key:'271184'
        },
        '271185':{
          image: 'http://lorempixel.com/output/nightlife-q-c-250-220-6.jpg',
          type:'Sencilla',
          price:'340',
          key: '271185'
        },
      }
    },
  },
  tickets:{
    "002":{
      section:"General",
      price:123,
      date:"2017/08/08",
    }
  },
  dashboard:{

  },
  sales:{

  },
  cart:{
    items:{
    }
  },
  UI:{
    '001':{
      title:'HOTEL Y TRANSPORTE',
      image: 'http://lorempixel.com/output/nightlife-q-c-250-220-7.jpg',
      key: 'hotels'
    },
    '002':{
      title: 'TRANSPORTE',
      image: 'http://lorempixel.com/output/city-q-c-250-220-8.jpg',
      key: 'transport'
   }
 },
 history:{
   'home':{
     '001':{
       title:'HOTEL Y TRANSPORTE',
       image: 'http://lorempixel.com/output/nightlife-q-c-250-220-7.jpg',
       key: 'hotels'
     },
     '002':{
       title: 'TRANSPORTE',
       image: 'http://lorempixel.com/output/city-q-c-250-220-8.jpg',
       key: 'transport'
    }
   }
},
}

export default tickets
