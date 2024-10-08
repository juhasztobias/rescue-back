import Order from "database/models/order.model";
import OrderItem from "database/models/order_item.model";

export const getListOfOrders = async (userId, businessId) => {
    const orders = await Order.findAll({
        include: [{
            model: OrderItem,
            attributes: ['productId', 'quantity', 'price']
        }],
        where: {
            "userId": userId ?? null,
            "businessId": businessId ?? null
        }
    }).catch((err) => {
        console.error(err);
        throw new Error("Error al obtener las órdenes");
    });
    return orders;
}