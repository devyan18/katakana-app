import {
	useState,
	useContext,
	createContext,
	useEffect,
} from 'react';
import { katakanasGroup } from '../utils/characters';

const katas = Object.entries(katakanasGroup).map(([key]) => key);
const katasUsing = katas.map((kata) => {
	if (kata !== 'a') {
		return ({ [kata]: false });
	}

	return ({ [kata]: true });
});

export interface KatakanaInUse {
  [key: string]: boolean;
}

interface initialKatakana {
  katakana: string[];
  katakanaUsing: KatakanaInUse[];
  handleChangeKatakanaInUse: (index: number) => void;
}

const KatakanaContext = createContext<initialKatakana>({
	katakana: [],
	katakanaUsing: [],
	handleChangeKatakanaInUse: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const KatakanaProvider = (props: Props) => {
	const [katakanaUsing, setKatakanaUsing] = useState<KatakanaInUse[]>(katasUsing);

	const toggleKatakanaUsingValue = (index: number) => {
		const newKatakanaUsing = katakanaUsing.map((kata, i) => {
			if (i === index) {
				const key = Object.keys(kata)[0];
				return { [key]: !kata[key] };
			}
			return kata;
		});

		setKatakanaUsing(newKatakanaUsing);
	};

	useEffect(() => {
		console.log(katakanaUsing);
	}, []);

	return (
		<KatakanaContext.Provider value={{ katakana: katas, katakanaUsing, handleChangeKatakanaInUse: toggleKatakanaUsingValue }}>
			{props.children}
		</KatakanaContext.Provider>
	);
};

export const useKatakana = () => useContext(KatakanaContext);
