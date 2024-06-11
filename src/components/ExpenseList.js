import React from 'react'
import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'

const ExpenseList = ({ expenses, removeBtnOnClick, editBtnOnClick }) => {
    return (
        <ul className='list__box'>
            {expenses.map(expense => {
                return <ExpenseItem
                    key={expense.id}
                    expense={expense}
                    removeBtnOnClick={removeBtnOnClick}
                    editBtnOnClick={editBtnOnClick}
                />
            })}
        </ul>
    )
}

export default ExpenseList
