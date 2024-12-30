# Hall Booking Application

A full-stack web application for managing hall bookings. This project includes a Spring Boot backend and a React.js frontend styled with Tailwind CSS.

---

## **Features**
- Create, Read, Update, Delete (CRUD) operations for hall bookings.
- Backend APIs with PostgreSQL stored procedures.
- User-friendly React.js frontend.

---

## **Project Structure**
```
hall-booking/           # Backend (Spring Boot)  
hall-booking-frontend/  # Frontend (React.js)
```

---

## **Technologies Used**
- Backend: Spring Boot (Java), PostgreSQL
- Frontend: React.js, Tailwind CSS
- API Communication: RESTful APIs

---

## **Setup Instructions**

### **1. Backend Setup**
1. Navigate to the `hall-booking` folder:
   ```bash
   cd hall-booking
   ```

2. Configure the database connection in `src/main/resources/application.properties`:
   ```properties
   spring.datasource.url=jdbc:postgresql://localhost:5432/hall_booking
   spring.datasource.username=your_username_here_for_database
   spring.datasource.password=your_password_here
   spring.jpa.hibernate.ddl-auto=none
   ```

3. Start the backend:
   ```bash
   mvn spring-boot:run
   ```
   The backend will run on [http://localhost:8080](http://localhost:8080).

---

### **2. Frontend Setup**
1. Navigate to the `hall-booking-frontend` folder:
   ```bash
   cd hall-booking-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend:
   ```bash
   npm start
   ```
   The frontend will run on [http://localhost:3000](http://localhost:3000).

---

## **Usage**
- Open [http://localhost:3000](http://localhost:3000) in your browser.
- Use the following features:
  - **Add Booking**: Click the "Add Booking" button and fill out the form.
  - **Edit Booking**: Click "Edit" next to a booking, update fields, and save.
  - **Delete Booking**: Click "Delete" next to a booking and confirm deletion.

---

## **Database Setup**
Ensure the following stored procedures exist in your PostgreSQL database:

### Insert Booking:
```sql
CREATE OR REPLACE PROCEDURE insert_booking(
    _applicant_name VARCHAR,
    _email VARCHAR,
    _mobile VARCHAR,
    _start_date DATE,
    _end_date DATE,
    _rent DECIMAL,
    _additional_charges DECIMAL,
    _hall_name VARCHAR,
    _remarks TEXT
)
LANGUAGE plpgsql AS $$
BEGIN
    INSERT INTO bookings (applicant_name, email, mobile, start_date, end_date, rent, additional_charges, hall_name, remarks)
    VALUES (_applicant_name, _email, _mobile, _start_date, _end_date, _rent, _additional_charges, _hall_name, _remarks);
END;
$$;
```

### Update Booking:
```sql
CREATE OR REPLACE PROCEDURE update_booking(
    _id INT,
    _applicant_name VARCHAR,
    _email VARCHAR,
    _mobile VARCHAR,
    _start_date DATE,
    _end_date DATE,
    _rent DECIMAL,
    _additional_charges DECIMAL,
    _hall_name VARCHAR,
    _remarks TEXT
)
LANGUAGE plpgsql AS $$
BEGIN
    UPDATE bookings
    SET applicant_name = _applicant_name,
        email = _email,
        mobile = _mobile,
        start_date = _start_date,
        end_date = _end_date,
        rent = _rent,
        additional_charges = _additional_charges,
        hall_name = _hall_name,
        remarks = _remarks
    WHERE id = _id;
END;
$$;
```

### Delete Booking:
```sql
CREATE OR REPLACE PROCEDURE delete_booking(_id INT)
LANGUAGE plpgsql AS $$
BEGIN
    DELETE FROM bookings WHERE id = _id;
END;
$$;
```
## Screenshots:
![image](https://github.com/user-attachments/assets/185cb317-a05e-43d7-917b-c3f3e1759fc7)
![image](https://github.com/user-attachments/assets/f363d4a7-4207-4ac0-9024-fbd2b7b23fd5)
![image](https://github.com/user-attachments/assets/48a97cc9-6462-44d2-bc38-0acc7dbdab1f)

---

## **Acknowledgements**
This project was built for an internship assignment and demonstrates full-stack development skills.
