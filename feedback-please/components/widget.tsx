
import React, { useState } from 'react';
import {Box, H2, Flex, Image, TextArea, FlexColumn, StyledButton} from './styledComponents'
import * as Pico from "@gripeless/pico";
import { motion, AnimatePresence } from 'framer-motion';

const warningIcon = require('../public/warning.png');

interface IWidget {
    heading?: string;
    onClick: () => void;
    onClose?: () => void;
}

const Widget: React.FunctionComponent<IWidget> = (props) => {

    const [textAreaValue, setTextAreaValue] = useState<string | null>(null);
    const [imgState, setImgState] = useState(null);
    const [shoWidget, setShoWidget] = useState(true);
    
    return (
        <React.Fragment>
            {shoWidget && (
                <>
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
                        onChange={(e) => { setTextAreaValue(e.target.value)}}
                        />

                        <Flex pt='10px' justifyContent='center'>
                            <StyledButton onClick={() => {
                                    setShoWidget(false);
                                    Pico.objectURL(window).then((blob: any) => {
                                    setImgState(blob);
                                    URL.revokeObjectURL(blob);
                                    setShoWidget(true);
                                    setTimeout(() => {setImgState(null)}, 2500);
                                    props.onClick();  
                                })
                            }} disabled={!textAreaValue}>Take Screenshot</StyledButton>
                        </Flex>               
                </FlexColumn>
                
                <AnimatePresence>
                {imgState && <motion.img src={`${imgState && imgState.value}`}
                    key={imgState && imgState.value}
                    style={{border: '1px solid lightgrey',  height: '100px', width:'200px' }}
                    initial={{x: -200, y: 500, opacity: 0.8, position: 'absolute',  scale: 8}}
                    animate={{x:0, y: -370, opacity: 1 , position: 'absolute', right: '5px' , scale: 1 }}
                    exit={{ x: -1200, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                ></motion.img>}
                </AnimatePresence>
            </>
            )}
           
        </React.Fragment>
    )
}

export default Widget;