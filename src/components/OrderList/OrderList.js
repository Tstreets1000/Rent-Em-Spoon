import OrderListItem from '../OrderListItem/OrderListItem';
import styles from './OrderList.module.scss';

export default function OrderList({ orders, activeOrder, handleSelectOrder }) {
const orderItems = orders.map(o =>
  <OrderListItem
    order={o}
    isSelected={o === activeOrder}
    handleSelectOrder={handleSelectOrder}
    key={o._id}
  />
);

return (
  <main className={styles.OrderList}>
    {orderItems.length ?
      orderItems
      :
      <span className={styles.noOrders}>No Previous Orders</span>
    }
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_kQCG1tL51srf7wotSEitGr6BfOQGnZQNxg&amp;usqp=CAU"></img>
    <img src="https://media.tenor.com/1gFX_afJJLcAAAAC/dancing-jerome.gif" width="218" height="188.5" alt="Dancing Jerome GIF - Dancing Jerome Martin Lawrence GIFs"></img>
  </main>
);
}