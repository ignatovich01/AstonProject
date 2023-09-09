import React from 'react';
import Button from 'react-bootstrap/Button';

import { useSelector, useDispatch } from 'react-redux';
import { resetHistory } from '../../store/slices/historySlice';
import { Link } from 'react-router-dom';

export function HistoryPage() {
   const dispatch = useDispatch();
   const history = useSelector((state) => state.history.history);
   console.log(history);
   if (history.length > 0) {
      return (
         <div>
            <Button
               style={{ marginLeft: '20px' }}
               onClick={() => {
                  dispatch(resetHistory());
               }}
            >
               Reset all history
            </Button>

            <div
               style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginLeft: '20px',
                  marginBottom: '20px',
               }}
            >
               {history.map((item) => (
                  <div
                     style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginTop: '20px',
                     }}
                  >
                     <div style={{ marginRight: '20px' }}>
                        {' '}
                        {new Date().toLocaleString()}
                     </div>

                     <Link key={Date.now()} to={`/search/${item}`}>
                        {item}
                     </Link>
                  </div>
               ))}
            </div>
         </div>
      );
   }
   return <div>История пока пустая</div>;
}
