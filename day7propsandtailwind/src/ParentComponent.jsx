

import ChildComponent from "./ChildComponent";

function ParentComponent(){

const uname="Alice";
const age=21;



    return (
        <>
        <ChildComponent username={uname} userage = {age}/>
        </>
    )
}
export default ParentComponent;