import React from 'react'
import { EDUCATION_TODOS } from '../../../api/constants'

import Todo from '../../Parts/Todo/Todo'
import Description from '../../Parts/Description/Description'
import Progress from '../../Parts/Progress/Progress'
import Report from '../../Parts/Report/Report'
import Timer from '../../Parts/Timer/Timer'
import GridContainer from '../../UI/GridContainer/GridContainer'
import GridItem from '../../UI/GridItem/GridItem'

export const EducationPage = () => {
    return (
        <GridContainer>
            <GridItem columnStart={1} columnEnd={2} rowStart={1} rowEnd={5}>
                <Todo title="Education Todo List" collectionName={EDUCATION_TODOS} />
            </GridItem>
            <GridItem columnStart={2} columnEnd={3} rowStart={1} rowEnd={2}>
                <Progress />
            </GridItem>
            <GridItem columnStart={2} columnEnd={3} rowStart={2} rowEnd={3}>
                <Description />
            </GridItem>
            <GridItem columnStart={2} columnEnd={4} rowStart={3} rowEnd={5}>
                <Timer />
            </GridItem>
            <GridItem columnStart={3} columnEnd={4} rowStart={1} rowEnd={3}>
                <Report />
            </GridItem>
        </GridContainer>
    )
}
