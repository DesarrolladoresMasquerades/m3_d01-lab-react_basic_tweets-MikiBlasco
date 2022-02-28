function User(props) {
    return (
        <span className="user">
            <span className="name"> {props.userData.name} </span>
            <span className="handle"> {props.userData.timestamp} </span>
          </span>
    );
}

export default User