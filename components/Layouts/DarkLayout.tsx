import { FC, PropsWithChildren } from "react"

// type DarkLayoutProps = {
//     children?: JSX.Element
// };

export const DarkLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div style={{
            backgroundColor: 'rgba(0,0,0,.3)',
            padding: '10px',
            borderRadius: '10px'
        }}>
            <h3>Dark</h3>
            <div>
                {children}
            </div>
        </div>
    )
}
