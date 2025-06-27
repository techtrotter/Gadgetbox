# GadgetBox

**A full-stack e-commerce web application focused on electronics.**  
Developed using Django REST Framework for the backend and React.js + Redux for the frontend.

---

## Project Overview

GadgetBox is a responsive, scalable e-commerce solution featuring product listing, cart management, secure checkout, admin functionalities, and PayPal integration. It follows best practices in clean code architecture, RESTful API design, and frontend component reusability.

---

## Features

### User:
- User registration, login with JWT-based authentication
- Product listing, pagination, rating, and reviews
- Cart system and order placement
- PayPal payment gateway integration
- View order history and order details

### Admin:
- Product creation, editing, deletion
- Order delivery management
- Access control (admin-only routes)
- Auto user profile creation using Django signals

---

## Folder Structure

```
GadgetBox/
│
├── backend/                  # Django REST Framework API
│   ├── urls/                 # Modularized URL routing
│   ├── views/                # API views and logic
│   ├── models/               # Database schema
│   ├── serializers/          # DRF Serializers
│   ├── signals.py            # Auto profile creation
│   └── db.sqlite3            # Development database
│
├── frontend/                 # React.js frontend
│   ├── src/
│   │   ├── components/
│   │   ├── screens/
│   │   ├── actions/
│   │   └── reducers/
│   └── public/
│
├── myenv/                    # Python virtual environment
├── README.md
├── package.json
├── requirements.txt
├── yarn.lock
└── manage.py
```

---

## Backend Setup (Django)

```bash
cd backend
python -m venv venv
source venv/bin/activate      # Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

---

## Frontend Setup (React)

```bash
cd frontend
npm install
npm start
```

---

## Authentication

- Uses JWT tokens for login and access control
- Protected routes for admin using custom middleware
- Token refresh and expiration handled via SimpleJWT

---

## Payments

- Integrated with PayPal REST API
- Payment status recorded and linked with order model
- Custom hooks for payment success handling

---

## Screenshots

### Product Listing  
![Product List](assets/screenshots/product-listing.png)

### Product Detail  
![Product Detail](assets/screenshots/product-detail.png)

### Order Summary  
![Order Page](assets/screenshots/order-summary.png)

---

## Demo Video

**Watch the walkthrough demo:**  
[Click to View Demo](assets/demo/Screen_Recording_2024-09-26_152344_resized.mp4)

---

## Deployment Instructions

### Frontend
- Can be deployed to Netlify, Vercel, or Firebase Hosting

### Backend
- Compatible with Heroku, Render, or Railway deployment
- CORS, environment variables (`.env`), and production settings required

---

## Technologies Used

| Layer      | Stack                           |
|------------|----------------------------------|
| Frontend   | React.js, Redux, React Router    |
| Backend    | Django, Django REST Framework    |
| Auth       | JWT Authentication (SimpleJWT)   |
| Payment    | PayPal API (Sandbox)             |
| Database   | SQLite3 (development), PostgreSQL (prod) |
| Styling    | Bootstrap, React Bootstrap       |
| Deployment | Netlify, Heroku, Railway         |

---

## About the Author

**Bijoy Laxmi Biswas**  
Full-stack Python developer passionate about clean architecture, scalable systems, and modern JavaScript.  
- GitHub: [@techtrotter](https://github.com/techtrotter)  
- LinkedIn: [Bijoy Laxmi Biswas](https://www.linkedin.com/in/bijoy-laxmi-biswas-cse07/)  
- Email: biswas.bijaylacxmi04@gmail.com

---

## License

This project is open for educational and demonstration purposes.
