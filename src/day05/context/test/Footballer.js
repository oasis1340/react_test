import { createContext, useState } from "react";

const FootballerContext = createContext({
    state : {footballers : []},
    actions : {insert : () => {}, remove : () => {}}
})

const FootballerProvider = ({children}) => {
    const [footballers, setFootballer] = useState(["사카","스켈리","은와네리"])
    const insert = (footballer) => {setFootballer(footballers.concat(footballer))}
    const remove = (index) => { setFootballer(footballers.filter((footballer, i) => i !== index))}
    const value = {
        state : { footballers : footballers },
        actions : {insert : insert, remove : remove}
    }

    return (
        <FootballerContext.Provider value={value}>
            {children}
        </FootballerContext.Provider>
    )
}

export { FootballerContext, FootballerProvider}