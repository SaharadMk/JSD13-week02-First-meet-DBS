use("Flower-shop-JSD13-db");

db.users.deleteMany({});

db.users.insertMany([
  {
    "user_id": "1",
    "fullname": "สมชาย ใจดี",
    "email": "somchai@email.com",
    "password": "$2b$10$abc123...",
    "phone": "0812345678",
    "addresses": [
      {
        "label": "บ้าน",
        "address_line": "99/12",
        "street": "ถนนสุขุมวิท",
        "district": "คลองเตย",
        "province": "กรุงเทพมหานคร",
        "postal_code": "10110",
        "is_default": true
      }
    ],
    "createdAt": "2026-07-09T10:00:00Z",
    "updatedAt": "2026-07-09T10:00:00Z"
  },
  {
    "user_id": "2",
    "fullname": "สมหญิง สุขใจ",
    "email": "somying@email.com",
    "password": "$2b$10$def456...",
    "phone": "0823456789",
    "addresses": [
      {
        "label": "บ้าน",
        "address_line": "45/7",
        "street": "ถนนนิมมานเหมินท์",
        "district": "เมืองเชียงใหม่",
        "province": "เชียงใหม่",
        "postal_code": "50200",
        "is_default": true
      }
    ],
    "createdAt": "2026-07-09T10:05:00Z",
    "updatedAt": "2026-07-09T10:05:00Z"
  },
  {
    "user_id": "3",
    "fullname": "อนันต์ บุญมี",
    "email": "anan@email.com",
    "password": "$2b$10$ghi789...",
    "phone": "0834567890",
    "addresses": [
      {
        "label": "บ้าน",
        "address_line": "123",
        "street": "ถนนมิตรภาพ",
        "district": "เมืองขอนแก่น",
        "province": "ขอนแก่น",
        "postal_code": "40000",
        "is_default": true
      }
    ],
    "createdAt": "2026-07-09T10:10:00Z",
    "updatedAt": "2026-07-09T10:10:00Z"
  },
  {
    "user_id": "4",
    "fullname": "วิภา แสงทอง",
    "email": "wipa@email.com",
    "password": "$2b$10$jkl012...",
    "phone": "0845678901",
    "addresses": [
      {
        "label": "บ้าน",
        "address_line": "88/9",
        "street": "ถนนเทพกระษัตรี",
        "district": "เมืองภูเก็ต",
        "province": "ภูเก็ต",
        "postal_code": "83000",
        "is_default": true
      }
    ],
    "createdAt": "2026-07-09T10:15:00Z",
    "updatedAt": "2026-07-09T10:15:00Z"
  },
  {
    "user_id": "5",
    "fullname": "ธนพล รุ่งเรือง",
    "email": "tanapon@email.com",
    "password": "$2b$10$mno345...",
    "phone": "0856789012",
    "addresses": [
      {
        "label": "บ้าน",
        "address_line": "77/15",
        "street": "ถนนสุขุมวิท",
        "district": "เมืองชลบุรี",
        "province": "ชลบุรี",
        "postal_code": "20000",
        "is_default": true
      }
    ],
    "createdAt": "2026-07-09T10:20:00Z",
    "updatedAt": "2026-07-09T10:20:00Z"
  }
]);
db.users.find();