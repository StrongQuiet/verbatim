import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import List from "../components/List";

const Home = () => {
    const wordsA = [
        {
            lvl: "A1",
            title: "Уровень выживания",
            content: [
                { "word": "Apple", "translate": "Яблоко", "help": "Сладкий плод" },
                { "word": "Dog", "translate": "Собака", "help": "Четырехлапый друг" },
                { "word": "Book", "translate": "Книга", "help": "Много страниц с текстом" },
                { "word": "House", "translate": "Дом", "help": "Место для жилья" },
                { "word": "Water", "translate": "Вода", "help": "Прозрачная жидкость" },
                { "word": "Sun", "translate": "Солнце", "help": "Светит на небе" },
                { "word": "Car", "translate": "Машина", "help": "Средство передвижения" },
                { "word": "Cat", "translate": "Кошка", "help": "Мягкое домашнее животное" },
                { "word": "Tree", "translate": "Дерево", "help": "Растет в лесу" },
                { "word": "Chair", "translate": "Стул", "help": "На нем сидят" },
                { "word": "Food", "translate": "Еда", "help": "То, что едят" },
                { "word": "Milk", "translate": "Молоко", "help": "Белая жидкость из коровы" },
                { "word": "Ball", "translate": "Мяч", "help": "Круглый и скачет" },
                { "word": "Baby", "translate": "Младенец", "help": "Очень маленький ребенок" },
                { "word": "School", "translate": "Школа", "help": "Место для обучения" },
                { "word": "Window", "translate": "Окно", "help": "Смотрят через него" },
                { "word": "Table", "translate": "Стол", "help": "На него ставят вещи" },
                { "word": "Door", "translate": "Дверь", "help": "Через нее входят" },
                { "word": "Hand", "translate": "Рука", "help": "Часть тела с пальцами" },
                { "word": "Bike", "translate": "Велосипед", "help": "Транспорт с двумя колесами" },
                { "word": "Pen", "translate": "Ручка", "help": "Пишущий инструмент" },
                { "word": "Flower", "translate": "Цветок", "help": "Красивое растение" },
                { "word": "Bread", "translate": "Хлеб", "help": "Основной продукт питания" },
                { "word": "Clock", "translate": "Часы", "help": "Показывает время" },
                { "word": "Fish", "translate": "Рыба", "help": "Живет в воде" },
                { "word": "Sky", "translate": "Небо", "help": "Над головой" },
                { "word": "Star", "translate": "Звезда", "help": "Светит на небе ночью" },
                { "word": "Friend", "translate": "Друг", "help": "Близкий человек" },
                { "word": "Home", "translate": "Дом", "help": "Место, где живут" },
                { "word": "Toy", "translate": "Игрушка", "help": "Для игры" },
                { "word": "Hat", "translate": "Шляпа", "help": "Надевается на голову" },
                { "word": "Shop", "translate": "Магазин", "help": "Место для покупок" },
                { "word": "Drink", "translate": "Напиток", "help": "То, что пьют" },
                { "word": "Music", "translate": "Музыка", "help": "Звуковое искусство" },
                { "word": "Phone", "translate": "Телефон", "help": "Для звонков" },
                { "word": "Light", "translate": "Свет", "help": "Противоположность тьмы" },
                { "word": "Rain", "translate": "Дождь", "help": "Выпадает из облаков" },
                { "word": "River", "translate": "Река", "help": "Течет по земле" },
                { "word": "Mountain", "translate": "Гора", "help": "Высокий природный объект" },
                { "word": "Sea", "translate": "Море", "help": "Большой водоем" },
                { "word": "Shoes", "translate": "Обувь", "help": "Надеваются на ноги" },
                { "word": "Bag", "translate": "Сумка", "help": "Для переноски вещей" },
                { "word": "Food", "translate": "Еда", "help": "Для питания" },
                { "word": "Sleep", "translate": "Сон", "help": "Отдых ночью" },
                { "word": "Happy", "translate": "Счастливый", "help": "Чувствует радость" },
                { "word": "Sad", "translate": "Грустный", "help": "Чувствует печаль" },
                { "word": "Hot", "translate": "Горячий", "help": "Очень теплый" },
                { "word": "Cold", "translate": "Холодный", "help": "Очень прохладный" },
                { "word": "Smile", "translate": "Улыбка", "help": "Проявление радости" },
                { "word": "Laugh", "translate": "Смех", "help": "Проявление веселья" },
                { "word": "Cry", "translate": "Плач", "help": "Проявление печали" },
                { "word": "Run", "translate": "Бегать", "help": "Быстро передвигаться" },
                { "word": "Jump", "translate": "Прыгать", "help": "Отрываться от земли" },
                { "word": "Walk", "translate": "Ходить", "help": "Медленно передвигаться" },
                { "word": "Swim", "translate": "Плавать", "help": "Передвигаться в воде" },
                { "word": "Fly", "translate": "Летать", "help": "Передвигаться в воздухе" },
                { "word": "Sing", "translate": "Петь", "help": "Издавать мелодичные звуки" },
                { "word": "Dance", "translate": "Танцевать", "help": "Двигаться под музыку" },
                { "word": "Eat", "translate": "Есть", "help": "Поглощать пищу" },
                { "word": "Drink", "translate": "Пить", "help": "Потреблять жидкость" },
                { "word": "Read", "translate": "Читать", "help": "Понимать написанное" },
                { "word": "Write", "translate": "Писать", "help": "Создавать текст" },
                { "word": "Listen", "translate": "Слушать", "help": "Воспринимать звуки" },
                { "word": "Talk", "translate": "Говорить", "help": "Произносить слова" },
                { "word": "See", "translate": "Видеть", "help": "Воспринимать зрительно" },
                { "word": "Hear", "translate": "Слышать", "help": "Воспринимать слухом" },
                { "word": "Touch", "translate": "Касаться", "help": "Чувствовать прикосновением" },
                { "word": "Smell", "translate": "Чувствовать запах", "help": "Воспринимать аромат" },
                { "word": "Taste", "translate": "Пробовать на вкус", "help": "Ощущать вкус" },
                { "word": "Buy", "translate": "Покупать", "help": "Приобретать за деньги" },
                { "word": "Sell", "translate": "Продавать", "help": "Избавляться за деньги" },
                { "word": "Open", "translate": "Открывать", "help": "Раздвигать" },
                { "word": "Close", "translate": "Закрывать", "help": "Сводить" },
                { "word": "Turn", "translate": "Поворачивать", "help": "Менять направление" },
                { "word": "Stop", "translate": "Останавливаться", "help": "Прекращать движение" },
                { "word": "Start", "translate": "Начинать", "help": "Приступать к чему-то" },
                { "word": "Finish", "translate": "Заканчивать", "help": "Прекращать что-то делать" },
                { "word": "Love", "translate": "Любовь", "help": "Сильное чувство привязанности" },
                { "word": "Hate", "translate": "Ненависть", "help": "Сильное чувство неприязни" },
                { "word": "Good", "translate": "Хороший", "help": "Соответствующий ожиданиям" },
                { "word": "Bad", "translate": "Плохой", "help": "Не соответствующий ожиданиям" },
                { "word": "Big", "translate": "Большой", "help": "Значительных размеров" },
                { "word": "Small", "translate": "Маленький", "help": "Незначительных размеров" },
                { "word": "Tall", "translate": "Высокий", "help": "Имеющий большую высоту" },
                { "word": "Short", "translate": "Низкий", "help": "Имеющий малую высоту" },
                { "word": "Young", "translate": "Молодой", "help": "Имеющий малый возраст" },
                { "word": "Old", "translate": "Старый", "help": "Имеющий большой возраст" },
                { "word": "New", "translate": "Новый", "help": "Недавно созданный" },
                { "word": "Old", "translate": "Старый", "help": "Давно созданный" },
                { "word": "Fast", "translate": "Быстрый", "help": "Передвигающийся с высокой скоростью" },
                { "word": "Slow", "translate": "Медленный", "help": "Передвигающийся с низкой скоростью" },
                { "word": "Strong", "translate": "Сильный", "help": "Имеющий большую силу" },
                { "word": "Weak", "translate": "Слабый", "help": "Имеющий малую силу" },
                { "word": "Full", "translate": "Полный", "help": "Заполненный до краев" },
                { "word": "Empty", "translate": "Пустой", "help": "Не заполненный" },
                { "word": "Near", "translate": "Близко", "help": "На небольшом расстоянии" },
                { "word": "Far", "translate": "Далеко", "help": "На большом расстоянии" },
                { "word": "Right", "translate": "Правый", "help": "Противоположный левому" },
                { "word": "Left", "translate": "Левый", "help": "Противоположный правому" },
                { "word": "Up", "translate": "Вверх", "help": "Направление к небу" },
                { "word": "Down", "translate": "Вниз", "help": "Направление к земле" },
                { "word": "In", "translate": "Внутри", "help": "Находится внутри чего-то" },
                { "word": "Out", "translate": "Снаружи", "help": "Находится вне чего-то" },
                { "word": "On", "translate": "На", "help": "Находится на поверхности чего-то" },
                { "word": "Under", "translate": "Под", "help": "Находится ниже чего-то" },
                { "word": "Before", "translate": "Перед", "help": "Находится до чего-то" },
                { "word": "After", "translate": "После", "help": "Находится после чего-то" },
                { "word": "First", "translate": "Первый", "help": "Находится в начале" },
                { "word": "Last", "translate": "Последний", "help": "Находится в конце" },
                { "word": "Day", "translate": "День", "help": "Светлое время суток" },
                { "word": "Night", "translate": "Ночь", "help": "Темное время суток" },
                { "word": "Morning", "translate": "Утро", "help": "Начало дня" },
                { "word": "Evening", "translate": "Вечер", "help": "Конец дня" },
                { "word": "Monday", "translate": "Понедельник", "help": "Первый день недели" },
                { "word": "Tuesday", "translate": "Вторник", "help": "Второй день недели" },
                { "word": "Wednesday", "translate": "Среда", "help": "Третий день недели" },
                { "word": "Thursday", "translate": "Четверг", "help": "Четвертый день недели" },
                { "word": "Friday", "translate": "Пятница", "help": "Пятый день недели" },
                { "word": "Saturday", "translate": "Суббота", "help": "Шестой день недели" },
                { "word": "Sunday", "translate": "Воскресенье", "help": "Седьмой день недели" },
                { "word": "Winter", "translate": "Зима", "help": "Холодное время года" },
                { "word": "Spring", "translate": "Весна", "help": "Время года, когда все цветет" },
                { "word": "Summer", "translate": "Лето", "help": "Теплое время года" },
                { "word": "Autumn", "translate": "Осень", "help": "Время года, когда падают листья" },
                { "word": "Father", "translate": "Отец", "help": "Мужчина-родитель" },
                { "word": "Mother", "translate": "Мать", "help": "Женщина-родитель" },
                { "word": "Brother", "translate": "Брат", "help": "Мальчик с теми же родителями" },
                { "word": "Sister", "translate": "Сестра", "help": "Девочка с теми же родителями" },
                { "word": "Family", "translate": "Семья", "help": "Группа родных людей" },
                { "word": "Man", "translate": "Мужчина", "help": "Взрослый человек мужского пола" },
                { "word": "Woman", "translate": "Женщина", "help": "Взрослый человек женского пола" },
                { "word": "Boy", "translate": "Мальчик", "help": "Молодой человек мужского пола" },
                { "word": "Girl", "translate": "Девочка", "help": "Молодой человек женского пола" },
                { "word": "Doctor", "translate": "Доктор", "help": "Медицинский работник" },
                { "word": "Teacher", "translate": "Учитель", "help": "Человек, который учит" },
                { "word": "Student", "translate": "Студент", "help": "Человек, который учится" },
                { "word": "Friend", "translate": "Друг", "help": "Близкий человек" },
                { "word": "City", "translate": "Город", "help": "Большое населённое место" },
                { "word": "Country", "translate": "Страна", "help": "Большая территория с правительством" },
                { "word": "Town", "translate": "Городок", "help": "Малое населённое место" },
                { "word": "Village", "translate": "Деревня", "help": "Небольшое населённое место" },
                { "word": "Street", "translate": "Улица", "help": "Проезжая часть в городе" },
                { "word": "Road", "translate": "Дорога", "help": "Путь для транспорта" },
                { "word": "Building", "translate": "Здание", "help": "Строение для людей" },
                { "word": "Bridge", "translate": "Мост", "help": "Сооружение через реку" },
                { "word": "Shop", "translate": "Магазин", "help": "Место для покупок" },
                { "word": "Restaurant", "translate": "Ресторан", "help": "Место для еды" },
                { "word": "Park", "translate": "Парк", "help": "Зона отдыха на природе" },
                { "word": "Garden", "translate": "Сад", "help": "Участок с растениями" },
                { "word": "Market", "translate": "Рынок", "help": "Место для торговли" },
                { "word": "Bank", "translate": "Банк", "help": "Место хранения денег" },
                { "word": "Post", "translate": "Почта", "help": "Место для отправки писем" },
                { "word": "Hotel", "translate": "Отель", "help": "Место для проживания" },
                { "word": "Airport", "translate": "Аэропорт", "help": "Место для самолетов" },
                { "word": "Station", "translate": "Станция", "help": "Место остановки транспорта" },
                { "word": "Library", "translate": "Библиотека", "help": "Место для книг" },
                { "word": "Museum", "translate": "Музей", "help": "Место для выставок" },
                { "word": "Hospital", "translate": "Больница", "help": "Место для лечения" },
                { "word": "Cinema", "translate": "Кинотеатр", "help": "Место для просмотра фильмов" },
                { "word": "Theatre", "translate": "Театр", "help": "Место для спектаклей" },
                { "word": "Zoo", "translate": "Зоопарк", "help": "Место для животных" },
                { "word": "Police", "translate": "Полиция", "help": "Орган правопорядка" },
                { "word": "Fireman", "translate": "Пожарный", "help": "Борец с огнем" },
                { "word": "Taxi", "translate": "Такси", "help": "Платное средство передвижения" },
                { "word": "Bus", "translate": "Автобус", "help": "Общественное транспортное средство" },
                { "word": "Train", "translate": "Поезд", "help": "Средство передвижения по рельсам" },
                { "word": "Plane", "translate": "Самолет", "help": "Средство передвижения по воздуху" },
                { "word": "Boat", "translate": "Лодка", "help": "Средство передвижения по воде" },
                { "word": "Ship", "translate": "Корабль", "help": "Большое средство передвижения по воде" },
                { "word": "Subway", "translate": "Метро", "help": "Подземное транспортное средство" },
                { "word": "Bicycle", "translate": "Велосипед", "help": "Транспорт с двумя колесами" },
                { "word": "Motorbike", "translate": "Мотоцикл", "help": "Моторизированное средство передвижения" },
                { "word": "Helicopter", "translate": "Вертолет", "help": "Средство передвижения с винтами" },
                { "word": "Rocket", "translate": "Ракета", "help": "Средство передвижения в космос" },
                { "word": "Car", "translate": "Машина", "help": "Автомобиль" },
                { "word": "Truck", "translate": "Грузовик", "help": "Транспорт для перевозки грузов" },
                { "word": "Van", "translate": "Фургон", "help": "Транспорт для перевозки людей и грузов" },
                { "word": "Driver", "translate": "Водитель", "help": "Человек, управляющий транспортом" },
                { "word": "Passenger", "translate": "Пассажир", "help": "Человек, едущий в транспорте" },
                { "word": "Ticket", "translate": "Билет", "help": "Документ для проезда" },
                { "word": "Journey", "translate": "Путешествие", "help": "Длительная поездка" },
                { "word": "Trip", "translate": "Поездка", "help": "Короткая поездка" },
                { "word": "Travel", "translate": "Путешествовать", "help": "Перемещаться на большие расстояния" },
                { "word": "Holiday", "translate": "Каникулы", "help": "Период отдыха" },
                { "word": "Vacation", "translate": "Отпуск", "help": "Период отдыха от работы" },
                { "word": "Beach", "translate": "Пляж", "help": "Песчаный берег" },
                { "word": "Sea", "translate": "Море", "help": "Большой водоем" },
                { "word": "Ocean", "translate": "Океан", "help": "Очень большой водоем" },
                { "word": "Lake", "translate": "Озеро", "help": "Большой водоем на суше" },
                { "word": "River", "translate": "Река", "help": "Длинный водоем" },
                { "word": "Mountain", "translate": "Гора", "help": "Высокий природный объект" },
                { "word": "Hill", "translate": "Холм", "help": "Низкая возвышенность" },
                { "word": "Forest", "translate": "Лес", "help": "Большая территория с деревьями" },
                { "word": "Desert", "translate": "Пустыня", "help": "Большая территория с песком" },
                { "word": "Island", "translate": "Остров", "help": "Земля, окруженная водой" },
                { "word": "Peninsula", "translate": "Полуостров", "help": "Земля, окруженная водой с трех сторон" },
                { "word": "Continent", "translate": "Континент", "help": "Большая часть суши" },
                { "word": "Country", "translate": "Страна", "help": "Территория с правительством" },
                { "word": "State", "translate": "Штат", "help": "Часть страны" },
                { "word": "City", "translate": "Город", "help": "Большое населённое место" },
                { "word": "Town", "translate": "Городок", "help": "Малое населённое место" },
                { "word": "Village", "translate": "Деревня", "help": "Небольшое населённое место" },
                { "word": "Farm", "translate": "Ферма", "help": "Место для выращивания растений и животных" },
                { "word": "Field", "translate": "Поле", "help": "Большая открытая территория" },
                { "word": "Garden", "translate": "Сад", "help": "Участок с растениями" },
                { "word": "Forest", "translate": "Лес", "help": "Большая территория с деревьями" },
                { "word": "Jungle", "translate": "Джунгли", "help": "Плотный лес" },
                { "word": "Ocean", "translate": "Океан", "help": "Очень большой водоем" },
                { "word": "Sea", "translate": "Море", "help": "Большой водоем" },
                { "word": "Lake", "translate": "Озеро", "help": "Большой водоем на суше" },
                { "word": "River", "translate": "Река", "help": "Длинный водоем" },
                { "word": "Stream", "translate": "Ручей", "help": "Маленький водоем" },
                { "word": "Pond", "translate": "Пруд", "help": "Небольшой водоем" },
                { "word": "Beach", "translate": "Пляж", "help": "Песчаный берег" },
                { "word": "Coast", "translate": "Берег", "help": "Линия, где земля встречается с водой" },
                { "word": "Island", "translate": "Остров", "help": "Земля, окруженная водой" },
                { "word": "Peninsula", "translate": "Полуостров", "help": "Земля, окруженная водой с трех сторон" },
                { "word": "Bay", "translate": "Залив", "help": "Вдающаяся в сушу часть моря" },
                { "word": "Cave", "translate": "Пещера", "help": "Естественная полость в земле" },
                { "word": "Mountain", "translate": "Гора", "help": "Высокий природный объект" },
                { "word": "Hill", "translate": "Холм", "help": "Низкая возвышенность" },
                { "word": "Valley", "translate": "Долина", "help": "Низина между холмами или горами" },
                { "word": "Plateau", "translate": "Плато", "help": "Плоская возвышенность" },
                { "word": "Desert", "translate": "Пустыня", "help": "Большая территория с песком" },
                { "word": "Sand", "translate": "Песок", "help": "Мелкие зерна" },
                { "word": "Rock", "translate": "Камень", "help": "Твердый материал" },
                { "word": "Stone", "translate": "Камень", "help": "Небольшой кусок скалы" },
                { "word": "Earth", "translate": "Земля", "help": "Почва" },
                { "word": "Soil", "translate": "Почва", "help": "Материал для роста растений" },
                { "word": "Grass", "translate": "Трава", "help": "Зеленые растения" },
                { "word": "Tree", "translate": "Дерево", "help": "Большое растение" },
                { "word": "Bush", "translate": "Куст", "help": "Небольшое растение" },
                { "word": "Flower", "translate": "Цветок", "help": "Растение с лепестками" },
                { "word": "Leaf", "translate": "Лист", "help": "Часть растения" },
                { "word": "Fruit", "translate": "Фрукт", "help": "Съедобная часть растения" },
                { "word": "Vegetable", "translate": "Овощ", "help": "Съедобная часть растения" },
                { "word": "Plant", "translate": "Растение", "help": "Живое существо" },
                { "word": "Animal", "translate": "Животное", "help": "Живое существо" },
                { "word": "Bird", "translate": "Птица", "help": "Летающее существо" },
                { "word": "Fish", "translate": "Рыба", "help": "Плавающее существо" },
                { "word": "Insect", "translate": "Насекомое", "help": "Маленькое существо" },
                { "word": "Dog", "translate": "Собака", "help": "Домашнее животное" },
                { "word": "Cat", "translate": "Кошка", "help": "Домашнее животное" },
                { "word": "Cow", "translate": "Корова", "help": "Домашнее животное" },
                { "word": "Horse", "translate": "Лошадь", "help": "Домашнее животное" },
                { "word": "Sheep", "translate": "Овца", "help": "Домашнее животное" },
                { "word": "Goat", "translate": "Коза", "help": "Домашнее животное" },
                { "word": "Pig", "translate": "Свинья", "help": "Домашнее животное" },
                { "word": "Chicken", "translate": "Курица", "help": "Домашнее животное" },
                { "word": "Duck", "translate": "Утка", "help": "Домашнее животное" },
                { "word": "Goose", "translate": "Гусь", "help": "Домашнее животное" },
                { "word": "Turkey", "translate": "Индейка", "help": "Домашнее животное" },
                { "word": "Rabbit", "translate": "Кролик", "help": "Домашнее животное" },
                { "word": "Deer", "translate": "Олень", "help": "Дикое животное" },
                { "word": "Elephant", "translate": "Слон", "help": "Дикое животное" },
                { "word": "Tiger", "translate": "Тигр", "help": "Дикое животное" },
                { "word": "Lion", "translate": "Лев", "help": "Дикое животное" },
                { "word": "Bear", "translate": "Медведь", "help": "Дикое животное" },
                { "word": "Wolf", "translate": "Волк", "help": "Дикое животное" },
                { "word": "Fox", "translate": "Лиса", "help": "Дикое животное" },
                { "word": "Monkey", "translate": "Обезьяна", "help": "Дикое животное" },
                { "word": "Snake", "translate": "Змея", "help": "Дикое животное" },
                { "word": "Crocodile", "translate": "Крокодил", "help": "Дикое животное" },
                { "word": "Lizard", "translate": "Ящерица", "help": "Дикое животное" },
                { "word": "Frog", "translate": "Лягушка", "help": "Дикое животное" },
                { "word": "Spider", "translate": "Паук", "help": "Дикое животное" },
                { "word": "Bee", "translate": "Пчела", "help": "Насекомое" },
                { "word": "Ant", "translate": "Муравей", "help": "Насекомое" },
                { "word": "Butterfly", "translate": "Бабочка", "help": "Насекомое" },
                { "word": "Ladybug", "translate": "Божья коровка", "help": "Насекомое" },
                { "word": "Mosquito", "translate": "Комар", "help": "Насекомое" },
                { "word": "Fly", "translate": "Муха", "help": "Насекомое" },
                { "word": "Cockroach", "translate": "Таракан", "help": "Насекомое" },
                { "word": "Centipede", "translate": "Многоножка", "help": "Насекомое" },
                { "word": "Crab", "translate": "Краб", "help": "Морское животное" },
                { "word": "Lobster", "translate": "Омар", "help": "Морское животное" },
                { "word": "Shrimp", "translate": "Креветка", "help": "Морское животное" },
                { "word": "Octopus", "translate": "Осьминог", "help": "Морское животное" },
                { "word": "Whale", "translate": "Кит", "help": "Морское животное" },
                { "word": "Dolphin", "translate": "Дельфин", "help": "Морское животное" },
                { "word": "Shark", "translate": "Акула", "help": "Морское животное" },
                { "word": "Jellyfish", "translate": "Медуза", "help": "Морское животное" },
                { "word": "Seal", "translate": "Тюлень", "help": "Морское животное" },
                { "word": "Penguin", "translate": "Пингвин", "help": "Морское животное" },
                { "word": "Coconut", "translate": "Кокос", "help": "Фрукт" },
                { "word": "Banana", "translate": "Банан", "help": "Фрукт" },
                { "word": "Apple", "translate": "Яблоко", "help": "Фрукт" },
                { "word": "Orange", "translate": "Апельсин", "help": "Фрукт" },
                { "word": "Lemon", "translate": "Лимон", "help": "Фрукт" },
                { "word": "Lime", "translate": "Лайм", "help": "Фрукт" },
                { "word": "Grape", "translate": "Виноград", "help": "Фрукт" },
                { "word": "Watermelon", "translate": "Арбуз", "help": "Фрукт" },
                { "word": "Melon", "translate": "Дыня", "help": "Фрукт" },
                { "word": "Pineapple", "translate": "Ананас", "help": "Фрукт" },
                { "word": "Strawberry", "translate": "Клубника", "help": "Фрукт" },
                ],
        },
        {
            lvl: "A2",
            title: "Предпороговый уровень",
            content: [{word: "A Apple2", translate: "Яблоко2", help: "Сладкий плод2"}],
        }
    ]
    const wordsB = [
        {
            lvl: "B1",
            title: "Пороговый уровень",
            content: [{word: "B Apple", translate: "Яблоко", help: "Сладкий плод"}],
        },
        {
            lvl: "B2",
            title: "Пороговый продвинутый уровень",
            content: [{word: "B Apple2", translate: "Яблоко2", help: "Сладкий плод2"}],
        }
    ]
    const wordsC = [
        {
            lvl: "C1",
            title: "Уровень профессионального владения",
            content: [{word: "C Apple", translate: "Яблоко", help: "Сладкий плод"}],
        },
        {
            lvl: "C2",
            title: "Уровень владения в совершенстве",
            content: [{word: "C Apple2", translate: "Яблоко2", help: "Сладкий плод2"}],
        }
    ]

  return (
    <div className="app">
      <div className="home">
          <Header/>
          <List lvl={"A"} title={"Элементарное владение"} content={wordsA}/>
          <List lvl={"B"} title={"Самостоятельное владение"} content={wordsB}/>
          <List lvl={"C"} title={"Свободное владение"} content={wordsC}/>
      </div>
    </div>
  );
};

export default Home;
