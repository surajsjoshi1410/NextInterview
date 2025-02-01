import React from "react";
import TakeChallenge from "../../components/UserChalleneges/TakeChallenge";
import PastChallenge from "../../components/UserChalleneges/PastChallenge";
import { UserChallengesWrapper } from "./UserChallenges.styles";
const UserChallenges = () => {
    return (
        <UserChallengesWrapper>
            <div className="UserChallenges-container">
                <TakeChallenge />
                <PastChallenge />

            </div>
        </UserChallengesWrapper>
    );
}

export default UserChallenges;