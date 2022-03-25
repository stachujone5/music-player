import havanaSong from './sounds/havana.mp3'
import havanaImg from './images/havana.webp'
import stilldreSong from './sounds/stilldre.mp3'
import stilldreImg from './images/stilldre.webp'
import rapgodSong from './sounds/rapgod.mp3'
import rapgodImg from './images/rapgod.webp'
import allmineSong from './sounds/allmine.mp3'
import allmineImg from './images/allmine.webp'
import moodSong from './sounds/mood.mp3'
import moodImg from './images/mood.webp'
import himandiSong from './sounds/himandi.mp3'
import himandiImg from './images/himandi.webp'

export const SONGS = [
	{
		id: 0,
		isFavourite: false,
		length: '3.39',
		source: havanaSong,
		img: havanaImg,
		author: 'Camila Cabello',
		title: 'Havana',
	},
	{
		id: 1,
		isFavourite: false,
		length: '2.28',
		source: allmineSong,
		img: allmineImg,
		author: 'Kanye West',
		title: 'All Mine',
	},
	{
		id: 2,
		isFavourite: false,
		length: '2.19',
		source: moodSong,
		img: moodImg,
		author: '24kGoldn',
		title: 'Mood',
	},
	{
		id: 3,
		isFavourite: false,
		length: '6.13',
		source: rapgodSong,
		img: rapgodImg,
		author: 'Eminem',
		title: 'Rap God',
	},

	{
		id: 4,
		isFavourite: false,
		length: '4.31',
		source: himandiSong,
		img: himandiImg,
		author: 'G-Eazy & Halsey',
		title: 'Him & I',
	},

	{
		id: 5,
		isFavourite: false,
		length: '4.31',
		source: stilldreSong,
		img: stilldreImg,
		author: 'Dr. Dre',
		title: 'Still D.R.E.',
	},
]

export interface songInterface {
	id: number
	isFavourite: boolean
	length: string
	source: string
	img: string
	author: string
	title: string
}
