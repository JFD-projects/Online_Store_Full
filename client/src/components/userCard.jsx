import React from "react";
import PropTypes from "prop-types";
import { useAuth } from "../hooks/useAuth";
const UserCard = () => {
    const { currentUser } = useAuth();
    return (
        <div className="card mb-5">
            <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center position-relative">
                    <img src={currentUser.image} className="rounded-circle" width="200"/>
                    <div className="mt-3">
                        <h4>Имя:  {currentUser.name}</h4>
                        <h4> Email:  {currentUser.email}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};
UserCard.propTypes = {
    user: PropTypes.object
};

export default UserCard;
