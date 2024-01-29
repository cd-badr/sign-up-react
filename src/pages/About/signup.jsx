import { Link } from 'react-router-dom';
import '../Home/components/firstSection.scss'
export const Signup = () => { 
    return (
        <>
        <div className="w-[500px]  bg-slate-50 rounded-xl flex justify-center items-center justify-evenly flex-col p-10 gap-7">
            <h1 className='text-3xl border-b-2 border-zinc-300 w-full pb-3 text-center'>Sign Up</h1>
            <input className='w-full h-16 bg-slate-900 text-slate-50 rounded-xl ps-4 text-xl' type="text" placeholder='Your FirstName'/>
            <input className='w-full h-16 bg-slate-900 text-slate-50 rounded-xl ps-4 text-xl' type="text" placeholder='Your LastName'/>
            <input className='w-full h-16 bg-slate-900 text-slate-50 rounded-xl ps-4 text-xl' type="text" placeholder='Your Email'/>
            <input className='w-full h-16 bg-slate-900 text-slate-50 rounded-xl ps-4 text-xl' type="password" placeholder='Your Password'/>
            <input className='w-full h-16 bg-slate-900 text-slate-50 rounded-xl ps-4 text-xl' type="password" placeholder='Confirm Your Password'/>
            <button className='text-xl bg-slate-400 text-slate-50 w-24 p-2 rounded-xl '>Register</button>
            <div className='flex flex-row gap-2'>
            <p>Already have account ? </p>
            <Link className=' no-underline text-[#4f8399]' to={"/"}>Login</Link>
            </div>
        </div>

        </>
    );
}