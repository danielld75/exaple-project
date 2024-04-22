import './App.css'
import { ButtonBlue, ButtonGreen, ButtonRed, Text } from './ui'

function App() {
	return (
		<>
			<Text>Here is text</Text>
			<ButtonBlue label='Click Me Blue' onClick={() => alert('You clicked me Blue')} />
			<ButtonGreen label='Click Me Green' onClick={() => alert('You clicked me Green')} />
			<ButtonRed label='Click Me Red' onClick={() => alert('You clicked me Red')} />
		</>
	)
}

export default App
