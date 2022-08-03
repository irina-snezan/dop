type ButtonTypeProps={
    nickName:string,
    callBack:()=>void
}

export const Button=(props:ButtonTypeProps)=>{
    const onClickHandler=()=>{
        props.callBack()
    }
    return(
        <button onClick={onClickHandler}>{props.nickName}</button>
    )
}
