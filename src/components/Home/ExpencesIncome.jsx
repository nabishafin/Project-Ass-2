import { useState } from "react";
import { getdate } from "../utilites";



const ExpencesIncome = (props) => {

    const { handleActiveClick, activeStatus, handleSubmit } = props


    const incomeCategories = ["Salary", "Outsourcing", "Bond", "Dividend"];
    const expenseCategories = [
        "Education",
        "Food",
        "Health",
        "Bill",
        "Insurance",
        "Tax",
        "Transport",
        "Telephone",
    ];

    const categories = activeStatus === 'btn-one' ? expenseCategories : incomeCategories



    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState(0)
    const [date, setDate] = useState(getdate)

    const handleClickeFrom = (e) => {
        e.preventDefault();
        const updateValue = category?.length === 0 ? categories[0] : category
        handleSubmit({ updateValue, amount, date })
    }


    return (
        <div>
            <div>
                <form onSubmit={(e) => handleClickeFrom(e)}>
                    <div
                        className="flex divide-x divide-slate-400/20 overflow-hidden rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 shadow-sm ring-1 ring-slate-700/10 mt-6"
                    >
                        <div onClick={() => { handleActiveClick('btn-one') }} className={`cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900 ${activeStatus === 'btn-one' ? "active" : ""}`}>
                            Expense
                        </div>
                        <div onClick={() => { handleActiveClick("btn-two") }} className={`cursor-pointer text-center  flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900 ${activeStatus === "btn-two" ? "active" : ""}`}>
                            Income
                        </div>
                    </div>


                    <div className="mt-3">
                        <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">Category</label>
                        <div className="mt-2">
                            <select
                                onChange={(e) => { setCategory(e.target.value) }}
                                id="category"
                                name="category"
                                autoComplete="category-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                            >
                                {
                                    categories.map(category => <option key={category} value={category}>{category}</option>)
                                }


                            </select>
                        </div>
                    </div>

                    <div className="mt-3">
                        <label htmlFor="amount" className="block text-sm font-medium leading-6 text-gray-900">Amount</label>
                        <div className="mt-2">
                            <input
                                onChange={(e) => { setAmount(e.target.value) }}
                                value={amount}
                                type="number"
                                name="amount"
                                id="amount"
                                autoComplete="off"
                                placeholder="12931"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="mt-3">
                        <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">Date</label>
                        <div className="mt-2">
                            <input
                                onChange={(e) => { setDate(e.target.value) }}
                                value={date}
                                type="date"
                                name="date"
                                id="date"
                                autoComplete="off"
                                placeholder="12931"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="mt-6 rounded-md bg-teal-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 w-full"
                    >
                        Save
                    </button>
                </form>

            </div >

        </div >
    );
};

export default ExpencesIncome;



