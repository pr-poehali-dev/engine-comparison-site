import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Checkbox } from '@/components/ui/checkbox';

interface Engine {
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
}

const engines: Engine[] = [
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
    compatibleModels: ['A45 AMG', 'CLA45 AMG', 'GLA45 AMG'],
    pros: ['Рекордная удельная мощность', 'Высокая надёжность', 'Отличная динамика'],
    cons: ['Высокая цена обслуживания', 'Требует премиум-топливо', 'Сложная конструкция турбины'],
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
    compatibleModels: ['340i', 'X3 M40i', 'Z4 M40i', 'Supra'],
    pros: ['Надёжность', 'Плавная работа', 'Хороший ресурс'],
    cons: ['Цепь ГРМ требует замены', 'Дорогие запчасти', 'Сложная электроника'],
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
    compatibleModels: ['Golf GTI', 'Passat', 'Tiguan', 'A4', 'Octavia RS'],
    pros: ['Массовость производства', 'Доступные запчасти', 'Хорошая тяга'],
    cons: ['Проблемы с натяжителем цепи', 'Течи масла', 'Расход масла на угар'],
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
    compatibleModels: ['Supra MK IV', 'Aristo'],
    pros: ['Легендарная надёжность', 'Огромный тюнинг-потенциал', 'Чугунный блок'],
    cons: ['Старая конструкция', 'Высокий расход топлива', 'Редкие запчасти'],
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
    id: '5',
    name: 'OM651',
    manufacturer: 'Mercedes-Benz',
    type: 'Дизельный',
    displacement: 2.1,
    power: 204,
    torque: 500,
    cylinders: 4,
    year: 2008,
    fuelConsumption: 5.2,
    compatibleModels: ['C-Class', 'E-Class', 'Sprinter'],
    pros: ['Экономичность', 'Высокий крутящий момент', 'Долговечность'],
    cons: ['Проблемы с форсунками', 'EGR требует чистки', 'DPF засоряется'],
    powerCurve: [
      { rpm: 1000, power: 60 },
      { rpm: 2000, power: 120 },
      { rpm: 3000, power: 180 },
      { rpm: 4000, power: 204 },
      { rpm: 5000, power: 190 }
    ],
    torqueCurve: [
      { rpm: 1000, torque: 250 },
      { rpm: 2000, torque: 450 },
      { rpm: 3000, torque: 500 },
      { rpm: 4000, torque: 480 },
      { rpm: 5000, torque: 420 }
    ]
  },
  {
    id: '6',
    name: 'N20',
    manufacturer: 'BMW',
    type: 'Бензиновый',
    displacement: 2.0,
    power: 245,
    torque: 350,
    cylinders: 4,
    year: 2011,
    fuelConsumption: 7.1,
    compatibleModels: ['320i', '328i', 'X3 28i', 'Z4 28i'],
    pros: ['Динамичный отклик', 'Компактность', 'Хорошая мощность'],
    cons: ['Проблемы с ГРМ', 'Течи масла', 'Короткий ресурс турбины'],
    powerCurve: [
      { rpm: 1000, power: 70 },
      { rpm: 2000, power: 140 },
      { rpm: 3000, power: 200 },
      { rpm: 4000, power: 235 },
      { rpm: 5000, power: 245 },
      { rpm: 6000, power: 240 }
    ],
    torqueCurve: [
      { rpm: 1000, torque: 160 },
      { rpm: 2000, torque: 310 },
      { rpm: 3000, torque: 350 },
      { rpm: 4000, torque: 350 },
      { rpm: 5000, torque: 330 },
      { rpm: 6000, torque: 300 }
    ]
  },
  {
    id: '7',
    name: 'EcoBoost 3.5 V6',
    manufacturer: 'Ford',
    type: 'Бензиновый',
    displacement: 3.5,
    power: 450,
    torque: 691,
    cylinders: 6,
    year: 2016,
    fuelConsumption: 12.4,
    compatibleModels: ['F-150 Raptor', 'GT', 'Explorer ST'],
    pros: ['Мощный крутящий момент', 'Надёжность при правильном обслуживании', 'Отличная динамика'],
    cons: ['Высокий расход топлива', 'Чувствительность к качеству бензина', 'Дорогой ремонт турбин'],
    powerCurve: [
      { rpm: 1000, power: 110 },
      { rpm: 2000, power: 220 },
      { rpm: 3000, power: 330 },
      { rpm: 4000, power: 400 },
      { rpm: 5000, power: 440 },
      { rpm: 6000, power: 450 },
      { rpm: 7000, power: 430 }
    ],
    torqueCurve: [
      { rpm: 1000, torque: 300 },
      { rpm: 2000, torque: 550 },
      { rpm: 3000, torque: 691 },
      { rpm: 4000, torque: 691 },
      { rpm: 5000, torque: 650 },
      { rpm: 6000, torque: 600 },
      { rpm: 7000, torque: 520 }
    ]
  },
  {
    id: '8',
    name: 'K20C1',
    manufacturer: 'Honda',
    type: 'Бензиновый',
    displacement: 2.0,
    power: 320,
    torque: 400,
    cylinders: 4,
    year: 2017,
    fuelConsumption: 8.7,
    compatibleModels: ['Civic Type R FK8'],
    pros: ['Атмосферная отдача', 'VTEC технология', 'Высокая надёжность'],
    cons: ['Узкая применимость', 'Дорогие оригинальные запчасти', 'Требует высокооктановое топливо'],
    powerCurve: [
      { rpm: 1000, power: 80 },
      { rpm: 2000, power: 150 },
      { rpm: 3000, power: 220 },
      { rpm: 4000, power: 270 },
      { rpm: 5000, power: 300 },
      { rpm: 6000, power: 320 },
      { rpm: 7000, power: 315 }
    ],
    torqueCurve: [
      { rpm: 1000, torque: 170 },
      { rpm: 2000, torque: 320 },
      { rpm: 3000, torque: 400 },
      { rpm: 4000, torque: 400 },
      { rpm: 5000, torque: 390 },
      { rpm: 6000, torque: 370 },
      { rpm: 7000, torque: 340 }
    ]
  },
  {
    id: '9',
    name: 'S55',
    manufacturer: 'BMW',
    type: 'Бензиновый',
    displacement: 3.0,
    power: 431,
    torque: 550,
    cylinders: 6,
    year: 2014,
    fuelConsumption: 10.2,
    compatibleModels: ['M3 F80', 'M4 F82', 'M2 Competition'],
    pros: ['Огромный потенциал тюнинга', 'Линейная отдача', 'Надёжность при стоке'],
    cons: ['Проблемы с VANOS', 'Дорогое обслуживание', 'Требует качественное масло'],
    powerCurve: [
      { rpm: 1000, power: 100 },
      { rpm: 2000, power: 190 },
      { rpm: 3000, power: 290 },
      { rpm: 4000, power: 370 },
      { rpm: 5000, power: 410 },
      { rpm: 6000, power: 431 },
      { rpm: 7000, power: 420 }
    ],
    torqueCurve: [
      { rpm: 1000, torque: 220 },
      { rpm: 2000, torque: 420 },
      { rpm: 3000, torque: 550 },
      { rpm: 4000, torque: 550 },
      { rpm: 5000, torque: 540 },
      { rpm: 6000, torque: 510 },
      { rpm: 7000, torque: 470 }
    ]
  },
  {
    id: '10',
    name: 'LS3',
    manufacturer: 'Chevrolet',
    type: 'Бензиновый',
    displacement: 6.2,
    power: 436,
    torque: 583,
    cylinders: 8,
    year: 2008,
    fuelConsumption: 13.8,
    compatibleModels: ['Corvette C6', 'Camaro SS', 'Holden Commodore'],
    pros: ['Огромный тюнинг-потенциал', 'Простота конструкции', 'Доступные запчасти'],
    cons: ['Большой расход топлива', 'Габариты и вес', 'Устаревшая технология'],
    powerCurve: [
      { rpm: 1000, power: 100 },
      { rpm: 2000, power: 200 },
      { rpm: 3000, power: 310 },
      { rpm: 4000, power: 390 },
      { rpm: 5000, power: 425 },
      { rpm: 6000, power: 436 },
      { rpm: 7000, power: 420 }
    ],
    torqueCurve: [
      { rpm: 1000, torque: 280 },
      { rpm: 2000, torque: 480 },
      { rpm: 3000, torque: 583 },
      { rpm: 4000, torque: 583 },
      { rpm: 5000, torque: 570 },
      { rpm: 6000, torque: 540 },
      { rpm: 7000, torque: 500 }
    ]
  },
  {
    id: '11',
    name: 'M270',
    manufacturer: 'Mercedes-Benz',
    type: 'Бензиновый',
    displacement: 1.6,
    power: 156,
    torque: 250,
    cylinders: 4,
    year: 2011,
    fuelConsumption: 5.9,
    compatibleModels: ['A-Class W176', 'B-Class W246', 'CLA C117'],
    pros: ['Экономичность', 'Компактность', 'Низкий налог'],
    cons: ['Проблемы с балансирными валами', 'Течи масла', 'Ограниченный ресурс'],
    powerCurve: [
      { rpm: 1000, power: 45 },
      { rpm: 2000, power: 90 },
      { rpm: 3000, power: 130 },
      { rpm: 4000, power: 150 },
      { rpm: 5000, power: 156 },
      { rpm: 6000, power: 150 }
    ],
    torqueCurve: [
      { rpm: 1000, torque: 120 },
      { rpm: 2000, torque: 220 },
      { rpm: 3000, torque: 250 },
      { rpm: 4000, torque: 250 },
      { rpm: 5000, torque: 240 },
      { rpm: 6000, torque: 210 }
    ]
  },
  {
    id: '12',
    name: 'N55',
    manufacturer: 'BMW',
    type: 'Бензиновый',
    displacement: 3.0,
    power: 306,
    torque: 400,
    cylinders: 6,
    year: 2009,
    fuelConsumption: 8.4,
    compatibleModels: ['335i', '435i', 'X5 35i', 'Z4 35i'],
    pros: ['Хорошая надёжность', 'Один турбокомпрессор', 'Плавная работа'],
    cons: ['VANOS может барахлить', 'Дорогое обслуживание', 'Замена турбины дорогая'],
    powerCurve: [
      { rpm: 1000, power: 75 },
      { rpm: 2000, power: 145 },
      { rpm: 3000, power: 220 },
      { rpm: 4000, power: 280 },
      { rpm: 5000, power: 300 },
      { rpm: 6000, power: 306 },
      { rpm: 7000, power: 295 }
    ],
    torqueCurve: [
      { rpm: 1000, torque: 170 },
      { rpm: 2000, torque: 330 },
      { rpm: 3000, torque: 400 },
      { rpm: 4000, torque: 400 },
      { rpm: 5000, torque: 390 },
      { rpm: 6000, torque: 370 },
      { rpm: 7000, torque: 340 }
    ]
  },
  {
    id: '13',
    name: 'F20C',
    manufacturer: 'Honda',
    type: 'Бензиновый',
    displacement: 2.0,
    power: 250,
    torque: 218,
    cylinders: 4,
    year: 1999,
    fuelConsumption: 9.0,
    compatibleModels: ['S2000 AP1'],
    pros: ['Высокооборотистость (9000 об/мин)', 'Атмосферный характер', 'Надёжность'],
    cons: ['Низкий крутящий момент', 'Редкие запчасти', 'Требует высокие обороты'],
    powerCurve: [
      { rpm: 1000, power: 40 },
      { rpm: 2000, power: 80 },
      { rpm: 3000, power: 130 },
      { rpm: 4000, power: 180 },
      { rpm: 5000, power: 210 },
      { rpm: 6000, power: 235 },
      { rpm: 7000, power: 250 }
    ],
    torqueCurve: [
      { rpm: 1000, torque: 90 },
      { rpm: 2000, torque: 140 },
      { rpm: 3000, torque: 180 },
      { rpm: 4000, torque: 210 },
      { rpm: 5000, torque: 218 },
      { rpm: 6000, torque: 215 },
      { rpm: 7000, torque: 210 }
    ]
  },
  {
    id: '14',
    name: 'Coyote 5.0',
    manufacturer: 'Ford',
    type: 'Бензиновый',
    displacement: 5.0,
    power: 480,
    torque: 570,
    cylinders: 8,
    year: 2018,
    fuelConsumption: 11.8,
    compatibleModels: ['Mustang GT', 'F-150'],
    pros: ['Атмосферный V8', 'Высокие обороты', 'Надёжность'],
    cons: ['Высокий расход', 'Габаритный двигатель', 'Дорогое обслуживание'],
    powerCurve: [
      { rpm: 1000, power: 100 },
      { rpm: 2000, power: 200 },
      { rpm: 3000, power: 310 },
      { rpm: 4000, power: 400 },
      { rpm: 5000, power: 450 },
      { rpm: 6000, power: 480 },
      { rpm: 7000, power: 475 }
    ],
    torqueCurve: [
      { rpm: 1000, torque: 260 },
      { rpm: 2000, torque: 450 },
      { rpm: 3000, torque: 570 },
      { rpm: 4000, torque: 570 },
      { rpm: 5000, torque: 550 },
      { rpm: 6000, torque: 520 },
      { rpm: 7000, torque: 480 }
    ]
  },
  {
    id: '15',
    name: 'RB26DETT',
    manufacturer: 'Nissan',
    type: 'Бензиновый',
    displacement: 2.6,
    power: 280,
    torque: 368,
    cylinders: 6,
    year: 1989,
    fuelConsumption: 12.5,
    compatibleModels: ['Skyline GT-R R32/R33/R34'],
    pros: ['Легендарный статус', 'Огромный тюнинг-потенциал', 'Прочный блок'],
    cons: ['Дорогие и редкие запчасти', 'Высокий расход', 'Керамические турбины хрупкие'],
    powerCurve: [
      { rpm: 1000, power: 70 },
      { rpm: 2000, power: 130 },
      { rpm: 3000, power: 190 },
      { rpm: 4000, power: 240 },
      { rpm: 5000, power: 270 },
      { rpm: 6000, power: 280 },
      { rpm: 7000, power: 275 }
    ],
    torqueCurve: [
      { rpm: 1000, torque: 150 },
      { rpm: 2000, torque: 280 },
      { rpm: 3000, torque: 368 },
      { rpm: 4000, torque: 368 },
      { rpm: 5000, torque: 360 },
      { rpm: 6000, torque: 340 },
      { rpm: 7000, torque: 310 }
    ]
  },
  {
    id: '16',
    name: 'M157',
    manufacturer: 'Mercedes-AMG',
    type: 'Бензиновый',
    displacement: 5.5,
    power: 585,
    torque: 800,
    cylinders: 8,
    year: 2010,
    fuelConsumption: 13.5,
    compatibleModels: ['S63 AMG', 'E63 AMG', 'CLS63 AMG'],
    pros: ['Чудовищная мощность', 'Twin-turbo отдача', 'Плавность работы'],
    cons: ['Огромный расход топлива', 'Очень дорогое обслуживание', 'Сложная электроника'],
    powerCurve: [
      { rpm: 1000, power: 120 },
      { rpm: 2000, power: 250 },
      { rpm: 3000, power: 390 },
      { rpm: 4000, power: 500 },
      { rpm: 5000, power: 560 },
      { rpm: 6000, power: 585 },
      { rpm: 7000, power: 570 }
    ],
    torqueCurve: [
      { rpm: 1000, torque: 350 },
      { rpm: 2000, torque: 650 },
      { rpm: 3000, torque: 800 },
      { rpm: 4000, torque: 800 },
      { rpm: 5000, torque: 780 },
      { rpm: 6000, torque: 740 },
      { rpm: 7000, torque: 680 }
    ]
  }
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedManufacturer, setSelectedManufacturer] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedEngine, setSelectedEngine] = useState<Engine | null>(null);
  const [compareEngines, setCompareEngines] = useState<string[]>([]);

  const manufacturers = ['all', ...Array.from(new Set(engines.map(e => e.manufacturer)))];
  const types = ['all', ...Array.from(new Set(engines.map(e => e.type)))];

  const filteredEngines = engines.filter(engine => {
    const matchesSearch = engine.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         engine.manufacturer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesManufacturer = selectedManufacturer === 'all' || engine.manufacturer === selectedManufacturer;
    const matchesType = selectedType === 'all' || engine.type === selectedType;
    return matchesSearch && matchesManufacturer && matchesType;
  });

  const toggleCompare = (engineId: string) => {
    setCompareEngines(prev => {
      if (prev.includes(engineId)) {
        return prev.filter(id => id !== engineId);
      }
      if (prev.length >= 3) return prev;
      return [...prev, engineId];
    });
  };

  const compareData = engines.filter(e => compareEngines.includes(e.id));

  return (
    <div className="min-h-screen bg-background font-['Roboto_Mono']">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-primary font-['Montserrat'] tracking-tight">
                ENGINE DATABASE
              </h1>
              <p className="text-muted-foreground text-sm mt-1">Технический каталог автомобильных двигателей</p>
            </div>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                className="gap-2"
                disabled={compareEngines.length === 0}
                onClick={() => {
                  const section = document.getElementById('compare-section');
                  section?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Icon name="GitCompare" size={16} />
                Сравнить ({compareEngines.length})
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Поиск по названию или производителю..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-background/50"
                />
              </div>
            </div>
            <Select value={selectedManufacturer} onValueChange={setSelectedManufacturer}>
              <SelectTrigger className="bg-background/50">
                <SelectValue placeholder="Производитель" />
              </SelectTrigger>
              <SelectContent>
                {manufacturers.map(m => (
                  <SelectItem key={m} value={m}>
                    {m === 'all' ? 'Все производители' : m}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="bg-background/50">
                <SelectValue placeholder="Тип двигателя" />
              </SelectTrigger>
              <SelectContent>
                {types.map(t => (
                  <SelectItem key={t} value={t}>
                    {t === 'all' ? 'Все типы' : t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredEngines.map((engine) => (
            <Card 
              key={engine.id} 
              className="group hover:border-primary transition-all duration-300 bg-card/80 backdrop-blur relative overflow-hidden cursor-pointer"
              onClick={() => setSelectedEngine(engine)}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
              
              <div className="p-6 relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-foreground font-['Montserrat']">{engine.name}</h3>
                      <Badge variant="outline" className="text-xs">{engine.year}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{engine.manufacturer}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={compareEngines.includes(engine.id)}
                      onCheckedChange={() => toggleCompare(engine.id)}
                      onClick={(e) => e.stopPropagation()}
                      disabled={compareEngines.length >= 3 && !compareEngines.includes(engine.id)}
                    />
                  </div>
                </div>

                <Badge className="mb-4">{engine.type}</Badge>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-background/50 p-3 rounded border border-border">
                    <div className="text-2xl font-bold text-primary">{engine.power}</div>
                    <div className="text-xs text-muted-foreground">л.с.</div>
                  </div>
                  <div className="bg-background/50 p-3 rounded border border-border">
                    <div className="text-2xl font-bold text-accent">{engine.torque}</div>
                    <div className="text-xs text-muted-foreground">Нм</div>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between border-b border-border/50 pb-2">
                    <span className="text-muted-foreground">Объём:</span>
                    <span className="font-semibold">{engine.displacement}L</span>
                  </div>
                  <div className="flex justify-between border-b border-border/50 pb-2">
                    <span className="text-muted-foreground">Цилиндров:</span>
                    <span className="font-semibold">{engine.cylinders}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Расход:</span>
                    <span className="font-semibold">{engine.fuelConsumption}L/100км</span>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedEngine(engine);
                  }}
                >
                  Подробнее
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {compareEngines.length > 0 && (
          <div id="compare-section" className="mb-12">
            <h2 className="text-2xl font-bold mb-6 font-['Montserrat'] flex items-center gap-2">
              <Icon name="GitCompare" size={24} className="text-primary" />
              Сравнение двигателей
            </h2>
            <Card className="overflow-x-auto">
              <div className="p-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 text-muted-foreground font-medium">Параметр</th>
                      {compareData.map(engine => (
                        <th key={engine.id} className="text-left py-3 px-4">
                          <div className="font-['Montserrat'] font-semibold">{engine.name}</div>
                          <div className="text-xs text-muted-foreground font-normal">{engine.manufacturer}</div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="py-3 text-muted-foreground">Тип</td>
                      {compareData.map(e => <td key={e.id} className="py-3 px-4">{e.type}</td>)}
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 text-muted-foreground">Мощность</td>
                      {compareData.map(e => (
                        <td key={e.id} className="py-3 px-4 font-semibold text-primary">{e.power} л.с.</td>
                      ))}
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 text-muted-foreground">Крутящий момент</td>
                      {compareData.map(e => (
                        <td key={e.id} className="py-3 px-4 font-semibold text-accent">{e.torque} Нм</td>
                      ))}
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 text-muted-foreground">Объём</td>
                      {compareData.map(e => <td key={e.id} className="py-3 px-4">{e.displacement}L</td>)}
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 text-muted-foreground">Цилиндры</td>
                      {compareData.map(e => <td key={e.id} className="py-3 px-4">{e.cylinders}</td>)}
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 text-muted-foreground">Расход топлива</td>
                      {compareData.map(e => <td key={e.id} className="py-3 px-4">{e.fuelConsumption} L/100км</td>)}
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Год выпуска</td>
                      {compareData.map(e => <td key={e.id} className="py-3 px-4">{e.year}</td>)}
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        )}
      </main>

      <Dialog open={selectedEngine !== null} onOpenChange={() => setSelectedEngine(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedEngine && (
            <>
              <DialogHeader>
                <DialogTitle className="font-['Montserrat'] text-2xl flex items-center gap-3">
                  {selectedEngine.name}
                  <Badge variant="outline">{selectedEngine.year}</Badge>
                </DialogTitle>
                <p className="text-muted-foreground">{selectedEngine.manufacturer}</p>
              </DialogHeader>

              <Tabs defaultValue="specs" className="mt-4">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="specs">Характеристики</TabsTrigger>
                  <TabsTrigger value="performance">Графики</TabsTrigger>
                  <TabsTrigger value="models">Модели</TabsTrigger>
                  <TabsTrigger value="review">Плюсы/Минусы</TabsTrigger>
                </TabsList>

                <TabsContent value="specs" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="p-4 bg-primary/10 border-primary">
                      <div className="text-3xl font-bold text-primary mb-1">{selectedEngine.power} л.с.</div>
                      <div className="text-sm text-muted-foreground">Максимальная мощность</div>
                    </Card>
                    <Card className="p-4 bg-accent/10 border-accent">
                      <div className="text-3xl font-bold text-accent mb-1">{selectedEngine.torque} Нм</div>
                      <div className="text-sm text-muted-foreground">Крутящий момент</div>
                    </Card>
                  </div>

                  <Card className="p-6">
                    <h3 className="font-semibold mb-4 font-['Montserrat']">Технические данные</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between py-2 border-b border-border/50">
                        <span className="text-muted-foreground">Тип двигателя:</span>
                        <span className="font-semibold">{selectedEngine.type}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border/50">
                        <span className="text-muted-foreground">Рабочий объём:</span>
                        <span className="font-semibold">{selectedEngine.displacement} L</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border/50">
                        <span className="text-muted-foreground">Количество цилиндров:</span>
                        <span className="font-semibold">{selectedEngine.cylinders}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border/50">
                        <span className="text-muted-foreground">Удельная мощность:</span>
                        <span className="font-semibold">{(selectedEngine.power / selectedEngine.displacement).toFixed(1)} л.с./L</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-muted-foreground">Расход топлива (смеш.):</span>
                        <span className="font-semibold">{selectedEngine.fuelConsumption} L/100км</span>
                      </div>
                    </div>
                  </Card>
                </TabsContent>

                <TabsContent value="performance">
                  <Card className="p-6">
                    <h3 className="font-semibold mb-4 font-['Montserrat']">График мощности</h3>
                    <div className="relative h-64 border border-border rounded bg-background/50 p-4">
                      <svg viewBox="0 0 700 240" className="w-full h-full">
                        <line x1="50" y1="200" x2="650" y2="200" stroke="currentColor" strokeWidth="1" className="text-border" />
                        <line x1="50" y1="20" x2="50" y2="200" stroke="currentColor" strokeWidth="1" className="text-border" />
                        
                        {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
                          <g key={i}>
                            <line x1={50 + i * 85.7} y1="200" x2={50 + i * 85.7} y2="205" stroke="currentColor" strokeWidth="1" className="text-border" />
                            <text x={50 + i * 85.7} y="220" textAnchor="middle" fontSize="10" fill="currentColor" className="text-muted-foreground">
                              {i * 1000}
                            </text>
                          </g>
                        ))}
                        
                        <polyline
                          points={selectedEngine.powerCurve.map((p, i) => 
                            `${50 + (p.rpm / 7000) * 600},${200 - (p.power / selectedEngine.power) * 180}`
                          ).join(' ')}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          className="text-primary"
                        />
                        
                        {selectedEngine.powerCurve.map((p, i) => (
                          <circle
                            key={i}
                            cx={50 + (p.rpm / 7000) * 600}
                            cy={200 - (p.power / selectedEngine.power) * 180}
                            r="4"
                            fill="currentColor"
                            className="text-primary"
                          />
                        ))}
                        
                        <text x="10" y="110" fontSize="12" fill="currentColor" className="text-muted-foreground" transform="rotate(-90, 10, 110)">
                          Мощность (л.с.)
                        </text>
                        <text x="350" y="238" fontSize="12" textAnchor="middle" fill="currentColor" className="text-muted-foreground">
                          Обороты (об/мин)
                        </text>
                      </svg>
                    </div>
                  </Card>

                  <Card className="p-6 mt-4">
                    <h3 className="font-semibold mb-4 font-['Montserrat']">График крутящего момента</h3>
                    <div className="relative h-64 border border-border rounded bg-background/50 p-4">
                      <svg viewBox="0 0 700 240" className="w-full h-full">
                        <line x1="50" y1="200" x2="650" y2="200" stroke="currentColor" strokeWidth="1" className="text-border" />
                        <line x1="50" y1="20" x2="50" y2="200" stroke="currentColor" strokeWidth="1" className="text-border" />
                        
                        {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
                          <g key={i}>
                            <line x1={50 + i * 85.7} y1="200" x2={50 + i * 85.7} y2="205" stroke="currentColor" strokeWidth="1" className="text-border" />
                            <text x={50 + i * 85.7} y="220" textAnchor="middle" fontSize="10" fill="currentColor" className="text-muted-foreground">
                              {i * 1000}
                            </text>
                          </g>
                        ))}
                        
                        <polyline
                          points={selectedEngine.torqueCurve.map((p, i) => 
                            `${50 + (p.rpm / 7000) * 600},${200 - (p.torque / selectedEngine.torque) * 180}`
                          ).join(' ')}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          className="text-accent"
                        />
                        
                        {selectedEngine.torqueCurve.map((p, i) => (
                          <circle
                            key={i}
                            cx={50 + (p.rpm / 7000) * 600}
                            cy={200 - (p.torque / selectedEngine.torque) * 180}
                            r="4"
                            fill="currentColor"
                            className="text-accent"
                          />
                        ))}
                        
                        <text x="10" y="110" fontSize="12" fill="currentColor" className="text-muted-foreground" transform="rotate(-90, 10, 110)">
                          Крутящий момент (Нм)
                        </text>
                        <text x="350" y="238" fontSize="12" textAnchor="middle" fill="currentColor" className="text-muted-foreground">
                          Обороты (об/мин)
                        </text>
                      </svg>
                    </div>
                  </Card>
                </TabsContent>

                <TabsContent value="models">
                  <Card className="p-6">
                    <h3 className="font-semibold mb-4 font-['Montserrat']">Совместимые модели автомобилей</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {selectedEngine.compatibleModels.map((model, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-3 bg-background/50 rounded border border-border">
                          <Icon name="Car" size={18} className="text-primary" />
                          <span>{model}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </TabsContent>

                <TabsContent value="review" className="space-y-4">
                  <Card className="p-6 border-green-500/50 bg-green-500/5">
                    <h3 className="font-semibold mb-3 font-['Montserrat'] flex items-center gap-2">
                      <Icon name="ThumbsUp" size={18} className="text-green-500" />
                      Преимущества
                    </h3>
                    <ul className="space-y-2">
                      {selectedEngine.pros.map((pro, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Icon name="Check" size={16} className="text-green-500 mt-1 flex-shrink-0" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>

                  <Card className="p-6 border-red-500/50 bg-red-500/5">
                    <h3 className="font-semibold mb-3 font-['Montserrat'] flex items-center gap-2">
                      <Icon name="ThumbsDown" size={18} className="text-red-500" />
                      Недостатки
                    </h3>
                    <ul className="space-y-2">
                      {selectedEngine.cons.map((con, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Icon name="X" size={16} className="text-red-500 mt-1 flex-shrink-0" />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </TabsContent>
              </Tabs>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;