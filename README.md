# GadgetBox

GadgetBox is a full-stack e-commerce web application built using Django REST Framework and React.js. It includes user and admin functionalities, a REST API backend, cart and checkout workflows, and PayPal integration for payment.

---

## Project Features

### User Functionality
- JWT-based registration/login/logout
- Browse and search paginated product listings
- View product details, add reviews and ratings
- Add to cart, update quantities, remove items
- Place orders with shipping details
- View order history

### Admin Functionality
- Create/update/delete products
- View all user orders
- Mark orders as delivered and paid

---

## Demo Video

Click below to view the live demo:

[![Watch Demo](assets/screenshots/product-list.png)](assets/demo/Screen_Recording_2024-09-26_152344_resized.mp4)

---

## Screenshots

### Product Listing Page
![Product List](assets/screenshots/product-listing.png)

### Product Detail Page
![Product Detail](assets/screenshots/product-detail.png)

### Order Summary & Payment
![Order Summary](assets/screenshots/order-summary.png)

### Footer and Pagination UI
![Footer](assets/screenshots/footer-pagination.png)

---

## Tech Stack

| Layer       | Technology                     |
|-------------|--------------------------------|
| Frontend    | React.js, Redux, Bootstrap     |
| Backend     | Django, Django REST Framework  |
| Database    | SQLite3 (dev), PostgreSQL (prod) |
| Auth        | JWT (SimpleJWT)                |
| Payments    | PayPal Sandbox API             |
| Deployment  | Netlify (frontend), Render/Heroku (backend) |

---

## Folder Structure

```
GadgetBox/
│
├── backend/
│   ├── urls/           # Modular routing: products, orders, users
│   ├── views/          # Business logic for APIs
│   ├── models/         # Product, Order, User models
│   ├── serializers/    # API serialization layer
│   └── db.sqlite3
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── screens/
│   │   └── redux/
│   └── public/
│
├── assets/
│   ├── demo/
│   │   └── Screen_Recording_2024-09-26_152344_resized.mp4
│   └── screenshots/
│       └── *.png
```

---

## Getting Started

### Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate     # Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## Deployment

- Frontend: Netlify or Vercel
- Backend: Render or Heroku
- CORS headers configured in Django
- Environment variables managed via `.env`

---

## About the Author

**Bijoy Laxmi Biswas**  
Full-stack Python Developer with a passion for solving real-world problems using scalable web technologies.

- GitHub: [@techtrotter](https://github.com/techtrotter)  
- LinkedIn: [linkedin.com/in/bijoy-laxmi-biswas-cse07](https://linkedin.com/in/bijoy-laxmi-biswas-cse07)

---

## License

This project is licensed under the MIT License.
