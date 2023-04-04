import React from "react";
import Title from "../../component/pages/container/Title/Title";
import SubTitle from "../../component/pages/container/Title/SubTitle";
import { GithubFilled, LinkedinFilled } from "@ant-design/icons";
import "./Home.css";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="home-wrapper">
        <Title title={"DIKA RAHMAN RIFAI"} />
        <SubTitle className="sub-title-home" subTitle="Frontend Developer" />
        <div className="link-wrapper">
          <Link to={"https://github.com/dikarifai"} target="_blank">
            <GithubFilled style={{ color: "black", fontSize: 30 }} />
          </Link>
          <Link to={"https://www.linkedin.com/in/dikarifai/"} target="_blank">
            <LinkedinFilled style={{ color: "black", fontSize: 30 }} />
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
