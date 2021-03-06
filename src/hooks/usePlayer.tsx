import { useReducer } from 'react'
import { SONGS, songInterface } from '../songs'
import { ACTIONS } from './actions'

const initialState: playerState = {
	songIndex: 0,
	isPlaying: false,
	width: 0,
	time: 0,
	songs: SONGS,
	currentSong: SONGS[0],
	goBack: true,
	showVolume: false,
	volumeTouched: false,
	value: 25,
}

export interface playerState {
	songIndex: number
	isPlaying: boolean
	width: number
	time: number
	songs: songInterface[]
	currentSong: songInterface
	goBack: boolean
	showVolume: boolean
	volumeTouched: boolean
	value: number
}

export interface playerAction {
	type: string
	payload?: any
}

const reducer = (state: playerState, action: playerAction) => {
	switch (action.type) {
		case ACTIONS.TOGGLE_PLAY:
			return { ...state, isPlaying: !state.isPlaying }

		case ACTIONS.PLAY:
			return { ...state, isPlaying: true, showVolume: false }

		case ACTIONS.NEXT_SONG:
			if (state.songIndex === SONGS.length - 1) {
				return {
					...state,
					songIndex: 0,
					time: 0,
					width: 0,
					currentSong: SONGS[0],
					goBack: true,
					showVolume: false,
				}
			}
			return {
				...state,
				songIndex: state.songIndex + 1,
				time: 0,
				width: 0,
				currentSong: SONGS[state.songIndex + 1],
				goBack: true,
				showVolume: false,
			}

		case ACTIONS.PREV_SONG:
			if (state.songIndex === 0) {
				return {
					...state,
					songIndex: SONGS.length - 1,
					time: 0,
					width: 0,
					currentSong: SONGS[SONGS.length - 1],
					goBack: true,
					showVolume: false,
				}
			}
			return {
				...state,
				songIndex: state.songIndex - 1,
				time: 0,
				width: 0,
				currentSong: SONGS[state.songIndex - 1],
				goBack: true,
				showVolume: false,
			}

		case ACTIONS.SET_BAR:
			return { ...state, width: action.payload.width, time: action.payload.time }

		case ACTIONS.SET_SONGS:
			return { ...state, songs: action.payload }

		case ACTIONS.RESET:
			return { ...state, goBack: true, time: 0, width: 0, showVolume: false }

		case ACTIONS.GO_BACK:
			return { ...state, goBack: false }

		case ACTIONS.TOGGLE_SHOW_VOLUME:
			return { ...state, showVolume: !state.showVolume }

		case ACTIONS.SET_VOLUME_TOUCHED:
			return { ...state, volumeTouched: true }

		case ACTIONS.SET_VALUE:
			return { ...state, value: action.payload }

		default:
			return state
	}
}

export const usePlayer = () => {
	const [state, dispatch] = useReducer(reducer, initialState)

	return { state, dispatch }
}
