import { List } from "antd";
import React from "react";
import CardContent from "../../component/cardContent/CardContent";

class Education extends React.Component {
  render() {
    return (
      <CardContent title="Interest">
        <List>
          <List.Item style={{ display: "inline-block" }}>
            <List.Item.Meta
              title="Teknik Informatika Multimedia"
              description="Politeknik Negeri Samarinda - D4"
            />
            <ul>
              <li>Peserta Kontes Robot Seni Tari Indonesia 2020</li>
            </ul>
            <List.Item.Meta title="IPA" description="SMAN 11 Samarinda" />
          </List.Item>
        </List>
      </CardContent>
    );
  }
}

export default Education;
