const FormInput = (props) => {

    // function sendValue(event) {
    //     // props.
    //     // console.log(event.target.value);
    //     getData(event.target.value);
    // }

    return (
        <div>
            <p>
                <label htmlFor={props.field_id}>{props.field_label}</label>
                <input type="number" id={props.field_id} onChange={(event) => props.getData(event.target.value)}/>
            </p>

            {/* {sendValue} */}
        </div>
    );


}

export default FormInput;