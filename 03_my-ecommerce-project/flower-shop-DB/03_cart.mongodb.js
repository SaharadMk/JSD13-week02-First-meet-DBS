use("Flower-shop-JSD13-db");

db.cart.deleteMany({});

db.cart.insertMany([
  {
    "_id": "686d30000000000000000001",
    "user_id": "1",
    "items": [
      {
        "product_id": "686d00000000000000000002",
        "quantity": 1
      },
      {
        "product_id": "686d00000000000000000004",
        "quantity": 2
      }
    ]
  },
  {
    "_id": "686d30000000000000000002",
    "user_id": "2",
    "items": [
      {
        "product_id": "686d00000000000000000001",
        "quantity": 1
      }
    ]
  },
  {
    "_id": "686d30000000000000000003",
    "user_id": "3",
    "items": [
      {
        "product_id": "686d00000000000000000005",
        "quantity": 3
      }
    ]
  },
  {
    "_id": "686d30000000000000000004",
    "user_id": "5",
    "items": [
      {
        "product_id": "686d00000000000000000003",
        "quantity": 1
      }
    ]
  }
]);
db.cart.find();
