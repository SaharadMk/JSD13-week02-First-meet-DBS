use("Flower-shop-JSD13-db");

db.products.deleteMany({});

db.products.insertMany([
  {
    "product_id": "686d00000000000000000001",
    "name": "กุหลาบแดง",
    "description": "ช่อกุหลาบ 10 ดอก",
    "price": 599.00,
    "stock": 20,
    "image": "rose.jpg"
  },
  {
    "product_id": "686d00000000000000000002",
    "name": "ทานตะวัน",
    "description": "ช่อทานตะวัน 5 ดอก",
    "price": 450.00,
    "stock": 15,
    "image": "sunflower.jpg"
  },
  {
    "product_id": "686d00000000000000000003",
    "name": "ลิลลี่ขาว",
    "description": "ช่อลิลลี่",
    "price": 690.00,
    "stock": 12,
    "image": "lily.jpg"
  },
  {
    "product_id": "686d00000000000000000004",
    "name": "ทิวลิป",
    "description": "ช่อทิวลิป 8 ดอก",
    "price": 850.00,
    "stock": 10,
    "image": "tulip.jpg"
  },
  {
    "product_id": "686d00000000000000000005",
    "name": "เดซี่",
    "description": "ช่อเดซี่สีขาว",
    "price": 350.00,
    "stock": 25,
    "image": "daisy.jpg"
  }
]);
db.products.find();
