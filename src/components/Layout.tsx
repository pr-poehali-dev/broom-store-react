import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
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
      const toastId = toast({
        title: "Товар удален из корзины",
        description: `${product.name} удален из корзины`,
        variant: "destructive",
      });

      // Автоматически скрыть через 2 секунды
      setTimeout(() => {
        // Toast автоматически исчезнет
      }, 2000);
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
    const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const totalItems = getTotalItems();
    
    // Применяем скидку 10% если 5 или больше товаров
    if (totalItems >= 5) {
      return Math.round(subtotal * 0.9);
    }
    
    return subtotal;
  };

  const getDiscountAmount = () => {
    const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const totalItems = getTotalItems();
    
    if (totalItems >= 5) {
      return Math.round(subtotal * 0.1);
    }
    
    return 0;
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
            
            <div className="flex items-center space-x-2">
              {/* Mobile menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="md:hidden">
                    <Icon name="Menu" size={20} />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-primary-foreground text-sm">🌿</span>
                      </div>
                      <span>ЭкоВеники</span>
                    </SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col space-y-4 mt-8">
                    <Link 
                      to="/" 
                      className={`text-lg hover:text-primary transition-colors ${isActiveRoute('/') ? 'text-primary font-semibold' : ''}`}
                    >
                      Главная
                    </Link>
                    <Link 
                      to="/about" 
                      className={`text-lg hover:text-primary transition-colors ${isActiveRoute('/about') ? 'text-primary font-semibold' : ''}`}
                    >
                      О нас
                    </Link>
                    <Link 
                      to="/catalog" 
                      className={`text-lg hover:text-primary transition-colors ${isActiveRoute('/catalog') ? 'text-primary font-semibold' : ''}`}
                    >
                      Каталог
                    </Link>
                    <Link 
                      to="/promo" 
                      className={`text-lg hover:text-primary transition-colors ${isActiveRoute('/promo') ? 'text-primary font-semibold' : ''}`}
                    >
                      Акции
                    </Link>
                    <Link 
                      to="/contacts" 
                      className={`text-lg hover:text-primary transition-colors ${isActiveRoute('/contacts') ? 'text-primary font-semibold' : ''}`}
                    >
                      Контакты
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>

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
        </div>
      </header>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
                <div className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🌿</span>
                </div>
                <h4 className="font-bold text-2xl">ЭкоВеники</h4>
              </div>
              <p className="text-primary-foreground/80">
                Натуральные веники для бани высшего качества
              </p>
            </div>
            
            <div className="flex space-x-4">
              <Button 
                variant="secondary" 
                size="sm"
                onClick={() => window.open('https://wa.me/78005553535', '_blank')}
              >
                <Icon name="MessageCircle" size={16} className="mr-1" />
                WhatsApp
              </Button>
              <Button 
                variant="secondary" 
                size="sm"
                onClick={() => window.open('https://t.me/ekoveniks', '_blank')}
              >
                <Icon name="Send" size={16} className="mr-1" />
                Telegram
              </Button>
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
              {getTotalItems() >= 5 && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                  <div className="flex items-center text-green-700">
                    <Icon name="Gift" size={16} className="mr-2" />
                    <span className="text-sm font-medium">
                      Скидка 10% за заказ от 5 веников: -{getDiscountAmount()} ₽
                    </span>
                  </div>
                </div>
              )}
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between items-center">
                  <span>Подытог:</span>
                  <span>{cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)} ₽</span>
                </div>
                {getDiscountAmount() > 0 && (
                  <div className="flex justify-between items-center text-green-600">
                    <span>Скидка (10%):</span>
                    <span>-{getDiscountAmount()} ₽</span>
                  </div>
                )}
                <div className="flex justify-between items-center text-lg font-bold border-t pt-2">
                  <span>Итого:</span>
                  <span>{getTotalPrice()} ₽</span>
                </div>
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