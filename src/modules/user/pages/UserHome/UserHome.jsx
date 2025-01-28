import React from 'react'
import { UserHomeWrapper } from './UserHome.styles'
import TakeChallenge from '../../components/UserChalleneges/TakeChallenge'
import UserReminder from '../../components/UserReminder/UserReminder'
import InterviewFavoriteCard from '../../components/InterviewFavoriteCard/InterviewFavoriteCard'
import { InterviewFavoriteCardContainer } from '../../components/InterviewFavoriteCard/InterviewFavoriteCard.styles'

export default function UserHome() {
    return (
        <UserHomeWrapper>
            <div className="userHomerowOne">
                <TakeChallenge />
            </div>
            <div className="reminderContainer">
                <UserReminder />
            </div>
            <div className="interviewFav-container">
                <div className="interviewFav-title">
                    <h3>Interview Favourites</h3>
                </div>
                {/* <div className="interviwFav-Cards"> */}
                <InterviewFavoriteCardContainer>
                    <InterviewFavoriteCard/>
                    <InterviewFavoriteCard/>
                    <InterviewFavoriteCard/>
                    <InterviewFavoriteCard/>
                    <InterviewFavoriteCard/>
                </InterviewFavoriteCardContainer>
                   
                {/* </div> */}
            </div>


        </UserHomeWrapper>
    )
}
