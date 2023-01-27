import { useKatakana } from '../providers/KatakanaProvider';
import ToggleKataButton from './ToggleKataButton';

export default function HeaderApp() {

	const { katakana, katakanaUsing, handleChangeKatakanaInUse } = useKatakana();

	return (
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
	);
}