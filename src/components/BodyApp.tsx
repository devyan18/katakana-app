import { useEffect, useState } from 'react';
import { useKatakana } from '../providers/KatakanaProvider';
import {
	katakanasGroup,
	katakanas,
	katakanasInRomaji,
} from '../utils/characters';

const katakanasRomajiWithKatakana = katakanasInRomaji.map((kata, index) => [
	kata,
	katakanas[index],
]);

export default function BodyApp() {
	const { katakanaUsing } = useKatakana();
	const [activeKatakanas, setActiveKatakanas] = useState<string[]>([]);
	const [currentViewKatakana, setCurrentViewKatakana] = useState<string>('');
	const [input, setInput] = useState<string>('');

	const addKatakanasOnSelect = () => {
		const katakanasInUse: string[] = [];

		for (const kata of katakanaUsing) {
			const [data] = Object.entries(kata);
			if (data[1]) {
				katakanasInUse.push(...katakanasGroup[data[0]]);
			}
		}

		return katakanasInUse;
	};

	const genAleatoryKatakana = () => {
		const index = Math.floor(Math.random() * activeKatakanas.length);

		if (activeKatakanas[index] === currentViewKatakana) {
			genAleatoryKatakana();
		} else {
			setCurrentViewKatakana(activeKatakanas[index]);
		}
	};

	const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const katakana = katakanasRomajiWithKatakana.find(
			(kata) => kata[0] === input.toLocaleLowerCase()
		);

		if (katakana) {
			if (katakana[1] === currentViewKatakana) {
				setInput('');
				genAleatoryKatakana();
			}
		}
	};

	useEffect(() => {
		const katakanasInUse = addKatakanasOnSelect();

		setActiveKatakanas(katakanasInUse);
	}, [katakanaUsing]);

	useEffect(() => {
		if (activeKatakanas.length > 0) {
			genAleatoryKatakana();
		} else {
			setCurrentViewKatakana('');
		}
	}, [activeKatakanas]);

	return (
		<div className="body-app">
			<h1>{currentViewKatakana}</h1>
			{activeKatakanas.length > 0 ? (
				<form onSubmit={handleSubmitForm}>
					<input
						type="text"
						name="input"
						autoComplete="off"
						placeholder="Type in romaji"
						autoFocus
						value={input}
						onChange={(e) => setInput(e.currentTarget.value)}
					/>
					<button type="submit">ネクスト</button>
				</form>
			) : (
				<h4>Please select at least one katakana</h4>
			)}
		</div>
	);
}
