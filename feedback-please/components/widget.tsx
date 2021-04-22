
import React, { useState } from 'react';
import {Box, H2, Flex, Image, TextArea, FlexColumn, StyledButton, Loader} from './styledComponents'
import * as Pico from "@gripeless/pico";
import { motion, AnimatePresence } from 'framer-motion';

const warningIcon = require('../public/warning.png');

interface IWidget {
    heading?: string;
    onClose?: () => void;
    asyncOnClick:  (blob: IBlob) => Promise<any>;
}

export interface IBlob {
    value: string;
}

const Widget: React.FunctionComponent<IWidget> = (props) => {

    const [textAreaValue, setTextAreaValue] = useState<string>('');
    const [imgState, setImgState] = useState(null);
    const [showLoader, setShowLoader] = useState<boolean>(false);
    
    return (
        <React.Fragment>
            { (
                <>
                <FlexColumn height='200px'
                fontFamily='-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif'
                width='300px' minHeight='180px' pl='1rem'
                    pr='1rem' borderRadius='16px'
                    boxShadow='0px -20px 50px -10px rgb(0 0 0 / 20%)'>
                    <Flex height='60px' width='100%' justifyContent='space-evenly' alignItems='center'> 
                        <Image src={warningIcon} height='20px' width='20px' />
                        <H2> {props.heading || `Report an Issue`}</H2> 
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
                        disabled={showLoader}
                        onChange={(e) => { setTextAreaValue(e.target.value)}}
                        />

                        <Flex pt='10px' justifyContent='center'>
                            <StyledButton onClick={() => {
                                    setShowLoader(true)
                                    Pico.objectURL(window).then((blob: IBlob) => {
                                    setImgState(blob);
                                    // @ts-ignore
                                    URL.revokeObjectURL(blob);
                                    setTimeout(() => {setImgState(null)}, 2500);
                                    if(props.asyncOnClick) {
                                        props.asyncOnClick(blob).then(() => setShowLoader(false));
                                    } else {
                                        setShowLoader(false);
                                    }
                                })
                            }} disabled={!textAreaValue || showLoader}>Take Screenshot</StyledButton>
                            
                            {showLoader && <Loader></Loader>}
                        </Flex>               
                </FlexColumn>
                
                <AnimatePresence>
                {imgState && <motion.img src={`${imgState && imgState.value}`}
                    key={imgState && imgState.value}
                    style={{border: '1px solid lightgrey',  height: '100px', width:'200px', position: 'absolute' }}
                    initial={{x: -200, y: 500, opacity: 0.8, position: 'absolute',  scale: 8}}
                    animate={{x: -5, y: -490, opacity: 1 , position: 'absolute', right: '5px' , scale: 1 }}
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