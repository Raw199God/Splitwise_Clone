export default function Expense({expense}) {
    const date = new Date(expense.date) ;
    let owed = 0 ;
    if(expense.paidby === localStorage.getItem('currentuser')){
        owed += expense.amount ;
    }
    let willsplit = false ;
    let cntsplit = 0 ;
    Object.entries(expense.splitby).forEach(([email,value])=>{
        if(email == localStorage.getItem('currentuser')) willsplit = value ;
        cntsplit += value?1:0 ;
    })
    if(willsplit){
        owed -= (expense.amount)/cntsplit ;
    }
  return (
    <div className="flex flex-row justify-between items-center p-5 m-5" >
        <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col text-[gray] font-extrabold items-center ">
            <div>{date.toLocaleString('default', { month: 'short' }).toUpperCase()}</div>
            <div>{date.getDate()}</div>
        </div>
        <div className="text-black font-extrabold text-s ml-5">
            {expense.description}
        </div>
        </div>
        <div className="text-gray-500 text-xs">
            <div >
                {expense.paidby} Paid 
            </div>
            <div className="text-xl text-black font-bold">
                ₹ {expense.amount}   
            </div>

        </div>
        <div >
            <div className={"text-gray-500 text-xs"}>
                {!willsplit?'Not Involved':(owed > 0)?'You Lent':'You Owe'} 
            </div>
            {willsplit && <div className={"text-xl font-bold " + ((owed<0)?'text-amber-600':'text-[#3398c0]')}>
                ₹ {(owed>0)?owed.toFixed(2):(-owed).toFixed(2)}   
            </div>}
        </div>
    </div>
  )
}
