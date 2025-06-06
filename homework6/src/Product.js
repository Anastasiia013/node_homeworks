import sequelize from "./sequelize.js";

import { DataTypes } from "sequelize";

const Product = sequelize.define(
    "product",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    }
);

Product.sync();

export default Product;