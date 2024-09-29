import { TransactionsTable } from '@/widgets/TransactionsTable/TransactionsTable'
import ModalTransaction from '../Modal/ModalTransaction'
import { useGetTransactions } from '@/hooks/useGetTransactions'

const TransactionsPage: React.FC = () => {
	const { transactions, loading, error, fetchTransactions } = useGetTransactions()

	if (loading) {
		return <div>Загрузка...</div>
	}

	if (error) {
		return <div>{error}</div>
	}

	return (
		<>
			<TransactionsTable data={transactions} />
			<div className='flex justify-center mt-14'>
				<ModalTransaction onSuccess={fetchTransactions} />
			</div>
		</>
	)
}

export default TransactionsPage
