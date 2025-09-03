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
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
          
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge className="bg-green-500">Скидка -10%</Badge>
                <Icon name="ShoppingCart" size={24} className="text-primary" />
              </div>
              <CardTitle className="text-2xl">Оптовая скидка</CardTitle>
              <CardDescription className="text-lg">
                При заказе от 5 веников
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Закажите 5 или больше веников любого вида и получите скидку 10% на весь заказ. 
                Скидка применяется автоматически при добавлении товаров в корзину.
              </p>
              <div className="bg-background border border-dashed border-green-500 rounded-lg p-4 mb-4">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Условие:</p>
                  <p className="text-xl font-bold text-green-600">5+ веников = -10%</p>
                </div>
              </div>
              <Link to="/catalog">
                <Button className="w-full" variant="outline">Перейти в каталог</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Promo;