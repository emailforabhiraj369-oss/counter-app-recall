import Withoutpropchild from "./WithoutPropsChild";

const Withoutpropparent=()=>{

    
const uname="Ford";
const umodel="Everest";
    return(

<>
<Withoutpropchild name={uname} model = {umodel}/>
</>

    );
}
export default Withoutpropparent