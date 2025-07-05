function calculateTotal(
  price: number,
  quantity: number,
  discount: number = 0
): number {
  return price * quantity * (1 - discount / 100);
}

calculateTotal(100, 2, 10);
calculateTotal(100, 2);

type IdType = string | number;

function displayId(id: IdType): void {
  if (typeof id === "string") {
    console.log(`ID: ${id.toUpperCase()}`);
  } else {
    console.log(`ID: ${id * 10}`);
  }
}

displayId("abc");
displayId(7);

interface Order {
  orderId: string;
  amount: number;
  status: "pending" | "shipped" | "delivered";
}

const orders: Order[] = [
  { orderId: "A1", amount: 100, status: "pending" },
  { orderId: "A2", amount: 200, status: "shipped" },
  { orderId: "A3", amount: 150, status: "delivered" },
  { orderId: "A4", amount: 120, status: "pending" },
];

function filterOrdersByStatus(
  orderList: Order[],
  status: "pending" | "shipped" | "delivered"
): Order[] {
  return orderList.filter((order) => order.status === status);
}

console.log(filterOrdersByStatus(orders, "pending"));

type ProductInfo = [string, number, number];

function updateStock(
  inventory: { [productName: string]: number },
  productInfo: ProductInfo
): { [productName: string]: number } {
  const [name, , stock] = productInfo;
  inventory[name] = stock;
  return inventory;
}

let inventory = { Phone: 10 };
console.log(updateStock(inventory, ["Phone", 599, 25]));