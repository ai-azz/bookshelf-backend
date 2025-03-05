# Bookshelf API 📚

Welcome to the **Bookshelf API**! This is a RESTful API built with Hapi.js that allows users to manage a virtual bookshelf. Users can add, retrieve, update, and delete book entries for managing personal or shared book collections. 
This project serves as a learning platform for implementing backend development concepts. The API provides functionalities to manage a bookshelf application, including adding, editing, deleting, and retrieving books.

## 🚀 Features

- **Add Books**: Create new book entries with details like title, author, year, and summary.
- **View All Books**: Retrieve a list of all books with minimal information.
- **View a Book by ID**: Retrieve Detailed information about a specific book.
- **Update Books**: Modify details of an existing book.
- **Delete Books**: Remove books from the collection.
- **Filter & Search**: Search for books by title, author, or reading status.
- **CORS Support**: Allows cross origin request for seamless frontend integration.

## 🛠️ Technologies Used

- **Node.js**: JavaScript runtime for building scalable network applications.
- **Hapi.js**: Framework for building robust and efficient APIs.
- **Nodemon**: Development tool to monitor changes and restart the server automatically.
- **ESLint**: For maintaining code quality and consistency.

## 🗂️ Project Structure

```
bookshelf-backend/
├── src/
│   ├── handler/
│   │   ├── addBook.js
│   │   ├── deleteBookById.js
│   │   ├── editBookById.js
│   │   ├── getAllBook.js
│   │   └── getBookById.js
│   ├── books.js
│   ├── routes.js
│   └── server.js
├── test/
├── eslint.config.mjs
├── LICENSE
├── package-lock.json
├── package.json
└── README.md
```

- **`handlers/`**: Contains handler functions for each route.
- **`routes.js`**: Defines API endpoints and their associated methods.
- **`test/`**: Contains files used to perform API testing

## 📖 API Endpoints

### Base URL: `http://localhost:9000`

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/books` | Retrieve all books |
| POST | `/books` | Add a new book |
| GET | `/books/{id}` | Retrieve a book by ID |
| PUT | `/books/{id}` | Update a book by ID |
| DELETE | `/books/{id}` | Delete a book by ID |

### 1. Add a Book

- **URL**: `/books`
- **Method**: `POST`
- **Request Body**:
    
    ```json
    {
      "name": "Book Name",
      "year": 2023,
      "author": "Author Name",
      "summary": "A brief summary",
      "publisher": "Publisher Name",
      "pageCount": 300,
      "readPage": 150,
      "reading": true
    }
    ```
    
- **Response**:
    - Success:
        
        ```json
        {
          "status": "success",
          "message": "Buku berhasil ditambahkan",
          "data": {
            "bookId": "unique-book-id"
          }
        }
        ```
        
    - Failure: Missing `name` or `readPage` > `pageCount`.

### 2. View All Books

- **URL**: `/books`
- **Method**: `GET`
- **Query Parameters**:
    - `name`: Filter by name (case-insensitive).
    - `reading`: `1` for books being read, `0` otherwise.
    - `finished`: `1` for completed books, `0` otherwise.
- **Response**:
    
    ```json
    {
      "status": "success",
      "data": {
        "books": [
          {
            "id": "unique-book-id",
            "name": "Book Name",
            "publisher": "Publisher Name"
          }
        ]
      }
    }
    ```
    

### 3. View a Book by ID

- **URL**: `/books/{bookId}`
- **Method**: `GET`
- **Response**:
    - Success:
        
        ```json
        {
          "status": "success",
          "data": {
            "book": {
              "id": "unique-book-id",
              "name": "Book Name",
              "year": 2023,
              ...
            }
          }
        }
        ```
        
    - Failure: `404` if book not found.

### 4. Edit a Book by ID

- **URL**: `/books/{bookId}`
- **Method**: `PUT`
- **Request Body**: Same as Add a Book.
- **Response**:
    - Success:
        
        ```json
        {
          "status": "success",
          "message": "Buku berhasil diperbarui"
        }
        ```
        
    - Failure: Missing `name` or `readPage` > `pageCount`, or ID not found.

### 5. Delete a Book by ID

- **URL**: `/books/{bookId}`
- **Method**: `DELETE`
- **Response**:
    - Success:
        
        ```json
        {
          "status": "success",
          "message": "Buku berhasil dihapus"
        }
        ```
        
    - Failure: `404` if book not found.

## 📋 Installation And Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
1. **Clone the Repository**:
    
    ```bash
    git clone https://github.com/ai-azz/bookshelf-backend.git
    cd bookshelf-backend
    ```
    
2. **Install Dependencies**:
    
    ```bash
    npm install
    ```
    
3. **Run the Server**:
    
    ```bash
    npm run start
    ```
    
4. **Run in Development Mode** (with Nodemon):
    
    ```bash
    npm run dev
    ```
    

## 🧪 Testing the API

Use tools like **Postman** (a user-friendly API client) or **cURL** (a command-line tool) to test the API endpoints. Example request:

- **Adding a Book**:
    
    ### Using Postman
    
    1. Open Postman and create a new request.
    2. Set the method to **POST** and enter the URL: `http://localhost:9000/books`.
    3. In the **Body** tab, select **raw** and set the format to **JSON**.
    4. Enter the following JSON data:
        
        ```json
        {
           "name": "The Great Gatsby",
           "year": 1925,
           "author": "F. Scott Fitzgerald",
           "summary": "A novel about the American dream.",
           "publisher": "Charles Scribner's Sons",
           "pageCount": 218,
           "readPage": 218,
           "reading": false
        }
        ```
        
    5. Click **Send**.
        - **Response Example**:
            
            ```json
            {
              "status": "success",
              "message": "Buku berhasil ditambahkan",
              "data": {
                "bookId": "unique-book-id"
              }
            }
            
            ```
            
    
    ### Using cURL
    
    Run the following command in your terminal:
    
    ```bash
    curl -X POST http://localhost:9000/books \
    -H "Content-Type: application/json" \
    -d '{
      "name": "The Great Gatsby",
      "year": 1925,
      "author": "F. Scott Fitzgerald",
      "summary": "A novel about the American dream.",
      "publisher": "Charles Scribner\'s Sons",
      "pageCount": 218,
      "readPage": 218,
      "reading": false
    }'
    
    ```
    
    - **Response Example**:
        
        ```json
        {
          "status": "success",
          "message": "Buku berhasil ditambahkan",
          "data": {
            "bookId": "unique-book-id"
          }
        }
        
        ```
        
- **View All Books**
    
    ### Using Postman
    
    1. Create a new request with the **GET** method.
    2. Enter the URL: `http://localhost:9000/books`.
    3. Click **Send**.
        - **Response Example**:
            
            ```json
            {
              "status": "success",
              "data": {
                "books": [
                  {
                    "id": "unique-book-id",
                    "name": "The Great Gatsby",
                    "publisher": "Charles Scribner's Sons"
                  }
                ]
              }
            }
            ```
            
    
    ### Using cURL
    
    Run the following command in your terminal:
    
    ```bash
    curl -X GET http://localhost:9000/books
    ```
    
    - **Response Example**:
        
        ```json
        {
          "status": "success",
          "data": {
            "books": [
              {
                "id": "unique-book-id",
                "name": "The Great Gatsby",
                "publisher": "Charles Scribner's Sons"
              }
            ]
          }
        }
        ```
        

---
## 🏁 Conclusion

The **Bookshelf API** is a robust and flexible backend application for managing virtual bookshelves. It provides a comprehensive learning platform for implementing RESTful APIs with Hapi.js. By following the provided documentation, users can easily set up, test, and customize the API for personal or shared book collections.

Feel free to explore, modify, and contribute to this project. For licensing details, please refer to the [LICENSE](https://github.com/ai-azz/bookshelf-backend?tab=MIT-1-ov-file) file.

Happy coding! 🎉