import React from 'react'
import { styled } from '@mui/system';
import { Typography } from '@mui/material';


const Root = styled('div')({
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column"

});

const TextBottom = styled(Typography)({
    color: "white",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    margin: 0
});

const List = ({ title, list }) => {
    return (
        <Root>
            <TextBottom style={{ fontWeight: "700" }}>{title}</TextBottom>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {list.map((item, index) => {
                    return (
                        <li key={index} style={{ marginBottom: "8px", }}>
                            <TextBottom>{item}</TextBottom>
                        </li>
                    )
                })}
            </ul>
        </Root>
    )
}

export default List