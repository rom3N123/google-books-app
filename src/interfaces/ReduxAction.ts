interface IReduxAction {
   type: string;
   payload: object | any[] | string | number | null;
}

export default IReduxAction;
