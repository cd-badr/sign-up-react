
import { FirstSection } from './components/firstSection';
export const HomePage = (props) => {

    return (
        <>
            <FirstSection myName={props.myName} setMyName={props.setMyName}/>
        </>
    );
}
