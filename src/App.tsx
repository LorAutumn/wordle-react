import { makeStyles } from '@mui/styles'
import MyAppBar from './Component/AppBar'
import GameGrid from './Component/GameGrid'

const useStyles = makeStyles(() => {
    return {
        root: {
            display: 'flex',
            background: '#CFE0C3',
            height: '100vh',
            width: '100wh',
        },
    }
})

function App() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <MyAppBar />
            <GameGrid />
        </div>
    )
}

export default App
