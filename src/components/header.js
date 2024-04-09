import './component.css';



export default function Header() {
    return(
        <div className='headerContainer'>
            <div className='headerLeft'>
                <ul>
                    <li><a href='#'>Logo</a></li>
                    <li><a href='#'>Menu</a></li>
                    <li><a href='#'>Rewards</a></li>
                    <li><a href='#'>Gift Cards</a></li>
                </ul>
            </div>

            <div className='headerRight'>
                <ul>
                    <li><a href='#' className='store'>Find a store</a></li>
                    <li><a href='#' className='signin'>Sign in</a></li>
                    <li><a href='#' className='join'>Join now</a></li>
                </ul>
            </div>            
        </div>
    )
}