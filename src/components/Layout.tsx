import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  fullDescription: string;
  image: string;
  type: string;
  inStock: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

interface LayoutProps {
  children: React.ReactNode;
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const Layout: React.FC<LayoutProps> = ({ children, cartItems, setCartItems }) => {
  const { toast } = useToast();
  const [showCart, setShowCart] = useState(false);
  const location = useLocation();

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

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">🌿</span>
              </div>
              <h1 className="text-2xl font-bold text-primary">ЭкоВеники</h1>
            </Link>
            
            <nav className="hidden md:flex space-x-8">
              <Link 
                to="/" 
                className={`hover:text-primary transition-colors ${isActiveRoute('/') ? 'text-primary font-semibold' : ''}`}
              >
                Главная
              </Link>
              <Link 
                to="/about" 
                className={`hover:text-primary transition-colors ${isActiveRoute('/about') ? 'text-primary font-semibold' : ''}`}
              >
                О нас
              </Link>
              <Link 
                to="/catalog" 
                className={`hover:text-primary transition-colors ${isActiveRoute('/catalog') ? 'text-primary font-semibold' : ''}`}
              >
                Каталог
              </Link>
              <Link 
                to="/promo" 
                className={`hover:text-primary transition-colors ${isActiveRoute('/promo') ? 'text-primary font-semibold' : ''}`}
              >
                Акции
              </Link>
              <Link 
                to="/contacts" 
                className={`hover:text-primary transition-colors ${isActiveRoute('/contacts') ? 'text-primary font-semibold' : ''}`}
              >
                Контакты
              </Link>
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

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
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

export default Layout;