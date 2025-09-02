import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6 text-primary">Контакты</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Свяжитесь с нами любым удобным способом. Мы всегда готовы помочь!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Наши контакты</h2>
            
            <div className="space-y-6">
              {/* Phone */}
              <Card>
                <CardContent className="flex items-center space-x-4 pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <p className="text-muted-foreground">8 (800) 555-35-35</p>
                    <Badge variant="outline" className="mt-2">Бесплатно по России</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Email */}
              <Card>
                <CardContent className="flex items-center space-x-4 pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@ekoveniks.ru</p>
                    <p className="text-muted-foreground">support@ekoveniks.ru</p>
                  </div>
                </CardContent>
              </Card>

              {/* Address */}
              <Card>
                <CardContent className="flex items-center space-x-4 pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Адрес офиса</h3>
                    <p className="text-muted-foreground">Москва, ул. Банная, д. 15, офис 301</p>
                    <p className="text-muted-foreground">Станция метро: Сокольники</p>
                  </div>
                </CardContent>
              </Card>

              {/* Working Hours */}
              <Card>
                <CardContent className="flex items-center space-x-4 pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Режим работы</h3>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                    <p className="text-muted-foreground">Сб: 10:00 - 16:00</p>
                    <p className="text-muted-foreground">Вс: выходной</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Мы в социальных сетях</h3>
              <div className="flex space-x-4">
                <Button variant="outline" size="lg">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  VKontakte
                </Button>
                <Button variant="outline" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Telegram
                </Button>
                <Button variant="outline" size="lg">
                  <Icon name="Users" size={20} className="mr-2" />
                  Одноклассники
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Напишите нам</CardTitle>
                <CardDescription>
                  Заполните форму, и мы свяжемся с вами в течение часа
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Имя *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Телефон *
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="+7 (999) 123-45-67"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Тема обращения
                    </label>
                    <select className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                      <option>Вопрос о товаре</option>
                      <option>Статус заказа</option>
                      <option>Доставка</option>
                      <option>Возврат/обмен</option>
                      <option>Сотрудничество</option>
                      <option>Другое</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Сообщение *
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Опишите ваш вопрос подробнее..."
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="privacy"
                      required
                      className="mt-1"
                    />
                    <label htmlFor="privacy" className="text-sm text-muted-foreground">
                      Я согласен на обработку персональных данных в соответствии с{' '}
                      <a href="#" className="text-primary hover:underline">
                        Политикой конфиденциальности
                      </a>
                    </label>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Как долго хранятся веники?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  При правильном хранении в сухом месте веники сохраняют свои свойства до 2 лет.
                  Рекомендуем хранить их в бумажных пакетах или тканевых мешках.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Какие сроки доставки?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  По Москве доставляем в течение 1-2 дней, по России — 3-7 дней.
                  Точные сроки зависят от региона и способа доставки.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Можно ли вернуть товар?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Да, вы можете вернуть товар в течение 14 дней с момента получения,
                  если он не подошел или имеет производственный брак.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Есть ли скидки при больших заказах?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Да, при заказе от 10 веников действует скидка 10%, от 20 веников — 15%.
                  Для оптовых покупателей предусмотрены специальные цены.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Map Section */}
        <section className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-8">Как нас найти</h2>
          <div className="bg-muted/50 rounded-lg p-12">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Map" size={32} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">Наш офис в Москве</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Приезжайте к нам в офис, чтобы лично посмотреть на качество наших веников
              и получить профессиональную консультацию
            </p>
            <Button>
              <Icon name="Navigation" size={20} className="mr-2" />
              Построить маршрут
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contacts;