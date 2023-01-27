import { useKatakana } from './providers/KatakanaProvider';
import ToggleKataButton from './components/ToggleKataButton';

import './App.css';


function App() {
	const { katakana, katakanaUsing, handleChangeKatakanaInUse } = useKatakana();

	return (
		<div className="container">
			<header className='header-app'>
				<h1>Katakanas</h1>
				<div className='katakana-selector'>
					{katakana.map((kata, index) => (
						<ToggleKataButton
							key={index}
							onClick={() => handleChangeKatakanaInUse(index)}
							active={katakanaUsing[index][kata]}
						>
							{kata}
						</ToggleKataButton>
					))}
				</div>
			</header>
			
		</div>
	);
}

export default App;
