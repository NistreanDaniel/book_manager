# Book Manager

React web application for managing a book collection with full CRUD functionality and real-time search.

---

## Technologies

- React 18
- Mantine UI 7
- React Query 4
- JSON Server
- Axios
- React Icons

---


## Installation

### Prerequisites

- Node.js v22.14.0 or higher
- npm 11.3.0 or higher


### Installation steps

#### 1. Clone the repository
 ```bash
 git clone https://github.com/NistreanDaniel/book_manager.git
```

```bash
 cd book-manager
```

#### 2.Create .env file with contents from .env.example
    
```bash
touch .env
```
    
```bash
# Normally you would get the API URL 
# from the backend team, but now 
# for the sake of simplicity, I'll paste it below
REACT_APP_API_URL='http://localhost:3004/books/'
```

#### 3.Install dependencies
 ```bash
 npm install 
 ```

#### 4.Start the Mock API Server (port 3004)
 ````bash
 npm run mock-db-server
 ````

#### 5.Start Application
 ```bash
 npm start
 ```

#### 6.Open the application in your browser
````bash
 http://localhost:3000
 ````
# Enjoy!

