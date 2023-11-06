import axios from "axios";
import React, { useState, useEffect } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import UploadAvatar from "./UploadAvatar";

const Profile = ({ token }) => {
    const [user, setUser] = useState({});
    const [isUserUpdated, setIsUserUpdated] = useState(false);

    useEffect(() => {
        const getProfileData = async () => {
            try {
                const { data } = await axios.get("http://localhost:1337/api/users", {
                    headers: {
                        Authorization: `Bearer ${token}`, // "Bearer" should start with an uppercase letter
                    },
                });
                console.log({ data });
                setUser(data);
                setIsUserUpdated(false);
            } catch (error) {
                console.error(error); // Use console.error to log errors
            }
        };
        getProfileData();
    }, [token, isUserUpdated]);

    return (
        <div className="profile">
            <div className="avatar">
                <div className="avatar-wrapper">
                    {user.avatarUrl ? (
                        <img
                            src={`http://localhost:1337${user.avatarUrl}`}
                            alt={`${user.username}'s avatar`} // Added "'s" for correct grammar
                        />
                    ) : (
                        <IoPersonCircleOutline />
                    )}
                    <UploadAvatar
                        token={token}
                        userId={user.id}
                        username={user.username}
                        avatarUrl={user.avatarUrl}
                        setIsUserUpdated={setIsUserUpdated}
                    />
                </div>
            </div>
            <div className="body">
                <p>Name: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>
                    Account created at: {new Date(user.createdAt).toLocaleDateString()}
                </p>
            </div>
        </div>
    );
};

export default Profile;
