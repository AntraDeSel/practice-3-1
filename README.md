# Практика 3: Классы и ООП в TypeScript

Каталог книг из Практик 2.1 и 2.2 написан в функциональном стиле: состояние живёт
в переменной `catalog`, а функции принимают его как параметр. В этой практике
вы перепишете его на классы: состояние и поведение окажутся в одном объекте.

Цель: почувствовать разницу между подходами и понять, когда классы уместнее функций.

---

## Начало работы

1. Склонируйте репозиторий:
   ```bash
   git clone <ссылка-на-репозиторий>
   cd practice-3
   ```
2. Установите зависимости:
   ```bash
   npm install
   ```
3. Запустите сервер разработки:
   ```bash
   npm run dev
   ```
   Приложение работает как после Практики 2.2 — ничего не сломано.
4. Запустите тесты классов:
   ```bash
   npm test -- task6
   ```
   Сейчас тесты КРАСНЫЕ: класс `BookCatalog` в `src/task6-classes.ts` — заготовка.
   Ваша задача — сделать их зелёными. Ошибок компиляции в IDE при этом нет:
   заготовка компилируется, просто методы ещё не работают.

---

## Что делать

Все правки — в `src/task6-classes.ts`. В файле четыре TODO,
каждому соответствует свой блок тестов.

### TODO 1 — состояние BookCatalog
Приватный `books`, `readonly id`, конструктор, `addBook`, `removeBook`,
`getBooks`, геттер `count`. Мутации через иммутабельные обновления.
Тесты: конструктор, addBook, removeBook, getBooks, count.

### TODO 2 — поиск и сортировка
`searchByTitle(query)`, `sortBy('year' | 'rating')`.
Логику не писать заново — переиспользовать `filterByTitle` и `sortBooks`
из `task5-utils.ts`.
Тесты: searchByTitle, sortBy.

### TODO 3 — интеграция в main.ts
Заменить функциональный каталог на `new BookCatalog(...)`:
- `addBook(catalog, b)` → `catalog.addBook(b)`
- `removeBook(catalog, id)` → `catalog.removeBook(id)`
- `Object.values(catalog)` → `catalog.getBooks()`
- фильтры — `applyFilters(catalog.getBooks(), ...)`
- поиск — `catalog.searchByTitle(...)`, сортировка — `catalog.sortBy(...)`

**Ловушка десериализации.** `JSON.stringify` сохранит данные, но `JSON.parse`
вернёт простой объект без методов. После загрузки из localStorage:
```typescript
catalog = new BookCatalog(parsed.books, parsed.id);
```
Проверка: после F5 книги на месте **и** кнопки работают.

### TODO 4 (бонус) — класс BookClass
Имя `BookClass` — чтобы не конфликтовать с интерфейсом `Book`.
Поля `id, title, authors, year?, rating?`, метод `format()`,
статический `createFromFormData(FormData): BookClass`.
Логику брать из `formatBook` и `createBookFromForm`.

## Критерии сдачи

- [ ] TODO 1: тесты конструктора, addBook, removeBook, getBooks, count зелёные.
- [ ] TODO 2: тесты searchByTitle и sortBy зелёные, логика из task5-utils.
- [ ] TODO 3: приложение работает в браузере, после F5 кнопки работают.
- [ ] `npm test` полностью зелёный (включая практики 2.1 и 2.2).
- [ ] Бонус: BookClass с `format()` и `createFromFormData()`.

## Публикация на GitHub Pages


1. Убедитесь, что в `vite.config.ts` указано правильное имя репозитория:
   ```typescript
   export default defineConfig({
     base: '/practice-3-1/', // замените на имя вашего репозитория
   })
   ```

2. Соберите проект:
   ```bash
   npm run build
   ```
   
3. Опубликуйте:
   ```bash
   npx gh-pages -d dist
   ```

4. Включите GitHub Pages (делается один раз):
   **Settings → Pages → Source: Deploy from a branch → Branch: `gh-pages`, папка `/ (root)` → Save.**
   
5. Откройте ссылку `https://ваш-ник.github.io/practice-3-1/` — сайт станет доступен через 1–2 минуты.
