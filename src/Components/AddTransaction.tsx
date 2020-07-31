import React, { useContext } from "react";
import { UserContext } from "../Components/Context/GlobalState";
export const AddTransaction: React.FC<{}> = () => {
  const { dispatch } = useContext(UserContext);

  const [text, SetText] = React.useState<string>("");
  const [amount, Setamount] = React.useState<any>(5);

  const onCheck = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch({
      type: "ADD_TRANSACTION",
      payload: {
        id: Math.floor(Math.random() * 10000),
        text,
        amount: +amount,
      },
    });
    SetText("type again");

    Setamount(0);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onCheck}>
        <div className="form-controls">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => {
              SetText(e.target.value);
            }}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-controls">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => {
              Setamount(e.target.value);
            }}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
