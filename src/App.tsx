import { useEffect, useRef } from 'react'
import { Flashcard, Card, FlashcardRef } from './Flashcard'

function App() {
	const ref = useRef<FlashcardRef>(null)

	const flashcards: Card[] = [
		{ question: <><p>一</p><p className="text-red-700">萬</p></>, answer: <><p className="text-lg font-medium uppercase">ii-man</p><p>1-man</p></> },
		{ question: <><p>二</p><p className="text-red-700">萬</p></>, answer: <><p className="text-lg font-medium uppercase">ryan-man</p><p>2-man</p></> },
		{ question: <><p>三</p><p className="text-red-700">萬</p></>, answer: <><p className="text-lg font-medium uppercase">san-man</p><p>3-man</p></> },
		{ question: <><p>四</p><p className="text-red-700">萬</p></>, answer: <><p className="text-lg font-medium uppercase">Suu-man</p><p>4-man</p></> },
		{ question: <><p>伍</p><p className="text-red-700">萬</p></>, answer: <><p className="text-lg font-medium uppercase">uu-man</p><p>5-man</p></> },
		{ question: <><p>六</p><p className="text-red-700">萬</p></>, answer: <><p className="text-lg font-medium uppercase">rou-man</p><p>6-man</p></> },
		{ question: <><p>七</p><p className="text-red-700">萬</p></>, answer: <><p className="text-lg font-medium uppercase">chii-man</p><p>7-man</p></> },
		{ question: <><p>八</p><p className="text-red-700">萬</p></>, answer: <><p className="text-lg font-medium uppercase">paa-man</p><p>8-man</p></> },
		{ question: <><p>九</p><p className="text-red-700">萬</p></>, answer: <><p className="text-lg font-medium uppercase">kyuu-man</p><p>9-man</p></> },
		{ question: <><p className="text-blue-900 text-8xl">東</p></>, answer: <><p className="text-lg font-medium uppercase">Ton</p><p>East</p></> },
		{ question: <><p className="text-blue-900 text-8xl">南</p></>, answer: <><p className="text-lg font-medium uppercase">Nan</p><p>South</p></> },
		{ question: <><p className="text-blue-900 text-8xl">西</p></>, answer: <><p className="text-lg font-medium uppercase">Shaa</p><p>West</p></> },
		{ question: <><p className="text-blue-900 text-8xl"></p></>, answer: <><p className="text-lg font-medium uppercase">haku / bai</p><p>White</p></> },
		{ question: <><p className="text-green-800 text-8xl">発</p></>, answer: <><p className="text-lg font-medium uppercase">Hatsu / fa</p><p>Green</p></> },
		{ question: <><p className="text-red-700 text-8xl">中</p></>, answer: <><p className="text-lg font-medium uppercase">Chun</p><p>Red</p></> },
	]

	const handleClick = () => ref.current?.nextCard()

	const handleKeyUp = (e: KeyboardEvent) => {
		switch (e.key) {
			case ' ':
			case 'ArrowRight':
				ref.current?.nextCard()
				break
			default:
				// console.log(e.key)
				break
		}
	}

	useEffect(() => {
		window.addEventListener('keyup', handleKeyUp)
		return () => window.removeEventListener('keyup', handleKeyUp)
	}, [])

	return (
		<Flashcard ref={ref} className='flex flex-col items-center justify-center h-screen w-screen cursor-pointer' cards={flashcards} onClick={handleClick} />
	)
}

export default App
