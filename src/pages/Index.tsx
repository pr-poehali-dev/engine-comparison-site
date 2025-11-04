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
import { engines } from '@/data/engines';
import type { Engine } from '@/data/engines';

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
                      {compareData.map(e => <td key={e.id} className="py-3 px-4">{e.displacement} L</td>)}
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 text-muted-foreground">Цилиндры</td>
                      {compareData.map(e => <td key={e.id} className="py-3 px-4">{e.cylinders}</td>)}
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 text-muted-foreground">Год выпуска</td>
                      {compareData.map(e => <td key={e.id} className="py-3 px-4">{e.year}</td>)}
                    </tr>
                    <tr>
                      <td className="py-3 text-muted-foreground">Расход</td>
                      {compareData.map(e => <td key={e.id} className="py-3 px-4">{e.fuelConsumption} L/100км</td>)}
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        )}
      </main>

      {selectedEngine && (
        <Dialog open={!!selectedEngine} onOpenChange={() => setSelectedEngine(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-['Montserrat'] flex items-center gap-3">
                <span>{selectedEngine.manufacturer} {selectedEngine.name}</span>
                <Badge>{selectedEngine.year}</Badge>
              </DialogTitle>
            </DialogHeader>

            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Обзор</TabsTrigger>
                <TabsTrigger value="performance">Характеристики</TabsTrigger>
                <TabsTrigger value="models">Модели</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">{selectedEngine.power}</div>
                      <div className="text-sm text-muted-foreground">Мощность (л.с.)</div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-accent mb-2">{selectedEngine.torque}</div>
                      <div className="text-sm text-muted-foreground">Крутящий момент (Нм)</div>
                    </div>
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
                      <span className="text-muted-foreground">Клапанов:</span>
                      <span className="font-semibold">{selectedEngine.valves}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border/50">
                      <span className="text-muted-foreground">Степень сжатия:</span>
                      <span className="font-semibold">{selectedEngine.compression}</span>
                    </div>
                    {selectedEngine.boost && (
                      <div className="flex justify-between py-2 border-b border-border/50">
                        <span className="text-muted-foreground">Давление наддува:</span>
                        <span className="font-semibold">{selectedEngine.boost}</span>
                      </div>
                    )}
                    <div className="flex justify-between py-2 border-b border-border/50">
                      <span className="text-muted-foreground">Вес двигателя:</span>
                      <span className="font-semibold">{selectedEngine.weight} кг</span>
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

                <Card className="p-6">
                  <h3 className="font-semibold mb-4 font-['Montserrat'] flex items-center gap-2">
                    <Icon name="MessageSquare" size={20} />
                    Отзывы владельцев
                  </h3>
                  <div className="space-y-4">
                    {selectedEngine.reviews.map((review, idx) => (
                      <div key={idx} className="border-b border-border/50 last:border-0 pb-4 last:pb-0">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-sm">{review.author}</span>
                          <div className="flex gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Icon 
                                key={i} 
                                name="Star" 
                                size={14} 
                                className={i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{review.text}</p>
                      </div>
                    ))}
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

                <div className="grid grid-cols-2 gap-4 mt-4">
                  <Card className="p-6">
                    <h3 className="font-semibold mb-4 font-['Montserrat'] text-green-600">Преимущества</h3>
                    <ul className="space-y-2">
                      {selectedEngine.pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Icon name="Plus" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                  <Card className="p-6">
                    <h3 className="font-semibold mb-4 font-['Montserrat'] text-red-600">Недостатки</h3>
                    <ul className="space-y-2">
                      {selectedEngine.cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Icon name="Minus" size={16} className="text-red-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="models">
                <Card className="p-6">
                  <h3 className="font-semibold mb-4 font-['Montserrat']">Совместимые модели</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedEngine.compatibleModels.map((model, i) => (
                      <Badge key={i} variant="secondary" className="text-sm">
                        {model}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Index;