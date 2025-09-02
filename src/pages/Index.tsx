import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  fullDescription: string;
  image: string;
  type: string;
  inStock: boolean;
}

interface CartItem extends Product {
  quantity: number;
}

const Index = () => {
  const { toast } = useToast();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showProductModal, setShowProductModal] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const products: Product[] = [
    {
      id: 1,
      name: "Березовый веник премиум",
      price: 850,
      description: "Классический березовый веник из молодых веток",
      fullDescription: "Традиционный березовый веник, изготовленный из свежих молодых веток березы. Обладает прекрасными ароматическими свойствами и мягким воздействием на кожу. Идеален для первого знакомства с банными традициями.",
      image: "/img/dd059c31-8eee-4d79-9b26-9bbd3880b9a5.jpg",
      type: "Березовый",
      inStock: true
    },
    {
      id: 2,
      name: "Дубовый веник лечебный",
      price: 1200,
      description: "Мощный дубовый веник для глубокого массажа",
      fullDescription: "Дубовый веник из отборных веток с плотными листьями. Обладает выраженными лечебными свойствами, укрепляет кожу и улучшает кровообращение. Рекомендуется для опытных парильщиков.",
      image: "/img/a1efe10b-a4fb-41f9-a5fa-8fac414f84c2.jpg",
      type: "Дубовый",
      inStock: true
    },
    {
      id: 3,
      name: "Эвкалиптовый веник арома",
      price: 1500,
      description: "Ароматический эвкалиптовый веник для оздоровления",
      fullDescription: "Эвкалиптовый веник с интенсивным лечебным ароматом. Способствует очищению дыхательных путей, обладает антисептическими свойствами. Создает неповторимую атмосферу в бане.",
      image: "/img/3381ea28-875b-4819-ba88-6dda0ef82d7d.jpg",
      type: "Эвкалиптовый",
      inStock: true
    },
    {
      id: 4,
      name: "Пихтовый веник хвойный",
      price: 950,
      description: "Хвойный веник с освежающим ароматом",
      fullDescription: "Пихтовый веник из молодых хвойных веток. Обладает тонизирующим эффектом и свежим лесным ароматом. Идеально подходит для зимних банных процедур.",
      image: "/placeholder.svg",
      type: "Пихтовый",
      inStock: false
    },
    {
      id: 5,
      name: "Липовый веник медовый",
      price: 750,
      description: "Нежный липовый веник с медовым ароматом",
      fullDescription: "Липовый веник из цветущих веток липы. Обладает успокаивающими свойствами и тонким медовым ароматом. Рекомендуется для релаксации и снятия стресса.",
      image: "/placeholder.svg",
      type: "Липовый",
      inStock: true
    }
  ];

  const addToCart = (product: Product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    
    toast({
      title: "Товар добавлен в корзину",
      description: `${product.name} добавлен в вашу корзину`,
    });
  };

  const removeFromCart = (productId: number) => {
    const product = cartItems.find(item => item.id === productId);
    setCartItems(cartItems.filter(item => item.id !== productId));
    
    if (product) {
      toast({
        title: "Товар удален из корзины",
        description: `${product.name} удален из корзины`,
        variant: "destructive",
      });
    }
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
      return;
    }
    
    setCartItems(cartItems.map(item =>
      item.id === productId
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">🌿</span>
              </div>
              <h1 className="text-2xl font-bold text-primary">ЭкоВеники</h1>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-primary transition-colors">Главная</a>
              <a href="#about" className="hover:text-primary transition-colors">О нас</a>
              <a href="#catalog" className="hover:text-primary transition-colors">Каталог</a>
              <a href="#promo" className="hover:text-primary transition-colors">Акции</a>
              <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
            </nav>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowCart(true)}
              className="relative"
            >
              <Icon name="ShoppingCart" size={20} />
              {getTotalItems() > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                  {getTotalItems()}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-br from-background to-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6 text-primary">
            Натуральные веники для бани
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Отборные веники из экологически чистых материалов. 
            Традиционное качество, современный сервис.
          </p>
          <Button size="lg" className="animate-fade-in" onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}>
            Перейти в каталог
            <Icon name="ArrowDown" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">О нашей продукции</h3>
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

      {/* Catalog Section */}
      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Каталог веников</h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <Button
                    variant="secondary"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() => {
                      setSelectedProduct(product);
                      setShowProductModal(true);
                    }}
                  >
                    <Icon name="Eye" size={16} />
                  </Button>
                  <Badge className="absolute top-2 left-2" variant="secondary">
                    {product.type}
                  </Badge>
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <Badge variant="destructive">Нет в наличии</Badge>
                    </div>
                  )}
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      {product.price} ₽
                    </span>
                    <Button 
                      onClick={() => addToCart(product)}
                      disabled={!product.inStock}
                      size="sm"
                    >
                      <Icon name="Plus" size={16} className="mr-2" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section id="promo" className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Специальные предложения</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Gift" className="mr-2" size={24} />
                  Скидка 15% на первый заказ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Новым клиентам дарим скидку 15% на любой веник из каталога
                </p>
                <Button variant="outline">Получить скидку</Button>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-r from-accent/10 to-secondary/10 border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Package" className="mr-2" size={24} />
                  Набор "Банный комплект"
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  3 веника по цене 2х: березовый + дубовый + эвкалиптовый
                </p>
                <Button variant="outline">Заказать набор</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacts" className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4">ЭкоВеники</h4>
              <p className="text-primary-foreground/80">
                Натуральные веники для бани высшего качества
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Контакты</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p>📞 8 (800) 555-35-35</p>
                <p>📧 info@ekoveniks.ru</p>
                <p>📍 Москва, ул. Банная, 15</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Доставка</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p>• По Москве: 1-2 дня</p>
                <p>• По России: 3-7 дней</p>
                <p>• Бесплатно от 2000 ₽</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Button variant="secondary" size="sm">VK</Button>
                <Button variant="secondary" size="sm">TG</Button>
                <Button variant="secondary" size="sm">OK</Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 ЭкоВеники. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* Product Modal */}
      <Dialog open={showProductModal} onOpenChange={setShowProductModal}>
        <DialogContent className="max-w-2xl">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedProduct.name}</DialogTitle>
                <DialogDescription className="text-lg">
                  {selectedProduct.type} • {selectedProduct.price} ₽
                </DialogDescription>
              </DialogHeader>
              
              <div className="grid md:grid-cols-2 gap-6">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
                
                <div className="space-y-4">
                  <p className="text-muted-foreground">{selectedProduct.fullDescription}</p>
                  
                  <div className="flex items-center space-x-2">
                    <Badge variant={selectedProduct.inStock ? "default" : "destructive"}>
                      {selectedProduct.inStock ? "В наличии" : "Нет в наличии"}
                    </Badge>
                  </div>
                  
                  <Button 
                    className="w-full" 
                    onClick={() => {
                      addToCart(selectedProduct);
                      setShowProductModal(false);
                    }}
                    disabled={!selectedProduct.inStock}
                  >
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Добавить в корзину за {selectedProduct.price} ₽
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Cart Modal */}
      <Dialog open={showCart} onOpenChange={setShowCart}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Icon name="ShoppingCart" size={24} className="mr-2" />
              Корзина ({getTotalItems()})
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {cartItems.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">
                Ваша корзина пуста
              </p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  
                  <div className="flex-1">
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">{item.price} ₽</p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Icon name="Minus" size={16} />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Icon name="Plus" size={16} />
                    </Button>
                  </div>
                  
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Icon name="Trash2" size={16} />
                  </Button>
                </div>
              ))
            )}
          </div>
          
          {cartItems.length > 0 && (
            <div className="border-t pt-4">
              <div className="flex justify-between items-center text-lg font-bold mb-4">
                <span>Итого:</span>
                <span>{getTotalPrice()} ₽</span>
              </div>
              
              <Button className="w-full" size="lg">
                <Icon name="CreditCard" size={20} className="mr-2" />
                Оформить заказ
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
      
      <Toaster />
    </div>
  );
};

export default Index;