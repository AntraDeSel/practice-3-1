# Аудит кода — неиспользуемые функции

Аудит проведён после рефакторинга main.ts под класс BookCatalog.
Проверено: функции в src/, которые экспортируются, но не вызываются
из main.ts.

| Название функции | Где находится | Полезная ли она? | Как её можно использовать в будущем? |
| :--- | :--- | :--- | :--- |
| formatBook | task1-types.ts | Да | Использовать в renderBooks вместо ручной склейки строки |
| calculateAverageYear | task1-types.ts | Да | Показать в шапке: «Средний год книг в коллекции: 2023» |
| addBook | task2-functions.ts | Да | Переиспользовать в CLI-скриптах без UI; покрыто тестами task2 |
| removeBook | task2-functions.ts | Да | То же — для CLI-утилит; покрыто тестами task2 |
| getBook | task2-functions.ts | Да | Страница деталей книги или быстрое редактирование по id |
| filterByMinRating | task3-filters.ts | Да | Ползунок «Минимальный рейтинг» в панели фильтров |
| filterAndSortBooks | task5-utils.ts | **Нет** | Дублирует applyFilters + sortBooks — логика уже собрана в refreshList |

## Решения

### Оставлены с JSDoc-пометкой @deprecated

Следующие функции полезны, но пока не задействованы в main.ts.
Каждая помечена JSDoc-комментарием с указанием будущей фичи:

formatBook
calculateAverageYear
addBook
removeBook
getBook
filterByMinRating

### Удалены

ничего