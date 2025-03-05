import { useEffect, useRef } from 'react'
import { Flashcard, Card, FlashcardRef } from './Flashcard'


import Man1Tile from './assets/Man1.svg?react'
import Man2Tile from './assets/Man2.svg?react'
import Man3Tile from './assets/Man3.svg?react'
import Man4Tile from './assets/Man4.svg?react'
import Man5Tile from './assets/Man5.svg?react'
import Man6Tile from './assets/Man6.svg?react'
import Man7Tile from './assets/Man7.svg?react'
import Man8Tile from './assets/Man8.svg?react'
import Man9Tile from './assets/Man9.svg?react'

import TonTile from  './assets/Ton.svg?react'
import NanTile from  './assets/Nan.svg?react'
import ShaaTile from  './assets/Shaa.svg?react'
import PeiTile from './assets/Pei.svg?react'

import HakuTile from './assets/Haku.svg?react'
import HatsuTile from './assets/Hatsu.svg?react'
import ChunTile from './assets/Chun.svg?react'

function App() {
	const ref = useRef<FlashcardRef>(null)

	const flashcards: Card[] = [
		{ question: <Man1Tile className="w-full h-auto p-2" />, answer: <><p className="text-lg font-medium uppercase">ii-man</p><p>1-man</p></> },
		{ question: <Man2Tile className="w-full h-auto p-2" />, answer: <><p className="text-lg font-medium uppercase">ryan-man</p><p>2-man</p></> },
		{ question: <Man3Tile className="w-full h-auto p-2" />, answer: <><p className="text-lg font-medium uppercase">san-man</p><p>3-man</p></> },
		{ question: <Man4Tile className="w-full h-auto p-2" />, answer: <><p className="text-lg font-medium uppercase">Suu-man</p><p>4-man</p></> },
		{ question: <Man5Tile className="w-full h-auto p-2" />, answer: <><p className="text-lg font-medium uppercase">uu-man</p><p>5-man</p></> },
		{ question: <Man6Tile className="w-full h-auto p-2" />, answer: <><p className="text-lg font-medium uppercase">rou-man</p><p>6-man</p></> },
		{ question: <Man7Tile className="w-full h-auto p-2" />, answer: <><p className="text-lg font-medium uppercase">chii-man</p><p>7-man</p></> },
		{ question: <Man8Tile className="w-full h-auto p-2" />, answer: <><p className="text-lg font-medium uppercase">paa-man</p><p>8-man</p></> },
		{ question: <Man9Tile className="w-full h-auto p-2" />, answer: <><p className="text-lg font-medium uppercase">kyuu-man</p><p>9-man</p></> },
		{ question: <TonTile className="w-full h-auto p-2" />, answer: <><p className="text-lg font-medium uppercase">Ton</p><p>East</p></> },
		{ question: <NanTile className="w-full h-auto p-2" />, answer: <><p className="text-lg font-medium uppercase">Nan</p><p>South</p></> },
		{ question: <ShaaTile className="w-full h-auto p-2" />, answer: <><p className="text-lg font-medium uppercase">Shaa</p><p>West</p></> },
		{ question: <PeiTile className="w-full h-auto p-2" />, answer: <><p className="text-lg font-medium uppercase">Pei</p><p>North</p></> },
		{ question: <HakuTile className="w-full h-auto p-2" />, answer: <><p className="text-lg font-medium uppercase">Haku / bai</p><p>White</p></> },
		{ question: <HatsuTile className="w-full h-auto p-2" />, answer: <><p className="text-lg font-medium uppercase">Hatsu / fa</p><p>Green</p></> },
		{ question: <ChunTile className="w-full h-auto p-2" />, answer: <><p className="text-lg font-medium uppercase">Chun</p><p>Red</p></> },
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
