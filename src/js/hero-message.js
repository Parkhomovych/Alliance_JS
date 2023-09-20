// Визов функції відправлення messages on backend
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { searchAddOrders } from './createAPI';

export default function callMassageAdd(modalMessage) {
    modalMessage.addEventListener('submit', handlerMessage);

    function handlerMessage(e) {
      e.preventDefault()
      const { name, phone, email, comment } = e.currentTarget.elements;
  
      let message = {
        name: name.value,
        phone: phone.value,
        email: email.value,
        comment: comment.value,
      };
  
      searchAddOrders(message).then(auditMessage).catch(error => { console.log(error) });
    }   
};

function auditMessage(res) {
    
    if (res.data.message==="Success") {
        Notify.success('Вітаємо, ваше замовлення прийнято!')
    }else{Notify.warning('Вибачте, в цей час замовлення не приймаються!')}
    
};
