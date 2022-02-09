import React from 'react';

const AdminTableHeader = () => {
    return ( 
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Наименование</th>
            <th scope="col">Категория</th>
            <th scope="col">Стоимость</th>
            <th scope="col">Кол-во</th>
            <th scope="col">Фото</th>
            <th scope="col">Действия</th>
          </tr>
        </thead>
    );
}
 
export default AdminTableHeader;