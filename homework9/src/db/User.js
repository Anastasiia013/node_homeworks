import { DataTypes } from "sequelize";
import { sequelize } from "./sequelize.js";

const User = sequelize.define(
    "user",
    {
        email: {
            type: DataTypes.STRING,
            unique: {
                args: true,
                msg: "User with this email already exists"
            },
            allowNull: false,
            validate: {
                isEmail: {
                    args: true,
                    msg: "Email must be correct"
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ("user"),
            validate: {
                isIn: {
                    args: [["superadmin", "admin", "user"]],
                    msg: "Available roles: superadmin, admin or user"
                }
            }
        },
        mustChangePassword: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        }
    }
);

// User.sync({alter:true});

export default User;