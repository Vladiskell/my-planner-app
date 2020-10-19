import React from 'react';
import { useStyles } from './styles';
import GridContainer from '../../UI/GridContainer/GridContainer'
import GridItem from '../../UI/GridItem/GridItem'
import Paper from '@material-ui/core/Paper'

// -------------------------------------------------------------------------------------------------
// component
const ReviewPage = () => {
    const classes = useStyles();

    return (
        <GridContainer>
            <GridItem columnStart={1} columnEnd={3} rowStart={1} rowEnd={3}>
                <Paper style={{ height: '100%' }}></Paper>
            </GridItem>
        </GridContainer>
    )
}

export default ReviewPage;
