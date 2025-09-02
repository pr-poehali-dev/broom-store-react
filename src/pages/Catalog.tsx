import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import { Product, CartItem } from '@/components/Layout';

interface CatalogProps {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const Catalog: React.FC<CatalogProps> = ({ cartItems, setCartItems }) => {
  const { toast } = useToast();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showProductModal, setShowProductModal] = useState(false);
  const [filterType, setFilterType] = useState<string>('all');

  const products: Product[] = [
    {
      id: 1,
      name: "Березовый веник премиум",
      price: 850,
      description: "Классический березовый веник из молодых веток",
      fullDescription: "Традиционный березовый веник, изготовленный из свежих молодых веток березы. Обладает прекрасными ароматическими свойствами и мягким воздействием на кожу. Идеален для первого знакомства с банными традициями. Березовые веники улучшают кровообращение, очищают поры и придают коже упругость.",
      image: "/img/dd059c31-8eee-4d79-9b26-9bbd3880b9a5.jpg",
      type: "Березовый",
      inStock: true
    },
    {
      id: 2,
      name: "Дубовый веник лечебный",
      price: 1200,
      description: "Мощный дубовый веник для глубокого массажа",
      fullDescription: "Дубовый веник из отборных веток с плотными листьями. Обладает выраженными лечебными свойствами, укрепляет кожу и улучшает кровообращение. Рекомендуется для опытных парильщиков. Дубильные вещества в листьях дуба оказывают противовоспалительное действие и помогают при кожных проблемах.",
      image: "/img/a1efe10b-a4fb-41f9-a5fa-8fac414f84c2.jpg",
      type: "Дубовый",
      inStock: true
    },
    {
      id: 3,
      name: "Эвкалиптовый веник арома",
      price: 1500,
      description: "Ароматический эвкалиптовый веник для оздоровления",
      fullDescription: "Эвкалиптовый веник с интенсивным лечебным ароматом. Способствует очищению дыхательных путей, обладает антисептическими свойствами. Создает неповторимую атмосферу в бане. Особенно полезен при простудных заболеваниях и для профилактики ОРВИ.",
      image: "/img/3381ea28-875b-4819-ba88-6dda0ef82d7d.jpg",
      type: "Эвкалиптовый",
      inStock: true
    },
    {
      id: 4,
      name: "Пихтовый веник хвойный",
      price: 950,
      description: "Хвойный веник с освежающим ароматом",
      fullDescription: "Пихтовый веник из молодых хвойных веток. Обладает тонизирующим эффектом и свежим лесным ароматом. Идеально подходит для зимних банных процедур. Хвойные эфирные масла благотворно влияют на нервную систему и помогают снять усталость.",
      image: "/placeholder.svg",
      type: "Пихтовый",
      inStock: false
    },
    {
      id: 5,
      name: "Липовый веник медовый",
      price: 750,
      description: "Нежный липовый веник с медовым ароматом",
      fullDescription: "Липовый веник из цветущих веток липы. Обладает успокаивающими свойствами и тонким медовым ароматом. Рекомендуется для релаксации и снятия стресса. Липовый цвет оказывает потогонное действие и способствует выведению токсинов из организма.",
      image: "/placeholder.svg",
      type: "Липовый",
      inStock: true
    },
    {
      id: 6,
      name: "Можжевеловый веник элитный",
      price: 1800,
      description: "Редкий можжевеловый веник для ценителей",
      fullDescription: "Эксклюзивный можжевеловый веник из веток можжевельника обыкновенного. Обладает мощными антисептическими и тонизирующими свойствами. Рекомендуется для опытных любителей бани. Можжевельник известен своими противовоспалительными и очищающими свойствами.",
      image: "/placeholder.svg",
      type: "Можжевеловый",
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

  const filteredProducts = filterType === 'all' 
    ? products 
    : products.filter(product => product.type === filterType);

  const productTypes = ['all', ...Array.from(new Set(products.map(p => p.type)))];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6 text-primary">Каталог веников</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Широкий выбор натуральных веников для любых предпочтений и потребностей
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {productTypes.map((type) => (
              <Button
                key={type}
                variant={filterType === type ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterType(type)}
              >
                {type === 'all' ? 'Все веники' : type}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
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

        {/* No products message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              По выбранному фильтру товары не найдены
            </p>
          </div>
        )}

        {/* Info Section */}
        <div className="mt-16 bg-muted/50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Как выбрать веник?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                🌿
              </div>
              <h3 className="font-semibold mb-2">Для начинающих</h3>
              <p className="text-sm text-muted-foreground">
                Березовый или липовый веник — мягкое воздействие, приятный аромат
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                💪
              </div>
              <h3 className="font-semibold mb-2">Для опытных</h3>
              <p className="text-sm text-muted-foreground">
                Дубовый или можжевеловый — интенсивный массаж, лечебный эффект
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                🌡️
              </div>
              <h3 className="font-semibold mb-2">При простуде</h3>
              <p className="text-sm text-muted-foreground">
                Эвкалиптовый или пихтовый — очищение дыхательных путей
              </p>
            </div>
          </div>
        </div>
      </div>

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
    </div>
  );
};

export default Catalog;