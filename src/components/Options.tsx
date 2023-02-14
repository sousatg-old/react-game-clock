import React, { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as Reload } from "../icons/reload.svg";
import { ReactComponent as Play } from "../icons/next.svg";
import { ReactComponent as Pause } from "../icons/pause.svg";
import { ReactComponent as Settings } from "../icons/settings.svg";

const OptionsStyle = styled.div`
  text-align: center;
  grid-area: a;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    grid-area: a;
  }
`;

const Button = styled.button`
  background: none;
  padding: 0;
  margin: 10px;
  border: 0;
  outline: 0;

  &:focus {
    outline: 0;
  }

  & > img {
    fill: white;
    background-color: white;
  }
`;

interface OptionsProps {
  pause: boolean;
  handlePlayClick: any;
  handleResetClick: any;
}

const Options: FC<OptionsProps> = ({
  pause,
  handlePlayClick,
  handleResetClick,
}: OptionsProps) => {
  return (
    <OptionsStyle>
      {/* <Link to="/settings">
            <Settings width="25" fill="white" />
        </Link> */}
      <Button id="switch" onClick={handlePlayClick}>
        {pause ? (
          <Play id="play" width="25" fill="white" />
        ) : (
          <Pause id="pause" width="25" fill="white" />
        )}
      </Button>
      <Button onClick={handleResetClick}>
        <Reload width="25" fill="white" />
      </Button>
    </OptionsStyle>
  );
};

export default Options;
