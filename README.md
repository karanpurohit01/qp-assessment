## API Endpoints

### Add Grocery Item
**POST /admin/add**
```bash
curl --location 'http://localhost:3000/admin/add' \
--header 'Content-Type: application/json' \
--data '{"name": "Orange", "price": 100, "quantity": 50}'
```

### View All Grocery Items
**GET /admin**
```bash
curl --location 'http://localhost:3000/admin'
```

### Remove Grocery Item
**DELETE /admin/{{id}}**
```bash
curl --location --request DELETE 'http://localhost:3000/admin/1'
```

### Update Grocery Item
**PUT /admin/{{id}}**
```bash
curl --location --request PUT 'http://localhost:3000/admin/2' \
--header 'Content-Type: application/json' \
--data '{"name": "Green Apple", "price": 1.80, "quantity": 120}'
```

### View Available Grocery Items (User)
**GET /user/items**
```bash
curl --location 'http://localhost:3000/user/items'
```

### Book Grocery Items (User)
**POST /user/book**
```bash
curl --location 'http://localhost:3000/user/book' \
--header 'Content-Type: application/json' \
--data '{
  "userId": 1,
  "items": [
    {"groceryItemId": 2, "quantity": 5},
    {"groceryItemId": 3, "quantity": 6}
  ]
}'
```



## Database Schema

### Grocery Items Table
```sql
CREATE TABLE `grocery_items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;
```

### Orders Table
```sql
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `grocery_item_id` int NOT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `grocery_item_id` (`grocery_item_id`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`grocery_item_id`) REFERENCES `grocery_items` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;
```
