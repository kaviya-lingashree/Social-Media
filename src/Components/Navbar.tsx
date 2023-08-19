import {Link} from 'react-router-dom';
import { auth } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

export const Navbar = () => {

    const [user] = useAuthState(auth);

    const signUserOut = async () => {
        await signOut(auth);
    } 

    return (<div className='navbar'>
        <nav className='links'>
          <Link  to={'/'}>Home</Link>
          {!user ? (<Link  to={'/login'}>Login </Link>) : (
            <Link to={'/createpost'}>Create-Post</Link>
          )}
        </nav>
        <div className='user'>
            {user &&
            <div>
            <p>{user?.displayName}</p>
            <img src={user?.photoURL || ""} alt="DP" height="40" width="40"/>
            <button onClick={signUserOut}>logout</button>
            </div>}
        </div>
    </div>)
}