import { createContext, useState } from 'react';

// export const FontContext = createContext({
//     fontSize : "2rem",
//     fontWeight : 500,
//     color : "blue"
// });


// Context 하나로 묶기
const FontContext = createContext({
    state : { fontSize : "" },
    action : { setFontSize : () => {}}
})

const Color = createContext({
    state : { color : ""},
    action : { setColor : () => {}}
})

const ColorProvider = ({child}) => {
    const [color, setColor] = useState("red");
    const value = {
        state : {color},
        action : {setColor}
    }

    return (
        <Color.Provider value={value}>
            {child}
        </Color.Provider>
    )
}

const FontSizeProvider = ({children}) => {
    const [fontSize, setFontSize] = useState("2rem");
    const value = {
        state : {fontSize},
        action : { setFontSize }
    }


    return (
        <FontContext.Provider value={value}>
            {children}
        </FontContext.Provider>
    )
}

const FontSizeConsumer = FontContext.Consumer;
const ColorConsumer = Color.Consumer;

export {FontContext, FontSizeProvider, Color, FontSizeConsumer, ColorProvider, ColorConsumer};
