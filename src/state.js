const tickets = {
  hotels:{
    hyatt:{
      key:'hyatt',
      title:'HYATT',
      address:'XXXXX',
      image: 'http://www.blogodisea.com/wp-content/uploads/2014/12/hoteles-encanto.jpg',
      items:{
        '1501268590994':{
          image: 'http://lorempixel.com/output/nightlife-q-c-250-220-1.jpg',
          type:'Sencilla',
          price:'340',
          key: '1501268590994'
        },
        '1495047834000':{
          image: 'http://lorempixel.com/output/nightlife-q-c-250-220-2.jpg',
          type:'Doble',
          price:'340',
          key: '1495047834000'
        },
      }
    },
    marriot:{
      title: 'MARRIOT',
      key: 'marriot',
      address:'XXXXX',
      image: 'http://media-room5.trivago.com/wp-content/uploads/sites/3/2016/11/25114313/hoteles-todo-incluido-canarias-lanzarote-h10-timanfaya-palace-general-id4.jpg',
      items:{
        '271182':{
          image: 'https://www.helloholidays.ro/images/offers/LOCAL/3hellofanabecostasurhoteltenerife.JPEG',
          type:'Sencilla',
          price:'340',
          key: '271182'
        },
        '271183':{
          image: 'http://www.svoiludi.ru/images/tb/10735/costa-adeje-gran-hotel-13862604295766_w990h700.jpg',
          type:'Doble',
          price:'340',
          key: '271183'
        },
        '271184':{
          image: 'http://rajakamar.pgstatics.com/hotel/10279/MjQxLzI0MTUwMS84NDB4NDYwLzEwMDI4NzE2.jpg',
          type:'Doble',
          price:'340',
          key: '271184'
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
        '271185':{
          image: 'https://previews.123rf.com/images/vbaleha/vbaleha1311/vbaleha131100103/23525904-Autob-s-para-transporte-de-turistas-y-grupos-de-turistas-lindo-hotel-Foto-de-archivo.jpg',
          price:'340',
          type:'sencilla',
          key:'271185'
        },
        '271186':{
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/05/3e/e4/df/hotel-la-estacion-corferias.jpg',
          price:'380',
          type:'sencilla',
          key:'271186'
      }
      }
    },
    "dollar":{
      title:"DOLLAR",
      key: 'dollar',
      address:'XXXXX',
      image:'http://lorempixel.com/output/transport-q-c-640-480-1.jpg',
      items: {
        '271187':{
          image: 'https://previews.123rf.com/images/vbaleha/vbaleha1311/vbaleha131100103/23525904-Autob-s-para-transporte-de-turistas-y-grupos-de-turistas-lindo-hotel-Foto-de-archivo.jpg',
          type:'Sencilla',
          price:'340',
          key:'271187'
        },
        '271188':{
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/05/3e/e4/df/hotel-la-estacion-corferias.jpg',
          type:'Sencilla',
          price:'340',
          key: '271188'
        },
      }
    },
  },
  tickets:{
    "002":{
      section:"General",
      price:123,
      date:"2017/08/08",
      key:'002',
    },
    "003":{
      section:"VIP",
      price:123,
      date:"2017/08/08",
      key:'003',
    },
    "004":{
      section:"VIP",
      price:123,
      date:"2017/08/08",
      key:'004'
    },
  },
  dashboard:{

  },
  sales:{
    "002":{
      section:"General",
      price:123,
      date:"2017/08/08",
      key:'002',
      description:'hotel'
    },
    "003":{
      section:"General"
      price:123,
      date:"2017/08/08",
      key:'003',
      description:'Transporte'
    },
  },
  cart:{
    items:{
    },
    total:0
  },
  UI:{
    '001':{
      title:'HOTEL Y TRANSPORTE',
      image: 'http://memoflores.com/fotos-de-hoteles-05.jpg',
      key: 'hotels'
    },
    '002':{
      title: 'TRANSPORTE',
      image: 'http://www.czech-airport-limousine.com/wp-content/uploads/2013/02/Hotel-Limousine-Service01.jpg',
      key: 'transport'
   }
 },
 history:{
   'home':{

   },
   'items':{


   },
   'location':'',
   'status':false,
   'state':0
  }
}

export default tickets
