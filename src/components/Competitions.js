import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCompetitionsRequest,
  fetchCompetitionsSuccess,
  updateParticipants,
} from "../Redux/actions";
import competitionsData from "../data.json";
import "./Competitions.css";
import Countdown from "react-countdown";
import { Card, Button, Spinner } from "react-bootstrap";
import { FaMoneyBill } from "react-icons/fa";
import { MdOutlinePeopleAlt } from "react-icons/md";

const Competitions = () => {
  const competitions = useSelector((state) => state.competitions);
  const loading = useSelector((state) => state.loading);
  const participants = useSelector((state) => state.participants);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompetitionsRequest());
    setTimeout(() => {
      dispatch(fetchCompetitionsSuccess(competitionsData));
    }, 2000);
  }, [dispatch]);

  const handleParticipate = (index) => {
    const updatedParticipants = [...participants];
    updatedParticipants[index] = true;
    dispatch(updateParticipants(updatedParticipants));
  };

  if (loading) {
    return (
      <div className="spinner-container">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }

  console.log("competitions:", competitions);

  if (!competitions) {
    return <div>No competitions available</div>; 
  }

  return (
    <div>
      {competitions.map((competition, index) => (
        <Card className="competition-card" key={competition.title}>
          <Card.Body>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <Card.Title className="competition-title">
                  {competition.title}
                </Card.Title>
                <Card.Text className="start-date-text">
                  Start Date: {competition.startDate}
                </Card.Text>
              </div>
              <div className="text-center">
                <Card.Text className="description-text">
                  {competition.description}
                </Card.Text>
                <div className="d-flex justify-content-center align-items-center">
                  <Card.Text>
                    <span className="value-text">
                      <FaMoneyBill className="icon" /> Price: $
                      {competition.price}
                    </span>{" "}
                    <span className="value-text">
                      <MdOutlinePeopleAlt className="icon" />
                      {competition.participants}
                    </span>
                  </Card.Text>
                </div>
              </div>
              <div className="text-right">
                {participants && participants[index] ? (
                  <div className="participant-notification">
                    <span className="participant-text">
                      You are a participant!
                    </span>
                    <svg
                      className="star-icon star-icon-top"
                      width="35"
                      height="37"
                      viewBox="0 0 35 37"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28.7542 12.3623L27.097 8.25083L23.0886 6.35956L27.097 4.5094L28.7542 0.603516L30.4115 4.5094L34.4199 6.35956L30.4115 8.25083L28.7542 12.3623ZM28.7542 36.8255L27.097 32.8785L23.0886 31.0283L27.097 29.1782L28.7542 25.0256L30.4115 29.1782L34.4199 31.0283L30.4115 32.8785L28.7542 36.8255ZM11.8345 30.4938L8.28862 22.3942L0.541748 18.6939L8.28862 14.9936L11.8345 6.93516L15.4188 14.9936L23.1272 18.6939L15.4188 22.3942L11.8345 30.4938ZM11.8345 24.4089L13.6845 20.4619L17.4615 18.6939L13.6845 16.926L11.8345 12.979L10.023 16.926L6.20737 18.6939L10.023 20.4619L11.8345 24.4089Z"
                        fill="#09090C"
                      />
                    </svg>
                    <svg
                      className="star-icon star-icon-right"
                      width="35"
                      height="37"
                      viewBox="0 0 35 37"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28.7542 12.3623L27.097 8.25083L23.0886 6.35956L27.097 4.5094L28.7542 0.603516L30.4115 4.5094L34.4199 6.35956L30.4115 8.25083L28.7542 12.3623ZM28.7542 36.8255L27.097 32.8785L23.0886 31.0283L27.097 29.1782L28.7542 25.0256L30.4115 29.1782L34.4199 31.0283L30.4115 32.8785L28.7542 36.8255ZM11.8345 30.4938L8.28862 22.3942L0.541748 18.6939L8.28862 14.9936L11.8345 6.93516L15.4188 14.9936L23.1272 18.6939L15.4188 22.3942L11.8345 30.4938ZM11.8345 24.4089L13.6845 20.4619L17.4615 18.6939L13.6845 16.926L11.8345 12.979L10.023 16.926L6.20737 18.6939L10.023 20.4619L11.8345 24.4089Z"
                        fill="#09090C"
                      />
                    </svg>
                    <svg
                      className="star-icon star-icon-bottom"
                      width="35"
                      height="37"
                      viewBox="0 0 35 37"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28.7542 12.3623L27.097 8.25083L23.0886 6.35956L27.097 4.5094L28.7542 0.603516L30.4115 4.5094L34.4199 6.35956L30.4115 8.25083L28.7542 12.3623ZM28.7542 36.8255L27.097 32.8785L23.0886 31.0283L27.097 29.1782L28.7542 25.0256L30.4115 29.1782L34.4199 31.0283L30.4115 32.8785L28.7542 36.8255ZM11.8345 30.4938L8.28862 22.3942L0.541748 18.6939L8.28862 14.9936L11.8345 6.93516L15.4188 14.9936L23.1272 18.6939L15.4188 22.3942L11.8345 30.4938ZM11.8345 24.4089L13.6845 20.4619L17.4615 18.6939L13.6845 16.926L11.8345 12.979L10.023 16.926L6.20737 18.6939L10.023 20.4619L11.8345 24.4089Z"
                        fill="#09090C"
                      />
                    </svg>
                  </div>
                ) : (
                  <>
                    <Card.Text className="registration-text">
                      Registration ends in:
                      <Countdown
                        date={competition.registrationDeadline}
                        daysInHours={true}
                        renderer={({ days, hours, minutes }) => (
                          <div className="countdown-windows">
                            <div className="countdown-window">
                              <span className="countdown-value">{days}</span>
                              <span className="countdown-label">Days</span>
                            </div>
                            <div className="countdown-window">
                              <span className="countdown-value">{hours}</span>
                              <span className="countdown-label">Hours</span>
                            </div>
                            <div className="countdown-window last-countdown-window">
                              <span className="countdown-value">{minutes}</span>
                              <span className="countdown-label">Minutes</span>
                            </div>
                          </div>
                        )}
                      />
                    </Card.Text>
                    <div className="text-center">
                      <Button
                        variant="dark"
                        className="participate-button"
                        onClick={() => handleParticipate(index)}
                      >
                        Participate
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Competitions;
