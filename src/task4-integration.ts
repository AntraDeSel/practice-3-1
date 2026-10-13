// Задание 4: Интеграция с DOM (Парсинг сырых данных)
// Преобразование данных из HTML-формы в строго типизированный объект

import { Book } from "./task1-types";


export function createBookFromForm(formData: FormData): Book {

  // TODO 1: Получите сырые значения полей формы
  // Используйте formData.get("fieldName") as string
  // Поля: title, authors, year, rating
  const titleRaw = formData.get("title") as string;
  const authorsRaw = formData.get("authors") as string;
  const yearRaw = formData.get("year") as string;
  const ratingRaw = formData.get("rating") as string;

  // TODO 2: Обработайте авторов
 
  const authors = authorsRaw
    .split(",")
    .map((author) => author.trim())
    .filter((author) => author.length > 0)

  // TODO 3: Преобразуйте год
  const year = yearRaw ? parseInt(yearRaw, 10) : undefined;
  
  // TODO 4: Преобразуйте и ВАЛИДИРУЕМ рейтинг
  let rating: number | undefined = undefined;
  
  if (ratingRaw) {
    rating = parseFloat(ratingRaw);
    
    // Бизнес-правило: рейтинг строго от 0 до 5
    if (rating < 0 || rating > 5) {
      throw new Error("Рейтинг должен быть числом от 0 до 5");
    }
  }
  // TODO 5: Сгенерируйте уникальный ID
  // TODO 6: Верните итоговый объект Book
return {
    id: crypto.randomUUID(), // Генерируем уникальный строковый идентификатор
    title: titleRaw,
    authors: authors,
    year: year,
    rating: rating,
  };
}