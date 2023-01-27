type Props = {
  children: string;
  active: boolean;
  onClick: () => void;
}

export default function ToggleKataButton(props: Props) {
	return (
		<button
			className={`toggle-kata-button ${props.active ? 'active' : ''}`}
			onClick={props.onClick}
		>{props.children}</button>
	);
}