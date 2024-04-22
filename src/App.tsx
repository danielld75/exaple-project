import './App.css'
import { ButtonBlue, ButtonGreen, ButtonRed, Text, Paragraph } from './ui'

function App() {
	return (
		<>
			<h3 className='text-5xl'>Poniżej znajdują się odpowiedzi do 3 zadania:</h3>
			<Paragraph className='bg-gray-600 rounded-lg'>
				Jak działa React? React działa na DOM poprzez VirtualDOM, związane jest to z renderingiem warunkowym komponentów
				reactowych które mogą być reużywalne. Komponenty posiadają stan (czyli pewne dane) oraz propsy (pewne
				właściwości).
			</Paragraph>
			<Text>
				ComponentProps pozawla na wykorzystanie właściwości natywnych elementów HTML. Za pomocą tego pluginu można łatwo
				wyodrębnić właściwości elementów HTML a przez to łatwiejsze sprawdzenie typów i poprawności elementów.
			</Text>
			<div>
				<ButtonBlue label='Click Me Blue' onClick={() => alert('You clicked me Blue')} />
				<ButtonGreen label='Click Me Green' onClick={() => alert('You clicked me Green')} />
				<ButtonRed label='Click Me Red' onClick={() => alert('You clicked me Red')} />
			</div>
		</>
	)
}

export default App
