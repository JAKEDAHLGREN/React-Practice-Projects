const Header = ({ title, totalPlayers }) => {
	return (
		<header>
			<h1>{ title }</h1>
			<span className='stats'>Players: { totalPlayers }</span>
		</header>
	)
}

const Player = ({ name, id, removePlayer }) => {
	return (
		<div className='player'>
			<span className='player-name'>
				<button
					className='remove-player'
					onClick={() => removePlayer(id)}>
					✖
				</button>
				{ name }
			</span>

			<Counter />
		</div>
	)
}

const Counter = () => {
	const [score, setScore] = React.useState(0)

	const incrementScore = () => {
		setScore((prevScore) => prevScore + 1)
	}

	const decrementScore = () => {
		setScore((prevScore) => prevScore - 1)
	}


	return (
		<div className='counter'>
			<button
				className='counter-action decrement'
				onClick={() => decrementScore()}>
				{" "}
				-{" "}
			</button>
			<span className='counter-score'>{score}</span>
			<button
				className='counter-action increment'
				onClick={() => incrementScore()}>
				{" "}
				+{" "}
			</button>
		</div>
	)
}

const App = () => {
	const [players, setPlayers] = React.useState([
		{
			name: "Guil",
			id: 1,
		},
		{
			name: "Treasure",
			id: 2,
		},
		{
			name: "Ashley",
			id: 3,
		},
		{
			name: "James",
			id: 4,
		},
	])


const handleRemovePlayer = (id) => {
	setPlayers(prevPlayers => prevPlayers.filter((p) => p.id !== id))
}

return (
	<div className='scoreboard'>
		<Header title='Scoreboard' totalPlayers={players.length} />

		{/* Players list */}
		{players.map((player) => (
			<Player
				name={player.name}
				id={player.id}
				key={player.id.toString()}
				removePlayer={handleRemovePlayer}
			/>
		))}
	</div>
)}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)
