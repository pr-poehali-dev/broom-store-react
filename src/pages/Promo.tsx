import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Promo = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6 text-primary">Специальные предложения</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Выгодные акции и скидки на лучшие веники для бани
          </p>
        </div>

        {/* Main Promotions */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge className="bg-red-500">Скидка -15%</Badge>
                <Icon name="Gift" size={24} className="text-primary" />
              </div>
              <CardTitle className="text-2xl">Скидка для новых клиентов</CardTitle>
              <CardDescription className="text-lg">
                Первый заказ со скидкой 15%
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Новым клиентам дарим скидку 15% на любой веник из каталога. 
                Промокод действует на весь ассортимент без ограничений.
              </p>
              <div className="bg-background border border-dashed border-primary rounded-lg p-4 mb-4">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Промокод:</p>
                  <p className="text-2xl font-bold text-primary">ПЕРВЫЙ15</p>
                </div>
              </div>
              <Link to="/catalog">
                <Button className="w-full">Выбрать веник</Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-accent/10 to-secondary/10 border-accent/20 hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge className="bg-green-500">Комплект</Badge>
                <Icon name="Package" size={24} className="text-primary" />
              </div>
              <CardTitle className="text-2xl">Банный комплект</CardTitle>
              <CardDescription className="text-lg">
                3 веника по цене 2х
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Комплект из березового, дубового и эвкалиптового веников. 
                Идеально подходит для полноценного банного опыта.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span>Березовый веник</span>
                  <span className="line-through text-muted-foreground">850 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span>Дубовый веник</span>
                  <span className="line-through text-muted-foreground">1200 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span>Эвкалиптовый веник</span>
                  <span className="text-green-600 font-bold">БЕСПЛАТНО</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Итого:</span>
                    <span className="text-primary">2050 ₽</span>
                  </div>
                </div>
              </div>
              <Button className="w-full" variant="outline">Заказать комплект</Button>
            </CardContent>
          </Card>
        </div>

        {/* Seasonal Offers */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Сезонные предложения</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  ❄️
                </div>
                <CardTitle className="text-center">Зимняя акция</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Скидка 20% на хвойные веники в зимние месяцы
                </p>
                <Badge variant="outline">До 28 февраля</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  🌸
                </div>
                <CardTitle className="text-center">Весеннее обновление</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Липовые веники со скидкой 10% в весенний период
                </p>
                <Badge variant="outline">Март - Май</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  ☀️
                </div>
                <CardTitle className="text-center">Летний марафон</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Бесплатная доставка на все заказы летом
                </p>
                <Badge variant="outline">Июнь - Август</Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Loyalty Program */}
        <section className="mb-12">
          <div className="bg-primary/5 rounded-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Программа лояльности</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Покупайте веники и получайте бонусы за каждую покупку
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 text-center">
              <Card>
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Star" size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Новичок</h3>
                  <p className="text-sm text-muted-foreground">
                    5% кешбэка с каждой покупки
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Award" size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Знаток</h3>
                  <p className="text-sm text-muted-foreground">
                    7% кешбэка + скидка на доставку
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Crown" size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Эксперт</h3>
                  <p className="text-sm text-muted-foreground">
                    10% кешбэка + бесплатная доставка
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Gem" size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Мастер</h3>
                  <p className="text-sm text-muted-foreground">
                    15% кешбэка + эксклюзивные товары
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Подпишитесь на новости</CardTitle>
              <CardDescription>
                Узнавайте первыми о новых акциях и специальных предложениях
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4 mb-4">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="flex-1 px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button>
                  <Icon name="Mail" size={16} className="mr-2" />
                  Подписаться
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Мы не передаем ваши данные третьим лицам и не рассылаем спам
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Promo;