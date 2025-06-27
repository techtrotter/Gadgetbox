
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

[![Watch Demo](./Screen%20Recording%202024-09-26%20152344_resized.mp4)](./Screen%20Recording%202024-09-26%20152344_resized.mp4)

This video showcases:
- End-to-end flow: from browsing products to placing an order
- Real-time frontend-backend interaction
- JWT-based login/logout
- Admin and user-specific actions
- Cart management and order summary

## UI Screenshots

###  Product Listing Page

![Product Listing](./Screenshot%202025-06-26%20173408.png)

> Displays a list of electronic gadgets such as laptops, phones, and accessories with prices, star ratings, and pagination controls.

---

### Product Details Page

![Product Details](./Screenshot%202025-06-26%20173418.png)

> On clicking any product, users are redirected to a dynamic product detail page showing high-resolution images, full descriptions, price, availability, and an "Add to Cart" button.

---

###  Footer & Contact Section

![Footer](./Screenshot%202025-06-26%20174100.png)

> The footer contains links to services, social media icons, an about section, and credits. It is responsive and consistent across all pages.



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
│   ├── urls/
│   ├── views/
│   ├── models/
│   ├── serializers/
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
│       ├── product-listing.png
│       ├── product-detail.png
│       └── order-summary.png
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
Full-stack Python Developer

- GitHub: [@techtrotter](https://github.com/techtrotter)  
- LinkedIn: [linkedin.com/in/bijoy-laxmi-biswas-cse07](https://linkedin.com/in/bijoy-laxmi-biswas-cse07)

---

## License

This project is licensed under the MIT License.
