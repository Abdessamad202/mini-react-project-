# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# React Router :
popular routing library for pages navigation

**how to install it**
```bash
npm install react-router-dom
```
# React Router Setup Guide

## 1. **BrowserRouter**
`BrowserRouter` is a component that wraps your entire React application to enable routing functionality. It uses the HTML5 history API to keep your UI in sync with the URL.

### ✅ Example Usage:
```javascript
import { BrowserRouter } from 'react-router-dom';
import App from './App';

function Main() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default Main;
```

---

## 2. **Routes and Route**
`Routes` is a container component for defining different paths in your application. `Route` specifies a single path and the component that should be rendered for that path.

### ✅ Example Usage:
```javascript
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default App;
```

---

## 3. **Path and Element**
- `path`: Defines the URL for the route.
- `element`: Specifies the component to render when the path is matched.

### ✅ Example:
```javascript
<Route path="/contact" element={<ContactPage />} />
```

**Explanation:** When the user navigates to `/contact`, the `ContactPage` component will be rendered.

---

## 4. **Link**
`Link` is a component used to create navigation links between different routes. It prevents a full-page reload by handling navigation internally.

### ✅ Example Usage:
```javascript
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
```

---

## Additional Concepts:
### 🔄 **Dynamic Routing**
You can use dynamic routing to create routes with parameters.

### ✅ Example:
```javascript
<Route path="/product/:id" element={<ProductPage />} />
```

In `ProductPage`, you can access the `id` parameter using `useParams`:
```javascript
import { useParams } from 'react-router-dom';

function ProductPage() {
  const { id } = useParams();
  return <h1>Product ID: {id}</h1>;
}
```

---

### 🔐 **Protected Routes**
You can create protected routes that require authentication.

### ✅ Example:
```javascript
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, isAuthenticated }) {
  return isAuthenticated ? children : <Navigate to="/login" />;
}

<Routes>
  <Route path="/dashboard" element={<ProtectedRoute isAuthenticated={true}><Dashboard /></ProtectedRoute>} />
</Routes>

```

### 📦 **useContent Hook**
The `useContent` hook is a custom hook that can be used to manage and fetch content dynamically in your React application. It helps in managing state and data fetching for different routes or components.

### ✅ Example Implementation:
```javascript
import { useState, useEffect } from 'react';

function useContent(endpoint) {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(endpoint);
        const data = await response.json();
        setContent(data);
      } catch (error) {
        console.error('Error fetching content:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [endpoint]);

  return { content, loading };
}
```

### ✅ Example Usage:
```javascript
import React from 'react';
import useContent from './hooks/useContent';

function HomePage() {
  const { content, loading } = useContent('/api/home-content');

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{content.title}</h1>
      <p>{content.description}</p>
    </div>
  );
}

export default HomePage;
```

**Explanation:**
- The `useContent` hook accepts an API endpoint as a parameter.
- It fetches data from the endpoint and manages loading state.
- It returns `content` (the fetched data) and `loading` (the loading state).
# mini-react-project-
