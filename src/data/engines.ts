export interface Engine {
  id: string;
  name: string;
  manufacturer: string;
  type: 'Бензиновый' | 'Дизельный' | 'Гибридный' | 'Электрический';
  displacement: number;
  power: number;
  torque: number;
  cylinders: number;
  year: number;
  fuelConsumption: number;
  compatibleModels: string[];
  pros: string[];
  cons: string[];
  powerCurve: { rpm: number; power: number }[];
  torqueCurve: { rpm: number; torque: number }[];
  compression: string;
  valves: number;
  boost?: string;
  weight: number;
  reviews: { author: string; text: string; rating: number }[];
}

export const engines: Engine[] = [
  {
    id: '1',
    name: 'M139',
    manufacturer: 'Mercedes-AMG',
    type: 'Бензиновый',
    displacement: 2.0,
    power: 421,
    torque: 500,
    cylinders: 4,
    year: 2019,
    fuelConsumption: 9.1,
    compression: '9.0:1',
    valves: 16,
    boost: '2.1 bar',
    weight: 162,
    compatibleModels: ['A45 AMG', 'CLA45 AMG', 'GLA45 AMG'],
    pros: ['Рекордная удельная мощность 210 л.с./литр', 'Высокая надёжность конструкции', 'Отличная динамика разгона'],
    cons: ['Высокая цена обслуживания', 'Требует премиум-топливо АИ-98', 'Сложная конструкция турбины'],
    reviews: [
      { author: 'Алексей М.', text: 'Невероятный мотор! 421 л.с. из двух литров - это просто космос. Разгон до сотни за 3.9 сек на A45 S. Расход в городе около 12л, но оно того стоит.', rating: 5 },
      { author: 'Дмитрий К.', text: 'Владею CLA45 уже 2 года, пробег 45 тыс км. Ни одной поломки, только плановое ТО. Звук мотора великолепен, тяга с низов отличная благодаря турбине.', rating: 5 },
      { author: 'Сергей П.', text: 'Дорого в обслуживании - ТО около 30 тыс руб каждые 15 тыс км. Но надежность на высоте, главное лить хороший бензин и вовремя менять масло.', rating: 4 }
    ],
    powerCurve: [
      { rpm: 1000, power: 100 },
      { rpm: 2000, power: 180 },
      { rpm: 3000, power: 280 },
      { rpm: 4000, power: 360 },
      { rpm: 5000, power: 400 },
      { rpm: 6000, power: 421 },
      { rpm: 7000, power: 410 }
    ],
    torqueCurve: [
      { rpm: 1000, torque: 200 },
      { rpm: 2000, torque: 400 },
      { rpm: 3000, torque: 500 },
      { rpm: 4000, torque: 500 },
      { rpm: 5000, torque: 480 },
      { rpm: 6000, torque: 440 },
      { rpm: 7000, torque: 400 }
    ]
  },
  {
    id: '2',
    name: 'B58',
    manufacturer: 'BMW',
    type: 'Бензиновый',
    displacement: 3.0,
    power: 340,
    torque: 450,
    cylinders: 6,
    year: 2015,
    fuelConsumption: 7.8,
    compression: '11.0:1',
    valves: 24,
    boost: '1.4 bar',
    weight: 185,
    compatibleModels: ['340i', 'X3 M40i', 'Z4 M40i', 'Supra'],
    pros: ['Легендарная надёжность BMW', 'Плавная работа рядной шестёрки', 'Огромный тюнинг-потенциал'],
    cons: ['Цепь ГРМ требует замены через 100-150 тыс', 'Дорогие оригинальные запчасти', 'Сложная электроника'],
    reviews: [
      { author: 'Михаил Т.', text: 'Пробег 120 тыс на 340i - никаких проблем. Масло меняю каждые 10 тыс, расход 0.5л на 1000 км. Тяга ровная по всему диапазону оборотов, настоящая рядная шестёрка!', rating: 5 },
      { author: 'Андрей В.', text: 'Поставил Stage 1 - 400 л.с. и 550 Нм без проблем. Мотор очень отзывчивый на доработки. Расход в смешанном около 9л.', rating: 5 },
      { author: 'Игорь С.', text: 'На 150 тыс встала цепь ГРМ - замена вышла в 80 тыс руб. В остальном претензий нет, мотор отличный.', rating: 4 }
    ],
    powerCurve: [
      { rpm: 1000, power: 80 },
      { rpm: 2000, power: 160 },
      { rpm: 3000, power: 240 },
      { rpm: 4000, power: 300 },
      { rpm: 5000, power: 330 },
      { rpm: 6000, power: 340 },
      { rpm: 7000, power: 320 }
    ],
    torqueCurve: [
      { rpm: 1000, torque: 180 },
      { rpm: 2000, torque: 350 },
      { rpm: 3000, torque: 450 },
      { rpm: 4000, torque: 450 },
      { rpm: 5000, torque: 440 },
      { rpm: 6000, torque: 420 },
      { rpm: 7000, torque: 380 }
    ]
  },
  {
    id: '3',
    name: 'EA888 Gen 3',
    manufacturer: 'Volkswagen',
    type: 'Бензиновый',
    displacement: 2.0,
    power: 220,
    torque: 350,
    cylinders: 4,
    year: 2012,
    fuelConsumption: 6.5,
    compression: '9.6:1',
    valves: 16,
    boost: '1.2 bar',
    weight: 148,
    compatibleModels: ['Golf GTI', 'Passat', 'Tiguan', 'A4', 'Octavia RS'],
    pros: ['Массовость производства', 'Доступные запчасти', 'Хорошая тяга с низов'],
    cons: ['Проблемы с натяжителем цепи до рестайла', 'Течи масла через прокладки', 'Расход масла на угар до 1л/1000км'],
    reviews: [
      { author: 'Владимир Н.', text: 'Golf GTI 2015г - пробег 90 тыс. Поменял натяжитель цепи на 70 тыс за 15 тыс руб. В остальном норм, расход 7-8л в смешанном.', rating: 4 },
      { author: 'Олег Р.', text: 'Tiguan 2017 - ест масло как не в себя. Литр на 1000 км - это нормально для VAG говорят. Мощности хватает, динамика хорошая.', rating: 3 },
      { author: 'Павел Д.', text: 'Octavia RS - отличный мотор для своих денег. Надёжный, тяговитый, запчасти недорогие. Главное масло хорошее лить.', rating: 4 }
    ],
    powerCurve: [
      { rpm: 1000, power: 60 },
      { rpm: 2000, power: 120 },
      { rpm: 3000, power: 180 },
      { rpm: 4000, power: 210 },
      { rpm: 5000, power: 220 },
      { rpm: 6000, power: 215 },
      { rpm: 7000, power: 200 }
    ],
    torqueCurve: [
      { rpm: 1000, torque: 150 },
      { rpm: 2000, torque: 300 },
      { rpm: 3000, torque: 350 },
      { rpm: 4000, torque: 350 },
      { rpm: 5000, torque: 340 },
      { rpm: 6000, torque: 310 },
      { rpm: 7000, torque: 280 }
    ]
  },
  {
    id: '4',
    name: '2JZ-GTE',
    manufacturer: 'Toyota',
    type: 'Бензиновый',
    displacement: 3.0,
    power: 280,
    torque: 431,
    cylinders: 6,
    year: 1991,
    fuelConsumption: 11.2,
    compression: '8.5:1',
    valves: 24,
    boost: '0.7 bar',
    weight: 230,
    compatibleModels: ['Supra MK IV', 'Aristo'],
    pros: ['Легендарная надёжность', 'Огромный тюнинг-потенциал до 1000+ л.с.', 'Чугунный блок цилиндров'],
    cons: ['Старая конструкция 1991 года', 'Высокий расход топлива', 'Редкие и дорогие оригинальные запчасти'],
    reviews: [
      { author: 'Константин Б.', text: 'Supra 1998г - легенда! Сток 330 л.с. держит 15 лет без капиталки. Сейчас 600 л.с. на Stage 2, блок родной. Расход 14-16л, но кого это волнует!', rating: 5 },
      { author: 'Денис Л.', text: 'Aristo - убийца светофоров 90-х. Железный блок, крепкие поршни. Видел экземпляры с пробегом 400+ тыс км. Жрёт бензин прилично.', rating: 5 },
      { author: 'Роман Ж.', text: 'Запчасти дорогие, особенно турбины. Но мотор того стоит - настоящий JDM легенда. Главное найти не убитый экземпляр.', rating: 4 }
    ],
    powerCurve: [
      { rpm: 1000, power: 70 },
      { rpm: 2000, power: 130 },
      { rpm: 3000, power: 190 },
      { rpm: 4000, power: 240 },
      { rpm: 5000, power: 270 },
      { rpm: 6000, power: 280 },
      { rpm: 7000, power: 270 }
    ],
    torqueCurve: [
      { rpm: 1000, torque: 180 },
      { rpm: 2000, torque: 330 },
      { rpm: 3000, torque: 431 },
      { rpm: 4000, torque: 431 },
      { rpm: 5000, torque: 420 },
      { rpm: 6000, torque: 400 },
      { rpm: 7000, torque: 370 }
    ]
  },
  {
    id: '17',
    name: 'M104',
    manufacturer: 'Mercedes-Benz',
    type: 'Бензиновый',
    displacement: 3.0,
    power: 231,
    torque: 315,
    cylinders: 6,
    year: 1989,
    fuelConsumption: 10.5,
    compression: '10.0:1',
    valves: 24,
    weight: 195,
    compatibleModels: ['W124 E320', 'W140 S320', 'R129 SL320'],
    pros: ['Легендарная надёжность', 'Ресурс более 500 тыс км', 'Простота конструкции', 'Отличная ремонтопригодность'],
    cons: ['Устаревшая конструкция', 'Высокий расход топлива', 'Слабая мощность по современным меркам'],
    reviews: [
      { author: 'Виктор К.', text: 'W124 E320 - пробег 420 тыс км на родном моторе! Только прокладки менял да масло каждые 7-8 тыс. Тянет ровно, без провалов. Легенда Мерседеса!', rating: 5 },
      { author: 'Евгений М.', text: 'Купил W140 S320 1995г с пробегом 350 тыс. За 2 года владения - ноль вложений в мотор. Расход 13-14л, но надёжность космическая.', rating: 5 },
      { author: 'Артём Н.', text: 'SL320 - мечта. Мотор работает как часы, никаких стуков и вибраций. Запчасти доступные, любой СТО возьмётся за ремонт. Вечный двигатель!', rating: 5 }
    ],
    powerCurve: [
      { rpm: 1000, power: 60 },
      { rpm: 2000, power: 110 },
      { rpm: 3000, power: 165 },
      { rpm: 4000, power: 205 },
      { rpm: 5000, power: 225 },
      { rpm: 6000, power: 231 }
    ],
    torqueCurve: [
      { rpm: 1000, torque: 140 },
      { rpm: 2000, torque: 250 },
      { rpm: 3000, torque: 305 },
      { rpm: 4000, torque: 315 },
      { rpm: 5000, torque: 310 },
      { rpm: 6000, torque: 290 }
    ]
  },
  {
    id: '18',
    name: '21126',
    manufacturer: 'Lada/ВАЗ',
    type: 'Бензиновый',
    displacement: 1.6,
    power: 98,
    torque: 145,
    cylinders: 4,
    year: 2007,
    fuelConsumption: 7.2,
    compression: '11.0:1',
    valves: 16,
    weight: 115,
    compatibleModels: ['Priora', 'Kalina', 'Granta', 'Vesta'],
    pros: ['Низкая цена обслуживания', 'Доступные запчасти везде', 'Простая конструкция', 'Ремонт в любом гараже'],
    cons: ['Стук гидрокомпенсаторов', 'Малая мощность', 'Вибрации на холостых', 'Плавающие обороты'],
    reviews: [
      { author: 'Игорь Т.', text: 'Priora 2012г - пробег 180 тыс. Стучат гидрики с 100 тыс, но ездит. Масло ест около 500мл на 10 тыс. Для наших дорог и цен - норм мотор.', rating: 3 },
      { author: 'Сергей Б.', text: 'Granta - двигатель слабоват, особенно с кондиционером. Но надёжный, дешёвый в ремонте. ТО 3-4 тыс руб, запчасти копейки.', rating: 3 },
      { author: 'Александр Д.', text: 'Vesta SW Cross - для такой машины мотор явно слаб. Но неубиваемый, ломаться нечему. Заправляю 92-м бензином, ест всё подряд.', rating: 4 }
    ],
    powerCurve: [
      { rpm: 1000, power: 25 },
      { rpm: 2000, power: 45 },
      { rpm: 3000, power: 65 },
      { rpm: 4000, power: 82 },
      { rpm: 5000, power: 95 },
      { rpm: 6000, power: 98 }
    ],
    torqueCurve: [
      { rpm: 1000, torque: 70 },
      { rpm: 2000, torque: 110 },
      { rpm: 3000, torque: 135 },
      { rpm: 4000, torque: 145 },
      { rpm: 5000, torque: 140 },
      { rpm: 6000, torque: 125 }
    ]
  },
  {
    id: '19',
    name: 'K24A',
    manufacturer: 'Honda',
    type: 'Бензиновый',
    displacement: 2.4,
    power: 201,
    torque: 234,
    cylinders: 4,
    year: 2002,
    fuelConsumption: 8.4,
    compression: '9.7:1',
    valves: 16,
    weight: 142,
    compatibleModels: ['Accord', 'CR-V', 'Odyssey', 'Element'],
    pros: ['Высокая надёжность Honda', 'Цепь ГРМ на весь срок службы', 'Ровная тяга', 'i-VTEC технология'],
    cons: ['Шумная работа на высоких оборотах', 'Расход масла после 150 тыс км', 'Дорогие оригинальные запчасти'],
    reviews: [
      { author: 'Максим Л.', text: 'Accord 8 - пробег 220 тыс, мотор как новый! Никаких вложений кроме масла. Расход 9л по городу. i-VTEC включается в 5200 об/мин - красота!', rating: 5 },
      { author: 'Дмитрий Ф.', text: 'CR-V 2007г - отличный мотор. После 180 тыс начал есть масло по 0.5л на 10 тыс. Но это копейки за такую надёжность. Цепь родная!', rating: 5 },
      { author: 'Николай П.', text: 'Мощность адекватная, тяга ровная без провалов. Расход топлива радует. Единственное - запчасти дороговаты, особенно оригинал.', rating: 4 }
    ],
    powerCurve: [
      { rpm: 1000, power: 50 },
      { rpm: 2000, power: 95 },
      { rpm: 3000, power: 135 },
      { rpm: 4000, power: 170 },
      { rpm: 5000, power: 195 },
      { rpm: 6000, power: 201 }
    ],
    torqueCurve: [
      { rpm: 1000, torque: 105 },
      { rpm: 2000, torque: 180 },
      { rpm: 3000, torque: 220 },
      { rpm: 4000, torque: 234 },
      { rpm: 5000, torque: 230 },
      { rpm: 6000, torque: 215 }
    ]
  },
  {
    id: '20',
    name: 'EJ257',
    manufacturer: 'Subaru',
    type: 'Бензиновый',
    displacement: 2.5,
    power: 305,
    torque: 393,
    cylinders: 4,
    year: 2004,
    fuelConsumption: 11.8,
    compression: '8.0:1',
    valves: 16,
    boost: '1.0 bar',
    weight: 187,
    compatibleModels: ['WRX STI', 'Forester STI'],
    pros: ['Легендарный оппозитник', 'Симметричный полный привод', 'Отличная управляемость', 'Звук боксера'],
    cons: ['Высокий расход топлива и масла', 'Течи через прокладки', 'Сложное обслуживание', 'Дорогой ремонт'],
    reviews: [
      { author: 'Антон Р.', text: 'WRX STI 2006г - ралли-легенда! Мотор жрёт масло литр на 2000 км, но такова плата за оппозитник. Звук просто космос, тяга с любых оборотов!', rating: 4 },
      { author: 'Иван С.', text: 'Forester STI - уникальная машина. Мотор требует постоянного внимания - масло, прокладки, свечи. Но драйв непередаваемый! Расход 14-15л.', rating: 4 },
      { author: 'Петр З.', text: 'Владею STI 10 лет. Перебрал мотор на 150 тыс - новые кольца, вкладыши. Теперь как новый. Главное не жалеть денег на обслуживание.', rating: 5 }
    ],
    powerCurve: [
      { rpm: 1000, power: 75 },
      { rpm: 2000, power: 145 },
      { rpm: 3000, power: 220 },
      { rpm: 4000, power: 270 },
      { rpm: 5000, power: 295 },
      { rpm: 6000, power: 305 }
    ],
    torqueCurve: [
      { rpm: 1000, torque: 180 },
      { rpm: 2000, torque: 310 },
      { rpm: 3000, torque: 380 },
      { rpm: 4000, torque: 393 },
      { rpm: 5000, torque: 385 },
      { rpm: 6000, torque: 360 }
    ]
  },
  {
    id: '21',
    name: 'Duratec 2.5',
    manufacturer: 'Ford',
    type: 'Бензиновый',
    displacement: 2.5,
    power: 175,
    torque: 238,
    cylinders: 4,
    year: 2010,
    fuelConsumption: 8.9,
    compression: '10.3:1',
    valves: 16,
    weight: 135,
    compatibleModels: ['Mondeo', 'Kuga', 'S-Max', 'Galaxy'],
    pros: ['Надёжная конструкция', 'Цепь ГРМ', 'Хорошая тяга', 'Простое обслуживание'],
    cons: ['Шумная работа', 'Вибрации на холостых', 'Средний расход топлива'],
    reviews: [
      { author: 'Вадим Н.', text: 'Mondeo 4 - пробег 170 тыс. Мотор без нареканий, только расходники. Тянет хорошо, расход 9-10л. Цепь ещё родная, стучать не начинала.', rating: 4 },
      { author: 'Андрей Г.', text: 'Kuga 2012г - отличный двигатель для кроссовера. Динамика адекватная, запас мощности есть. Немного вибрирует на холостых, но это мелочи.', rating: 4 },
      { author: 'Юрий Б.', text: 'S-Max - семейный автомобиль с надёжным мотором. За 5 лет владения - ноль проблем. Масло меняю каждые 10 тыс, других вложений не требует.', rating: 5 }
    ],
    powerCurve: [
      { rpm: 1000, power: 45 },
      { rpm: 2000, power: 85 },
      { rpm: 3000, power: 125 },
      { rpm: 4000, power: 155 },
      { rpm: 5000, power: 170 },
      { rpm: 6000, power: 175 }
    ],
    torqueCurve: [
      { rpm: 1000, torque: 110 },
      { rpm: 2000, torque: 190 },
      { rpm: 3000, torque: 225 },
      { rpm: 4000, torque: 238 },
      { rpm: 5000, torque: 230 },
      { rpm: 6000, torque: 210 }
    ]
  },
  {
    id: '22',
    name: 'SR20DET',
    manufacturer: 'Nissan',
    type: 'Бензиновый',
    displacement: 2.0,
    power: 250,
    torque: 275,
    cylinders: 4,
    year: 1989,
    fuelConsumption: 10.2,
    compression: '8.5:1',
    valves: 16,
    boost: '0.7 bar',
    weight: 125,
    compatibleModels: ['Silvia S14/S15', '180SX', 'Pulsar GTI-R'],
    pros: ['JDM легенда', 'Огромный тюнинг-потенциал', 'Компактные размеры', 'Железный блок'],
    cons: ['Старая конструкция', 'Редкие запчасти', 'Течи масла', 'Требует качественного топлива'],
    reviews: [
      { author: 'Кирилл Д.', text: 'Silvia S15 - мечта дрифтера! Мотор держит 400 л.с. на стоке. Сейчас 320 л.с. - тянет как паровоз. Расход 11-13л, но это JDM - душа важнее!', rating: 5 },
      { author: 'Артур М.', text: '180SX 1991г - классика! Мотор требует внимания, часто текут прокладки. Но звук турбины и тяга - незабываемы. Вложений много, но оно того стоит.', rating: 4 },
      { author: 'Руслан К.', text: 'Pulsar GTI-R - редкий зверь. Мотор живучий при правильном обслуживании. Главное не перегревать и вовремя менять масло. Запчасти искать сложно.', rating: 4 }
    ],
    powerCurve: [
      { rpm: 1000, power: 60 },
      { rpm: 2000, power: 115 },
      { rpm: 3000, power: 175 },
      { rpm: 4000, power: 220 },
      { rpm: 5000, power: 245 },
      { rpm: 6000, power: 250 }
    ],
    torqueCurve: [
      { rpm: 1000, torque: 130 },
      { rpm: 2000, torque: 220 },
      { rpm: 3000, torque: 270 },
      { rpm: 4000, torque: 275 },
      { rpm: 5000, torque: 265 },
      { rpm: 6000, torque: 245 }
    ]
  },
  {
    id: '23',
    name: 'Ecotec 1.4T',
    manufacturer: 'Opel/GM',
    type: 'Бензиновый',
    displacement: 1.4,
    power: 140,
    torque: 200,
    cylinders: 4,
    year: 2010,
    fuelConsumption: 6.2,
    compression: '9.5:1',
    valves: 16,
    boost: '1.3 bar',
    weight: 118,
    compatibleModels: ['Astra J', 'Insignia', 'Zafira', 'Mokka'],
    pros: ['Экономичный расход', 'Хорошая тяга для объёма', 'Компактный размер', 'Недорогое обслуживание'],
    cons: ['Проблемы с турбиной после 100 тыс', 'Течи масла через прокладки', 'Слабые опоры двигателя'],
    reviews: [
      { author: 'Станислав Ф.', text: 'Astra J - отличный городской мотор! Расход 6-7л, динамика хорошая. На 120 тыс полетела турбина - замена 40 тыс руб. В остальном претензий нет.', rating: 4 },
      { author: 'Марина В.', text: 'Mokka 2013г - для небольшого кроссовера мощности хватает. Расход радует, особенно на трассе - 5.5л. Обслуживание недорогое по сравнению с немцами.', rating: 4 },
      { author: 'Григорий Т.', text: 'Insignia - двигатель явно слабоват для такой машины. Но экономия топлива отличная. После 150 тыс начал подъедать масло - 0.5л на 5 тыс.', rating: 3 }
    ],
    powerCurve: [
      { rpm: 1000, power: 35 },
      { rpm: 2000, power: 70 },
      { rpm: 3000, power: 105 },
      { rpm: 4000, power: 130 },
      { rpm: 5000, power: 140 },
      { rpm: 6000, power: 135 }
    ],
    torqueCurve: [
      { rpm: 1000, torque: 90 },
      { rpm: 2000, torque: 170 },
      { rpm: 3000, torque: 200 },
      { rpm: 4000, torque: 200 },
      { rpm: 5000, torque: 190 },
      { rpm: 6000, torque: 170 }
    ]
  },
  {
    id: '24',
    name: 'Skyactiv-G 2.5',
    manufacturer: 'Mazda',
    type: 'Бензиновый',
    displacement: 2.5,
    power: 194,
    torque: 258,
    cylinders: 4,
    year: 2012,
    fuelConsumption: 7.4,
    compression: '13.0:1',
    valves: 16,
    weight: 138,
    compatibleModels: ['Mazda 6', 'CX-5', 'CX-9', 'Mazda 3'],
    pros: ['Высокая степень сжатия', 'Отличная экономичность', 'Плавная работа', 'Надёжность'],
    cons: ['Требует качественное топливо АИ-95+', 'Дорогие запчасти', 'Чувствителен к качеству масла'],
    reviews: [
      { author: 'Валерий Ш.', text: 'Mazda 6 2014г - лучший атмосферник! Расход 7.5л по городу, на трассе 5.5л. Тяга ровная, без провалов. Пробег 140 тыс - никаких проблем!', rating: 5 },
      { author: 'Елена К.', text: 'CX-5 - идеальный двигатель для кроссовера. Динамика отличная, расход умеренный. Лью только Shell 95, мотор отзывчивый и тихий.', rating: 5 },
      { author: 'Олег Н.', text: 'CX-9 - для такой тяжёлой машины мощности маловато. Но надёжность на высоте. За 100 тыс км пробега - только масло и фильтры. Респект Mazda!', rating: 4 }
    ],
    powerCurve: [
      { rpm: 1000, power: 50 },
      { rpm: 2000, power: 95 },
      { rpm: 3000, power: 140 },
      { rpm: 4000, power: 175 },
      { rpm: 5000, power: 190 },
      { rpm: 6000, power: 194 }
    ],
    torqueCurve: [
      { rpm: 1000, torque: 115 },
      { rpm: 2000, torque: 200 },
      { rpm: 3000, torque: 245 },
      { rpm: 4000, torque: 258 },
      { rpm: 5000, torque: 250 },
      { rpm: 6000, torque: 230 }
    ]
  },
  {
    id: '25',
    name: 'G4KE',
    manufacturer: 'Hyundai/Kia',
    type: 'Бензиновый',
    displacement: 2.4,
    power: 180,
    torque: 231,
    cylinders: 4,
    year: 2009,
    fuelConsumption: 8.6,
    compression: '10.5:1',
    valves: 16,
    weight: 132,
    compatibleModels: ['Sonata', 'Optima', 'Sportage', 'Santa Fe'],
    pros: ['Доступная цена обслуживания', 'Неплохая надёжность', 'Ровная тяга', 'Цепь ГРМ'],
    cons: ['Расход масла после 100 тыс км', 'Шумная работа', 'Залегание колец', 'Стук на холостых'],
    reviews: [
      { author: 'Тимур А.', text: 'Sonata YF - пробег 160 тыс. После 120 тыс начал жрать масло - литр на 3-4 тыс км. Промыл систему, стало лучше. Мощности хватает, динамика норм.', rating: 3 },
      { author: 'Светлана Р.', text: 'Sportage 2013г - двигатель работает, но шумновато. Расход 9-10л по городу. Обслуживание недорогое, запчасти доступные. Для корейца - хорошо.', rating: 4 },
      { author: 'Денис Х.', text: 'Optima - заменил кольца на 150 тыс, обошлось в 35 тыс руб. После этого масло не ест. Мотор простой, в любом сервисе возьмутся за ремонт.', rating: 3 }
    ],
    powerCurve: [
      { rpm: 1000, power: 45 },
      { rpm: 2000, power: 88 },
      { rpm: 3000, power: 130 },
      { rpm: 4000, power: 160 },
      { rpm: 5000, power: 175 },
      { rpm: 6000, power: 180 }
    ],
    torqueCurve: [
      { rpm: 1000, torque: 105 },
      { rpm: 2000, torque: 185 },
      { rpm: 3000, torque: 220 },
      { rpm: 4000, torque: 231 },
      { rpm: 5000, torque: 225 },
      { rpm: 6000, torque: 205 }
    ]
  },
  {
    id: '26',
    name: 'Pentastar 3.6 V6',
    manufacturer: 'Chrysler',
    type: 'Бензиновый',
    displacement: 3.6,
    power: 295,
    torque: 353,
    cylinders: 6,
    year: 2010,
    fuelConsumption: 11.2,
    compression: '10.2:1',
    valves: 24,
    weight: 157,
    compatibleModels: ['Jeep Grand Cherokee', 'Wrangler', 'Dodge Charger', 'Ram 1500'],
    pros: ['Мощный и тяговитый', 'Отличная надёжность для американца', 'Ровная работа V6', 'Хороший звук'],
    cons: ['Высокий расход топлива', 'Проблемы с головками блока до 2014г', 'Течи масла', 'Дорогое обслуживание'],
    reviews: [
      { author: 'Михаил З.', text: 'Jeep Grand Cherokee WK2 - зверь-мотор! 295 л.с. хватает с запасом. Расход 14-15л, но за такую мощь не жалко. Пробег 110 тыс - проблем нет.', rating: 4 },
      { author: 'Александр Ц.', text: 'Wrangler JK 2016г - надёжный V6. На бездорожье тянет отлично. Единственное - жрёт бензин как не в себя. В городе все 16 литров наматывает.', rating: 4 },
      { author: 'Роман В.', text: 'Dodge Charger - американская классика! Звук V6 бодрит, тяга мощная. На 130 тыс поменял прокладки ГБЦ - известная болезнь. После этого тьфу-тьфу.', rating: 4 }
    ],
    powerCurve: [
      { rpm: 1000, power: 75 },
      { rpm: 2000, power: 145 },
      { rpm: 3000, power: 210 },
      { rpm: 4000, power: 260 },
      { rpm: 5000, power: 285 },
      { rpm: 6000, power: 295 }
    ],
    torqueCurve: [
      { rpm: 1000, torque: 160 },
      { rpm: 2000, torque: 280 },
      { rpm: 3000, torque: 330 },
      { rpm: 4000, torque: 353 },
      { rpm: 5000, torque: 345 },
      { rpm: 6000, torque: 320 }
    ]
  }
];
