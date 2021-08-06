import Link from 'next/link'


function Nav() {
    return (
       <>
            <span className="link-menu"><Link href="/">home</Link></span>
            <span className="link-menu"><Link href="/contacts">contacts</Link></span>
            <span className="link-menu"><Link href="/about">about</Link></span>
            <span className="link-menu"><Link href="/services">services</Link></span>  

        </>   


    )
}

export default Nav
