
import { Link } from 'react-router-dom';
import './firstSection.scss'
export const FirstSection = (props) => {
    
    return (
        <>
            <div className="w-[500px]  bg-slate-50 rounded-xl flex justify-center items-center justify-evenly flex-col p-10 gap-7">
                <h1 className='text-3xl border-b-2 border-zinc-300 w-full pb-3 text-center' >Login {props.myName}</h1>
                <input className='w-full h-16 bg-slate-900 text-slate-50 rounded-xl ps-4 text-xl' type="text" placeholder='Your Email' />
                <input className='w-full h-16 bg-slate-900 text-slate-50 rounded-xl ps-4 text-xl' type="password" placeholder='Your Password' />
                <button className='text-xl bg-slate-400 text-slate-50 w-24 p-2 rounded-xl '>Login</button>
                <div className='flex flex-row gap-2'>
                    <p>You do not have an account ? </p>
                    <Link className='text-[#4f8399]' to={"/signup"}>Register</Link>
                </div>
            </div>

        </>
    );
}
