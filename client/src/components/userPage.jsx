import React from "react";
import UserCard from "./userCard";

const UserPage = ( ) => {
        return (
            <div className="container">
                <div className="row gutters-sm">
                    <div className="col-md-8 mb-5">
                        <UserCard />
                    </div>
                </div>
            </div>
        );
};

export default UserPage;
