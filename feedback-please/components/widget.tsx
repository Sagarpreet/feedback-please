
import React, { useState } from 'react';
import {Box, H2, Flex, Image, TextArea, FlexColumn, StyledButton} from './styledComponents'

const warningIcon = require('../public/warning.png');

interface IWidget {
    heading?: string;
    onClick: () => void;
    onClose?: () => void;
}

const Widget: React.FunctionComponent<IWidget> = (props) => {

    const [textAreaValue, setTextAreaValue] = useState<string | null>(null);

    return (
        <React.Fragment>
            <FlexColumn height='200px'
            fontFamily='-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif'
              width='300px' minHeight='180px' pl='1rem'
               pr='1rem' borderRadius='16px'
                boxShadow='0px -20px 50px -10px rgb(0 0 0 / 20%)'>
                <Flex height='60px' width='100%' justifyContent='space-evenly' alignItems='center'> 
                    <Image src={warningIcon} height='20px' width='20px' />
                    <H2> Report an Issue</H2> 
                    <Box color='lightgrey' style={{cursor: 'pointer'}} onClick={props.onClose}> x</Box>
                 </Flex>


                 <TextArea 
                    height='90px'
                    padding='10px'
                    borderRadius='17px'
                    resize='none'
                    borderColor='lightgrey' 
                    placeholder='Describe issue...'
                    value={textAreaValue}
                    onChange={(e) => {console.log(e.target.value); setTextAreaValue(e.target.value)}}
                    />

                    <Flex pt='10px' justifyContent='center'>
                        <StyledButton onClick={props.onClick} disabled={!textAreaValue}>Take Screenshot</StyledButton>
                    </Flex>               
            </FlexColumn>
        </React.Fragment>
    )
}

export default Widget;