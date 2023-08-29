"use client";

export default function NewTransactionForm() {
	const submitHandler = () => {
		console.log("hello");
	};
	return (
		<form
			className="flex flex-col gap-4 max-w-[400px]"
			onSubmit={submitHandler}
		>
			<div className="flex flex-col">
				<label>Name</label>
				<input name="name" className="border-2 p-1" />
			</div>
			<div className="flex flex-col">
				<label>Amount</label>
				<input name="amount" className="border-2 p-1" />
			</div>
			<div className="flex flex-col">
				<label>Date</label>
				<input name="date" className="border-2 p-1" />
			</div>
			<div className="flex flex-col">
				<label>Type</label>
				<input name="type" className="border-2 p-1" />
			</div>
			<div className="flex flex-col">
				<label>Source</label>
				<input name="source" className="border-2 p-1" />
			</div>
			<div className="flex flex-col">
				<label>Destination</label>
				<input name="destination" className="border-2 p-1" />
			</div>
			<div className="flex flex-col">
				<label>Sender</label>
				<input name="sender" className="border-2 p-1" />
			</div>
			<div className="flex flex-col">
				<label>Recipient</label>
				<input name="recipient" className="border-2 p-1" />
			</div>
			<div className="flex flex-col">
				<label>Comments</label>
				<input name="comments" className="border-2 p-1" />
			</div>
			<button>Submit</button>
		</form>
	);
}
