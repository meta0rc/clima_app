import { ButtonHTMLAttributes, MouseEventHandler } from "react"

type button = {
    value: string
    method?: MouseEventHandler
    className?: string
}

export const Button = (props: button) => {

    return(
        <button onClick={props.method} className={props.className}>
            {props.value}
        </button>
    )
}