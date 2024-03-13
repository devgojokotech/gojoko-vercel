const Container = (props: any) => {
    return (
        <div className={props.bgStyle}>
            <div className={`${props.styles ? ' 2xl:container 2xl:mx-auto' : 'lg:container lg:mx-auto goj-cpm'}`}>
                {props.children}
            </div>
        </div>
    )
}

export default Container;