import { sequelize } from "./sequelize.js";
import { DataTypes } from "sequelize";

const Book = sequelize.define(
    "book",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                args: true,
                msg: "Book already exists"
            }
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        year: {
            type: DataTypes.NUMBER,
            allowNull: false,
            validate: {
                min: 1
            }
        }
    }
);

// Book.sync();

export default Book;