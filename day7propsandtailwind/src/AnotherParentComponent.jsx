import AnotherChildComponent from './AnotherChildComponent';
function AnotherParentComponent(){
    const name ="ToyoTa";
    const model = "Fortuner";
    const names="2026"
    return(
        <>
        <AnotherChildComponent name={name} model={model} names={names} />
        </>
    );
}
export default AnotherParentComponent;