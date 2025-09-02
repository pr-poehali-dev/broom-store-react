import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6 text-primary">
            Натуральные веники для бани
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Отборные веники из экологически чистых материалов. 
            Традиционное качество, современный сервис.
          </p>
          <Link to="/catalog">
            <Button size="lg" className="animate-fade-in">
              Перейти в каталог
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  🌱
                </div>
                <CardTitle>100% Натурально</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Все наши веники изготовлены из экологически чистых материалов без химических добавок
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  🏆
                </div>
                <CardTitle>Премиум качество</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Тщательный отбор сырья и контроль качества на каждом этапе производства
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  🚚
                </div>
                <CardTitle>Быстрая доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Доставляем по всей России в специальной упаковке для сохранения свежести
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Готовы к банному сезону?</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
            Выберите лучшие веники для незабываемого банного опыта
          </p>
          <div className="space-x-4">
            <Link to="/catalog">
              <Button size="lg">
                Посмотреть каталог
              </Button>
            </Link>
            <Link to="/promo">
              <Button size="lg" variant="outline">
                Узнать об акциях
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;