import { useReducer, useState } from 'react'
import { SONGS, songInterface } from '../songs'

const initialState: playerState = { songIndex: 0, isPlaying: false }

export interface playerState {
	songIndex: number
	isPlaying: boolean
}

export interface playerAction {
	type: string
	payload?: any
}

const reducer = (state: playerState, action: playerAction) => {
	if (action.type === 'TOGGLE_PLAY') {
		return { ...state, isPlaying: !state.isPlaying }
	}
	if (action.type === 'NEXT_SONG') {
		if (state.songIndex === SONGS.length - 1) {
			return { ...state, songIndex: 0, isPlaying: false }
		}
		return { ...state, songIndex: state.songIndex + 1, isPlaying: false }
	}
	if (action.type === 'PREV_SONG') {
		if (state.songIndex === 0) {
			return { ...state, songIndex: SONGS.length - 1, isPlaying: false }
		}
		return { ...state, songIndex: state.songIndex - 1, isPlaying: false }
	}

	return state
}

export const usePlayer = () => {
	const [state, dispatch] = useReducer(reducer, initialState)
	const [songs, setSongs] = useState<songInterface[]>(SONGS)

	return { state, dispatch, songs, setSongs }
}
