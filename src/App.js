import { useState } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, charge: "렌트비", amount: 60000 },
    { id: 2, charge: "식비", amount: 32000 },
    { id: 3, charge: "주유비", amount: 83000 },
  ])
  const [charge, setCharge] = useState("")
  const [amount, setAmout] = useState("")
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(null)

  const removeBtnOnClick = (id) => {
    const newExpenses = expenses.filter(expense => expense.id !== id);
    setExpenses(newExpenses)
  }
  const editBtnOnClick = (id) => {
    const expense = expenses.find(expense => expense.id === id)
    setCharge(expense.charge)
    setAmout(expense.amount)
    setEdit(true)
    setId(id)

  }



  const chargeOnChange = (e) => {
    setCharge(e.target.value)
  }
  const amountOnChange = (e) => {
    const amount = e.target.valueAsNumber
    setAmout(amount)
  }
  const createSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {

      if (edit) {
        const updatedExpenses = expenses.map(expense =>
          expense.id === id ? { id, charge, amount } : expense
        )
        setExpenses(updatedExpenses)
        setEdit(false)
        setId(null)
      } else {
        const randomId = uuidv4()
        const newExpenses = [...expenses, { id: randomId, charge, amount }]
        setExpenses(newExpenses)
      }

    }
    setCharge("")
    setAmout("")
  }

  const totalAmount = expenses.reduce((total, expense) => {
    return total + expense.amount
  }, 0)

  const allRemoveBtnOnClick = () => {
    setExpenses([])
  }



  return (
    <main className="main__container">
      <h1>예산 계산기</h1>
      <ExpenseForm
        chargeOnChange={chargeOnChange}
        amountOnChange={amountOnChange}
        createSubmit={createSubmit}
        charge={charge}
        amount={amount}
        edit={edit}
      />
      <ExpenseList
        expenses={expenses}
        removeBtnOnClick={removeBtnOnClick}
        editBtnOnClick={editBtnOnClick}
      />
      <div className='bottom__box'>
        <button
          className='all__remove__btn'
          onClick={allRemoveBtnOnClick}
        >
          전체삭제
        </button>
        <p>총지출 : <span>{totalAmount}</span> </p>
      </div>
    </main>
  );
}

export default App;
