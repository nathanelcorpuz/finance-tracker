import Dashboard from "./components/dashboard";
import NewTransactionForm from "./components/new-transaction-form";

export default function Home() {
	const locations = [
		{
			name: "Sample 1",
			amount: 0,
			owner: "nat",
		},
		{
			name: "Sample 2",
			amount: 0,
			owner: "sheena",
		},
		{
			name: "Sample 3",
			amount: 0,
			owner: "sheena",
		},
	];

	const transactions = [
		{
			name: "",
			amount: 0,
			date: "09-09-23",
			type: "debit",
			source: "gcash",
			destination: "external",
			sender: "nat",
			recipient: "external",
			comments: "this is a sample transaction",
		},
	];

	return (
		<main className="">
			<Dashboard locations={locations} />
			<NewTransactionForm />
		</main>
	);
}
