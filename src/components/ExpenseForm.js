import React from 'react'
import './ExpenseForm.css'

const ExpenseForm = ({ chargeOnChange, amountOnChange, createSubmit, charge, amount, edit }) => {


    return (
        <form onSubmit={createSubmit}>
            <div className='center__container'>
                <div className='input__box'>
                    <label htmlFor='charge'>항목</label>
                    <input
                        type="text"
                        id='charge'
                        name='charge'
                        placeholder='예) 점심 값'
                        value={charge}
                        onChange={chargeOnChange}
                    />
                </div>
                <div className='input__box'>
                    <label htmlFor='amount'>지출</label>
                    <input
                        type="number"
                        id='amount'
                        name='amount'
                        placeholder='예) 9000'
                        value={amount}
                        onChange={amountOnChange}
                    />
                </div>
            </div>
            <button className='create__btn'>{edit ? "UPDATE" : "CREATE"}</button>
        </form>
    )
}

export default ExpenseForm
