import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 text-primary">О компании ЭкоВеники</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Мы занимаемся производством натуральных веников для бани уже более 15 лет. 
            Наша миссия — сохранить традиции русской бани и подарить вам незабываемые впечатления.
          </p>
        </div>

        {/* Our Story */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Наша история</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Компания ЭкоВеники была основана в 2009 году семьей Петровых, 
                  которая на протяжении нескольких поколений занималась заготовкой банных веников.
                </p>
                <p>
                  Начав с небольшого семейного бизнеса, мы постепенно выросли в одного из 
                  ведущих производителей натуральных банных принадлежностей в России.
                </p>
                <p>
                  Сегодня наши веники поставляются в более чем 50 городов России, 
                  и мы продолжаем расширять географию доставки.
                </p>
              </div>
            </div>
            <div className="bg-primary/5 rounded-lg p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">городов доставки</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                  <div className="text-sm text-muted-foreground">довольных клиентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">экологичность</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Наши ценности</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  🌿
                </div>
                <CardTitle className="text-lg">Экологичность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Используем только натуральные материалы и экологичные методы производства
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  ⚡
                </div>
                <CardTitle className="text-lg">Качество</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Строгий контроль качества на всех этапах от заготовки до доставки
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  🤝
                </div>
                <CardTitle className="text-lg">Надежность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Работаем честно и выполняем все обязательства перед клиентами
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  💚
                </div>
                <CardTitle className="text-lg">Традиции</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Сохраняем и передаем традиции русской бани новым поколениям
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Production Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Процесс производства</h2>
          <div className="space-y-8">
            <div className="flex items-center space-x-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Заготовка сырья</h3>
                <p className="text-muted-foreground">
                  Собираем ветки только в экологически чистых районах в оптимальное время года
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Сортировка и отбор</h3>
                <p className="text-muted-foreground">
                  Тщательно отбираем лучшие ветки, удаляем поврежденные и некачественные
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Формирование веников</h3>
                <p className="text-muted-foreground">
                  Опытные мастера вручную собирают веники, обеспечивая правильную форму и плотность
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Сушка и упаковка</h3>
                <p className="text-muted-foreground">
                  Естественная сушка в специальных помещениях и экологичная упаковка для транспортировки
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Наша команда</h2>
          <div className="text-center">
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              В нашей команде работают опытные специалисты, которые искренне любят свое дело 
              и стремятся создавать продукцию высочайшего качества.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    👨‍💼
                  </div>
                  <h3 className="font-semibold mb-2">Петров Иван</h3>
                  <p className="text-sm text-muted-foreground">Основатель и директор</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    👩‍🔬
                  </div>
                  <h3 className="font-semibold mb-2">Петрова Анна</h3>
                  <p className="text-sm text-muted-foreground">Контроль качества</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    👨‍🏭
                  </div>
                  <h3 className="font-semibold mb-2">Сидоров Михаил</h3>
                  <p className="text-sm text-muted-foreground">Мастер-заготовщик</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;