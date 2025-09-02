import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const services = [
    {
      title: "Строительство под ключ",
      description: "Полный цикл строительства от проекта до сдачи объекта",
      icon: "Home",
      features: ["Архитектурное планирование", "Строительно-монтажные работы", "Отделочные работы"]
    },
    {
      title: "Ремонт по дизайн-проекту", 
      description: "Комплексный ремонт с индивидуальным дизайном",
      icon: "Paintbrush",
      features: ["3D визуализация", "Авторский надзор", "Премиум материалы"]
    },
    {
      title: "Пакетный ремонт",
      description: "Стандартные решения для быстрого и качественного ремонта",
      icon: "Package",
      features: ["Готовые пакеты услуг", "Фиксированная стоимость", "Короткие сроки"]
    },
    {
      title: "Инженерный ремонт",
      description: "Модернизация инженерных систем и коммуникаций",
      icon: "Wrench",
      features: ["Электромонтаж", "Сантехнические работы", "Вентиляция и кондиционирование"]
    }
  ];

  const portfolio = [
    {
      title: "ЖК «Панорама»",
      type: "Жилой комплекс",
      area: "15,000 м²",
      year: "2024"
    },
    {
      title: "Офисный центр «Деловой»",
      type: "Коммерческий объект",
      area: "8,500 м²", 
      year: "2023"
    },
    {
      title: "Коттеджный поселок «Лесная резиденция»",
      type: "Малоэтажное строительство",
      area: "45 домов",
      year: "2024"
    }
  ];

  const reviews = [
    {
      name: "Михаил Петров",
      company: "ООО «Альфа Инвест»",
      text: "Профессиональный подход к каждому этапу строительства. Сроки соблюдены, качество на высоте.",
      rating: 5
    },
    {
      name: "Анна Сидорова",
      company: "Частный заказчик",
      text: "Делали полный ремонт квартиры. Результат превзошел все ожидания. Рекомендую!",
      rating: 5
    },
    {
      name: "Дмитрий Козлов",
      company: "ТЦ «Европейский»",
      text: "Качественно выполнили реконструкцию торгового центра. Работали без задержек.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-black text-white py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Building" size={32} className="text-primary" />
            <h1 className="text-2xl font-montserrat font-bold">СтройПроф Челябинск</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="hover:text-primary transition-colors">О компании</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Наши объекты</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90 text-white font-medium">
            Заказать звонок
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-montserrat font-bold mb-6">
            Строительство и ремонт
            <span className="text-primary block">под ключ в Челябинске</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Полный цикл строительных работ с гарантией качества материалов и выполненных работ
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-4">
              <Icon name="Phone" size={20} className="mr-2" />
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-4">
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-black mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600">Полный спектр строительных и ремонтных работ</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name={service.icon} size={24} className="text-primary" />
                    </div>
                    <CardTitle className="text-xl font-montserrat font-semibold">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-montserrat font-bold text-black mb-6">О компании</h2>
              <p className="text-lg text-gray-700 mb-6">
                Более 15 лет мы предоставляем качественные строительные услуги в Челябинске и области. 
                Наша команда профессионалов выполняет проекты любой сложности — от частных домов до крупных коммерческих объектов.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-montserrat font-bold text-primary mb-2">500+</div>
                  <div className="text-gray-600">Завершенных проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-montserrat font-bold text-primary mb-2">15+</div>
                  <div className="text-gray-600">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-montserrat font-bold text-primary mb-2">50+</div>
                  <div className="text-gray-600">Специалистов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-montserrat font-bold text-primary mb-2">5</div>
                  <div className="text-gray-600">Лет гарантии</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Shield" size={20} className="text-primary" />
                  <span className="text-gray-700">5 лет гарантии на все виды работ</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Award" size={20} className="text-primary" />
                  <span className="text-gray-700">Только сертифицированные материалы</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={20} className="text-primary" />
                  <span className="text-gray-700">Соблюдение сроков выполнения работ</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-2xl font-montserrat font-semibold mb-6">Наши преимущества</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Качественные материалы</h4>
                    <p className="text-gray-600">Работаем только с проверенными поставщиками</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Users" size={20} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Опытная команда</h4>
                    <p className="text-gray-600">Квалифицированные специалисты всех направлений</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="FileText" size={20} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Прозрачные договоры</h4>
                    <p className="text-gray-600">Фиксированная стоимость без скрытых платежей</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-black mb-4">Наши объекты</h2>
            <p className="text-xl text-gray-600">Примеры выполненных проектов</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={index === 0 ? "/img/f3406dff-8dc9-4c4f-bac8-ef2ea8c5ebbe.jpg" : 
                         index === 1 ? "/img/2ef6697b-7b5a-480a-9eb6-6960479a9141.jpg" : 
                         "/img/e19f3fed-7071-4b07-a686-117f06f5e084.jpg"} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{project.type}</Badge>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                  <CardTitle className="font-montserrat font-semibold">{project.title}</CardTitle>
                  <CardDescription className="flex items-center space-x-2">
                    <Icon name="Square" size={16} className="text-primary" />
                    <span>{project.area}</span>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Смотреть все объекты
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-black mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-gray-600">Что говорят о нас наши заказчики</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardDescription className="text-gray-700 italic">"{review.text}"</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-black">{review.name}</div>
                    <div className="text-sm text-gray-500">{review.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-montserrat font-bold mb-6">
            Готовы начать ваш проект?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Получите бесплатную консультацию и расчет стоимости вашего проекта
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-4">
              <Icon name="Phone" size={20} className="mr-2" />
              Заказать звонок
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-4">
              <Icon name="Mail" size={20} className="mr-2" />
              Написать на почту
            </Button>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-black mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">Свяжитесь с нами удобным способом</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Адрес</h3>
                    <p className="text-gray-700">г. Челябинск, ул. Строителей, 25</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Телефон</h3>
                    <p className="text-gray-700">+7 (351) 123-45-67</p>
                    <p className="text-gray-700">+7 (919) 876-54-32</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Email</h3>
                    <p className="text-gray-700">info@stroyprof-chel.ru</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Режим работы</h3>
                    <p className="text-gray-700">Пн-Пт: 9:00 - 18:00</p>
                    <p className="text-gray-700">Сб: 10:00 - 16:00</p>
                    <p className="text-gray-700">Вс: выходной</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-montserrat font-semibold mb-6">Заказать обратный звонок</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Имя</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Сообщение</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Расскажите о вашем проекте"
                  ></textarea>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 py-3">
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Building" size={24} className="text-primary" />
                <h3 className="text-xl font-montserrat font-bold">СтройПроф Челябинск</h3>
              </div>
              <p className="text-gray-400">
                Профессиональное строительство и ремонт с гарантией качества
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Строительство под ключ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Дизайн-проекты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Пакетный ремонт</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Инженерные системы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>г. Челябинск, ул. Строителей, 25</li>
                <li>+7 (351) 123-45-67</li>
                <li>info@stroyprof-chel.ru</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 СтройПроф Челябинск. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;