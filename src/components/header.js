import './component.css';



export default function Header() {
    return(
        <div className='header'>

            <nav>
                <ul>
                    <li><a href='/'><img src='https://starbucks.ph/images/sblogo.svg' alt='starbucks logo' width={"50px"}  /></a></li>
                    <li><a href='#'>Menu</a></li>
                    <li><a href='#'>Rewards</a></li>
                    <li><a href='#'>Gift Cards</a></li>
                </ul>
            </nav>
            
            <div className='rightHeader'>
                <ul>
                    <li><a href='' className='storebtn'>Find a store</a></li>
                    <li><a href='' className='signbtn'>Sign In</a></li>
                    <li><a href='' className='joinbtn'>Join Now</a></li>

                </ul>   
            </div>

        </div>
    )
}