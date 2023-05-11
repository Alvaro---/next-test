import { CSSProperties, FC } from "react";
import Link from "next/link"
import { useRouter } from "next/router"

const style: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline',
}

interface props {
    text: string,
    href: string
}

export const ActiveLink: FC<props> = ({ text, href }) => {

    // const router = useRouter();
    // console.log(router)
    const {asPath} = useRouter();

    return (
        <Link href={ href } style={ asPath === href ? style : undefined }>
            { text }
        </Link>
    )
}
