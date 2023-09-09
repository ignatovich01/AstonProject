import currentUserKeyBuilder from '../../utils/localStorage/currentUserKeyBuilder';

const historyMIddlewares = (state) => (next) => (action) => {
   const { history } = state.getState().history;

   if (action.type === 'history/addToHistory') {
      localStorage.setItem(
         currentUserKeyBuilder('history'),
         JSON.stringify([...history, action.payload])
      );
   }
   if (action.type === 'history/resetHistory') {
      localStorage.setItem(
         currentUserKeyBuilder('history'),
         JSON.stringify([])
      );
   }

   return next(action);
};

export default historyMIddlewares;
