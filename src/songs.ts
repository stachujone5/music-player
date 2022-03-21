export const SONGS = [
	{
		id: 0,
		isFavourite: false,
		length: '7.05',
		source: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
		link: 'https://www.youtube.com/watch?v=MYj-2YTeuu8',
		img: 'https://4kwallpapers.com/images/walls/thumbs_2t/1455.jpg',
		author: 'Belmondo',
		title: 'Zaczarowana dorozka',
	},
	{
		id: 1,
		isFavourite: false,
		length: '8.47',
		source: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
		link: 'https://www.youtube.com/watch?v=MYj-2YTeuu8',
		img: 'https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg',
		author: 'Dr. Dre',
		title: 'Pump it',
	},
]

export interface songInterface {
	id: number
	isFavourite: boolean
	length: string
	source: string
	link: string
	img: string
	author: string
	title: string
}
