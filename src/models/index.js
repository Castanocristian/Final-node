const CartProduct = require("./Cart");
const Category = require("./Category");
const Image = require("./Image");
const Product = require("./Product");
const Purchase = require("./Purchase");
const User = require("./User");




Category.hasMany(Product);
Product.belongsTo(Category);


Product.hasMany(Image);
Image.belongsTo(Product);


Product.hasMany(CartProduct);
CartProduct.belongsTo(Product);

User.hasMany(CartProduct);
CartProduct.belongsTo(User);


Product.hasMany(Purchase);
Purchase.belongsTo(Product);

User.hasMany(Purchase);
Purchase.belongsTo(User);




