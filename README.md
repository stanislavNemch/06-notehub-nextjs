# NoteHub (Next.js Version)

## 🇺🇦 Українська версія

**NoteHub** — це сучасний веб-додаток для керування особистими нотатками, перебудований на фреймворку **Next.js**. Цей проєкт є еволюцією попередньої версії на React, тепер з використанням потужних можливостей Next.js, таких як серверний рендеринг (SSR), клієнтський рендеринг (CSR) та маршрутизація на основі файлової системи (App Router).

### ✨ Основні функції

- **Багатосторінкова архітектура**: Навігація між головною сторінкою, списком нотаток та детальною інформацією про кожну нотатку.
- **Створення та видалення нотаток**: Інтерактивні форми та функції для керування нотатками.
- **Пагінація та пошук**: Зручна навігація по сторінках та фільтрація нотаток за ключовим словом з оптимізацією запитів (debounce).
- **Серверний рендеринг (SSR)**: Сторінки зі списком нотаток та детальною інформацією завантажуються на сервері для кращої продуктивності та SEO.
- **Клієнтський рендеринг (CSR)**: Інтерактивні частини програми залишаються на клієнті для швидкого відгуку інтерфейсу.

### 💻 Технологічний стек

| Призначення          | Технологія / Бібліотека                 |
| :------------------- | :-------------------------------------- |
| **Основа**           | React, Next.js (App Router), TypeScript |
| **Керування станом** | TanStack Query (React Query)            |
| **HTTP-запити**      | Axios                                   |
| **Форми**            | Formik та Yup                           |
| **Стилізація**       | CSS Modules                             |
| **Компоненти**       | react-paginate, react-hot-toast         |

---

### 📂 Структура проєкту

Проєкт організовано згідно з конвенціями Next.js App Router для чіткого розділення серверної та клієнтської логіки.

```
/
├── app/                  # Основна папка з маршрутами та сторінками
│   ├── layout.tsx        # Глобальний layout (Header, Footer)
│   ├── page.tsx          # Головна сторінка ("/")
│   └── notes/            # Маршрут для нотаток
│       ├── page.tsx      # Сторінка списку нотаток (SSR)
│       ├── Notes.client.tsx # Клієнтська логіка для списку
│       └── [id]/         # Динамічний маршрут для однієї нотатки
│           ├── page.tsx  # Сторінка деталей (SSR)
│           └── NoteDetails.client.tsx # Клієнтська логіка для деталей
├── components/           # Перевикористовувані React-компоненти (клієнтські)
├── lib/                  # Допоміжні функції, включаючи логіку API
│   └── api.ts            # Функції для роботи з REST API
└── types/                # Глобальні типи TypeScript
    └── note.ts
```

---

### 🚀 Встановлення та запуск

1.  **Клонуйте репозиторій:**

    ```bash
    git clone <your-repository-url>
    cd 06-notehub-nextjs
    ```

2.  **Встановіть залежності:**

    ```bash
    npm install
    ```

3.  **Налаштуйте змінні оточення:**
    Створіть файл `.env.local` у корені проєкту та додайте ваш токен:

    ```
    NEXT_PUBLIC_NOTEHUB_TOKEN=your_api_token_here
    ```

4.  **Запустіть проєкт:**

    ```bash
    npm run dev
    ```

    Додаток буде доступний за адресою [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000).

---

---

## 🇬🇧 English Version

**NoteHub** is a modern web application for managing personal notes, rebuilt on the **Next.js** framework. This project is an evolution of the previous React version, now leveraging the powerful features of Next.js, such as Server-Side Rendering (SSR), Client-Side Rendering (CSR), and a file-system-based App Router.

### ✨ Key Features

- **Multi-page Architecture**: Navigation between the home page, the notes list, and detailed views for each note.
- **Note Creation and Deletion**: Interactive forms and functions to manage your notes.
- **Pagination and Search**: Convenient page navigation and keyword-based filtering with debounced requests for optimization.
- **Server-Side Rendering (SSR)**: The notes list and details pages are pre-rendered on the server for better performance and SEO.
- **Client-Side Rendering (CSR)**: Interactive parts of the application remain on the client for a fast and responsive UI.

### 💻 Technology Stack

| Purpose              | Technology / Library                    |
| :------------------- | :-------------------------------------- |
| **Core**             | React, Next.js (App Router), TypeScript |
| **State Management** | TanStack Query (React Query)            |
| **HTTP Requests**    | Axios                                   |
| **Forms**            | Formik & Yup                            |
| **Styling**          | CSS Modules                             |
| **Components**       | react-paginate, react-hot-toast         |

---

### 📂 Project Structure

The project is organized according to Next.js App Router conventions for a clear separation of server and client logic.

```
/
├── app/                  # Main directory for routes and pages
│   ├── layout.tsx        # Global layout (Header, Footer)
│   ├── page.tsx          # Home page ("/")
│   └── notes/            # Route for notes
│       ├── page.tsx      # Notes list page (SSR)
│       ├── Notes.client.tsx # Client-side logic for the list
│       └── [id]/         # Dynamic route for a single note
│           ├── page.tsx  # Note details page (SSR)
│           └── NoteDetails.client.tsx # Client-side logic for details
├── components/           # Reusable React components (client-side)
├── lib/                  # Helper functions, including API logic
│   └── api.ts            # Functions for interacting with the REST API
└── types/                # Global TypeScript types
    └── note.ts
```

---

### 🚀 Installation and Setup

1.  **Clone the repository:**

    ```bash
    git clone <your-repository-url>
    cd 06-notehub-nextjs
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a file named `.env.local` in the project root and add your token:

    ```
    NEXT_PUBLIC_NOTEHUB_TOKEN=your_api_token_here
    ```

4.  **Run the project:**

    ```bash
    npm run dev
    ```

    The application will be available at [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000).
