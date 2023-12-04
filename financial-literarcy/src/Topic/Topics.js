import React from 'react'
import budget from '../pictures/budget.jpg'
import saving from '../pictures/save.jpg'
import credit from '../pictures/credit.jpg'
import personalFinance from '../pictures/personalfinance.jpeg'
import debt from '../pictures/debt.png'
import invest from '../pictures/investing.jpg'
import './Topics.css'
import TopicCard from './TopicCard'


const topics= [
  {
    id: 1,
    name: "Budget",
    image: budget,
    info: "A budget is a plan on how you will spend your money, it can help track your income and expenses, stay on track with your financial goals and avoid overspending. There are many different ways to budget, so find one that works for you.\nFixed expenses: expenses that remain the same month to month, such as rent.\nFlexible expenses: expenses that change from month to month, such as utilities.\nTotal expenses: the total amount of money spent from fixed and flexible expenses.\nTotal Monthly income: income from your job or other resources such as dividends, pensions, social security benefits, rental income, and more.\nDisposable income: the money that you have left after subtracting taxes from your income"
  },
  {
    id: 2,
    name: "Saving",
    image: saving,
    info: "Saving money is vital in establishing a strong financial foundation, ensuring stability.\nIt facilitates reaching your financial goals by providing the necessary funds.\nSaving acts as a buffer against unexpected expenses, offering a safety net.\nSaving money ensures a comfortable retirement, free from financial stress.\nEven small, consistent savings can grow significantly over time due to compounded interest."
  },
  {
    id: 3,
    name: "Personal Finance",
    image: personalFinance,
    info: "What is personal finance: personal finance manages money for goals, involves goal setting, budgeting, saving, investing, asset production, and building financial security and peace of mind.\nThe areas of personal finance: income, spending, savings, investing, protection"
  },
  {
    id: 4,
    name: "Credit",
    image: credit,
    info: "Credit score: a three-digit number that lenders use to assess your creditworthiness based on information in your credit report.\nThe higher the number, the more likely you will be able to qualify for loans and credit card rates with more favorable terms (e.g., 800-850 excellent, 740-799 very good, 670-739 good, 580-669 fair, 300-379 poor).\nCredit bureaus: the three major credit bureaus are Equifax, Experian, TransUnion.\nCredit bureaus collect credit history, accounts, payments, and inquiries.\nLenders buy data for loan decisions, and you get a free credit report once every year.\nCredit cards are a good way to build a credit score, but they should be used wisely.\nWhat increases credit score: paying on time, keeping credit utilization low, not closing credit accounts, disputing errors in your credit report.\nWhat decreases credit score: making late payments, carrying a high balance on your credit card, closing old credit accounts, filing for bankruptcy, having a history of collections, and a history of fraud."
  },
  {
    id: 5,
    name: "Debt/Loan",
    image: debt,
    info: "Principal: the amount of money that you borrow from the lender\nInterest: the fee you pay the lender for borrowing money\nAPR: annual percentage rate, total cost of borrowing money including interest and fees\nRepayment period: the length of time you have to repay the debt\nMonthly payment: amount of money you pay the lender each month to repay the loan\nGrace period: a period of time where you don't have to make any payments yet"
  },
  {
    id: 6,
    name: "Investing",
    image: invest,
    info: "What are investments: allocating funds with the intent of making future returns, it entails risk and offers the potential for substantial returns.\nTypes of investments: stocks, bonds, mutual funds, exchange-traded funds.\nStocks represent partial ownership of a company, they fluctuate in price depending on the state of the market, a viable option for making long-term capital growth.\nBonds are loans that you make to a company or the government, and in return, they agree to pay you interest on the loan and return your money at a certain date, less risky than stocks, a good investment for those looking for a steady income.\nMutual funds are a diversified portfolio managed by professionals for convenience, offering exposure to stocks or bonds in the market without needing to select individual securities. Various types include index funds, actively managed funds, and target-date funds.\nExchange-traded funds (ETF): similar to mutual funds but trade on exchanges like stocks, with higher liquidity but potentially higher fees than mutual funds. Types of ETFs include Index ETF, actively managed ETF, leveraged ETF.\nBefore investing, you need to have an investment goal, and all earnings made from investments will have to be reported to the IRS, and taxes will need to be paid on them.\nConstantly monitor your investments to make sure you aren't losing money and diversify your portfolio."
  },
]

export default function Topics() {
  return(
    <div className='container'>
      {topics.map((topic) => (
        <TopicCard topic = {topic} />
      ))}
    </div>
  );
}