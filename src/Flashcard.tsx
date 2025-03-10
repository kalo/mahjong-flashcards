import { forwardRef, JSX, useImperativeHandle, useState } from "react";
import { motion } from "motion/react"

export interface Card {
	question: JSX.Element,
	answer: JSX.Element,
}

export interface FlashcardRef {
	nextCard: () => void,
}

export const Flashcard = forwardRef<FlashcardRef, React.HTMLAttributes<HTMLDivElement> & {cards: Card[], historyCount?: number}>(({cards = [], historyCount = 5, ...props}, ref) => {
	const [item, setItem] = useState(Math.floor(Math.random() * cards.length))
	const [showAnswer, setShowAnswer] = useState(false)
	const [history, setHistory] = useState<number[]>([item])

	useImperativeHandle(ref, () => ({
		nextCard: () => {
			if (showAnswer) {
				setItem(() => {
					let newIndex
					do newIndex = Math.floor(Math.random() * cards.length)
					while (history.includes(newIndex))

					setHistory((prev) => {
						const newHistory = [...prev, newIndex]
						if (newHistory.length > historyCount) newHistory.shift()
						return newHistory
					})

					return newIndex
				})
			}
			setShowAnswer(!showAnswer)
		}
	}))

	return (
		<div {...props}>
			<motion.div
				key={item}
				initial={{ opacity: 0, x: 20 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.3 }}
				className="flex flex-col justify-center items-center aspect-[9/12] w-36 border-4 border-gray-500 rounded-xl bg-slate-50"
			>
				{cards[item].question}
			</motion.div>
			{showAnswer ? (
				<motion.div 
					key={`answer-${item}`}
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.3 }}
					className="text-4xl font-bold p-6 lg:my-10 flex flex-col justify-center text-center"
				>
					{cards[item].answer}
				</motion.div>
			) : (
				<motion.div 
					key={'guess'}
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.3 }}
					className="text-4xl font-extralight text-slate-700 dark:text-slate-400 p-6 lg:my-10 flex flex-col justify-center text-center"
				>
					<p className="uppercase tracking-tighter">Guess</p>
					<p className="text-lg uppercase tracking-wider">the tile</p>
				</motion.div>
			)}

			<div className="absolute bottom-5 text-slate-700 dark:text-slate-400 font-extralight tracking-wide text-xs lg:text-2xl pointer-events-none uppercase">
				{showAnswer ? (
					<>Tap for next tile</>
				) : (
					<>Tap to show answer</>
				)}
			</div>
		</div>
	)
})
