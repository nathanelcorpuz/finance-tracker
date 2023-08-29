export default function Dashboard({
	locations,
}: {
	locations: {
		name: string;
		amount: number;
		owner: string;
	}[];
}) {
	return (
		<div>
			<h1>Dashboard</h1>
			<section className="flex gap-4">
				{locations.map((location) => {
					return (
						<div>
							<p>{location.name}</p>
							<p>₱ {location.amount}</p>
						</div>
					);
				})}
			</section>
		</div>
	);
}
