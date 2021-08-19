import Link from 'next/link'


function Nav() {
    return (
       <>
            <span className="link-menu"><Link href="/investment">investment</Link></span>
            <span className="link-menu"><Link href="/products">products</Link></span>  
            <span className="link-menu"><Link href="/contacts">contacts</Link></span>
            <span className="link-menu"><Link href="/about">about</Link></span>
           

        </>   


    )
}

export default Nav
