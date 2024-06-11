import React from 'react'
import './ExpenseItem.css'

const ExpenseItem = ({ expense, removeBtnOnClick, editBtnOnClick }) => {
    const handleRemove = () => {
        removeBtnOnClick(expense.id)
    }
    const handleEdit = () => {
        editBtnOnClick(expense.id)
        console.log(expense.id);
    }
    return (
        <li className='item__box'>
            <div className='info__box'>
                <span className='charge'>{expense.charge}</span>
                <span className='amount'>{expense.amount} 원</span>
            </div>
            <div className='btn__box'>
                <button className='edit__btn' onClick={handleEdit} >수정</button>
                <button className='remove__btn' onClick={handleRemove}>삭제</button>
            </div>
        </li>
    )
}

export default ExpenseItem
