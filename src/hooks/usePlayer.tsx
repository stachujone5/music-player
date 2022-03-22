import { useReducer, useState } from 'react'
import { SONGS, songInterface } from '../songs'
import { ACTIONS } from './actions'

const initialState: playerState = { songIndex: 0, isPlaying: false, width: 0, time: 0 }

export interface playerState {
	songIndex: number
	isPlaying: boolean
	width: number
	time: number
}

export interface playerAction {
	type: string
	payload?: any
}

const reducer = (state: playerState, action: playerAction) => {
	if (action.type === ACTIONS.TOGGLE_PLAY) {
		return { ...state, isPlaying: !state.isPlaying }
	}
	if (action.type === ACTIONS.PLAY) {
		return { ...state, isPlaying: true }
	}
	if (action.type === ACTIONS.NEXT_SONG) {
		if (state.songIndex === SONGS.length - 1) {
			return { ...state, songIndex: 0, time: 0, width: 0 }
		}
		return { ...state, songIndex: state.songIndex + 1, time: 0, width: 0 }
	}
	if (action.type === ACTIONS.PREV_SONG) {
		if (state.songIndex === 0) {
			return { ...state, songIndex: SONGS.length - 1, time: 0, width: 0 }
		}
		return { ...state, songIndex: state.songIndex - 1, time: 0, width: 0 }
	}
	if (action.type === ACTIONS.SET_BAR) {
		return { ...state, width: action.payload.width, time: action.payload.time }
	}

	return state
}

export const usePlayer = () => {
	const [state, dispatch] = useReducer(reducer, initialState)
	const [songs, setSongs] = useState<songInterface[]>(SONGS)

	return { state, dispatch, songs, setSongs }
}
