export default function ConfirmNotif(props){
    const {text, handleConfirm, handleCancel} = props;


    return(
        <div className='notif-confirm'>
            <p>Are you sure you want to {text}?</p>
            <div className='notif-confirm-btns'>
                <button onClick={handleConfirm} className='confirm-btn' type='button'>Confirm</button>
                <button onClick={handleCancel} className='cancel-btn' type='button'>Cancel</button>
            </div>
        </div>
    )
}