import React from 'react';
import { NOTES_TODOS } from "../../../api/constants";

import Todo from '../../Parts/Todo/Todo'
import GridContainer from '../../UI/GridContainer/GridContainer'
import GridItem from '../../UI/GridItem/GridItem'

export const NotesPage = () => {
    return (
        <GridContainer>
            <GridItem columnStart={1} columnEnd={2} rowStart={1} rowEnd={5}>
                <Todo title="Notes" collectionName={NOTES_TODOS} />
            </GridItem>
        </GridContainer>
    )
}
