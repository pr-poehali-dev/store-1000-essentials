import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const categories = [
  { id: 'all', name: 'Все товары', icon: 'Sparkles' },
  { id: 'home', name: 'Для дома', icon: 'Home' },
  { id: 'kitchen', name: 'Для кухни', icon: 'CookingPot' },
  { id: 'office', name: 'Для офиса', icon: 'Briefcase' },
  { id: 'hobby', name: 'Хобби', icon: 'Palette' },
];

const products = [
  { id: 1, name: 'Набор магнитов на холодильник', price: 299, category: 'home', discount: 20, emoji: '🧲' },
  { id: 2, name: 'Силиконовая форма для льда', price: 199, category: 'kitchen', discount: 0, emoji: '🧊' },
  { id: 3, name: 'Стикеры-закладки цветные', price: 149, category: 'office', discount: 15, emoji: '📌' },
  { id: 4, name: 'Мини-органайзер для мелочей', price: 249, category: 'home', discount: 0, emoji: '🗂️' },
  { id: 5, name: 'Набор цветных скрепок', price: 99, category: 'office', discount: 0, emoji: '📎' },
  { id: 6, name: 'Кисточка для выпечки силикон', price: 179, category: 'kitchen', discount: 25, emoji: '🖌️' },
  { id: 7, name: 'Блокнот в горошек А6', price: 129, category: 'office', discount: 10, emoji: '📒' },
  { id: 8, name: 'Набор помпонов для творчества', price: 219, category: 'hobby', discount: 0, emoji: '🎨' },
  { id: 9, name: 'Подставка под телефон складная', price: 169, category: 'office', discount: 0, emoji: '📱' },
  { id: 10, name: 'Мини-вентилятор USB', price: 349, category: 'office', discount: 30, emoji: '💨' },
  { id: 11, name: 'Формочки для печенья 6 шт', price: 279, category: 'kitchen', discount: 0, emoji: '🍪' },
  { id: 12, name: 'Светодиодная гирлянда 3м', price: 399, category: 'home', discount: 20, emoji: '✨' },
];

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeSection, setActiveSection] = useState('catalog');

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-blue-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-4xl animate-bounce-subtle">🛍️</div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  1000 мелочей
                </h1>
                <p className="text-sm text-muted-foreground">Всё для вашего уюта</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-2">
              <Button 
                variant={activeSection === 'catalog' ? 'default' : 'ghost'} 
                onClick={() => setActiveSection('catalog')}
                className="rounded-full"
              >
                <Icon name="Store" size={18} className="mr-2" />
                Каталог
              </Button>
              <Button 
                variant={activeSection === 'sales' ? 'default' : 'ghost'} 
                onClick={() => setActiveSection('sales')}
                className="rounded-full"
              >
                <Icon name="Percent" size={18} className="mr-2" />
                Акции
              </Button>
              <Button 
                variant={activeSection === 'delivery' ? 'default' : 'ghost'} 
                onClick={() => setActiveSection('delivery')}
                className="rounded-full"
              >
                <Icon name="Truck" size={18} className="mr-2" />
                Доставка
              </Button>
              <Button 
                variant={activeSection === 'contacts' ? 'default' : 'ghost'} 
                onClick={() => setActiveSection('contacts')}
                className="rounded-full"
              >
                <Icon name="Phone" size={18} className="mr-2" />
                Контакты
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {activeSection === 'catalog' && (
        <main className="container mx-auto px-4 py-8 animate-fade-in">
          <section className="mb-12 text-center">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Маленькие цены, большая радость! 🎉
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Более 1000 полезных товаров для дома, офиса и творчества
            </p>
            
            <div className="max-w-xl mx-auto relative">
              <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Поиск по названию товара..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg rounded-full border-2 focus:border-primary transition-all"
              />
            </div>
          </section>

          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="mb-8">
            <TabsList className="grid grid-cols-5 gap-2 bg-transparent h-auto p-0">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex flex-col items-center gap-2 p-4 rounded-2xl border-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-primary/10 transition-all hover:scale-105"
                >
                  <Icon name={category.icon} size={28} />
                  <span className="text-sm font-semibold">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <Card 
                key={product.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary rounded-3xl animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardHeader className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 pb-4">
                  <div className="flex items-start justify-between">
                    <div className="text-6xl mb-2">{product.emoji}</div>
                    {product.discount > 0 && (
                      <Badge className="bg-destructive text-destructive-foreground font-bold text-lg px-3 py-1 rounded-full">
                        -{product.discount}%
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg leading-tight">{product.name}</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="flex items-baseline gap-2">
                    {product.discount > 0 ? (
                      <>
                        <span className="text-3xl font-bold text-primary">
                          {Math.round(product.price * (1 - product.discount / 100))} ₽
                        </span>
                        <span className="text-lg text-muted-foreground line-through">
                          {product.price} ₽
                        </span>
                      </>
                    ) : (
                      <span className="text-3xl font-bold text-primary">{product.price} ₽</span>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full rounded-full font-semibold text-base h-12 hover:scale-105 transition-transform">
                    <Icon name="ShoppingCart" size={20} className="mr-2" />
                    В корзину
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-8xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-2">Ничего не найдено</h3>
              <p className="text-muted-foreground">Попробуйте изменить поисковый запрос</p>
            </div>
          )}
        </main>
      )}

      {activeSection === 'sales' && (
        <main className="container mx-auto px-4 py-12 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-8xl mb-4">🎁</div>
              <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Специальные акции
              </h2>
              <p className="text-xl text-muted-foreground">Выгодные предложения для вас!</p>
            </div>

            <div className="grid gap-6">
              <Card className="border-2 border-primary rounded-3xl overflow-hidden hover:shadow-2xl transition-all">
                <CardHeader className="bg-gradient-to-r from-primary to-accent text-white p-8">
                  <CardTitle className="text-3xl flex items-center gap-3">
                    <span className="text-5xl">🔥</span>
                    Скидки до 30% на товары для дома
                  </CardTitle>
                  <CardDescription className="text-white/90 text-lg mt-2">
                    Действует до конца месяца
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-secondary rounded-3xl overflow-hidden hover:shadow-2xl transition-all">
                <CardHeader className="bg-gradient-to-r from-secondary to-primary text-white p-8">
                  <CardTitle className="text-3xl flex items-center gap-3">
                    <span className="text-5xl">💝</span>
                    3 товара по цене 2
                  </CardTitle>
                  <CardDescription className="text-white/90 text-lg mt-2">
                    На товары из раздела "Для офиса"
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-accent rounded-3xl overflow-hidden hover:shadow-2xl transition-all">
                <CardHeader className="bg-gradient-to-r from-accent to-secondary text-white p-8">
                  <CardTitle className="text-3xl flex items-center gap-3">
                    <span className="text-5xl">🚚</span>
                    Бесплатная доставка
                  </CardTitle>
                  <CardDescription className="text-white/90 text-lg mt-2">
                    При заказе от 1000 рублей
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </main>
      )}

      {activeSection === 'delivery' && (
        <main className="container mx-auto px-4 py-12 animate-fade-in">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-8xl mb-4">📦</div>
              <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Доставка и оплата
              </h2>
            </div>

            <div className="space-y-6">
              <Card className="rounded-3xl border-2 hover:border-primary transition-all">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Icon name="Truck" size={32} className="text-primary" />
                    Способы доставки
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-lg">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🏃</div>
                    <div>
                      <p className="font-semibold">Курьерская доставка</p>
                      <p className="text-muted-foreground">По Москве — 250 ₽, 1-2 дня</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">📮</div>
                    <div>
                      <p className="font-semibold">Почта России</p>
                      <p className="text-muted-foreground">По всей России — от 200 ₽, 5-14 дней</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🏪</div>
                    <div>
                      <p className="font-semibold">Пункт выдачи</p>
                      <p className="text-muted-foreground">Более 500 точек — 150 ₽, 2-3 дня</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border-2 hover:border-accent transition-all">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Icon name="CreditCard" size={32} className="text-accent" />
                    Способы оплаты
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-lg">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">💳</div>
                    <div>
                      <p className="font-semibold">Банковской картой онлайн</p>
                      <p className="text-muted-foreground">Visa, MasterCard, МИР</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">💵</div>
                    <div>
                      <p className="font-semibold">Наличными курьеру</p>
                      <p className="text-muted-foreground">При получении заказа</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      )}

      {activeSection === 'contacts' && (
        <main className="container mx-auto px-4 py-12 animate-fade-in">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-8xl mb-4">📞</div>
              <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                Контакты
              </h2>
              <p className="text-xl text-muted-foreground">Мы всегда на связи!</p>
            </div>

            <Card className="rounded-3xl border-2 border-primary">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-primary/5 hover:bg-primary/10 transition-all">
                  <Icon name="Phone" size={32} className="text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Телефон</p>
                    <p className="text-2xl font-bold">8 (800) 555-10-00</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/5 hover:bg-secondary/10 transition-all">
                  <Icon name="Mail" size={32} className="text-secondary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-2xl font-bold">info@1000melochey.ru</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-accent/5 hover:bg-accent/10 transition-all">
                  <Icon name="MapPin" size={32} className="text-accent" />
                  <div>
                    <p className="text-sm text-muted-foreground">Адрес</p>
                    <p className="text-xl font-bold">г. Москва, ул. Примерная, д. 1</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-primary/5 hover:bg-primary/10 transition-all">
                  <Icon name="Clock" size={32} className="text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Режим работы</p>
                    <p className="text-xl font-bold">Пн-Вс: 9:00 - 21:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      )}

      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <p className="text-lg">© 2024 1000 мелочей. Всё для вашего уюта 🏡</p>
        </div>
      </footer>
    </div>
  );
}
