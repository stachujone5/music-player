import { createContext, ReactNode, useReducer } from 'react'
import { SONGS } from '../songs'

const initialState: playerState = { songIndex: 0, isPlaying: false }

interface AppProviderProps {
	children: ReactNode
}

interface playerState {
	songIndex: number
	isPlaying: boolean
}

interface playerAction {
	type: string
	payload?: any
}

interface AppContextInitialState {
	state: playerState
	dispatch: React.Dispatch<{ type: string; payload?: any }>
}

export const AppContext = createContext<AppContextInitialState>({
	state: initialState,
	dispatch: () => null,
})

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

export const AppProvider = ({ children }: AppProviderProps) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	return <AppContext.Provider value={{ dispatch, state }}>{children}</AppContext.Provider>
}
