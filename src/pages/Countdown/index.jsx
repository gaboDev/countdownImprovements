import React from 'react';
import useCountdown from "../../hooks/useCountdown";
import PropTypes from "prop-types";
import {MainTitle, PageContainer, SecondTitleContainer, StyledCountdown, Title} from "./Countdown.styles";
import {countDownStatus} from "../../hooks/useCountdown";
const CountdownPage = ({ date }) => {
    const [countdown, getCountdownStatus] = useCountdown(date);
    const currentCountdownStatus = getCountdownStatus();
    const { initial, running, finished } = countDownStatus;

    return (
        <PageContainer>
            { currentCountdownStatus === initial &&
                (<MainTitle>Loading...</MainTitle>)
            }

            { currentCountdownStatus === finished &&
                (<MainTitle>Happy birthday!</MainTitle>)
            }

            { currentCountdownStatus === running &&
                (
                    <>
                        <MainTitle>Almost</MainTitle>
                        <StyledCountdown countDown={countdown} />
                        <SecondTitleContainer>
                            <Title>Happy</Title>
                            <Title>Birthday!</Title>
                        </SecondTitleContainer>
                    </>
                )
            }
        </PageContainer>
    );
};

CountdownPage.propTypes = {
    date: PropTypes.string.isRequired,
};
export default CountdownPage;
